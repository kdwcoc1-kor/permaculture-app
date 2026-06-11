// ============================================================
// 퍼머컬처ON — 앱 로직
// 데이터는 data/plantdata.js, data/content.js 에서 가져옵니다.
// ============================================================
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ── 탭 전환 ──────────────────────────── */
$$("nav.tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    $$("nav.tabs button").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    $$(".view").forEach(v => v.classList.remove("active"));
    $("#view-" + btn.dataset.view).classList.add("active");
    window.scrollTo({top:0});
  });
});

/* ════════════════════════════════════════
   🌱 도감
════════════════════════════════════════ */
const D = PLANT_DATA;
const nowMonth = new Date().getMonth() + 1;
let calMonth = nowMonth;
let calRegion = localStorage.getItem("pcon_region") || "south_coast"; // 기본: 남해안(고흥)

/* 이달의 밭 — 시그니처 카드 */
function renderMonthHero(){
  const m = D.calendar.find(c => +c.month === nowMonth);
  if(!m) return;
  const row = (label, val) => val && val !== "-" ? `<dt>${label}</dt><dd>${esc(val)}</dd>` : "";
  $("#month-hero").innerHTML = `
    <div class="month-hero">
      <div class="txt">
        <div class="eyebrow">이달의 밭 · ${m.month_name}</div>
        <h3>${esc(m.tasks)}</h3>
        <dl>
          ${row("씨뿌리기", m.sow_vegetables)}
          ${row("허브", m.sow_herbs)}
          ${row("아주심기", m.transplant)}
          ${row("거두기", m.harvest)}
        </dl>
      </div>
      <!-- 자라나는 새싹 -->
      <svg class="sprout" viewBox="0 0 96 120" aria-hidden="true">
        <path class="stem" d="M48 116 C 46 84 50 62 47 36"/>
        <path class="lf l1" style="--ox:47px;--oy:74px"
          d="M47 74 C 26 70 13 54 11 32 C 34 35 47 52 48 72 Z" fill="#8FC487"/>
        <path class="lf l2" style="--ox:48px;--oy:44px"
          d="M48 44 C 68 39 82 22 84 0 C 60 4 47 22 47 42 Z" fill="#A9D69C"/>
      </svg>
      <div class="seeds"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>`;
}

/* 도감 하위 탭 */
let dogamSub = "guild";
$$("#dogam-chips .chip").forEach(c => c.addEventListener("click", () => {
  $$("#dogam-chips .chip").forEach(x => x.classList.remove("on"));
  c.classList.add("on");
  dogamSub = c.dataset.sub;
  renderDogam();
}));

function renderDogam(){
  const body = $("#dogam-body");
  if(dogamSub === "guild") body.innerHTML = guildHTML();
  else if(dogamSub === "plants") body.innerHTML = plantsHTML();
  else if(dogamSub === "bad") body.innerHTML = badHTML();
  else body.innerHTML = calHTML();
  bindDogam();
}

/* ── 길드 조합 ── */
let guildQuery = "", guildSeason = "전체";
function guildHTML(){
  const seasons = ["전체","봄","여름","가을","겨울"];
  let list = D.combos.filter(g => {
    const hay = [g.name, g.vegetable, g.herb, g.flower, ...(g.tags||[])].join(" ");
    const okQ = !guildQuery || hay.includes(guildQuery);
    const okS = guildSeason === "전체" || (g.season||[]).includes(guildSeason);
    return okQ && okS;
  });
  return `
    <div class="search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
      <input id="guild-q" placeholder="작물 이름으로 검색 (예: 토마토)" value="${esc(guildQuery)}"></div>
    <div class="chips">${seasons.map(s=>`<button class="chip ${s===guildSeason?"on":""}" data-season="${s}">${s}</button>`).join("")}</div>
    ${list.length ? list.map(g => `
      <div class="card">
        <h3>${esc(g.name)}</h3>
        <div class="meta">${esc(g.main_effect)}</div>
        <div class="guild-trio">
          <span class="p">🍅 ${esc(g.vegetable)}</span><span class="plus">＋</span>
          <span class="p">🌿 ${esc(g.herb)}</span><span class="plus">＋</span>
          <span class="p">🌼 ${esc(g.flower)}</span>
        </div>
        <div class="tags">
          <span class="tag-pill soil">난이도 ${esc(g.difficulty)}</span>
          ${(g.tags||[]).map(t=>`<span class="tag-pill">${esc(t)}</span>`).join("")}
        </div>
        <details class="more"><summary>심는 방법 보기</summary>
          <div class="body">
            <b>배치</b> ${esc(g.layout)}<br>
            <b>심는 때</b> ${esc(g.planting_time)} · <b>수확</b> ${esc(g.harvest_time)}<br>
            <b>효과</b> ${(g.effects||[]).map(esc).join(", ")}
          </div>
        </details>
      </div>`).join("") : `<div class="empty">검색 결과가 없어요 🌱</div>`}`;
}

/* ── 작물 도감 ── */
let plantQuery = "", plantCat = "전체";
function plantsHTML(){
  const cats = ["전체","채소","허브","꽃"];
  const all = [
    ...D.vegetables.map(p=>({...p,_cat:"채소"})),
    ...D.herbs.map(p=>({...p,_cat:"허브"})),
    ...D.flowers.map(p=>({...p,_cat:"꽃"}))
  ];
  const list = all.filter(p => {
    const okC = plantCat==="전체" || p._cat===plantCat;
    const okQ = !plantQuery || (p.name+(p.name_en||"")).includes(plantQuery);
    return okC && okQ;
  });
  const row = (label,val)=> val&&val!=="-" ? `<b>${label}</b> ${esc(val)}<br>` : "";
  return `
    <div class="search"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
      <input id="plant-q" placeholder="작물 이름으로 검색" value="${esc(plantQuery)}"></div>
    <div class="chips">${cats.map(c=>`<button class="chip ${c===plantCat?"on":""}" data-cat="${c}">${c}</button>`).join("")}</div>
    ${list.length ? list.map(p=>`
      <div class="card">
        <h3>${p._cat==="채소"?"🥬":p._cat==="허브"?"🌿":"🌼"} ${esc(p.name)} <span style="font-weight:400;font-size:.78rem;color:var(--muted)">${esc(p.name_en||"")}</span></h3>
        <div class="tags">
          <span class="tag-pill">${p._cat}</span>
          ${p.difficulty?`<span class="tag-pill soil">난이도 ${esc(p.difficulty)}</span>`:""}
          ${p.overwinter?`<span class="tag-pill honey">월동 가능</span>`:""}
          ${p.perennial?`<span class="tag-pill honey">여러해살이</span>`:""}
        </div>
        <details class="more"><summary>재배 정보 보기</summary>
          <div class="body">
            ${row("씨뿌리기", p.sowing || p.sowing_mid)}
            ${p.sowing_south ? row("남부지방", p.sowing_south) : ""}
            ${row("아주심기", p.transplant)}
            ${row("수확", p.harvest || p.bloom)}
            ${row("알맞은 온도", p.temp_optimal ? p.temp_optimal+"℃" : "")}
            ${row("동반 효과", p.companion_effect)}
            ${row("메모", p.notes)}
          </div>
        </details>
      </div>`).join("") : `<div class="empty">검색 결과가 없어요 🌱</div>`}`;
}

/* ── 상극 체크 ── */
function badHTML(){
  return `<p class="sec-desc" style="margin-top:4px">함께 심으면 안 되는 조합이에요. 밭을 설계하기 전에 꼭 확인하세요.</p>` +
    D.badCombos.map(b=>`
      <div class="card">
        <div class="bad-pair">${esc(b.plant_a)} <span class="x">✕</span> ${esc(b.plant_b)}</div>
        <div class="meta" style="margin-top:6px"><b style="color:var(--danger)">왜?</b> ${esc(b.reason)}</div>
        <div class="tags"><span class="tag-pill danger">${esc(b.effect)}</span></div>
      </div>`).join("");
}

/* ── 재배 캘린더 ── */
function calHTML(){
  const m = D.calendar.find(c=>+c.month===calMonth);
  const r = D.regions.find(x=>x.id===calRegion);
  const row=(l,v)=> v&&v!=="-" ? `<dt>${l}</dt><dd>${esc(v)}</dd>` : "";
  return `
    <div class="month-nav">
      <button id="cal-prev" aria-label="이전 달">‹</button>
      <span class="m">${m.month_name}</span>
      <button id="cal-next" aria-label="다음 달">›</button>
    </div>
    <select class="region" id="cal-region" aria-label="우리 지역 선택">
      ${D.regions.map(x=>`<option value="${x.id}" ${x.id===calRegion?"selected":""}>${esc(x.name)}</option>`).join("")}
    </select>
    <div class="card"><dl class="cal-grid">
      ${row("🌱 씨뿌리기 (채소)", m.sow_vegetables)}
      ${row("🌿 씨뿌리기 (허브)", m.sow_herbs)}
      ${row("🪴 아주심기", m.transplant)}
      ${row("🧺 거두기", m.harvest)}
      ${row("📝 이달의 일", m.tasks)}
    </dl></div>
    <div class="region-note">📍 <b>${esc(r.name)}</b> 기준 — 봄 ${esc(r.spring_adjust)}, 가을 ${esc(r.fall_adjust)} · 늦서리 ${esc(r.last_frost)} / 첫서리 ${esc(r.first_frost)}<br>${esc(r.notes)}</div>`;
}

/* 도감 내부 이벤트 연결 */
function bindDogam(){
  const gq = $("#guild-q");
  if(gq) gq.addEventListener("input", e => { guildQuery = e.target.value.trim(); renderDogam(); setTimeout(()=>{const i=$("#guild-q"); i.focus(); i.setSelectionRange(99,99);},0); });
  $$("#dogam-body [data-season]").forEach(c=>c.addEventListener("click",()=>{guildSeason=c.dataset.season;renderDogam();}));
  const pq = $("#plant-q");
  if(pq) pq.addEventListener("input", e => { plantQuery = e.target.value.trim(); renderDogam(); setTimeout(()=>{const i=$("#plant-q"); i.focus(); i.setSelectionRange(99,99);},0); });
  $$("#dogam-body [data-cat]").forEach(c=>c.addEventListener("click",()=>{plantCat=c.dataset.cat;renderDogam();}));
  const prev=$("#cal-prev"), next=$("#cal-next"), reg=$("#cal-region");
  if(prev) prev.addEventListener("click",()=>{calMonth=calMonth===1?12:calMonth-1;renderDogam();});
  if(next) next.addEventListener("click",()=>{calMonth=calMonth===12?1:calMonth+1;renderDogam();});
  if(reg) reg.addEventListener("change",e=>{calRegion=e.target.value;localStorage.setItem("pcon_region",calRegion);renderDogam();});
}

/* ════════════════════════════════════════
   🎬 영상
════════════════════════════════════════ */
let videoFilter = 0;
function renderVideoChips(){
  // 영상이 실제로 있는 원리만 칩으로 노출
  const used = [...new Set(VIDEOS.map(v=>v.principle))].filter(n=>n>0).sort((a,b)=>a-b);
  $("#video-chips").innerHTML =
    `<button class="chip ${videoFilter===0?"on":""}" data-pr="0">전체</button>` +
    used.map(n=>`<button class="chip ${videoFilter===n?"on":""}" data-pr="${n}">${esc(PRINCIPLES[n].split(".")[0])}원리</button>`).join("");
  $$("#video-chips .chip").forEach(c=>c.addEventListener("click",()=>{videoFilter=+c.dataset.pr;renderVideos();}));
}
function renderVideos(){
  renderVideoChips();
  const list = VIDEOS
    .filter(v=>videoFilter===0||v.principle===videoFilter)
    .sort((a,b)=>b.date.localeCompare(a.date));
  $("#video-list").innerHTML = list.length ? list.map((v,i)=>`
    <div class="card video-card">
      <button class="video-thumb" data-vid="${esc(v.videoId)}" aria-label="${esc(v.title)} 재생">
        <img loading="lazy" src="https://i.ytimg.com/vi/${esc(v.videoId)}/hqdefault.jpg" alt="">
        <span class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></span>
      </button>
      <div class="info">
        ${v.principle?`<span class="badge-principle">${esc(PRINCIPLES[v.principle])}</span><br>`:""}
        <h3>${esc(v.title)}</h3>
        <div class="meta">${esc(v.desc)} · ${esc(v.date)}
          · <a href="https://www.youtube.com/watch?v=${esc(v.videoId)}" target="_blank" rel="noopener" style="color:var(--leaf);font-weight:700;text-decoration:none">YouTube에서 보기 ↗</a>
        </div>
      </div>
    </div>`).join("") : `<div class="empty">아직 영상이 없어요 🎬</div>`;
  // 썸네일 클릭 → 그 자리에서 재생
  $$("#video-list .video-thumb").forEach(t=>t.addEventListener("click",()=>{
    const f = document.createElement("iframe");
    // 오류 153 방지: referrerpolicy를 먼저, 가장 호환성 높은 방식으로 지정
    f.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
    f.setAttribute("allow","autoplay; encrypted-media; picture-in-picture");
    f.setAttribute("allowfullscreen","");
    f.src = `https://www.youtube.com/embed/${t.dataset.vid}?autoplay=1&rel=0&playsinline=1`;
    t.replaceWith(f);
  }));
}

/* ════════════════════════════════════════
   🗺️ 농가
════════════════════════════════════════ */
let farmRegion = "전체";
function renderFarms(){
  const regions = ["전체", ...new Set(FARMS.map(f=>f.region))];
  $("#farm-chips").innerHTML = regions.map(r=>`<button class="chip ${r===farmRegion?"on":""}" data-fr="${esc(r)}">${esc(r)}</button>`).join("");
  $$("#farm-chips .chip").forEach(c=>c.addEventListener("click",()=>{farmRegion=c.dataset.fr;renderFarms();}));
  const list = FARMS.filter(f=>farmRegion==="전체"||f.region===farmRegion);
  $("#farm-list").innerHTML = list.length ? list.map(f=>`
    <div class="card">
      <div class="farm-head">
        <div><h3>${esc(f.name)}</h3><div class="meta">📍 ${esc(f.address)}</div></div>
        ${f.experience?`<span class="exp-badge">체험 가능</span>`:""}
      </div>
      <p style="font-size:.86rem;margin-top:9px">${esc(f.desc)}</p>
      <div class="tags">${(f.crops||[]).map(c=>`<span class="tag-pill">${esc(c)}</span>`).join("")}</div>
      <div class="meta" style="margin-top:8px">연락: ${esc(f.contact||"-")}</div>
      <div class="farm-links">
        <a class="map" href="https://map.kakao.com/?q=${encodeURIComponent(f.address)}" target="_blank" rel="noopener">🗺️ 지도 보기</a>
        ${f.link?`<a href="${esc(f.link)}" target="_blank" rel="noopener">🔗 홈페이지</a>`:""}
      </div>
    </div>`).join("") : `<div class="empty">이 지역에는 아직 등록된 농가가 없어요</div>`;
}

/* ════════════════════════════════════════
   📅 이벤트
════════════════════════════════════════ */
function renderEvents(){
  const today = new Date(); today.setHours(0,0,0,0);
  const list = [...EVENTS].map(e=>{
    const d = new Date(e.date+"T00:00:00");
    const diff = Math.round((d-today)/86400000);
    return {...e, _diff:diff};
  }).sort((a,b)=>{
    const ap=a._diff<0, bp=b._diff<0;
    if(ap!==bp) return ap?1:-1;          // 진행 중인 것 먼저
    return ap ? b._diff-a._diff : a._diff-b._diff; // 다가오는 순
  });
  $("#event-list").innerHTML = list.length ? list.map(e=>{
    const past = e._diff<0;
    const dday = past?"종료":e._diff===0?"오늘!":"D-"+e._diff;
    return `
    <div class="card event-card ${past?"past":""}">
      <span class="dday ${past?"past":e._diff===0?"today":""}">${dday}</span>
      <h3 style="margin-top:8px">${esc(e.title)}</h3>
      <dl class="event-meta">
        <dt>일시</dt><dd>${esc(e.date)}</dd>
        <dt>장소</dt><dd>${esc(e.place)}</dd>
        <dt>참가비</dt><dd>${esc(e.fee||"-")}</dd>
      </dl>
      <p style="font-size:.85rem;margin-top:8px">${esc(e.desc)}</p>
      ${!past&&e.applyLink?`<a class="apply-btn" href="${esc(e.applyLink)}" target="_blank" rel="noopener">신청하기</a>`:""}
    </div>`;}).join("") : `<div class="empty">예정된 이벤트가 없어요 📅</div>`;
}

/* ── 시작 ── */
renderMonthHero();
renderDogam();
renderVideos();
renderFarms();
renderEvents();
