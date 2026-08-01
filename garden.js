// ============================================================
// 퍼머컬처ON — 🏡 텃밭 설계 시뮬레이터
// 텃밭 크기 + 퍼머컬처 디자인 + 동반작물 효과 시뮬레이션
// 도감 데이터(data/plantdata.js)의 길드·상극 정보를 바탕으로 만듦
// ============================================================
(function(){
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ── 작물 사전 ─────────────────────────────
   h: 키(1낮음 2중간 3큼) / grow:[심는달, 수확시작, 수확끝]
   pest:해충방제력 attract:유익곤충유인 fruit:꽃가루받이필요 nfix:질소고정  */
const PLANTS = {
  tomato:{name:"토마토",em:"🍅",cat:"채소",h:3,grow:[5,7,9],fruit:true},
  pepper:{name:"고추",em:"🌶️",cat:"채소",h:2,grow:[5,7,10],fruit:true},
  eggplant:{name:"가지",em:"🍆",cat:"채소",h:2,grow:[5,7,10],fruit:true},
  cucumber:{name:"오이",em:"🥒",cat:"채소",h:3,grow:[5,6,8],fruit:true},
  squash:{name:"호박",em:"🎃",cat:"채소",h:1,grow:[5,7,10],fruit:true},
  potato:{name:"감자",em:"🥔",cat:"채소",h:2,grow:[3,6,7]},
  corn:{name:"옥수수",em:"🌽",cat:"채소",h:3,grow:[4,7,8]},
  lettuce:{name:"상추",em:"🥬",cat:"채소",h:1,grow:[3,4,10],shadeOK:true},
  spinach:{name:"시금치",em:"🌿",cat:"채소",h:1,grow:[3,4,6],shadeOK:true},
  napa:{name:"배추",em:"🥗",cat:"채소",h:1,grow:[8,11,11]},
  cabbage:{name:"양배추",em:"🥦",cat:"채소",h:1,grow:[4,6,7]},
  broccoli:{name:"브로콜리",em:"🥦",cat:"채소",h:2,grow:[4,6,6]},
  radish:{name:"무",em:"🍠",cat:"채소",h:1,grow:[8,10,11]},
  carrot:{name:"당근",em:"🥕",cat:"채소",h:1,grow:[4,6,7]},
  gonion:{name:"파",em:"🧅",cat:"채소",h:1,grow:[3,6,11],pest:1},
  garlic:{name:"마늘",em:"🧄",cat:"채소",h:1,grow:[10,6,6],pest:1},
  pea:{name:"완두콩",em:"🫛",cat:"채소",h:2,grow:[3,5,6],nfix:true},
  bean:{name:"강낭콩",em:"🫘",cat:"채소",h:2,grow:[5,7,8],nfix:true},
  yeolmu:{name:"열무",em:"🥬",cat:"채소",h:1,grow:[4,5,9]},
  strawberry:{name:"딸기",em:"🍓",cat:"채소",h:1,grow:[9,5,6],fruit:true},

  basil:{name:"바질",em:"🌿",cat:"허브",h:1,grow:[5,6,10],pest:2},
  rosemary:{name:"로즈마리",em:"🌲",cat:"허브",h:2,grow:[4,6,11],pest:2},
  sage:{name:"세이지",em:"🍃",cat:"허브",h:1,grow:[5,6,11],pest:2},
  thyme:{name:"타임",em:"🌱",cat:"허브",h:1,grow:[5,6,11],pest:1,cover:true},
  oregano:{name:"오레가노",em:"🌿",cat:"허브",h:1,grow:[5,6,11],pest:1},
  mint:{name:"민트",em:"🍀",cat:"허브",h:1,grow:[5,6,10],pest:2,invasive:true},
  dill:{name:"딜",em:"🌾",cat:"허브",h:2,grow:[4,6,7],attract:true},
  chives:{name:"차이브",em:"🧅",cat:"허브",h:1,grow:[4,5,11],pest:2},
  parsley:{name:"파슬리",em:"🌿",cat:"허브",h:1,grow:[4,6,11],attract:true},
  coriander:{name:"고수",em:"🌿",cat:"허브",h:1,grow:[4,6,7],attract:true},
  chamomile:{name:"캐모마일",em:"🌼",cat:"허브",h:1,grow:[4,5,6],attract:true},
  borage:{name:"보리지",em:"💠",cat:"허브",h:2,grow:[5,6,8],attract:2},
  comfrey:{name:"컴프리",em:"☘️",cat:"허브",h:2,grow:[4,5,11],mulch:true},

  marigold:{name:"메리골드",em:"🌼",cat:"꽃",h:1,grow:[5,6,10],pest:3},
  nasturtium:{name:"나스터튬",em:"🏵️",cat:"꽃",h:1,grow:[5,6,10],pest:2,trap:true},
  calendula:{name:"캘린듈라",em:"🌻",cat:"꽃",h:1,grow:[4,5,7],attract:true},
  alyssum:{name:"알리섬",em:"🤍",cat:"꽃",h:1,grow:[4,5,10],attract:true},
  sunflower:{name:"해바라기",em:"🌻",cat:"꽃",h:3,grow:[5,7,9],attract:2},
  zinnia:{name:"백일홍",em:"🌺",cat:"꽃",h:2,grow:[5,7,10],attract:true},
  cosmos:{name:"코스모스",em:"🌸",cat:"꽃",h:2,grow:[5,7,10],attract:true},
  petunia:{name:"페튜니아",em:"🌷",cat:"꽃",h:1,grow:[5,5,10],pest:2},
  lavender:{name:"라벤더",em:"💜",cat:"꽃",h:1,grow:[4,6,7],pest:2,attract:true},
};

/* 동반작물 시너지 — 도감 길드 조합 기반 */
const GOOD = [
  ["tomato","basil","해충 퇴치 + 풍미 향상"],["tomato","marigold","선충·진딧물 퇴치"],
  ["tomato","parsley","유익 곤충 유인"],["tomato","borage","수분 촉진"],
  ["tomato","chives","진딧물 방제 + 항균"],["tomato","nasturtium","진딧물 트랩크롭"],
  ["pepper","basil","진딧물 퇴치"],["pepper","petunia","해충 방제"],
  ["pepper","oregano","해충 혼란"],["pepper","marigold","선충 방제"],
  ["cabbage","rosemary","배추흰나비 퇴치"],["cabbage","nasturtium","배추벌레 트랩"],
  ["cabbage","sage","배추나방 퇴치"],["cabbage","calendula","수분자 유인"],
  ["napa","mint","배추흰나비 퇴치"],["napa","marigold","해충 방제"],
  ["broccoli","dill","유익 곤충 유인"],["broccoli","calendula","수분 촉진"],
  ["carrot","sage","당근파리 퇴치"],["carrot","alyssum","호버플라이 유인"],
  ["carrot","gonion","상호 해충 방제"],["carrot","chives","당근파리 방제"],
  ["cucumber","dill","수분 촉진"],["cucumber","borage","유익 곤충 유인"],
  ["squash","oregano","강력 수분 촉진"],["squash","borage","수분 촉진"],
  ["squash","corn","삼자매: 그늘 제공"],["squash","bean","삼자매: 질소 공급"],
  ["corn","bean","삼자매: 천연 지지대 + 질소"],
  ["eggplant","thyme","그라운드커버"],["eggplant","zinnia","무당벌레 유인"],
  ["potato","alyssum","유익 곤충 유인"],["potato","marigold","해충 방제"],
  ["lettuce","chives","생육 촉진 + 해충 방제"],["lettuce","chamomile","생육 촉진"],
  ["bean","rosemary","해충 퇴치"],["bean","sunflower","천연 지지대"],
  ["radish","sage","해충 방제"],["radish","marigold","해충 방제"],
  ["yeolmu","chives","해충 방제"],["yeolmu","alyssum","유익 곤충 유인"],
  ["strawberry","thyme","그라운드커버 + 수분"],["strawberry","alyssum","수분 촉진"],
  ["strawberry","borage","수분 촉진 + 생육"],
  ["pea","carrot","공간 상호보완"],["spinach","strawberry","공간 상호보완"],
];
/* 상극 — 도감 badCombos 기반 */
const BAD = [
  ["bean","gonion","파의 알리신이 콩 유익균 파괴 → 성장 억제"],
  ["bean","garlic","마늘이 콩 유익균 파괴 → 성장 억제"],
  ["bean","chives","파속 식물이 콩 성장 억제"],
  ["pea","gonion","파속 식물이 완두콩 성장 억제"],
  ["pea","garlic","황 화합물이 완두콩 성장 방해"],
  ["pea","chives","파속 식물이 완두콩 성장 억제"],
  ["tomato","potato","같은 병해충 공유 → 역병 동시 감염 위험"],
  ["tomato","cabbage","영양분 경쟁 → 둘 다 성장 저해"],
  ["tomato","corn","같은 해충(담배나방) 유인"],
  ["potato","squash","감자가 영양분 고갈 → 호박 부진"],
  ["potato","cucumber","역병 확산 위험"],
  ["carrot","dill","딜이 당근 뿌리 발달 저해"],
  ["gonion","radish","파 유기산이 뿌리 성장 방해 → 굽은 무"],
  ["pepper","cabbage","고추가 배추과 성장 억제"],
  ["pepper","napa","고추가 배추과 성장 억제"],
  ["garlic","strawberry","마늘이 딸기 수확량 감소"],
  ["mint","*","민트는 침습성! 화분에 심어 두는 게 안전"],
];

const MONTHS = ["","1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const CELL_M = 0.5;                 // 1칸 = 50cm

let COLS = 6, ROWS = 4, grid = [], curCS = 40;
let selected = "tomato", palCat = "채소", month = new Date().getMonth()+1, playing = null;

/* ═══════ 밭 만들기 ═══════ */
function cellSize(){
  const wrap = $("#gd-wrap");
  const avail = (wrap ? wrap.clientWidth : 500) - 20;
  return Math.max(22, Math.min(52, Math.floor(avail/COLS) - 2));
}
function newGrid(){
  const w = Math.min(10, Math.max(1, parseFloat($("#gd-w").value)||3));
  const h = Math.min(10, Math.max(1, parseFloat($("#gd-h").value)||2));
  $("#gd-w").value = w; $("#gd-h").value = h;
  COLS = Math.round(w/CELL_M); ROWS = Math.round(h/CELL_M);
  grid = Array.from({length:ROWS},()=>Array(COLS).fill(null));
  buildGrid(); renderAll();
}
function buildGrid(){
  const g = $("#gd-grid"), cs = curCS = cellSize();
  g.style.setProperty("--cs", cs+"px");
  g.style.gridTemplateColumns = `repeat(${COLS},${cs}px)`;
  g.innerHTML = "";
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
    const d = document.createElement("div");
    d.className = "gd-cell"; d.dataset.r = r; d.dataset.c = c;
    g.appendChild(d);
  }
  $("#gd-size-note").innerHTML =
    `면적 <b>${(COLS*CELL_M*ROWS*CELL_M).toFixed(1)}㎡</b> · ${COLS}×${ROWS} = ${COLS*ROWS}칸 ·
     퍼머컬처 팁: 폭 1.2m 이내면 밟지 않고 손이 닿아요`;
}

/* ═══════ 심기 / 지우기 ═══════ */
let painting = false;
function paint(el){
  if(!el || !el.classList.contains("gd-cell")) return;
  grid[+el.dataset.r][+el.dataset.c] = selected==="__erase" ? null : selected;
  renderAll();
}

/* ═══════ 분석 엔진 ═══════ */
function pairWhy(list,a,b){
  for(const [x,y,why] of list){
    if((x===a&&(y===b||y==="*"))||(x===b&&(y===a||y==="*"))||(y==="*"&&(x===a||x===b))) return why;
  }
  return null;
}
function neighbors(r,c){
  const out=[];
  for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
    if(!dr&&!dc) continue;
    const nr=r+dr,nc=c+dc;
    if(nr>=0&&nr<ROWS&&nc>=0&&nc<COLS&&grid[nr][nc]) out.push({r:nr,c:nc,id:grid[nr][nc]});
  }
  return out;
}
function relations(r,c){
  const id=grid[r][c], good=[], bad=[]; let shaded=false; const seen=new Set();
  for(const n of neighbors(r,c)){
    const g=pairWhy(GOOD,id,n.id), b=pairWhy(BAD,id,n.id);
    if(g && !seen.has("g"+n.id)){ good.push({id:n.id,why:g}); seen.add("g"+n.id); }
    if(b && !seen.has("b"+n.id)){ bad.push({id:n.id,why:b}); seen.add("b"+n.id); }
  }
  if(r+1<ROWS && grid[r+1][c]){                       // 남쪽(아래)에 더 큰 작물 → 그늘
    const below = PLANTS[grid[r+1][c]];
    if(below.h - PLANTS[id].h >= 2 && !PLANTS[id].shadeOK) shaded = true;
  }
  return {good,bad,shaded};
}
function analyze(){
  let cells=0, synergy=0, shade=0, pestPow=0, pollin=0, fruiters=0, fruitOK=0;
  const conflicts=[], species=new Set(), cats={채소:0,허브:0,꽃:0};
  let mintOpen=false, nfix=false, cover=false, trap=false;
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
    const id=grid[r][c]; if(!id) continue;
    const p=PLANTS[id];
    cells++; species.add(id); cats[p.cat]++;
    if(p.pest) pestPow+=p.pest;
    if(p.attract) pollin += (p.attract===2?2:1);
    if(p.nfix) nfix=true;
    if(p.cover||p.mulch) cover=true;
    if(p.trap) trap=true;
    if(p.invasive) mintOpen=true;
    const rel=relations(r,c);
    synergy += rel.good.length;
    if(rel.shaded) shade++;
    for(const b of rel.bad){
      const key=[id,b.id].sort().join("|");
      if(!conflicts.some(x=>x.key===key)) conflicts.push({key,a:id,b:b.id,why:b.why});
    }
    if(p.fruit){
      fruiters++;
      if(neighbors(r,c).some(n=>PLANTS[n.id].attract||PLANTS[n.id].cat==="꽃")) fruitOK++;
    }
  }
  const pest = Math.min(100, Math.round(pestPow/Math.max(cells,1)*140));
  const poll = fruiters ? Math.round(fruitOK/fruiters*100) : Math.min(100, pollin*15);
  const divv = Math.min(100, Math.round(species.size*9 + (cats.채소&&cats.허브&&cats.꽃?15:0)));
  const yieldIdx = cells ? Math.max(0, Math.min(100, Math.round(
      55 + synergy/cells*45 - conflicts.length*12 - shade/cells*40))) : 0;
  const total = cells ? Math.round(pest*.22 + poll*.22 + divv*.2 + yieldIdx*.36) : 0;
  return {cells,fill:cells/(ROWS*COLS),species,cats,synergy,conflicts,shade,
          pest,poll,divv,yieldIdx,total,mintOpen,nfix,cover,trap,fruiters};
}

/* ═══════ 그리기 ═══════ */
function stage(id,m){
  const [ps,hs,he]=PLANTS[id].grow;
  const alive = ps<=he ? (m>=ps&&m<=he) : (m>=ps||m<=he);
  if(!alive) return {ic:"",scale:0,label:"휴면"};
  const harvest = hs<=he ? (m>=hs&&m<=he) : (m>=hs||m<=he);
  if(harvest) return {ic:"🧺",scale:1,label:"수확"};
  return m===ps ? {ic:"🌱",scale:.55,label:"파종/정식"} : {ic:"",scale:.8,label:"성장 중"};
}
function renderGrid(){
  $$("#gd-grid .gd-cell").forEach(el=>{
    const r=+el.dataset.r, c=+el.dataset.c, id=grid[r][c];
    el.className="gd-cell"; el.innerHTML="";
    if(!id) return;
    const rel=relations(r,c);
    if(rel.bad.length) el.classList.add("bad");
    else if(rel.good.length) el.classList.add("good");
    if(rel.shaded) el.classList.add("shade");
    const st=stage(id,month);
    const sp=document.createElement("span");
    sp.textContent=PLANTS[id].em;
    sp.style.transform=`scale(${st.scale||.45})`;
    sp.style.opacity = st.scale===0 ? .3 : 1;
    el.appendChild(sp);
    if(st.ic){ const b=document.createElement("b"); b.textContent=st.ic; el.appendChild(b); }
  });
}
function renderScore(){
  const a=analyze();
  const set=(k,v)=>{ $("#gd-v-"+k).textContent=v; $("#gd-m-"+k).style.width=v+"%"; };
  set("pest",a.pest); set("poll",a.poll); set("div",a.divv); set("yield",a.yieldIdx);
  $("#gd-total").textContent = a.cells ? a.total : "–";
  $("#gd-grade").textContent = a.total>=80?"🏆 A":a.total>=65?"🌟 B":a.total>=45?"🙂 C":a.cells?"💪 D":"";

  const box=$("#gd-alerts"); box.innerHTML="";
  if(!a.cells) box.innerHTML = `<div class="gd-note">작물을 심으면 분석이 시작돼요 🌱</div>`;
  a.conflicts.forEach(cf=>{
    box.innerHTML += `<div class="gd-alert bad"><b>${PLANTS[cf.a].name} ✕ ${PLANTS[cf.b].name}</b><br>${cf.why}</div>`;
  });
  if(a.shade) box.innerHTML += `<div class="gd-alert bad">🌥 ${a.shade}칸이 남쪽 큰 작물 그늘에 가려요. 키 큰 작물은 북쪽(위)에 심으세요.</div>`;
  if(a.mintOpen) box.innerHTML += `<div class="gd-alert bad">🍀 민트는 뿌리가 퍼지는 침습성! 화분째 묻는 걸 추천해요.</div>`;
  if(a.cells && !a.conflicts.length && a.synergy>0)
    box.innerHTML += `<div class="gd-alert good">✅ 상극 없이 ${a.synergy}개의 동반 시너지가 작동 중이에요!</div>`;
  if(a.fruiters && a.poll<50)
    box.innerHTML += `<div class="gd-alert info">🐝 열매채소 곁에 꽃(보리지·알리섬 등)을 심으면 수확이 늘어요.</div>`;

  const checks=[
    [a.cats.채소>0&&a.cats.허브>0&&a.cats.꽃>0, "🌈 다층 혼작 — 채소+허브+꽃을 함께"],
    [a.synergy>=3, "🤝 길드 디자인 — 동반작물 시너지 3개 이상"],
    [a.nfix, "🫘 질소 고정 — 콩과 식물로 흙 살리기"],
    [a.cover, "🍂 흙 덮기 — 그라운드커버/멀칭 식물"],
    [a.trap, "🪤 트랩크롭 — 해충을 유인해 주작물 보호"],
    [a.fill>=.5, "📦 공간 활용 — 밭의 절반 이상 활용"],
    [!a.conflicts.length&&a.cells>0, "☮️ 상극 없음 — 모든 이웃이 평화롭게"],
  ];
  $("#gd-check").innerHTML = checks.map(([ok,t])=>
    `<li class="${ok?"ok":""}">${ok?"✅":"⬜"} ${t}</li>`).join("");
}
function renderMonth(){
  $("#gd-month-val").textContent = MONTHS[month];
  const sow=[],grow=[],harv=[],seen=new Set();
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
    const id=grid[r][c]; if(!id||seen.has(id)) continue; seen.add(id);
    const st=stage(id,month), nm=PLANTS[id].em+PLANTS[id].name;
    if(st.label==="파종/정식") sow.push(nm);
    else if(st.label==="수확") harv.push(nm);
    else if(st.label==="성장 중") grow.push(nm);
  }
  $("#gd-report").innerHTML = seen.size ?
    `<b>${MONTHS[month]}의 밭</b><br>` +
    (sow.length?`🌱 심기: ${sow.join(", ")}<br>`:"") +
    (grow.length?`🌿 성장: ${grow.join(", ")}<br>`:"") +
    (harv.length?`🧺 수확: ${harv.join(", ")}`:"") +
    (!sow.length&&!grow.length&&!harv.length?"이 달에는 밭이 쉬고 있어요 😴":"")
    : "작물을 심으면 월별 일정이 표시돼요";
}
function save(){ try{ localStorage.setItem("pcon_garden", JSON.stringify({COLS,ROWS,grid})); }catch(e){} }
function renderAll(){ renderGrid(); renderScore(); renderMonth(); save(); }

/* ═══════ 팔레트 ═══════ */
function renderPalette(){
  const list = Object.entries(PLANTS).filter(([,p])=>p.cat===palCat);
  $("#gd-pal").innerHTML =
    `<button class="chip gd-plant ${selected==="__erase"?"on":""}" data-id="__erase">🧹 지우개</button>` +
    list.map(([id,p])=>`<button class="chip gd-plant ${id===selected?"on":""}" data-id="${id}">${p.em} ${p.name}</button>`).join("");
  $$("#gd-pal .gd-plant").forEach(b=>b.addEventListener("click",()=>{
    selected=b.dataset.id; renderPalette();
  }));
}

/* ═══════ 퍼머컬처 자동 디자인 ═══════ */
function clearGrid(){ grid = Array.from({length:ROWS},()=>Array(COLS).fill(null)); }
const inG = (r,c)=> r>=0&&r<ROWS&&c>=0&&c<COLS;
const TEMPLATES = {
  /* 허브 나선 — 중심(건조)에서 바깥(습윤)으로 */
  spiral(){
    clearGrid();
    const order=["rosemary","thyme","sage","oregano","lavender","chives","basil","parsley",
                 "chamomile","borage","dill","coriander","comfrey"];
    const dirs=[[0,1],[1,0],[0,-1],[-1,0]];
    let r=Math.floor((ROWS-1)/2), c=Math.floor((COLS-1)/2), leg=1, i=0, dir=0;
    const put=()=>{ if(inG(r,c)){ grid[r][c]=order[i%order.length]; i++; } };
    put();
    while(i<Math.min(ROWS*COLS, order.length*2)){
      for(let rep=0;rep<2;rep++){
        for(let s=0;s<leg;s++){ r+=dirs[dir][0]; c+=dirs[dir][1]; if(inG(r,c)) put(); }
        dir=(dir+1)%4;
      }
      if(++leg>Math.max(ROWS,COLS)) break;
    }
  },
  /* 키홀 가든 — 남쪽에서 들어가는 통로 + 꽃 테두리 */
  keyhole(){
    clearGrid();
    const midC=Math.floor(COLS/2);
    for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
      if(c===midC && r>=Math.floor(ROWS/2)){ grid[r][c]=null; continue; }   // 통로
      const border = r===0||r===ROWS-1||c===0||c===COLS-1;
      if(border) grid[r][c] = (r+c)%3===0?"marigold":(r+c)%3===1?"alyssum":"nasturtium";
      else{
        const ring2 = r===1||r===ROWS-2||c===1||c===COLS-2;
        grid[r][c] = ring2 ? ((r+c)%2?"basil":"chives") : (r%2?"lettuce":"pepper");
      }
    }
    for(let c=1;c<COLS-1;c++) if(ROWS>2 && grid[1][c] && c%2===0) grid[1][c]="tomato";  // 키 큰 건 북쪽
  },
  /* 삼자매 — 옥수수 + 콩 + 호박 */
  sisters(){
    clearGrid();
    for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
      grid[r][c] = (r%2===0 && c%2===0) ? "corn" : (r%2===0||c%2===0) ? "bean" : "squash";
    }
    for(let c=0;c<COLS;c+=3) if(inG(ROWS-1,c)) grid[ROWS-1][c]="sunflower";
    if(inG(ROWS-1,1)) grid[ROWS-1][1]="oregano";
    if(inG(ROWS-1,COLS-2)) grid[ROWS-1][COLS-2]="oregano";
  },
  /* 만다라 — 동심원 */
  mandala(){
    clearGrid();
    const cr=(ROWS-1)/2, cc=(COLS-1)/2, maxD=Math.max(ROWS,COLS)/2;
    for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
      const d=Math.sqrt((r-cr)**2+(c-cc)**2)/maxD;
      grid[r][c] = d<.25 ? "tomato"
                 : d<.5  ? ((r+c)%2?"basil":"lettuce")
                 : d<.78 ? ((r+c)%3===0?"chives":(r+c)%3===1?"carrot":"sage")
                 : ((r+c)%2?"marigold":"calendula");
    }
  },
};
/* 도감 길드 조합 자동 배치 */
const GUILDS = [
  {name:"🍅 토마토 완벽 길드", veg:"tomato", herb:"basil", flower:"marigold"},
  {name:"🍅 토마토 수분 길드", veg:"tomato", herb:"parsley", flower:"borage"},
  {name:"🌶️ 고추 보호 길드", veg:"pepper", herb:"basil", flower:"petunia"},
  {name:"🥦 양배추 수호 길드", veg:"cabbage", herb:"rosemary", flower:"nasturtium"},
  {name:"🥕 당근 보호 길드", veg:"carrot", herb:"sage", flower:"alyssum"},
  {name:"🥒 오이 수분 길드", veg:"cucumber", herb:"dill", flower:"borage"},
  {name:"🎃 호박 수분 길드", veg:"squash", herb:"oregano", flower:"borage"},
  {name:"🍆 가지 보호 길드", veg:"eggplant", herb:"thyme", flower:"zinnia"},
  {name:"🥬 상추 샐러드 길드", veg:"lettuce", herb:"chives", flower:"chamomile"},
  {name:"🥗 김장 배추 길드", veg:"napa", herb:"mint", flower:"marigold"},
  {name:"🍠 무 가을 길드", veg:"radish", herb:"sage", flower:"marigold"},
  {name:"🍓 딸기 스위트 길드", veg:"strawberry", herb:"thyme", flower:"alyssum"},
];

/* ═══════ 저장 복원 ═══════ */
function load(){
  try{
    const d=JSON.parse(localStorage.getItem("pcon_garden"));
    if(d && d.grid && d.grid.length){
      COLS=d.COLS; ROWS=d.ROWS; grid=d.grid;
      $("#gd-w").value=COLS*CELL_M; $("#gd-h").value=ROWS*CELL_M;
      buildGrid(); return true;
    }
  }catch(e){}
  return false;
}

/* ═══════ 시작 ═══════ */
function init(){
  const g = $("#gd-grid");

  g.addEventListener("pointerdown", e=>{ painting=true; paint(e.target.closest(".gd-cell")); });
  g.addEventListener("pointerover", e=>{ if(painting) paint(e.target.closest(".gd-cell")); });
  g.addEventListener("pointermove", e=>{                     // 터치 드래그
    if(!painting || e.pointerType==="mouse") return;
    const el=document.elementFromPoint(e.clientX,e.clientY);
    if(el && el.closest) paint(el.closest(".gd-cell"));
  });
  window.addEventListener("pointerup", ()=>painting=false);
  window.addEventListener("pointercancel", ()=>painting=false);

  $$("#gd-cat .chip").forEach(b=>b.addEventListener("click",()=>{
    $$("#gd-cat .chip").forEach(x=>x.classList.remove("on"));
    b.classList.add("on"); palCat=b.dataset.cat; renderPalette();
  }));
  $("#gd-make").addEventListener("click", newGrid);
  $$("#gd-tpl .gd-tpl-btn").forEach(b=>b.addEventListener("click",()=>{
    TEMPLATES[b.dataset.tpl](); renderAll();
  }));

  const sel=$("#gd-guild");
  GUILDS.forEach((x,i)=>{ const o=document.createElement("option"); o.value=i; o.textContent=x.name; sel.appendChild(o); });
  sel.addEventListener("change",()=>{
    if(sel.value==="") return;
    const gl=GUILDS[+sel.value];
    clearGrid();
    for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
      const border = r===0||r===ROWS-1||c===0||c===COLS-1;
      grid[r][c] = border ? ((r+c)%2===0 ? gl.flower : null)     // 꽃은 테두리
                          : ((r+c)%2===0 ? gl.veg : gl.herb);    // 채소·허브 교대
    }
    sel.value=""; renderAll();
  });

  $("#gd-month").addEventListener("input", e=>{ month=+e.target.value; renderGrid(); renderMonth(); });
  $("#gd-play").addEventListener("click", ()=>{
    if(playing){ clearInterval(playing); playing=null; $("#gd-play").textContent="▶ 1년 재생"; return; }
    month=3; $("#gd-month").value=3; $("#gd-play").textContent="⏸ 정지";
    playing=setInterval(()=>{
      if(++month>12){ clearInterval(playing); playing=null; month=12; $("#gd-play").textContent="▶ 1년 재생"; }
      $("#gd-month").value=month; renderGrid(); renderMonth();
    }, 900);
  });

  /* 탭이 숨겨져 있을 땐 폭이 0이라 칸 크기를 못 잰다.
     설계 탭을 열거나 화면이 바뀌면 다시 재서 그린다. */
  let rt=null;
  const refit = ()=>{
    clearTimeout(rt);
    rt=setTimeout(()=>{
      const wrap=$("#gd-wrap");
      if(!wrap.clientWidth || cellSize()===curCS) return;
      buildGrid(); renderGrid();
    }, 60);
  };
  if(window.ResizeObserver) new ResizeObserver(refit).observe($("#gd-wrap"));
  window.addEventListener("resize", refit);
  $$('nav.tabs button[data-view="design"]').forEach(b=>b.addEventListener("click", refit));

  $("#gd-month").value = month;
  renderPalette();
  if(!load()) newGrid(); else renderAll();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
})();
