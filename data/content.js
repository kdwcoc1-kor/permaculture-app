// ============================================================
// 퍼머컬처ON 콘텐츠 데이터
// 이 파일만 수정하면 영상·농가·이벤트가 앱에 바로 반영됩니다.
// 수정 후 GitHub에 올리면(Push) GitHub Pages 가 자동 배포합니다.
// ============================================================

// ------------------------------------------------------------
// 🎬 영상 — 유튜브 영상 ID만 넣으면 됩니다.
// 영상 ID는 유튜브 주소에서 v= 뒤의 글자입니다.
// 예) https://www.youtube.com/watch?v=AbCdEfGhIjk → "AbCdEfGhIjk"
// principle: 퍼머컬처 12원리 중 해당 번호 (없으면 0)
// lang: "ko" 한국어 / "en" 해외 영상 — 영상 탭의 언어 칩에 쓰입니다
// date: 몰라도 됩니다. "" 로 두면 화면에 표시하지 않고,
//       목록은 이 파일에 적은 순서대로 나옵니다.
// ------------------------------------------------------------
const VIDEOS = [
  /* ──────────────────────────────────────────────────────────
     🇰🇷 한국어 영상
     ────────────────────────────────────────────────────────── */

  /* 들어가며 — 퍼머컬처가 무엇인가 */
  {
    videoId: "QuCGJKbtuqM",
    title: "퍼머컬처란? 채소·꽃·과실수로 만든 맛있는 정원",
    desc: "「지속가능한 생태농업, 퍼머컬처」 1강 — 먹을 것과 볼 것을 한 정원에 함께 심는 생각의 출발점",
    principle: 0,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "ptJxkH4cDI8",
    title: "퍼머컬처, 땅의 힘으로 지구를 살리는 삶의 방식",
    desc: "TEDxSNU 강연 — 퍼머컬처가 왜 필요한지를 짧게 정리해 줍니다",
    principle: 0,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "59fcTdRXiTk",
    title: "지속 가능한 농업, 퍼머컬처",
    desc: "시골에서 퍼머컬처로 살아가는 사람들의 이야기",
    principle: 0,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "M0oP7eYfQNM",
    title: "도시에서 시작하는 퍼머컬처",
    desc: "서울혁신파크에서 소개하는 퍼머컬처 농사법",
    principle: 0,
    lang: "ko",
    date: "2026-06-14",
    type: "video"
  },

  /* 1원리 — 관찰하고 소통하라 */
  {
    videoId: "TbmMt9FR8Qg",
    title: "관찰하고 상호작용하라 — 퍼머컬처 12원리",
    desc: "「지속가능한 생태농업, 퍼머컬처」 19강 — 삽을 들기 전에 먼저 봐야 할 것들",
    principle: 1,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 2원리 — 에너지를 붙잡아 저장하라 */
  {
    videoId: "bJiQrfqMXfQ",
    title: "텃밭·주말농장 밭 만들기와 멀칭 노하우",
    desc: "두둑을 어떻게 잡고 무엇으로 덮을지 — 물과 온기를 흙에 가두는 법",
    principle: 2,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "EuFcsQAAXWY",
    title: "빗물 저수조로 작은 생태연못 만들기",
    desc: "받아 둔 빗물을 연못으로 — 물을 저장하면서 생물도 불러들입니다",
    principle: 2,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 5원리 — 재생가능한 자원을 사용하라 */
  {
    videoId: "qptQyH0G8ck",
    title: "비료 없이 농사짓는 흙 만들기",
    desc: "사서 넣는 대신 흙이 스스로 힘을 갖게 하는 방법",
    principle: 5,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 6원리 — 쓰레기를 만들지 말라 */
  {
    videoId: "C1KxUpjYhhY",
    title: "무경운 유기물 멀칭으로 두둑 밭 만들기",
    desc: "베어낸 풀과 유기물을 그 자리에 덮어 밭을 만드는 과정",
    principle: 6,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "-Nw94apybkY",
    title: "3년 노하우로 만든 후글컬처 틀밭",
    desc: "나뭇가지와 낙엽을 묻어 스스로 물을 머금는 두둑을 만듭니다",
    principle: 6,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "RiIgtF5IDj0",
    title: "낙엽퇴비·깻묵거름·가축분퇴비 만들기",
    desc: "버려지는 것으로 거름을 만드는 세 가지 방법",
    principle: 6,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 7원리 — 패턴을 따라 디자인하라 */
  {
    videoId: "0beWv5c0myY",
    title: "밭정원 만들기",
    desc: "경기 여주 15평 자투리 땅에 만든 퍼머컬처 밭정원 — 흙을 먼저 살리는 자연농법",
    principle: 7,
    lang: "ko",
    date: "2023-05-16",
    type: "shorts"
  },
  {
    videoId: "c0R1DimrLuU",
    title: "한국형 퍼머컬처 키친가든 생태원리",
    desc: "우리 기후와 밭 크기에 맞춘 키친가든 설계 이야기",
    principle: 7,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "OyhgT-RVggM",
    title: "자연을 모방하는 설계 — 퍼머컬처 12가지 원칙",
    desc: "「지속가능한 생태농업, 퍼머컬처」 28강 — 12원리를 한 번에 훑어봅니다",
    principle: 7,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 8원리 — 분리보다는 통합하라 */
  {
    videoId: "DzeYDjRp4gE",
    title: "텃밭 궁합 — 동반식물",
    desc: "옆에 두면 서로 돕는 작물과 떼어놓아야 하는 작물",
    principle: 8,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "p8WzauhOeg0",
    title: "같이 심으면 좋은 작물 조합 한방에 정리",
    desc: "자주 쓰는 조합을 작물별로 묶어서 보여줍니다",
    principle: 8,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "p7J5y5tJkVw",
    title: "식물에도 궁합이 있다 — 섞어짓기와 돌려짓기",
    desc: "한 두둑에 섞어 심고, 해마다 자리를 바꾸는 이유",
    principle: 8,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 9원리 — 작고 느린 해결책 */
  {
    videoId: "C21GlGV8iDU",
    title: "주말농장 초보자를 위한 밭 만들기 총정리",
    desc: "처음 밭을 얻었을 때 순서대로 무엇부터 하면 되는지",
    principle: 9,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "h4cfA9bclMM",
    title: "잡초 적고 관리 쉬운 무경운 텃밭 만들기",
    desc: "밭을 갈지 않고 시작하는 No-dig 방식",
    principle: 9,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "HESbFniEgYw",
    title: "평생 잡초 걱정 없는 무경운 텃밭",
    desc: "자닮(JADAM) 유기농업 — 힘든 밭갈기를 그만두는 방법",
    principle: 9,
    lang: "ko",
    date: "",
    type: "video"
  },
  {
    videoId: "5CXXJPAxlKk",
    title: "잡초 뽑지 않고 농사 짓는 법 3가지",
    desc: "풀과 싸우는 대신 풀을 다루는 쪽으로",
    principle: 9,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* 11원리 — 가장자리를 활용하라 */
  {
    videoId: "RhIX3t1q2jU",
    title: "돈 적게 들이고 옥상텃밭 만들기",
    desc: "쓰지 않던 옥상을 텃밭으로 바꾸는 과정",
    principle: 11,
    lang: "ko",
    date: "",
    type: "video"
  },

  /* ──────────────────────────────────────────────────────────
     🌍 해외 영상 (영어)
     ────────────────────────────────────────────────────────── */

  /* 1원리 — 관찰하고 소통하라 */
  {
    videoId: "jyVqx0SdcWo",
    title: "Introduction to Permaculture Site Analysis",
    desc: "설계 전에 땅을 읽는 법 — 해·바람·물길·경사를 살피는 순서",
    principle: 1,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 2원리 — 에너지를 붙잡아 저장하라 */
  {
    videoId: "FuD0V4QkohM",
    title: "Permaculture Swales for Beginners",
    desc: "빗물을 흘려보내지 않고 땅에 스미게 하는 등고선 도랑(스웨일) 만들기",
    principle: 2,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 3원리 — 수확하라 */
  {
    videoId: "nT72pgGcyWk",
    title: "How Much Food is in 100 Square Feet of a Permaculture Garden?",
    desc: "9평 남짓한 밭에서 실제로 얼마나 거두는지 세어 봅니다",
    principle: 3,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 6원리 — 쓰레기를 만들지 말라 */
  {
    videoId: "5dUBuzEQjWM",
    title: "How to Build Hugelkultur Raised Garden Beds",
    desc: "통나무를 묻어 물을 머금는 두둑 만들기 — 후글컬처의 정석",
    principle: 6,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "daFPk9Uvfrw",
    title: "5 Ways to Build a Hügelkultur Garden Bed",
    desc: "땅 위에 쌓기, 파묻기 등 후글컬처 다섯 가지 방식 비교",
    principle: 6,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "ieAbk0VJbWk",
    title: "Start a Worm Farm the Right Way",
    desc: "지렁이 퇴비 상자를 처음부터 끝까지 — 음식물 쓰레기가 거름이 되는 과정",
    principle: 6,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 7원리 — 패턴을 따라 디자인하라 */
  {
    videoId: "JGuZwsjOK4U",
    title: "Permaculture Zones & Sectors",
    desc: "집에서 가까운 곳부터 멀리까지 — 자주 손 가는 것을 가까이 두는 구역 나누기",
    principle: 7,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "wjKzvvOA6Zg",
    title: "How I Designed My Permaculture Food Forest",
    desc: "빈 땅에서 먹을거리 숲까지, 설계 과정을 단계별로 보여줍니다",
    principle: 7,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "Ic93km06DLQ",
    title: "How to Design a Backyard Food Forest",
    desc: "뒷마당 크기에서 퍼머컬처 원리로 먹을거리 숲을 그리는 법",
    principle: 7,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 8원리 — 분리보다는 통합하라 */
  {
    videoId: "I9CD8D-0qKA",
    title: "The Three Sisters: Companion Planting Basics",
    desc: "옥수수·콩·호박 — 서로를 돕는 가장 오래된 동반식물 조합",
    principle: 8,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 9원리 — 작고 느린 해결책 */
  {
    videoId: "Y9ZukMyejLk",
    title: "A Huge Amount of Food in a City Permaculture Garden",
    desc: "도시의 작은 마당 하나로 식탁을 채우는 사람의 정원",
    principle: 9,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "rFFSBzsPn0k",
    title: "Tiny Suburban Backyard Permaculture — Abdallah House",
    desc: "평범한 주택 뒷마당을 퍼머컬처 정원으로 바꾼 가족의 집 둘러보기",
    principle: 9,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "BXzz5b7kVQM",
    title: "A Highly Productive Small-Scale Urban Garden",
    desc: "호주 Gardening Australia — 좁은 도시 텃밭에서 수확을 끌어올리는 방법",
    principle: 9,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 10원리 — 다양성을 활용하고 존중하라 */
  {
    videoId: "iSEzmSo6J2I",
    title: "Productive Food Forests Made Simple (Just 3 Layers)",
    desc: "층을 세 겹으로만 줄여도 되는 먹을거리 숲 — 복잡하게 하지 않는 법",
    principle: 10,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "pC6Ee52qi-E",
    title: "This Small-Scale Permaculture Garden is PACKED With Food",
    desc: "좁은 땅을 여러 작물로 빽빽하게 채운 정원 둘러보기",
    principle: 10,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 11원리 — 가장자리를 활용하고 주변부를 소중히 하라 */
  {
    videoId: "amK-PQWcIbQ",
    title: "How to Build an Herb Spiral: 5 Microclimates in 5 Feet",
    desc: "나선형 허브 화단 하나에 볕·그늘·마른 곳·젖은 곳을 모두 담기",
    principle: 11,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "q0lGRdxCqao",
    title: "How to Make a Keyhole Garden",
    desc: "가운데로 손이 닿는 열쇠구멍 두둑 — 통로를 줄이고 심는 면을 늘립니다",
    principle: 11,
    lang: "en",
    date: "",
    type: "video"
  },
  {
    videoId: "t7DfgVNireE",
    title: "Urban Permaculture — Small Spaces Backyard Tour",
    desc: "담장·베란다·좁은 길목까지 쓰는 도시 퍼머컬처",
    principle: 11,
    lang: "en",
    date: "",
    type: "video"
  },

  /* 12원리 — 변화를 창의적으로 활용하고 대응하라 */
  {
    videoId: "2xcZS7arcgk",
    title: "Greening the Desert — Geoff Lawton",
    desc: "소금기 가득한 사막 땅을 되살린 기록 — 퍼머컬처의 가장 유명한 사례",
    principle: 12,
    lang: "en",
    date: "",
    type: "video"
  }
];

/* 목록에서 뺀 영상
   g4hBvv9PTqM — 유튜브가 외부 사이트 재생을 허용하지 않아(oEmbed 401)
                 앱 안에서 검은 화면이 뜹니다. 공개 설정을 바꾸시면
                 아래 줄을 살려서 되돌릴 수 있습니다.
   { videoId:"g4hBvv9PTqM", title:"", desc:"", principle:0, lang:"ko", date:"2026-06-11", type:"video" },
*/

// 퍼머컬처 12원리 (영상 분류용 — 수정할 필요 없음)
const PRINCIPLES = [
  "전체 보기",
  "1. 관찰하고 소통하라",
  "2. 에너지를 붙잡아 저장하라",
  "3. 수확하라",
  "4. 자율과 피드백을 수용하라",
  "5. 재생가능한 자원과 용역을 사용하라",
  "6. 쓰레기를 만들지 말라",
  "7. 패턴을 따라 디자인하라",
  "8. 분리보다는 통합하라",
  "9. 작고 느린 해결책을 사용하라",
  "10. 다양성을 활용하고 존중하라",
  "11. 가장자리를 활용하고 주변부를 소중히 하라",
  "12. 변화를 창의적으로 활용하고 대응하라"
];

// ------------------------------------------------------------
// 🗺️ 농가 — 퍼머컬처를 실제로 하고 있는 전국의 농장·학교·공동체
//
// 출처: 한국퍼머컬처네트워크 https://koreapermaculture.or.kr/ 가 공개한
//       전국 거점 목록 + 각 기관 홈페이지 확인
//
// region: 아래 FARM_REGIONS 에 적힌 값만 씁니다. 칩도 그 순서대로 나옵니다.
// tags: 카드에 붙는 꼬리표 (숲밭·학교·공동체·교육 등). 예전 crops 도 그대로 동작합니다.
// experience: 방문·체험·교육 프로그램이 확인된 곳만 true
// contact: 확인된 것만. 비워 두면 카드에 연락 줄이 나오지 않습니다.
//          ⚠️ 확인하지 않은 전화번호는 절대 넣지 마세요.
// link: 홈페이지·블로그 (없으면 네트워크 주소)
// ------------------------------------------------------------
/* 지역 칩이 나오는 순서 — 여기 적은 순서대로, 등록된 곳이 있는 지역만 나옵니다 */
const FARM_REGIONS = ["서울", "인천·강화", "경기", "강원", "충청", "전라", "경상", "제주"];

const FARMS = [
  /* ── 서울 ───────────────────────────────────────────────── */
  {
    name: "퍼머컬처학교",
    region: "서울",
    address: "서울",
    desc: "퍼머컬처를 배우고 나누는 배움터. 한국퍼머컬처네트워크와 함께합니다.",
    tags: ["교육"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "잡초라도충분한풀학교",
    region: "서울",
    address: "서울",
    desc: "풀을 뽑아내야 할 것이 아니라 함께 지낼 것으로 보는 도시 속 풀학교.",
    tags: ["교육", "도시"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "산다미아노 카페",
    region: "서울",
    address: "서울",
    desc: "퍼머컬처 활동가들이 모이는 서울의 거점 공간.",
    tags: ["거점"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "전환마을 은평",
    region: "서울",
    address: "서울 은평구",
    desc: "2014년부터 도심에서 기르고 나누고 되돌리는 삶을 실험해 온 마을 공동체. 공동체텃밭과 풀학교를 운영합니다.",
    tags: ["공동체", "도시텃밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 인천·강화 ──────────────────────────────────────────── */
  {
    name: "소란한숲밭",
    region: "인천·강화",
    address: "인천 강화군",
    desc: "강화의 숲밭. 한국퍼머컬처네트워크 활동의 중심 가운데 하나입니다.",
    tags: ["숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "큰나무캠프힐",
    region: "인천·강화",
    address: "인천 강화군",
    desc: "발달장애인과 비장애인이 함께 농사지으며 살아가는 생활공동체. 숲밭을 함께 가꿉니다.",
    tags: ["공동체", "숲밭"],
    experience: false,
    contact: "",
    link: "https://www.bigtreecamphill.com/"
  },
  {
    name: "산마을고등학교",
    region: "인천·강화",
    address: "인천 강화군",
    desc: "인천 유일의 탄소중립 중점학교인 대안 고등학교. 학교 숲밭을 학생들이 직접 가꿉니다.",
    tags: ["학교", "숲밭"],
    experience: false,
    contact: "",
    link: "https://sanmaeul.icehs.kr/"
  },
  {
    name: "풀정원",
    region: "인천·강화",
    address: "인천 강화군",
    desc: "강화에서 퍼머컬처를 실천하는 정원.",
    tags: ["생태정원"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 경기 ───────────────────────────────────────────────── */
  {
    name: "수락 퍼머컬처공동체",
    region: "경기",
    address: "경기 의정부시",
    desc: "수락산 자락의 공동체텃밭(바람길숲밭). 퍼머컬처 디자인 학교가 열리는 곳입니다.",
    tags: ["공동체", "숲밭", "교육"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "숲밭디자인학교",
    region: "경기",
    address: "경기 의정부시",
    desc: "숲밭을 설계하는 법을 가르치는 배움터.",
    tags: ["교육"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "인과의숲",
    region: "경기",
    address: "경기 의정부시",
    desc: "의정부의 퍼머컬처 거점.",
    tags: ["숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "나름대로생태정원",
    region: "경기",
    address: "경기 고양시",
    desc: "고양의 생태정원. 공동체텃밭을 함께 가꿉니다.",
    tags: ["생태정원"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "놀노리 어깨동무밭",
    region: "경기",
    address: "경기 파주시",
    desc: "파주에서 여럿이 어깨를 맞대고 가꾸는 밭.",
    tags: ["공동체"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "평화마을 짓자밭",
    region: "경기",
    address: "경기 파주시",
    desc: "평화마을에서 함께 짓는 퍼머컬처 밭.",
    tags: ["공동체"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "활짝@해봄 생태정원",
    region: "경기",
    address: "경기 여주시",
    desc: "여주의 퍼머컬처 생태정원.",
    tags: ["생태정원"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "랑랑숲밭",
    region: "경기",
    address: "경기 이천시",
    desc: "이천의 숲밭. 네트워크 소식지에 사계절 이야기가 실립니다.",
    tags: ["숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 강원 ───────────────────────────────────────────────── */
  {
    name: "맛있는정원코리아",
    region: "강원",
    address: "강원 정선군 신동읍",
    desc: "이진호 대표가 운영하는 퍼머컬처 전문 업체. 온라인·대면 교육 과정과 퍼머컬처 틀밭을 다룹니다. 유튜브 「지속가능한 생태농업, 퍼머컬처」 강의를 만든 곳입니다.",
    tags: ["교육", "키친가든"],
    experience: true,
    contact: "홈페이지 참고",
    link: "https://www.deliciousgardenkorea.com/"
  },
  {
    name: "꼬뮨숲밭",
    region: "강원",
    address: "강원 강릉시",
    desc: "강릉의 숲밭 공동체.",
    tags: ["숲밭", "공동체"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "홀리데이가든",
    region: "강원",
    address: "강원 춘천시",
    desc: "춘천의 퍼머컬처 정원.",
    tags: ["생태정원"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "살피텃밭",
    region: "강원",
    address: "강원 춘천시",
    desc: "춘천의 퍼머컬처 텃밭.",
    tags: ["텃밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "빌려쓰는 지구 텃밭",
    region: "강원",
    address: "강원 양구군",
    desc: "땅은 빌려 쓰는 것이라는 생각으로 가꾸는 양구의 텃밭.",
    tags: ["텃밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "숨뜰",
    region: "강원",
    address: "강원 양구군",
    desc: "양구의 퍼머컬처 뜰.",
    tags: ["생태정원"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "놀동네",
    region: "강원",
    address: "강원 화천군",
    desc: "화천의 퍼머컬처 마을 거점.",
    tags: ["공동체"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 충청 ───────────────────────────────────────────────── */
  {
    name: "고산퍼머컬처대학",
    region: "충청",
    address: "충북 제천시",
    desc: "기후변화 시대에 농사를 기반으로 지역에서 살아가려는 사람들을 위한 대안학교. 퍼머컬처 디자인 코스, 농장디자인 과정, 교육자양성 과정, 생태텃밭 워크숍을 엽니다.",
    tags: ["교육", "PDC"],
    experience: true,
    contact: "홈페이지 참고",
    link: "https://www.permaculture-college.kr/"
  },
  {
    name: "날마다숲밭",
    region: "충청",
    address: "충북 영동군",
    desc: "영동의 숲밭.",
    tags: ["숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "추풍령중학교 지구밭",
    region: "충청",
    address: "충북 영동군 추풍령면",
    desc: "학생들이 직접 가꾸는 학교 텃밭.",
    tags: ["학교", "텃밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 전라 ───────────────────────────────────────────────── */
  {
    name: "퍼머컬처ON (염포마을 화합의 정원)",
    region: "전라",
    address: "전남 고흥군",
    desc: "동반작물·나선형 허브가든·지렁이 퇴비를 실험하는 퍼머컬처 시범 정원. 교육 프로그램과 가든 투어를 운영합니다.",
    tags: ["허브", "동반작물", "유자"],
    experience: true,
    contact: "유튜브 퍼머컬처ON",
    link: ""
  },
  {
    name: "이든농장",
    region: "전라",
    address: "전북 진안군",
    desc: "진안의 퍼머컬처 농장.",
    tags: ["농장"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "마령초등학교 숲밭",
    region: "전라",
    address: "전북 진안군 마령면",
    desc: "학생들이 가꾸는 학교 숲밭.",
    tags: ["학교", "숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 경상 ───────────────────────────────────────────────── */
  {
    name: "꿀벌살리텃밭",
    region: "경상",
    address: "부산광역시",
    desc: "꿀벌이 찾아오도록 꽃을 함께 심는 부산의 텃밭.",
    tags: ["텃밭", "꽃"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "화제초등학교 꽃나루텃밭",
    region: "경상",
    address: "경남 양산시",
    desc: "학생들이 가꾸는 학교 텃밭.",
    tags: ["학교", "텃밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "시시숲밭",
    region: "경상",
    address: "경남 합천군",
    desc: "합천의 숲밭.",
    tags: ["숲밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },

  /* ── 제주 ───────────────────────────────────────────────── */
  {
    name: "설문대발어름밭",
    region: "제주",
    address: "제주특별자치도",
    desc: "제주의 퍼머컬처 밭.",
    tags: ["밭"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  },
  {
    name: "작은말케어센터",
    region: "제주",
    address: "제주특별자치도",
    desc: "제주에서 퍼머컬처를 함께하는 돌봄 공간.",
    tags: ["돌봄", "공동체"],
    experience: false,
    contact: "",
    link: "https://koreapermaculture.or.kr/"
  }
];

// ------------------------------------------------------------
// 📅 이벤트 — 워크숍·가든투어·강의 일정
// date: "YYYY-MM-DD" 형식 (마감일 또는 행사일)
// applyLink: 신청 링크 (없으면 "")
// ------------------------------------------------------------
const EVENTS = [
  {
    title: "PDC 72시간 온라인 과정 상시 모집",
    date: "2026-12-31",
    place: "온라인 (자기주도 학습)",
    desc: "퍼머컬처 디자인 코스 72시간 인증 과정. 12주 워크북과 함께 나만의 속도로 수강하세요.",
    fee: "유료",
    applyLink: ""
  },
  {
    title: "염포마을 화합의 정원 가든투어 (예시)",
    date: "2026-07-04",
    place: "전남 고흥 염포마을",
    desc: "나선형 허브가든과 동반작물 밭을 직접 둘러보는 투어. 이 카드는 예시이니 실제 일정으로 수정해주세요.",
    fee: "무료",
    applyLink: ""
  }
];
