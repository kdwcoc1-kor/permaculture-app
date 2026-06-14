// 퍼머컬처ON 식물 데이터 (자동 생성) — 출처: 기존 Firebase 데이터
const PLANT_DATA = {
 "combos": [
  {
   "id": "tomato_perfect_guild",
   "name": "토마토 완벽 길드",
   "name_en": "Tomato Perfect Guild",
   "category": "vegetable_guild",
   "vegetable": "토마토",
   "vegetable_en": "Tomato",
   "herb": "바질",
   "herb_en": "Basil",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "effects": [
    "진딧물 퇴치",
    "선충 퇴치",
    "풍미 향상",
    "수분 촉진"
   ],
   "main_effect": "해충 퇴치, 풍미 향상",
   "planting_time": "5월 상순 함께 정식",
   "harvest_time": "7~10월",
   "layout": "토마토 중심, 바질 사이사이, 메리골드 외곽",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "space_type": [
    "텃밭",
    "베란다"
   ],
   "tags": [
    "초보자추천",
    "요리활용",
    "해충방제"
   ]
  },
  {
   "id": "tomato_pollination_guild",
   "name": "토마토 수분 길드",
   "name_en": "Tomato Pollination Guild",
   "category": "vegetable_guild",
   "vegetable": "토마토",
   "vegetable_en": "Tomato",
   "herb": "파슬리",
   "herb_en": "Parsley",
   "flower": "보리지",
   "flower_en": "Borage",
   "effects": [
    "수분 촉진",
    "유익 곤충 유인"
   ],
   "main_effect": "수분 촉진, 유익 곤충 유인",
   "planting_time": "5월 정식",
   "harvest_time": "7~10월",
   "layout": "토마토 줄 사이 파슬리, 모서리에 보리지",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "수분촉진",
    "유익곤충"
   ]
  },
  {
   "id": "tomato_defense_guild",
   "name": "토마토 방어 길드",
   "name_en": "Tomato Defense Guild",
   "category": "vegetable_guild",
   "vegetable": "토마토",
   "vegetable_en": "Tomato",
   "herb": "차이브",
   "herb_en": "Chives",
   "flower": "나스터튬",
   "flower_en": "Nasturtium",
   "effects": [
    "진딧물 트랩",
    "항균 효과"
   ],
   "main_effect": "진딧물 트랩, 항균 효과",
   "planting_time": "5월 정식",
   "harvest_time": "7~10월",
   "layout": "토마토 주변 차이브, 외곽에 나스터튬",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "space_type": [
    "텃밭",
    "베란다"
   ],
   "tags": [
    "해충방제",
    "트랩크롭"
   ]
  },
  {
   "id": "pepper_protection_guild",
   "name": "고추 보호 길드",
   "name_en": "Pepper Protection Guild",
   "category": "vegetable_guild",
   "vegetable": "고추",
   "vegetable_en": "Pepper",
   "herb": "바질",
   "herb_en": "Basil",
   "flower": "페튜니아",
   "flower_en": "Petunia",
   "effects": [
    "진딧물 퇴치",
    "해충 방제"
   ],
   "main_effect": "진딧물 퇴치, 해충 방제",
   "planting_time": "5월 정식",
   "harvest_time": "7~10월",
   "layout": "고추 사이 바질, 테두리에 페튜니아",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "space_type": [
    "텃밭",
    "베란다"
   ],
   "tags": [
    "초보자추천",
    "해충방제"
   ]
  },
  {
   "id": "pepper_spicy_guild",
   "name": "고추 매운맛 길드",
   "name_en": "Pepper Spicy Guild",
   "category": "vegetable_guild",
   "vegetable": "고추",
   "vegetable_en": "Pepper",
   "herb": "오레가노",
   "herb_en": "Oregano",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "effects": [
    "해충 혼란",
    "선충 방제"
   ],
   "main_effect": "해충 혼란, 선충 방제",
   "planting_time": "5월 정식",
   "harvest_time": "7~10월",
   "layout": "고추 주변 오레가노, 외곽 메리골드",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "해충방제",
    "선충퇴치"
   ]
  },
  {
   "id": "cabbage_guardian_guild",
   "name": "양배추 수호 길드",
   "name_en": "Cabbage Guardian Guild",
   "category": "vegetable_guild",
   "vegetable": "양배추",
   "vegetable_en": "Cabbage",
   "herb": "로즈마리",
   "herb_en": "Rosemary",
   "flower": "나스터튬",
   "flower_en": "Nasturtium",
   "effects": [
    "배추흰나비 퇴치",
    "배추벌레 퇴치"
   ],
   "main_effect": "배추흰나비/배추벌레 퇴치",
   "planting_time": "4월(봄), 9월(가을)",
   "harvest_time": "6월, 11월",
   "layout": "양배추 중심, 로즈마리 화분, 나스터튬 외곽",
   "difficulty": "보통",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "유기농",
    "배추과보호"
   ]
  },
  {
   "id": "cabbage_fragrant_guild",
   "name": "양배추 향기 길드",
   "name_en": "Cabbage Fragrant Guild",
   "category": "vegetable_guild",
   "vegetable": "양배추",
   "vegetable_en": "Cabbage",
   "herb": "세이지",
   "herb_en": "Sage",
   "flower": "캘린듈라",
   "flower_en": "Calendula",
   "effects": [
    "배추나방 퇴치",
    "수분 촉진"
   ],
   "main_effect": "배추나방 퇴치, 수분 촉진",
   "planting_time": "4월(봄), 9월(가을)",
   "harvest_time": "6월, 11월",
   "layout": "양배추 사이 세이지, 외곽 캘린듈라",
   "difficulty": "보통",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "해충방제",
    "수분촉진"
   ]
  },
  {
   "id": "broccoli_health_guild",
   "name": "브로콜리 건강 길드",
   "name_en": "Broccoli Health Guild",
   "category": "vegetable_guild",
   "vegetable": "브로콜리",
   "vegetable_en": "Broccoli",
   "herb": "딜",
   "herb_en": "Dill",
   "flower": "캘린듈라",
   "flower_en": "Calendula",
   "effects": [
    "유익 곤충 유인",
    "수분 촉진"
   ],
   "main_effect": "유익 곤충 유인, 수분 촉진",
   "planting_time": "4월(봄), 9월(가을)",
   "harvest_time": "6월, 11월",
   "layout": "브로콜리 사이 딜, 가장자리 캘린듈라",
   "difficulty": "보통",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "유익곤충",
    "수분촉진"
   ]
  },
  {
   "id": "carrot_protection_guild",
   "name": "당근 보호 길드",
   "name_en": "Carrot Protection Guild",
   "category": "vegetable_guild",
   "vegetable": "당근",
   "vegetable_en": "Carrot",
   "herb": "세이지",
   "herb_en": "Sage",
   "flower": "알리섬",
   "flower_en": "Alyssum",
   "effects": [
    "당근파리 퇴치",
    "호버플라이 유인"
   ],
   "main_effect": "당근파리 퇴치, 호버플라이 유인",
   "planting_time": "4월, 8월",
   "harvest_time": "6~7월, 10~11월",
   "layout": "당근 줄 사이 세이지, 가장자리 알리섬",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "초보자추천",
    "해충방제"
   ]
  },
  {
   "id": "carrot_onion_perfect",
   "name": "당근-파 완벽 조합",
   "name_en": "Carrot-Onion Perfect Combo",
   "category": "vegetable_guild",
   "vegetable": "당근+파",
   "vegetable_en": "Carrot+Green Onion",
   "herb": "차이브",
   "herb_en": "Chives",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "effects": [
    "상호 해충 방제",
    "선충 퇴치"
   ],
   "main_effect": "상호 해충 방제, 선충 퇴치",
   "planting_time": "4월, 8월",
   "harvest_time": "6~7월, 10~11월",
   "layout": "당근-파 교대 줄심기, 차이브/메리골드 외곽",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "전통농법",
    "상호보완"
   ]
  },
  {
   "id": "cucumber_pollination_guild",
   "name": "오이 수분 길드",
   "name_en": "Cucumber Pollination Guild",
   "category": "vegetable_guild",
   "vegetable": "오이",
   "vegetable_en": "Cucumber",
   "herb": "딜",
   "herb_en": "Dill",
   "flower": "보리지",
   "flower_en": "Borage",
   "effects": [
    "수분 촉진",
    "유익 곤충 유인"
   ],
   "main_effect": "수분 촉진, 유익 곤충 유인",
   "planting_time": "5월",
   "harvest_time": "6~8월",
   "layout": "오이 지지대 근처 딜, 모서리에 보리지",
   "difficulty": "보통",
   "season": [
    "여름"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "수분촉진",
    "덩굴채소"
   ]
  },
  {
   "id": "squash_pollination_guild",
   "name": "호박 수분 길드",
   "name_en": "Squash Pollination Guild",
   "category": "vegetable_guild",
   "vegetable": "호박",
   "vegetable_en": "Squash",
   "herb": "오레가노",
   "herb_en": "Oregano",
   "flower": "보리지",
   "flower_en": "Borage",
   "effects": [
    "강력 수분 촉진",
    "해충 방제"
   ],
   "main_effect": "강력 수분 촉진, 해충 방제",
   "planting_time": "5월",
   "harvest_time": "7~10월",
   "layout": "호박 언덕 주변 오레가노, 모서리 보리지",
   "difficulty": "쉬움",
   "season": [
    "여름",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "수분촉진",
    "넓은공간"
   ]
  },
  {
   "id": "eggplant_protection_guild",
   "name": "가지 보호 길드",
   "name_en": "Eggplant Protection Guild",
   "category": "vegetable_guild",
   "vegetable": "가지",
   "vegetable_en": "Eggplant",
   "herb": "타임",
   "herb_en": "Thyme",
   "flower": "백일홍",
   "flower_en": "Zinnia",
   "effects": [
    "그라운드커버",
    "무당벌레 유인"
   ],
   "main_effect": "그라운드커버, 무당벌레 유인",
   "planting_time": "5월 정식",
   "harvest_time": "7~10월",
   "layout": "타임 아래 깔기, 백일홍 가장자리",
   "difficulty": "보통",
   "season": [
    "여름"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "유익곤충",
    "그라운드커버"
   ]
  },
  {
   "id": "potato_defense_guild",
   "name": "감자 방어 길드",
   "name_en": "Potato Defense Guild",
   "category": "vegetable_guild",
   "vegetable": "감자",
   "vegetable_en": "Potato",
   "herb": "호스래디쉬",
   "herb_en": "Horseradish",
   "flower": "알리섬",
   "flower_en": "Alyssum",
   "effects": [
    "감자벌레 퇴치",
    "설치류 퇴치",
    "유익 곤충 유인"
   ],
   "main_effect": "감자벌레/설치류 퇴치, 유익 곤충 유인",
   "planting_time": "3~4월",
   "harvest_time": "6~7월",
   "layout": "호스래디쉬 모서리, 알리섬 테두리",
   "difficulty": "보통",
   "season": [
    "봄"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "해충방제",
    "설치류퇴치"
   ]
  },
  {
   "id": "lettuce_salad_guild",
   "name": "상추 샐러드 길드",
   "name_en": "Lettuce Salad Guild",
   "category": "vegetable_guild",
   "vegetable": "상추",
   "vegetable_en": "Lettuce",
   "herb": "차이브",
   "herb_en": "Chives",
   "flower": "캐모마일",
   "flower_en": "Chamomile",
   "effects": [
    "생육 촉진",
    "풍미 향상",
    "해충 방제"
   ],
   "main_effect": "생육 촉진, 풍미 향상, 해충 방제",
   "planting_time": "3~10월(연중)",
   "harvest_time": "파종 후 40~50일",
   "layout": "상추 사이 차이브, 드문드문 캐모마일",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름",
    "가을"
   ],
   "space_type": [
    "텃밭",
    "베란다"
   ],
   "tags": [
    "초보자추천",
    "빠른수확",
    "샐러드"
   ]
  },
  {
   "id": "bean_growth_guild",
   "name": "콩 성장 길드",
   "name_en": "Bean Growth Guild",
   "category": "vegetable_guild",
   "vegetable": "강낭콩",
   "vegetable_en": "Kidney Bean",
   "herb": "로즈마리",
   "herb_en": "Rosemary",
   "flower": "해바라기",
   "flower_en": "Sunflower",
   "effects": [
    "해충 퇴치",
    "천연 지지대"
   ],
   "main_effect": "해충 퇴치, 천연 지지대",
   "planting_time": "5월",
   "harvest_time": "7~8월",
   "layout": "해바라기 지지대, 콩 옆 로즈마리 화분",
   "difficulty": "쉬움",
   "season": [
    "여름"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "천연지지대",
    "질소고정"
   ]
  },
  {
   "id": "three_sisters_plus",
   "name": "삼자매 플러스",
   "name_en": "Three Sisters Plus",
   "category": "vegetable_guild",
   "vegetable": "옥수수+콩+호박",
   "vegetable_en": "Corn+Bean+Squash",
   "herb": "오레가노",
   "herb_en": "Oregano",
   "flower": "해바라기",
   "flower_en": "Sunflower",
   "effects": [
    "질소 고정",
    "해충 방제",
    "수분 촉진"
   ],
   "main_effect": "질소 고정, 해충 방제, 수분 촉진",
   "planting_time": "5월 중순",
   "harvest_time": "7~10월",
   "layout": "삼자매 중심, 외곽에 오레가노/해바라기",
   "difficulty": "보통",
   "season": [
    "여름",
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "전통농법",
    "넓은공간",
    "퍼머컬처"
   ]
  },
  {
   "id": "kimchi_cabbage_guild",
   "name": "김장 배추 길드",
   "name_en": "Kimchi Cabbage Guild",
   "category": "vegetable_guild",
   "vegetable": "배추",
   "vegetable_en": "Napa Cabbage",
   "herb": "민트(화분)",
   "herb_en": "Mint (potted)",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "effects": [
    "배추흰나비 퇴치"
   ],
   "main_effect": "배추흰나비 퇴치",
   "planting_time": "8월 중순",
   "harvest_time": "11월",
   "layout": "배추 사이 민트화분, 테두리 메리골드",
   "difficulty": "보통",
   "season": [
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "김장용",
    "가을재배"
   ]
  },
  {
   "id": "radish_fall_guild",
   "name": "무 가을 길드",
   "name_en": "Radish Fall Guild",
   "category": "vegetable_guild",
   "vegetable": "무",
   "vegetable_en": "Radish",
   "herb": "세이지",
   "herb_en": "Sage",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "effects": [
    "해충 방제"
   ],
   "main_effect": "해충 방제",
   "planting_time": "8~9월",
   "harvest_time": "10~11월",
   "layout": "무 줄 사이 세이지, 외곽 메리골드",
   "difficulty": "쉬움",
   "season": [
    "가을"
   ],
   "space_type": [
    "텃밭"
   ],
   "tags": [
    "가을재배",
    "초보자추천"
   ]
  },
  {
   "id": "yeolmu_quick_guild",
   "name": "열무 빠른 길드",
   "name_en": "Young Radish Quick Guild",
   "category": "vegetable_guild",
   "vegetable": "열무",
   "vegetable_en": "Young Radish",
   "herb": "차이브",
   "herb_en": "Chives",
   "flower": "알리섬",
   "flower_en": "Alyssum",
   "effects": [
    "해충 방제",
    "빠른 수확"
   ],
   "main_effect": "해충 방제, 빠른 수확",
   "planting_time": "3~4월, 8~9월",
   "harvest_time": "파종 후 30~40일",
   "layout": "열무 가장자리에 차이브/알리섬",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "가을"
   ],
   "space_type": [
    "텃밭",
    "베란다"
   ],
   "tags": [
    "초보자추천",
    "빠른수확"
   ]
  },
  {
   "id": "mini_tomato_set",
   "name": "미니 토마토 세트",
   "name_en": "Mini Tomato Set",
   "category": "balcony",
   "vegetable": "방울토마토",
   "vegetable_en": "Cherry Tomato",
   "herb": "바질",
   "herb_en": "Basil",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "pot_size": "대형(40L+)",
   "effects": [
    "해충 퇴치",
    "요리 활용"
   ],
   "main_effect": "해충 퇴치, 요리 활용",
   "planting_time": "5월",
   "layout": "토마토 중앙, 바질 옆, 메리골드 가장자리",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름"
   ],
   "tags": [
    "베란다",
    "초보자추천"
   ]
  },
  {
   "id": "salad_box",
   "name": "샐러드 박스",
   "name_en": "Salad Box",
   "category": "balcony",
   "vegetable": "상추",
   "vegetable_en": "Lettuce",
   "herb": "차이브",
   "herb_en": "Chives",
   "flower": "알리섬",
   "flower_en": "Alyssum",
   "pot_size": "중형(20L)",
   "effects": [
    "해충 방제",
    "빠른 수확"
   ],
   "main_effect": "해충 방제, 빠른 수확",
   "planting_time": "3~10월",
   "layout": "상추 중앙, 차이브/알리섬 가장자리",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름",
    "가을"
   ],
   "tags": [
    "베란다",
    "초보자추천",
    "빠른수확"
   ]
  },
  {
   "id": "herb_salad_mix",
   "name": "허브 & 상추",
   "name_en": "Herb & Lettuce Mix",
   "category": "balcony",
   "vegetable": "상추",
   "vegetable_en": "Lettuce",
   "herb": "바질+파슬리",
   "herb_en": "Basil+Parsley",
   "flower": "캐모마일",
   "flower_en": "Chamomile",
   "pot_size": "중형(20L)",
   "effects": [
    "요리 활용",
    "생육 촉진"
   ],
   "main_effect": "요리 활용, 생육 촉진",
   "planting_time": "4~9월",
   "layout": "상추 중앙, 허브 주변, 캐모마일 모서리",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름",
    "가을"
   ],
   "tags": [
    "베란다",
    "요리활용"
   ]
  },
  {
   "id": "pepper_mini_guild",
   "name": "고추 미니 길드",
   "name_en": "Pepper Mini Guild",
   "category": "balcony",
   "vegetable": "청양고추",
   "vegetable_en": "Cheongyang Pepper",
   "herb": "바질",
   "herb_en": "Basil",
   "flower": "페튜니아",
   "flower_en": "Petunia",
   "pot_size": "중형(20L)",
   "effects": [
    "해충 퇴치"
   ],
   "main_effect": "해충 퇴치",
   "planting_time": "5월",
   "layout": "고추 중앙, 바질/페튜니아 주변",
   "difficulty": "쉬움",
   "season": [
    "여름"
   ],
   "tags": [
    "베란다",
    "초보자추천"
   ]
  },
  {
   "id": "herb_garden_mix",
   "name": "허브 가든 믹스",
   "name_en": "Herb Garden Mix",
   "category": "balcony",
   "vegetable": "-",
   "vegetable_en": "-",
   "herb": "바질+로즈마리+타임",
   "herb_en": "Basil+Rosemary+Thyme",
   "flower": "라벤더",
   "flower_en": "Lavender",
   "pot_size": "중형(15L)",
   "effects": [
    "요리용 허브 수확"
   ],
   "main_effect": "요리용 허브 수확",
   "planting_time": "4~5월",
   "layout": "키 순서대로 배치",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름",
    "가을"
   ],
   "tags": [
    "베란다",
    "허브정원",
    "요리활용"
   ]
  },
  {
   "id": "mediterranean_herb",
   "name": "지중해 허브 박스",
   "name_en": "Mediterranean Herb Box",
   "category": "balcony",
   "vegetable": "-",
   "vegetable_en": "-",
   "herb": "로즈마리+세이지+오레가노",
   "herb_en": "Rosemary+Sage+Oregano",
   "flower": "라벤더",
   "flower_en": "Lavender",
   "pot_size": "중형(15L)",
   "effects": [
    "건조에 강함",
    "향기"
   ],
   "main_effect": "건조에 강함, 향기",
   "planting_time": "4~5월",
   "layout": "비슷한 물 요구량",
   "difficulty": "쉬움",
   "season": [
    "봄",
    "여름",
    "가을",
    "겨울"
   ],
   "tags": [
    "베란다",
    "건조내성",
    "지중해식"
   ]
  },
  {
   "id": "asian_herb_set",
   "name": "아시안 허브 세트",
   "name_en": "Asian Herb Set",
   "category": "balcony",
   "vegetable": "고추",
   "vegetable_en": "Pepper",
   "herb": "바질+고수",
   "herb_en": "Basil+Coriander",
   "flower": "메리골드",
   "flower_en": "Marigold",
   "pot_size": "중형(20L)",
   "effects": [
    "아시안 요리용"
   ],
   "main_effect": "아시안 요리용",
   "planting_time": "5월",
   "layout": "고추 중앙, 허브 주변",
   "difficulty": "쉬움",
   "season": [
    "여름"
   ],
   "tags": [
    "베란다",
    "아시안요리"
   ]
  },
  {
   "id": "strawberry_sweet_box",
   "name": "딸기 스위트 박스",
   "name_en": "Strawberry Sweet Box",
   "category": "balcony",
   "vegetable": "딸기",
   "vegetable_en": "Strawberry",
   "herb": "타임",
   "herb_en": "Thyme",
   "flower": "알리섬",
   "flower_en": "Alyssum",
   "pot_size": "중형(20L)",
   "effects": [
    "그라운드커버",
    "수분 촉진"
   ],
   "main_effect": "그라운드커버, 수분 촉진",
   "planting_time": "9월 정식",
   "layout": "딸기 중앙, 타임 아래, 알리섬 가장자리",
   "difficulty": "보통",
   "season": [
    "가을",
    "봄"
   ],
   "tags": [
    "베란다",
    "딸기재배"
   ]
  }
 ],
 "vegetables": [
  {
   "id": "tomato",
   "name": "토마토",
   "name_en": "Tomato",
   "sowing_mid": "3월(육묘)",
   "sowing_south": "2월(육묘)",
   "transplant": "5월 상순",
   "harvest": "7~9월",
   "temp_optimal": "20~25",
   "difficulty": "보통",
   "notes": "서리 후 정식, 지주 필요"
  },
  {
   "id": "pepper",
   "name": "고추",
   "name_en": "Pepper",
   "sowing_mid": "2~3월(육묘)",
   "sowing_south": "2월(육묘)",
   "transplant": "5월 상순",
   "harvest": "7~10월",
   "temp_optimal": "25~28",
   "difficulty": "보통",
   "notes": "서리 후 정식"
  },
  {
   "id": "cucumber",
   "name": "오이",
   "name_en": "Cucumber",
   "sowing_mid": "4월 중순",
   "sowing_south": "4월 상순",
   "transplant": "5월 상순",
   "harvest": "6~8월",
   "temp_optimal": "22~28",
   "difficulty": "어려움",
   "notes": "덩굴 관리 필요"
  },
  {
   "id": "squash",
   "name": "호박",
   "name_en": "Squash",
   "sowing_mid": "4월 중순",
   "sowing_south": "4월 상순",
   "transplant": "5월 상순",
   "harvest": "7~10월",
   "temp_optimal": "20~25",
   "difficulty": "보통",
   "notes": "넓은 공간 필요"
  },
  {
   "id": "eggplant",
   "name": "가지",
   "name_en": "Eggplant",
   "sowing_mid": "2~3월(육묘)",
   "sowing_south": "2월(육묘)",
   "transplant": "5월 상순",
   "harvest": "7~10월",
   "temp_optimal": "22~30",
   "difficulty": "보통",
   "notes": "고온 선호"
  },
  {
   "id": "potato",
   "name": "감자",
   "name_en": "Potato",
   "sowing_mid": "3월 중순~4월 초",
   "sowing_south": "3월 상순",
   "transplant": "-",
   "harvest": "6~7월",
   "temp_optimal": "15~21",
   "difficulty": "쉬움",
   "notes": "서늘한 기후 선호"
  },
  {
   "id": "corn",
   "name": "옥수수",
   "name_en": "Corn",
   "sowing_mid": "4월 중순~5월",
   "sowing_south": "4월 상순",
   "transplant": "-",
   "harvest": "7~8월",
   "temp_optimal": "20~30",
   "difficulty": "쉬움",
   "notes": "시차 파종 권장"
  },
  {
   "id": "lettuce",
   "name": "상추",
   "name_en": "Lettuce",
   "sowing_mid": "3월~10월(연중)",
   "sowing_south": "2월~11월",
   "transplant": "-",
   "harvest": "파종 후 40~50일",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "서늘한 기후, 초보자 추천"
  },
  {
   "id": "spinach",
   "name": "시금치",
   "name_en": "Spinach",
   "sowing_mid": "3~4월, 9~10월",
   "sowing_south": "3월, 9~11월",
   "transplant": "-",
   "harvest": "파종 후 30~50일",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "추위에 강함"
  },
  {
   "id": "napa_cabbage",
   "name": "배추",
   "name_en": "Napa Cabbage",
   "sowing_mid": "8월 중순(김장용)",
   "sowing_south": "8월 하순",
   "transplant": "8월 하순",
   "harvest": "11월",
   "temp_optimal": "15~20",
   "difficulty": "보통",
   "notes": "서늘한 기후 필요"
  },
  {
   "id": "cabbage",
   "name": "양배추",
   "name_en": "Cabbage",
   "sowing_mid": "3월(봄), 8월(가을)",
   "sowing_south": "2월, 8월",
   "transplant": "4월, 9월",
   "harvest": "6~7월, 11~12월",
   "temp_optimal": "15~20",
   "difficulty": "보통",
   "notes": "저온에서 결구"
  },
  {
   "id": "broccoli",
   "name": "브로콜리",
   "name_en": "Broccoli",
   "sowing_mid": "3월(봄), 8월(가을)",
   "sowing_south": "2월, 8월",
   "transplant": "4월, 9월",
   "harvest": "6월, 11월",
   "temp_optimal": "15~20",
   "difficulty": "보통",
   "notes": "서늘한 기후 선호"
  },
  {
   "id": "radish",
   "name": "무",
   "name_en": "Radish",
   "sowing_mid": "3~4월, 8~9월",
   "sowing_south": "3월, 8~9월",
   "transplant": "-",
   "harvest": "5~6월, 10~11월",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "봄무/가을무 구분"
  },
  {
   "id": "carrot",
   "name": "당근",
   "name_en": "Carrot",
   "sowing_mid": "3~4월, 7~8월",
   "sowing_south": "3월, 7~8월",
   "transplant": "-",
   "harvest": "6~7월, 10~11월",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "깊은 흙 필요"
  },
  {
   "id": "green_onion",
   "name": "파",
   "name_en": "Green Onion",
   "sowing_mid": "3~4월, 9월",
   "sowing_south": "3월, 9월",
   "transplant": "-",
   "harvest": "연중",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "다년생 가능"
  },
  {
   "id": "pea",
   "name": "완두콩",
   "name_en": "Pea",
   "sowing_mid": "3월~4월 초",
   "sowing_south": "2~3월",
   "transplant": "-",
   "harvest": "5~6월",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "서늘한 기후"
  },
  {
   "id": "kidney_bean",
   "name": "강낭콩",
   "name_en": "Kidney Bean",
   "sowing_mid": "5월",
   "sowing_south": "4월 하순",
   "transplant": "-",
   "harvest": "7~8월",
   "temp_optimal": "20~25",
   "difficulty": "쉬움",
   "notes": "서리 후 파종"
  },
  {
   "id": "yeolmu",
   "name": "열무",
   "name_en": "Young Radish",
   "sowing_mid": "3~4월, 8~9월",
   "sowing_south": "3월, 8~9월",
   "transplant": "-",
   "harvest": "파종 후 30~40일",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "연중 재배 가능"
  },
  {
   "id": "ssukgat",
   "name": "쑥갓",
   "name_en": "Crown Daisy",
   "sowing_mid": "3~10월",
   "sowing_south": "연중",
   "transplant": "-",
   "harvest": "파종 후 30~40일",
   "temp_optimal": "15~20",
   "difficulty": "쉬움",
   "notes": "더위에도 강함"
  }
 ],
 "herbs": [
  {
   "id": "basil",
   "name": "바질",
   "name_en": "Basil",
   "sowing": "4월 중~6월",
   "transplant": "5월 상순",
   "harvest": "6~10월",
   "temp_optimal": "20~25",
   "overwinter": false,
   "notes": "서리 후 정식, 순치기로 수확량↑"
  },
  {
   "id": "rosemary",
   "name": "로즈마리",
   "name_en": "Rosemary",
   "sowing": "3~4월",
   "transplant": "4~5월(삽목)",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "overwinter_temp": -5,
   "notes": "건조하게 관리, 삽목 번식 권장"
  },
  {
   "id": "lavender",
   "name": "라벤더",
   "name_en": "Lavender",
   "sowing": "3~4월",
   "transplant": "4~5월(삽목)",
   "harvest": "6~7월(꽃)",
   "temp_optimal": "15~25",
   "overwinter": true,
   "overwinter_temp": -5,
   "notes": "건조하게 관리, 배수 중요"
  },
  {
   "id": "sage",
   "name": "세이지",
   "name_en": "Sage",
   "sowing": "4~5월",
   "transplant": "5월",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "overwinter_temp": -10,
   "notes": "추위에 강함"
  },
  {
   "id": "thyme",
   "name": "타임",
   "name_en": "Thyme",
   "sowing": "4~5월",
   "transplant": "5월",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "overwinter_temp": -15,
   "notes": "그라운드커버로 활용"
  },
  {
   "id": "oregano",
   "name": "오레가노",
   "name_en": "Oregano",
   "sowing": "4~5월",
   "transplant": "5월",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "overwinter_temp": -10,
   "notes": "건조 후 사용 가능"
  },
  {
   "id": "mint",
   "name": "민트",
   "name_en": "Mint",
   "sowing": "4~5월",
   "transplant": "5월",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "notes": "침습성 강함, 화분 분리 권장"
  },
  {
   "id": "dill",
   "name": "딜",
   "name_en": "Dill",
   "sowing": "4~5월, 9월",
   "transplant": "-",
   "harvest": "6~7월, 10~11월",
   "temp_optimal": "15~20",
   "overwinter": false,
   "notes": "이식 싫어함, 직파 권장"
  },
  {
   "id": "chives",
   "name": "차이브",
   "name_en": "Chives",
   "sowing": "3~4월",
   "transplant": "4~5월",
   "harvest": "연중",
   "temp_optimal": "15~20",
   "overwinter": true,
   "notes": "분주로 번식 용이"
  },
  {
   "id": "parsley",
   "name": "파슬리",
   "name_en": "Parsley",
   "sowing": "3~4월, 9월",
   "transplant": "4~5월",
   "harvest": "연중",
   "temp_optimal": "15~20",
   "overwinter": true,
   "notes": "발아 느림 2~3주"
  },
  {
   "id": "coriander",
   "name": "고수",
   "name_en": "Coriander",
   "sowing": "4~5월, 9월",
   "transplant": "-",
   "harvest": "파종 후 40~60일",
   "temp_optimal": "15~20",
   "overwinter": false,
   "notes": "고온시 추대, 서늘하게"
  },
  {
   "id": "chamomile",
   "name": "캐모마일",
   "name_en": "Chamomile",
   "sowing": "3~4월, 9월",
   "transplant": "-",
   "harvest": "5~6월(꽃)",
   "temp_optimal": "15~20",
   "overwinter": true,
   "notes": "자가 파종"
  },
  {
   "id": "borage",
   "name": "보리지",
   "name_en": "Borage",
   "sowing": "4~5월",
   "transplant": "-",
   "harvest": "6~8월",
   "temp_optimal": "15~20",
   "overwinter": false,
   "notes": "자가 파종, 벌 유인"
  },
  {
   "id": "comfrey",
   "name": "컴프리",
   "name_en": "Comfrey",
   "sowing": "3~4월(뿌리분주)",
   "transplant": "4~5월",
   "harvest": "연중",
   "temp_optimal": "15~25",
   "overwinter": true,
   "notes": "강건함, 멀치용"
  },
  {
   "id": "arugula",
   "name": "루꼴라",
   "name_en": "Arugula",
   "sowing": "3~5월, 9~10월",
   "transplant": "-",
   "harvest": "파종 후 30~40일",
   "temp_optimal": "15~20",
   "overwinter": false,
   "notes": "발아 빠름, 고온시 쓴맛"
  }
 ],
 "flowers": [
  {
   "id": "marigold",
   "name": "메리골드",
   "name_en": "Marigold",
   "sowing": "3~4월(육묘)",
   "transplant": "5월",
   "bloom": "6~10월",
   "temp_optimal": "15~25",
   "perennial": false,
   "companion_effect": "선충 퇴치, 거의 모든 채소와 궁합"
  },
  {
   "id": "nasturtium",
   "name": "나스터튬",
   "name_en": "Nasturtium",
   "sowing": "4~5월",
   "transplant": "5월",
   "bloom": "6~10월",
   "temp_optimal": "15~20",
   "perennial": false,
   "companion_effect": "트랩크롭, 양배추 보호"
  },
  {
   "id": "calendula",
   "name": "캘린듈라",
   "name_en": "Calendula",
   "sowing": "3~4월, 9월",
   "transplant": "4~5월",
   "bloom": "5~7월, 10~11월",
   "temp_optimal": "15~20",
   "perennial": false,
   "companion_effect": "수분자 유인, 약용"
  },
  {
   "id": "alyssum",
   "name": "알리섬",
   "name_en": "Alyssum",
   "sowing": "3~4월",
   "transplant": "4~5월",
   "bloom": "5~10월",
   "temp_optimal": "15~20",
   "perennial": false,
   "companion_effect": "호버플라이 유인"
  },
  {
   "id": "sunflower",
   "name": "해바라기",
   "name_en": "Sunflower",
   "sowing": "4~5월",
   "transplant": "-",
   "bloom": "7~9월",
   "temp_optimal": "20~30",
   "perennial": false,
   "companion_effect": "지지대 역할, 수분자 유인"
  },
  {
   "id": "zinnia",
   "name": "백일홍",
   "name_en": "Zinnia",
   "sowing": "4~5월",
   "transplant": "5월",
   "bloom": "7~10월",
   "temp_optimal": "20~25",
   "perennial": false,
   "companion_effect": "무당벌레 유인"
  },
  {
   "id": "cosmos",
   "name": "코스모스",
   "name_en": "Cosmos",
   "sowing": "4~5월",
   "transplant": "-",
   "bloom": "7~10월",
   "temp_optimal": "15~25",
   "perennial": false,
   "companion_effect": "수분자 유인"
  },
  {
   "id": "petunia",
   "name": "페튜니아",
   "name_en": "Petunia",
   "sowing": "3~4월(육묘)",
   "transplant": "5월",
   "bloom": "5~10월",
   "temp_optimal": "18~25",
   "perennial": false,
   "companion_effect": "진딧물 퇴치"
  },
  {
   "id": "lavender_flower",
   "name": "라벤더",
   "name_en": "Lavender",
   "sowing": "3~4월",
   "transplant": "4~5월",
   "bloom": "6~7월",
   "temp_optimal": "15~25",
   "perennial": true,
   "companion_effect": "사슴/토끼 퇴치"
  },
  {
   "id": "echinacea",
   "name": "에키네시아",
   "name_en": "Echinacea",
   "sowing": "3~4월",
   "transplant": "4~5월",
   "bloom": "7~9월",
   "temp_optimal": "15~25",
   "perennial": true,
   "companion_effect": "수분자 유인, 약용"
  },
  {
   "id": "cornflower",
   "name": "수레국화",
   "name_en": "Cornflower",
   "sowing": "3~4월, 9월",
   "transplant": "-",
   "bloom": "5~7월",
   "temp_optimal": "15~20",
   "perennial": false,
   "companion_effect": "수분자 유인"
  },
  {
   "id": "pansy",
   "name": "팬지",
   "name_en": "Pansy",
   "sowing": "8~9월",
   "transplant": "9~10월",
   "bloom": "10~5월",
   "temp_optimal": "10~18",
   "perennial": false,
   "companion_effect": "겨울~봄 개화, 식용꽃"
  }
 ],
 "badCombos": [
  {
   "id": "bean_onion",
   "plant_a": "콩",
   "plant_a_en": "Bean",
   "plant_b": "양파/마늘",
   "plant_b_en": "Onion/Garlic",
   "reason": "양파의 알리신이 콩의 유익균 파괴",
   "effect": "콩 성장 억제"
  },
  {
   "id": "tomato_potato",
   "plant_a": "토마토",
   "plant_a_en": "Tomato",
   "plant_b": "감자",
   "plant_b_en": "Potato",
   "reason": "같은 해충/질병에 취약",
   "effect": "역병 동시 감염 위험"
  },
  {
   "id": "tomato_fennel",
   "plant_a": "토마토",
   "plant_a_en": "Tomato",
   "plant_b": "펜넬",
   "plant_b_en": "Fennel",
   "reason": "펜넬이 토마토 성장 억제",
   "effect": "토마토 생육 불량"
  },
  {
   "id": "tomato_cabbage",
   "plant_a": "토마토",
   "plant_a_en": "Tomato",
   "plant_b": "양배추",
   "plant_b_en": "Cabbage",
   "reason": "영양분 경쟁",
   "effect": "둘 다 성장 저해"
  },
  {
   "id": "potato_squash",
   "plant_a": "감자",
   "plant_a_en": "Potato",
   "plant_b": "호박",
   "plant_b_en": "Squash",
   "reason": "감자가 토양 영양분 고갈",
   "effect": "호박 성장 부진"
  },
  {
   "id": "carrot_dill",
   "plant_a": "당근",
   "plant_a_en": "Carrot",
   "plant_b": "딜",
   "plant_b_en": "Dill",
   "reason": "딜이 당근 성장 억제",
   "effect": "당근 뿌리 발달 저해"
  },
  {
   "id": "lettuce_celery",
   "plant_a": "상추",
   "plant_a_en": "Lettuce",
   "plant_b": "셀러리",
   "plant_b_en": "Celery",
   "reason": "셀러리가 해충 유인",
   "effect": "상추 해충 피해"
  },
  {
   "id": "pea_garlic",
   "plant_a": "완두콩",
   "plant_a_en": "Pea",
   "plant_b": "마늘",
   "plant_b_en": "Garlic",
   "reason": "황 화합물이 성장 방해",
   "effect": "완두콩 성장 억제"
  },
  {
   "id": "onion_root_veg",
   "plant_a": "파",
   "plant_a_en": "Green Onion",
   "plant_b": "무/근채류",
   "plant_b_en": "Radish/Root Vegetables",
   "reason": "파 유기산이 뿌리 성장 방해",
   "effect": "굽은 뿌리 생산"
  },
  {
   "id": "pepper_cabbage",
   "plant_a": "고추",
   "plant_a_en": "Pepper",
   "plant_b": "양배추",
   "plant_b_en": "Cabbage",
   "reason": "고추가 배추과 성장 억제",
   "effect": "배추과 생육 불량"
  },
  {
   "id": "garlic_strawberry",
   "plant_a": "마늘",
   "plant_a_en": "Garlic",
   "plant_b": "딸기",
   "plant_b_en": "Strawberry",
   "reason": "마늘이 딸기 성장 방해",
   "effect": "딸기 수확량 감소"
  },
  {
   "id": "walnut_most",
   "plant_a": "호두나무",
   "plant_a_en": "Walnut",
   "plant_b": "사과/배/토마토",
   "plant_b_en": "Apple/Pear/Tomato",
   "reason": "주글론 독성",
   "effect": "과실수/채소 고사 가능"
  },
  {
   "id": "fennel_most",
   "plant_a": "펜넬",
   "plant_a_en": "Fennel",
   "plant_b": "대부분 작물",
   "plant_b_en": "Most Plants",
   "reason": "알레로파시(타감작용)",
   "effect": "주변 작물 성장 억제"
  }
 ],
 "calendar": [
  {
   "month": 1,
   "month_name": "1월",
   "sow_vegetables": "-",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "시금치(월동)",
   "tasks": "씨앗 주문, 텃밭 계획"
  },
  {
   "month": 2,
   "month_name": "2월",
   "sow_vegetables": "(육묘) 토마토, 고추, 가지",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "시금치(월동)",
   "tasks": "육묘상 준비, 퇴비 준비"
  },
  {
   "month": 3,
   "month_name": "3월",
   "sow_vegetables": "상추, 시금치, 완두, 당근, 감자",
   "sow_herbs": "로즈마리, 라벤더, 차이브, 파슬리",
   "transplant": "-",
   "harvest": "-",
   "tasks": "밭 만들기, 감자 심기"
  },
  {
   "month": 4,
   "month_name": "4월",
   "sow_vegetables": "상추, 열무, 쑥갓, 비트, 옥수수",
   "sow_herbs": "바질, 딜, 타임, 세이지, 민트",
   "transplant": "봄배추, 양배추",
   "harvest": "시금치, 상추",
   "tasks": "멀칭, 본격 파종 시작"
  },
  {
   "month": 5,
   "month_name": "5월",
   "sow_vegetables": "강낭콩, 콩, 호박, 고구마(삽식)",
   "sow_herbs": "바질, 보리지, 루꼴라",
   "transplant": "토마토, 고추, 가지, 오이",
   "harvest": "상추, 열무, 완두",
   "tasks": "지주 세우기, 모종 정식"
  },
  {
   "month": 6,
   "month_name": "6월",
   "sow_vegetables": "열무, 쑥갓(여름용)",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "감자, 마늘, 양파, 당근",
   "tasks": "해충 관리, 곁순 제거"
  },
  {
   "month": 7,
   "month_name": "7월",
   "sow_vegetables": "열무, 당근(가을용)",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "토마토, 오이, 호박, 옥수수",
   "tasks": "물주기, 수확, 병해충 방제"
  },
  {
   "month": 8,
   "month_name": "8월",
   "sow_vegetables": "배추, 무, 당근, 시금치",
   "sow_herbs": "-",
   "transplant": "김장배추, 무",
   "harvest": "토마토, 고추, 가지, 호박",
   "tasks": "가을 작물 파종"
  },
  {
   "month": 9,
   "month_name": "9월",
   "sow_vegetables": "시금치, 상추, 파",
   "sow_herbs": "딜, 파슬리, 고수",
   "transplant": "양배추, 브로콜리, 딸기",
   "harvest": "고추, 가지, 토마토",
   "tasks": "김장 준비, 월동 준비"
  },
  {
   "month": 10,
   "month_name": "10월",
   "sow_vegetables": "마늘, 양파(정식)",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "배추, 무, 고구마, 콩",
   "tasks": "수확, 월동 작물 정식"
  },
  {
   "month": 11,
   "month_name": "11월",
   "sow_vegetables": "-",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "배추(김장), 무, 당근",
   "tasks": "김장, 밭 정리, 퇴비 넣기"
  },
  {
   "month": 12,
   "month_name": "12월",
   "sow_vegetables": "-",
   "sow_herbs": "-",
   "transplant": "-",
   "harvest": "월동 시금치",
   "tasks": "밭 정리, 다음해 계획"
  }
 ],
 "regions": [
  {
   "id": "central",
   "name": "중부(서울/경기)",
   "spring_adjust": "기준",
   "fall_adjust": "기준",
   "last_frost": "4월 중순",
   "first_frost": "10월 하순",
   "notes": "표준 재배력 기준"
  },
  {
   "id": "gangwon_west",
   "name": "강원 영서",
   "spring_adjust": "1~2주 늦춤",
   "fall_adjust": "1~2주 앞당김",
   "last_frost": "5월 상순",
   "first_frost": "10월 상순",
   "notes": "고랭지 채소 유리"
  },
  {
   "id": "gangwon_east",
   "name": "강원 영동",
   "spring_adjust": "기준~1주 늦춤",
   "fall_adjust": "기준",
   "last_frost": "4월 하순",
   "first_frost": "10월 중순",
   "notes": "해양성 영향"
  },
  {
   "id": "chungcheong",
   "name": "충청권",
   "spring_adjust": "기준~1주 앞당김",
   "fall_adjust": "기준",
   "last_frost": "4월 상순",
   "first_frost": "10월 하순",
   "notes": "중부와 유사"
  },
  {
   "id": "jeolla",
   "name": "전라권",
   "spring_adjust": "1~2주 앞당김",
   "fall_adjust": "1~2주 늦춤",
   "last_frost": "4월 상순",
   "first_frost": "11월 상순",
   "notes": "온난한 기후"
  },
  {
   "id": "gyeongsang_inland",
   "name": "경상 내륙",
   "spring_adjust": "기준~1주 앞당김",
   "fall_adjust": "기준~1주 늦춤",
   "last_frost": "4월 중순",
   "first_frost": "11월 상순",
   "notes": "내륙 분지 특성"
  },
  {
   "id": "gyeongsang_coast",
   "name": "경상 해안",
   "spring_adjust": "1~2주 앞당김",
   "fall_adjust": "1~2주 늦춤",
   "last_frost": "3월 하순",
   "first_frost": "11월 중순",
   "notes": "해양성 기후"
  },
  {
   "id": "jeju",
   "name": "제주",
   "spring_adjust": "2~3주 앞당김",
   "fall_adjust": "2~3주 늦춤",
   "last_frost": "3월 상순",
   "first_frost": "12월 상순",
   "notes": "아열대 작물 가능"
  },
  {
   "id": "south_coast",
   "name": "남해안(전남/경남)",
   "spring_adjust": "1~2주 앞당김",
   "fall_adjust": "2주 늦춤",
   "last_frost": "3월 하순",
   "first_frost": "11월 중순",
   "notes": "월동 채소 유리"
  }
 ]
};
