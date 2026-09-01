/* ════════════════════════════════════════════════════════════
   퍼머컬처ON — 데이터 계층
   ────────────────────────────────────────────────────────────
   화면 코드는 여기 있는 PCON.api 만 부릅니다.
   supabase 를 직접 부르는 곳은 이 파일 하나뿐입니다.

   드라이버가 두 개입니다.
     · supabase — config.js에 값이 채워져 있으면
     · local    — 비어 있으면 (메모리에만 저장 · 새로고침하면 사라짐)

   화면 코드는 어느 쪽인지 몰라도 됩니다. PCON.api.mode 로 확인만 가능합니다.

   불러오는 순서:
     <script src="config.js"></script>
     <script src="vendor/supabase.js"></script>   ← 없어도 local 모드로 동작
     <script src="data/api.js"></script>
   ════════════════════════════════════════════════════════════ */
(function (global) {
"use strict";

var CFG = global.PCON_CONFIG || {};
var FREE_LIMIT = CFG.FREE_GARDEN_LIMIT || 3;

/* ────────────────────────────────────────────────────────────
   에러 규격
   화면에서는 err.code 만 보고 분기하세요. 문구는 err.message 를 그대로 씁니다.
     QUOTA      무료 저장 개수 초과 → 결제벽
     BANNED     금지어 포함
     AUTH       로그인 필요
     BLOCKED    차단당해서 댓글 불가
     NOT_FOUND  대상 없음
     NETWORK    통신 실패
     UNKNOWN    그 외
   ──────────────────────────────────────────────────────────── */
function ApiError(code, message, cause) {
  var e = new Error(message);
  e.code = code;
  e.cause = cause;
  return e;
}

function normalize(error) {
  if (!error) return null;
  var msg = error.message || "";
  var code = error.code || "";

  if (code === "P0002" || msg.indexOf("저장할 수 있어요") >= 0)
    return ApiError("QUOTA", "무료로는 텃밭을 " + FREE_LIMIT + "개까지 저장할 수 있어요", error);
  if (msg.indexOf("부적절한 표현") >= 0)
    return ApiError("BANNED", "부적절한 표현이 포함되어 있어 등록할 수 없습니다", error);
  if (msg.indexOf("로그인이 필요") >= 0 || code === "401")
    return ApiError("AUTH", "로그인이 필요합니다", error);
  if (code === "42501" || msg.indexOf("row-level security") >= 0)
    return ApiError("BLOCKED", "이 글에는 댓글을 남길 수 없습니다", error);
  if (msg.indexOf("Failed to fetch") >= 0 || msg.indexOf("NetworkError") >= 0)
    return ApiError("NETWORK", "인터넷 연결을 확인해 주세요", error);

  return ApiError("UNKNOWN", msg || "알 수 없는 오류가 발생했어요", error);
}


/* ════════════════════════════════════════════════════════════
   이미지 처리 — 업로드 전에 반드시 통과시킵니다.
   · 긴 변 1600px로 축소  (스토리지 5MB 제한 · 통신량 절약)
   · webp로 변환
   · 캔버스에 다시 그리므로 EXIF(촬영 위치·기기 정보)가 사라집니다
     → 개인정보처리방침 제1조에 "EXIF를 제거한 뒤 저장한다"고 적혀 있습니다
   ════════════════════════════════════════════════════════════ */
function processImage(file, maxEdge) {
  maxEdge = maxEdge || 1600;
  return new Promise(function (resolve, reject) {
    if (!file || !/^image\//.test(file.type)) {
      reject(ApiError("UNKNOWN", "이미지 파일만 올릴 수 있어요"));
      return;
    }
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      URL.revokeObjectURL(url);
      var w = img.naturalWidth, h = img.naturalHeight;
      var scale = Math.min(1, maxEdge / Math.max(w, h));
      var cw = Math.round(w * scale), ch = Math.round(h * scale);

      var c = document.createElement("canvas");
      c.width = cw; c.height = ch;
      var g = c.getContext("2d");
      g.drawImage(img, 0, 0, cw, ch);

      c.toBlob(function (blob) {
        if (!blob) { reject(ApiError("UNKNOWN", "사진을 처리하지 못했어요")); return; }
        resolve(blob);
      }, "image/webp", 0.85);
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      reject(ApiError("UNKNOWN", "사진을 열 수 없어요"));
    };
    img.src = url;
  });
}


/* ════════════════════════════════════════════════════════════
   드라이버 1 — Supabase
   ════════════════════════════════════════════════════════════ */
function supabaseDriver(sb) {
  var listeners = [];
  var me = null;          // { id, name, avatar, premium, role }

  function emit() { listeners.forEach(function (cb) { try { cb(me); } catch (e) {} }); }

  async function loadProfile(userId) {
    var res = await sb.from("profiles")
      .select("id,nickname,avatar_url,is_premium,role,region")
      .eq("id", userId).single();
    if (res.error) throw normalize(res.error);
    var p = res.data;
    return { id: p.id, name: p.nickname, avatar: p.avatar_url,
             premium: p.is_premium, role: p.role, region: p.region };
  }

  async function refresh() {
    var s = await sb.auth.getSession();
    var u = s.data && s.data.session && s.data.session.user;
    me = u ? await loadProfile(u.id) : null;
    emit();
    return me;
  }

  sb.auth.onAuthStateChange(function (_evt, session) {
    if (!session) { me = null; emit(); return; }
    loadProfile(session.user.id).then(function (p) { me = p; emit(); })
                               .catch(function () { me = null; emit(); });
  });

  function requireAuth() {
    if (!me) throw ApiError("AUTH", "로그인이 필요합니다");
    return me;
  }

  async function call(fn, args) {
    var res = await sb.rpc(fn, args || {});
    if (res.error) throw normalize(res.error);
    return res.data;
  }

  return {
    mode: "supabase",
    ready: true,
    init: refresh,

    auth: {
      current: function () { return me; },
      onChange: function (cb) { listeners.push(cb); cb(me); },
      refresh: refresh,

      signInWithKakao: async function () {
        /* scopes를 반드시 명시합니다.
           비워두면 Supabase가 이메일(account_email)까지 요청하는데,
           카카오 앱의 동의항목에 없는 걸 요청하면 KOE205로 거절당합니다.
           (이메일을 받으려면 카카오 비즈 앱 전환이 필요해서 빼두었습니다)

           여기 적는 항목은 카카오 개발자 콘솔의
           제품 설정 → 카카오 로그인 → 동의항목 에 설정된 것과 같아야 합니다. */
        var res = await sb.auth.signInWithOAuth({
          provider: "kakao",
          options: {
            redirectTo: CFG.REDIRECT_URL || global.location.href,
            scopes: CFG.KAKAO_SCOPES || "profile_nickname profile_image"
          }
        });
        if (res.error) throw normalize(res.error);
        // 카카오 페이지로 이동합니다. 돌아오면 onAuthStateChange가 처리합니다.
      },

      signOut: async function () {
        var res = await sb.auth.signOut();
        if (res.error) throw normalize(res.error);
        me = null; emit();
      },

      /* 계정 삭제 — 반드시 이 함수가 성공한 뒤에 화면을 정리하세요.
         실패했는데 로그아웃만 시키면 계정이 남은 채로
         사용자는 삭제됐다고 믿게 됩니다. */
      deleteAccount: async function () {
        await call("delete_my_account");
        await sb.auth.signOut();
        me = null; emit();
      }
    },

    profile: {
      setRegion: async function (region) {
        requireAuth();
        var res = await sb.from("profiles").update({ region: region }).eq("id", me.id);
        if (res.error) throw normalize(res.error);
        me.region = region;
      }
    },

    feed: {
      list: async function (opts) {
        opts = opts || {};
        var q = sb.from("feed_posts").select("*")
                  .order("created_at", { ascending: false })
                  .limit(opts.limit || 20);
        if (opts.category && opts.category !== "all") q = q.eq("category", opts.category);
        if (opts.before) q = q.lt("created_at", opts.before);
        var res = await q;
        if (res.error) throw normalize(res.error);
        return res.data;
      },

      get: async function (id) {
        var res = await sb.from("feed_posts").select("*").eq("id", id).single();
        if (res.error) throw normalize(res.error);
        return res.data;
      },

      create: async function (input) {
        requireAuth();
        var imagePath = null;
        if (input.imageFile) imagePath = await uploadPostImage(sb, me.id, input.imageFile);

        var res = await sb.from("posts").insert({
          author_id: me.id,
          category:  input.category,
          body:      input.body,
          image_path: imagePath
        }).select("id").single();

        if (res.error) {
          // 글 저장이 실패했으면 방금 올린 사진도 지웁니다 (고아 파일 방지)
          if (imagePath) { try { await sb.storage.from("post-images").remove([imagePath]); } catch (e) {} }
          throw normalize(res.error);
        }
        return res.data.id;
      },

      remove: async function (id) {
        var res = await sb.from("posts").delete().eq("id", id);
        if (res.error) throw normalize(res.error);
      },

      toggleLike: function (id) { return call("toggle_like", { p_post_id: id }); },

      comments: async function (postId) {
        var res = await sb.from("feed_comments").select("*")
                    .eq("post_id", postId).order("created_at", { ascending: true });
        if (res.error) throw normalize(res.error);
        return res.data;
      },

      addComment: async function (postId, body) {
        requireAuth();
        var res = await sb.from("comments")
                    .insert({ post_id: postId, author_id: me.id, body: body })
                    .select("id").single();
        if (res.error) throw normalize(res.error);
        return res.data.id;
      },

      removeComment: async function (id) {
        var res = await sb.from("comments").delete().eq("id", id);
        if (res.error) throw normalize(res.error);
      }
    },

    moderation: {
      report: function (targetType, targetId, reason, memo) {
        requireAuth();
        return call("report_content", {
          p_target_type: targetType, p_target_id: targetId,
          p_reason: reason, p_memo: memo || null
        });
      },
      block:   function (userId) { requireAuth(); return call("block_user",   { p_user_id: userId }); },
      unblock: function (userId) { requireAuth(); return call("unblock_user", { p_user_id: userId }); },
      blockedList: async function () {
        requireAuth();
        var res = await sb.from("my_blocks").select("*");
        if (res.error) throw normalize(res.error);
        return res.data.map(function (b) {
          return { id: b.user_id, name: b.nickname, avatar: b.avatar_url };
        });
      }
    },

    gardens: {
      list: async function () {
        requireAuth();
        var res = await sb.from("my_gardens").select("*");
        if (res.error) throw normalize(res.error);
        return res.data;
      },
      get: async function (id) {
        var res = await sb.from("gardens").select("*").eq("id", id).single();
        if (res.error) throw normalize(res.error);
        return res.data;
      },
      /* 저장 실패 시 err.code === "QUOTA" 이면 결제벽을 띄우세요.
         앱에서 개수를 세지 마세요 — 개발자도구로 우회됩니다. */
      save: async function (g) {
        requireAuth();
        var row = {
          owner_id: me.id,
          name: g.name,
          schema_version: g.schemaVersion || 1,
          bed: g.bed, sun: g.sun, material: g.material,
          plant_ids: g.plantIds || [],
          elements: g.elements || [],
          placement: g.placement || []
        };
        var res = g.id
          ? await sb.from("gardens").update(row).eq("id", g.id).select("id").single()
          : await sb.from("gardens").insert(row).select("id").single();
        if (res.error) throw normalize(res.error);
        return res.data.id;
      },
      remove: async function (id) {
        var res = await sb.from("gardens").delete().eq("id", id);
        if (res.error) throw normalize(res.error);
      }
    },

    prefs: {
      /* 기기별 알림 설정. 토큰은 Phase 2에서 Capacitor가 넣어줍니다. */
      get: async function () {
        if (!me) return { todo: true, comment: true };
        var res = await sb.from("push_tokens")
                    .select("todo_enabled,comment_enabled").eq("user_id", me.id).limit(1);
        if (res.error) throw normalize(res.error);
        var r = res.data && res.data[0];
        return { todo: r ? r.todo_enabled : true, comment: r ? r.comment_enabled : true };
      },
      set: async function (p) {
        requireAuth();
        var res = await sb.from("push_tokens")
                    .update({ todo_enabled: p.todo, comment_enabled: p.comment })
                    .eq("user_id", me.id);
        if (res.error) throw normalize(res.error);
      }
    },

    media: {
      process: processImage,
      publicUrl: function (path) {
        if (!path) return null;
        return sb.storage.from("post-images").getPublicUrl(path).data.publicUrl;
      }
    }
  };
}

async function uploadPostImage(sb, userId, file) {
  var blob = await processImage(file);
  if (blob.size > 5 * 1024 * 1024)
    throw ApiError("UNKNOWN", "사진이 너무 큽니다. 다른 사진을 골라주세요");

  // 경로 규칙 {user_id}/{uuid}.webp — 스토리지 정책이 첫 폴더로 본인 여부를 판단합니다
  var name = (global.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : String(Date.now()) + Math.random().toString(16).slice(2);
  var path = userId + "/" + name + ".webp";

  var res = await sb.storage.from("post-images")
              .upload(path, blob, { contentType: "image/webp" });
  if (res.error) throw normalize(res.error);
  return path;
}


/* ════════════════════════════════════════════════════════════
   드라이버 2 — 로컬 (설정 전 · 시연용)
   메모리에만 있습니다. 새로고침하면 사라집니다.
   서버와 같은 규칙(금지어 · 저장 개수 · 차단 · 신고)을 흉내내므로
   화면 코드를 두 번 쓰지 않아도 됩니다.
   ════════════════════════════════════════════════════════════ */
function localDriver() {
  var listeners = [];
  var me = null;
  var seq = { post: 100, comment: 100 };

  var BANNED = ["씨발","시발","씹할","좆","병신","지랄","개새끼","니미","엠창","fuck","shit"];
  var posts = [], comments = [], likes = [], blocks = [], reports = [], gardens = [];
  var prefs = { todo: true, comment: true };

  // 화면에 보여줄 예시 글. index.html의 기존 목업 데이터를 넣어두면 그걸 씁니다.
  if (global.PCON_SEED && global.PCON_SEED.posts) {
    posts = global.PCON_SEED.posts.map(function (p, i) {
      return {
        id: p.id || (i + 1), author_id: "seed-" + i, category: p.cat || p.category,
        body: p.text || p.body, image_path: p.img || null,
        author_name: p.user, author_avatar: p.avatar,
        author_premium: !!p.premium, created_at: new Date(Date.now() - i * 3600e3).toISOString(),
        like_count: p.likes || 0, comment_count: (p.comments || []).length, status: "visible"
      };
    });
    global.PCON_SEED.posts.forEach(function (p, i) {
      (p.comments || []).forEach(function (c) {
        comments.push({ id: ++seq.comment, post_id: p.id || (i + 1),
          author_id: "seed-c", body: c.text, author_name: c.user,
          author_avatar: c.avatar || "🙂", author_premium: !!c.premium,
          created_at: new Date().toISOString(), status: "visible" });
      });
    });
  }

  function emit() { listeners.forEach(function (cb) { try { cb(me); } catch (e) {} }); }
  function requireAuth() {
    if (!me) throw ApiError("AUTH", "로그인이 필요합니다");
    return me;
  }
  function checkBanned(text) {
    var s = String(text).toLowerCase().replace(/\s+/g, "");
    for (var i = 0; i < BANNED.length; i++)
      if (s.indexOf(BANNED[i]) >= 0)
        throw ApiError("BANNED", "부적절한 표현이 포함되어 있어 등록할 수 없습니다");
  }
  function isBlocked(id) {
    return blocks.some(function (b) {
      return (b.blocker === (me && me.id) && b.blocked === id)
          || (b.blocker === id && b.blocked === (me && me.id));
    });
  }
  function reported(type, id) {
    return reports.some(function (r) {
      return r.reporter === (me && me.id) && r.type === type && r.target === id;
    });
  }
  function decorate(p) {
    var o = Object.assign({}, p);
    o.liked_by_me = likes.some(function (l) { return l.post === p.id && l.user === (me && me.id); });
    o.is_mine = !!me && p.author_id === me.id;
    o.author_deleted = false;
    return o;
  }

  return {
    mode: "local",
    ready: true,
    init: function () { return Promise.resolve(null); },

    auth: {
      current: function () { return me; },
      onChange: function (cb) { listeners.push(cb); cb(me); },
      refresh: function () { return Promise.resolve(me); },
      signInWithKakao: function () {
        me = { id: "local-user", name: "고흥텃밭러", avatar: "🧑‍🌾",
               premium: false, role: "user", region: "south_coast" };
        emit();
        return Promise.resolve(me);
      },
      signOut: function () { me = null; emit(); return Promise.resolve(); },
      deleteAccount: function () {
        // 서버와 같은 규칙: 개인 데이터는 삭제, 글은 작성자만 익명화
        posts.forEach(function (p) {
          if (me && p.author_id === me.id) {
            p.author_id = null; p.author_name = "탈퇴한 이용자";
            p.author_avatar = null; p.author_premium = false;
          }
        });
        comments.forEach(function (c) {
          if (me && c.author_id === me.id) {
            c.author_id = null; c.author_name = "탈퇴한 이용자"; c.author_avatar = null;
          }
        });
        gardens = gardens.filter(function (g) { return !me || g.owner !== me.id; });
        likes   = likes.filter(function (l) { return !me || l.user !== me.id; });
        blocks  = blocks.filter(function (b) { return !me || (b.blocker !== me.id && b.blocked !== me.id); });
        me = null; emit();
        return Promise.resolve();
      }
    },

    profile: {
      setRegion: function (r) { if (me) me.region = r; return Promise.resolve(); }
    },

    feed: {
      list: function (opts) {
        opts = opts || {};
        var out = posts.filter(function (p) {
          return p.status === "visible"
            && (!opts.category || opts.category === "all" || p.category === opts.category)
            && !isBlocked(p.author_id)
            && !reported("post", p.id);
        }).map(decorate);
        return Promise.resolve(out.slice(0, opts.limit || 20));
      },
      get: function (id) {
        var p = posts.find(function (x) { return x.id === id; });
        return p ? Promise.resolve(decorate(p)) : Promise.reject(ApiError("NOT_FOUND", "글을 찾을 수 없어요"));
      },
      create: function (input) {
        try { requireAuth(); checkBanned(input.body); } catch (e) { return Promise.reject(e); }
        var p = { id: ++seq.post, author_id: me.id, category: input.category, body: input.body,
                  image_path: input.imagePlaceholder || null, author_name: me.name,
                  author_avatar: me.avatar, author_premium: me.premium,
                  created_at: new Date().toISOString(),
                  like_count: 0, comment_count: 0, status: "visible" };
        posts.unshift(p);
        return Promise.resolve(p.id);
      },
      remove: function (id) {
        posts = posts.filter(function (p) { return p.id !== id; });
        comments = comments.filter(function (c) { return c.post_id !== id; });
        return Promise.resolve();
      },
      toggleLike: function (id) {
        try { requireAuth(); } catch (e) { return Promise.reject(e); }
        var p = posts.find(function (x) { return x.id === id; });
        var i = likes.findIndex(function (l) { return l.post === id && l.user === me.id; });
        if (i >= 0) { likes.splice(i, 1); if (p) p.like_count = Math.max(0, p.like_count - 1); return Promise.resolve(false); }
        likes.push({ post: id, user: me.id }); if (p) p.like_count++;
        return Promise.resolve(true);
      },
      comments: function (postId) {
        return Promise.resolve(comments.filter(function (c) {
          return c.post_id === postId && c.status === "visible"
              && !isBlocked(c.author_id) && !reported("comment", c.id);
        }).map(function (c) {
          var o = Object.assign({}, c);
          o.is_mine = !!me && c.author_id === me.id;
          return o;
        }));
      },
      addComment: function (postId, body) {
        try { requireAuth(); checkBanned(body); } catch (e) { return Promise.reject(e); }
        var c = { id: ++seq.comment, post_id: postId, author_id: me.id, body: body,
                  author_name: me.name, author_avatar: me.avatar, author_premium: me.premium,
                  created_at: new Date().toISOString(), status: "visible" };
        comments.push(c);
        var p = posts.find(function (x) { return x.id === postId; });
        if (p) p.comment_count++;
        return Promise.resolve(c.id);
      },
      removeComment: function (id) {
        var c = comments.find(function (x) { return x.id === id; });
        if (c) {
          var p = posts.find(function (x) { return x.id === c.post_id; });
          if (p) p.comment_count = Math.max(0, p.comment_count - 1);
        }
        comments = comments.filter(function (x) { return x.id !== id; });
        return Promise.resolve();
      }
    },

    moderation: {
      report: function (type, id, reason) {
        try { requireAuth(); } catch (e) { return Promise.reject(e); }
        var target = type === "post"
          ? posts.find(function (p) { return p.id === id; })
          : comments.find(function (c) { return c.id === id; });
        if (!target) return Promise.reject(ApiError("NOT_FOUND", "대상을 찾을 수 없습니다"));
        if (target.author_id === me.id)
          return Promise.reject(ApiError("UNKNOWN", "본인의 게시물은 신고할 수 없습니다"));
        reports.push({ reporter: me.id, type: type, target: id, reason: reason });
        return Promise.resolve();
      },
      block: function (userId) {
        try { requireAuth(); } catch (e) { return Promise.reject(e); }
        if (!blocks.some(function (b) { return b.blocker === me.id && b.blocked === userId; }))
          blocks.push({ blocker: me.id, blocked: userId });
        return Promise.resolve();
      },
      unblock: function (userId) {
        blocks = blocks.filter(function (b) { return !(b.blocker === (me && me.id) && b.blocked === userId); });
        return Promise.resolve();
      },
      blockedList: function () {
        return Promise.resolve(blocks.filter(function (b) { return b.blocker === (me && me.id); })
          .map(function (b) {
            var p = posts.find(function (x) { return x.author_id === b.blocked; });
            var c = comments.find(function (x) { return x.author_id === b.blocked; });
            var src = p || c || {};
            return { id: b.blocked, name: src.author_name || "이용자", avatar: src.author_avatar || "🙍" };
          }));
      }
    },

    gardens: {
      list: function () {
        return Promise.resolve(gardens.filter(function (g) { return g.owner === (me && me.id); }));
      },
      get: function (id) {
        var g = gardens.find(function (x) { return x.id === id; });
        return g ? Promise.resolve(g) : Promise.reject(ApiError("NOT_FOUND", "텃밭을 찾을 수 없어요"));
      },
      save: function (g) {
        try { requireAuth(); } catch (e) { return Promise.reject(e); }
        var mine = gardens.filter(function (x) { return x.owner === me.id; });
        if (!g.id && !me.premium && mine.length >= FREE_LIMIT)
          return Promise.reject(ApiError("QUOTA",
            "무료로는 텃밭을 " + FREE_LIMIT + "개까지 저장할 수 있어요"));

        if (g.id) {
          var t = gardens.find(function (x) { return x.id === g.id; });
          if (t) Object.assign(t, g, { updated_at: new Date().toISOString() });
          return Promise.resolve(g.id);
        }
        var id = "g" + Date.now() + Math.random().toString(16).slice(2, 6);
        gardens.unshift(Object.assign({}, g, {
          id: id, owner: me.id, schema_version: g.schemaVersion || 1,
          created_at: new Date().toISOString(), updated_at: new Date().toISOString()
        }));
        return Promise.resolve(id);
      },
      remove: function (id) {
        gardens = gardens.filter(function (g) { return g.id !== id; });
        return Promise.resolve();
      }
    },

    prefs: {
      get: function () { return Promise.resolve(Object.assign({}, prefs)); },
      set: function (p) { prefs = Object.assign({}, prefs, p); return Promise.resolve(); }
    },

    media: {
      process: processImage,
      publicUrl: function (path) { return path; }
    },

    /* 시연용 — 프리미엄 켜기 (로컬 모드에서만) */
    _setPremium: function (v) { if (me) { me.premium = !!v; emit(); } }
  };
}


/* ════════════════════════════════════════════════════════════
   드라이버 선택
   ════════════════════════════════════════════════════════════ */
var api;
var configured = !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY);

if (configured && global.supabase && global.supabase.createClient) {
  var client = global.supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  api = supabaseDriver(client);
} else {
  if (configured) {
    console.warn("[PCON] 설정은 있는데 supabase 라이브러리를 못 찾았습니다. " +
                 "vendor/supabase.js 를 api.js 보다 먼저 불러오세요. 목업 모드로 돕니다.");
  }
  api = localDriver();
}

global.PCON = global.PCON || {};
global.PCON.api = api;
global.PCON.ApiError = ApiError;
global.PCON.processImage = processImage;

})(window);
