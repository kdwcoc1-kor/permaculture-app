/* ════════════════════════════════════════════════════════════
   퍼머컬처ON — 백엔드 설정
   Supabase 프로젝트를 만든 뒤 아래 두 값을 채우세요.
   Supabase 대시보드 → Project Settings → API 에 있습니다.

   ⚠️ anon 키는 앱에 넣어도 안전합니다. RLS가 막아줍니다.
      service_role 키는 절대 여기 넣지 마세요. RLS를 통째로 우회합니다.
      (저장소가 Public이라 더 위험합니다)

   비워두면 앱이 예전처럼 목업 모드로 돕니다.
   ════════════════════════════════════════════════════════════ */
window.PCON_CONFIG = {
  SUPABASE_URL:      "https://xqbsthrpxlzzxowtndfs.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_Ww6JJOtQz1uLlreXsbToVw_38X6X5Mx",

  // 카카오 로그인 후 돌아올 주소. 비워두면 현재 주소로 돌아옵니다.
  REDIRECT_URL: "https://poetic-scone-037eac.netlify.app/",

  // 카카오에 요청할 동의항목. 카카오 콘솔의 "동의항목"에 설정된 것만 적어야 합니다.
  // 없는 항목을 요청하면 KOE205 오류가 납니다.
  KAKAO_SCOPES: "profile_nickname profile_image",

  // 무료로 저장할 수 있는 텃밭 개수 (서버의 03_functions.sql 값과 같아야 함)
  FREE_GARDEN_LIMIT: 3
};
