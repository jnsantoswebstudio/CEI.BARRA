const CONTENT_KEY='cei-barra-site-v4';
const DEFAULT={
 speakers:[
  {id:'sp1',name:'Próximo pregador',date:'DOMINGO • 18H',note:'Cadastre o convidado no painel',image:'cei-palavra.jpg',active:true},
  {id:'sp2',name:'Próxima ministração',date:'QUARTA • 19H30',note:'Atualize a agenda pelo painel',image:'cei-culto-comunidade.jpg',active:true},
  {id:'sp3',name:'Culto especial',date:'EM BREVE',note:'Nova programação',image:'cei-celebracao.jpg',active:true},
 ],
 services:[
  {id:'sv1',day:'DOMINGO',time:'18:00',title:'Culto de Celebração',description:'Louvor, Palavra e comunhão para toda a família.',location:'CEI Barra',active:true},
  {id:'sv2',day:'QUARTA',time:'19:30',title:'Culto da Palavra',description:'Um encontro para crescer no conhecimento da Palavra.',location:'CEI Barra',active:true},
  {id:'sv3',day:'SEXTA',time:'19:30',title:'Encontro de Oração',description:'Intercessão, cuidado e busca pela presença de Deus.',location:'CEI Barra',active:true}
 ],
 events:[
  {id:'ev1',day:'18',month:'OUT',title:'Celebração em família',description:'Uma noite especial para estarmos juntos.',active:true},
  {id:'ev2',day:'25',month:'OUT',title:'Encontro da comunidade',description:'Um momento de comunhão e fortalecimento de vínculos.',active:true}
 ],
 settings:{heroTitle:'Uma igreja para\npertencer.',heroText:'Um lugar para adorar a Deus, ouvir a Palavra e caminhar com pessoas de verdade.',address:'Rua Aristóbulo Pelodan, 499',city:'Barra de São João • Casimiro de Abreu/RJ',phone:'(22) 99999-9999',email:'contato@ceibarra.org.br',instagram:'https://www.instagram.com/ceibarraoficial',youtube:'https://www.youtube.com/@CeiBarra',facebook:'https://www.facebook.com/ceibsj'}
};
function load(){try{return merge(DEFAULT,JSON.parse(localStorage.getItem(CONTENT_KEY)||'{}'));}catch{return JSON.parse(JSON.stringify(DEFAULT))}}
function merge(base,extra){const out={...base,...extra}; out.settings={...base.settings,...(extra?.settings||{})}; for(const k of ['speakers','services','events']) out[k]=Array.isArray(extra?.[k])?extra[k]:base[k]; return out}
let state=load();
function save(){localStorage.setItem(CONTENT_KEY,JSON.stringify(state))}
const img=n=>String(n||'').startsWith('data:')?n:`./images/${n}`;
function renderSpeakers(){
  const items=state.speakers.filter(x=>x.active);
  const track=document.getElementById('speakerTrack');
  const dots=document.getElementById('speakerDots');
  const empty=`<div class="speaker-empty"><div class="speaker-empty-mark">✦</div><h3>Próximos pregadores</h3><p>A agenda de ministrações será atualizada em breve.</p><a class="line-link" href="./admin.html">Atualizar agenda →</a></div>`;
  track.innerHTML=items.map((s,i)=>`<article class="speaker-card ${s.image?'':'no-image'}" tabindex="0" aria-label="${escAttr(s.name)}">
    ${s.image?`<img src="${img(escAttr(s.image))}" alt="${escAttr(s.name)}">`:`<div class="speaker-placeholder">CEI</div>`}
    <div class="speaker-shade"></div>
    <span class="speaker-tag"><i></i> PRÓXIMA MINISTRAÇÃO</span>
    <div class="speaker-overlay"><span class="speaker-date">${esc(s.date)}</span><h3>${esc(s.name)}</h3><p>${esc(s.note||'Palavra e comunhão com a igreja.')}</p></div>
    <div class="speaker-index">${String(i+1).padStart(2,'0')}</div>
  </article>`).join('') || empty;
  const isCarousel=items.length>1;
  document.getElementById('speakerPrev').disabled=!isCarousel;
  document.getElementById('speakerNext').disabled=!isCarousel;
  if(isCarousel) setupCarousel(items.length); else { track.style.transform='none'; dots.innerHTML=''; }
}
function setupCarousel(count){
  const track=document.getElementById('speakerTrack');
  const dots=document.getElementById('speakerDots');
  let index=0, timer=null, resizeTimer=null;
  const visible=()=>window.innerWidth<=760?1:window.innerWidth<=1050?2:3;
  const maxIndex=()=>Math.max(0,count-visible());
  const draw=()=>{
    const v=visible();
    index=Math.min(index,Math.max(0,count-v));
    const card=track.querySelector('.speaker-card');
    if(card){const gap=18;const width=card.getBoundingClientRect().width+gap;track.style.transform=`translate3d(${-index*width}px,0,0)`;}
    dots.innerHTML='';
    const pages=Math.max(1,maxIndex()+1);
    for(let i=0;i<pages;i++){
      const b=document.createElement('button'); b.type='button'; b.setAttribute('aria-label',`Ir para grupo ${i+1}`); b.className=i===index?'active':'';
      b.onclick=()=>{index=i;draw();restart()}; dots.appendChild(b);
    }
  };
  const next=()=>{index=index>=maxIndex()?0:index+1;draw()};
  const prev=()=>{index=index<=0?maxIndex():index-1;draw()};
  const restart=()=>{clearInterval(timer);timer=setInterval(next,6500)};
  document.getElementById('speakerPrev').onclick=()=>{prev();restart()};
  document.getElementById('speakerNext').onclick=()=>{next();restart()};
  const viewport=document.querySelector('.speaker-viewport');
  let downX=0,dragging=false;
  viewport.onpointerdown=e=>{downX=e.clientX;dragging=true;viewport.setPointerCapture?.(e.pointerId);track.classList.add('dragging');clearInterval(timer)};
  viewport.onpointerup=e=>{if(!dragging)return;const dx=e.clientX-downX;dragging=false;track.classList.remove('dragging');if(Math.abs(dx)>45){dx<0?next():prev()}draw();restart()};
  viewport.onpointercancel=()=>{dragging=false;track.classList.remove('dragging');restart()};
  viewport.onmouseenter=()=>clearInterval(timer);viewport.onmouseleave=restart;
  viewport.onfocusin=()=>clearInterval(timer);viewport.onfocusout=restart;
  addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(draw,160)});
  draw();restart();
}
function renderServices(){const list=state.services.filter(x=>x.active);document.getElementById('services').innerHTML=list.map((s,i)=>`<article class="service ${i===0?'today':''}"><div><span class="day">${esc(s.day)}</span><h3>${esc(s.title)}</h3><div class="time">${esc(s.time)}</div><p>${esc(s.description)}</p></div><div class="meta"><span>${esc(s.location)}</span><span>${i===0?'PRÓXIMO':''}</span></div></article>`).join('')||'<p>Nenhum horário cadastrado.</p>';if(list[0]){document.getElementById('heroDay').textContent=`${list[0].day} • ${list[0].time}`;document.getElementById('heroTitle').textContent=list[0].title}}
function renderEvents(){document.getElementById('events').innerHTML=state.events.filter(x=>x.active).map(e=>`<article class="event"><div class="event-date"><span>${esc(e.month)}</span><strong>${esc(e.day)}</strong></div><div><h3>${esc(e.title)}</h3><p>${esc(e.description)}</p></div></article>`).join('')}
function esc(v){return String(v??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}function escAttr(v){return String(v??'').replace(/[^a-zA-Z0-9._/-]/g,'')}
function renderMinistries(){const arr=[['Famílias','cei-galeria.jpg'],['Mulheres','cei-mulheres.jpg'],['Comunidade','cei-culto-comunidade.jpg'],['Palavra','cei-palavra.jpg'],['Jovens','cei-celebracao.jpg'],['Oração','cei-interior.jpg'],['Louvor','cei-palavra.jpg'],['Kids','cei-mulheres.jpg']];document.getElementById('ministries').innerHTML=arr.map(([t,i])=>`<article class="ministry"><img src="${img(i)}" alt="Ministério ${esc(t)}"><div class="cap"><h3>${esc(t)}</h3></div></article>`).join('')}
function render(){renderSpeakers();renderServices();renderEvents();renderMinistries();const ss=state.settings||{};const h=document.querySelector('.hero h1');if(h&&ss.heroTitle)h.innerHTML=esc(ss.heroTitle).replace(/\n/g,'<br>');const hp=document.querySelector('.hero-copy p');if(hp&&ss.heroText)hp.textContent=ss.heroText;const loc=document.querySelector('.location-copy');if(loc){const ps=loc.querySelectorAll('p');if(ps[0]&&ss.address)ps[0].innerHTML=`<strong>${esc(ss.address)}</strong><br>${esc(ss.city||'')}`;if(ps[1])ps[1].innerHTML=`<strong>Contato</strong><br>${esc(ss.phone||'')}<br>${esc(ss.email||'')}`;}document.querySelectorAll('.social-grid a')[0]?.setAttribute('href',ss.youtube||'#');document.querySelectorAll('.social-grid a')[1]?.setAttribute('href',ss.instagram||'#');document.querySelectorAll('.social-grid a')[2]?.setAttribute('href',ss.facebook||'#');document.getElementById('year').textContent=new Date().getFullYear()}
render();
document.getElementById('mobileToggle').onclick=()=>document.getElementById('mainNav').classList.toggle('open');
document.querySelectorAll('#mainNav a').forEach(a=>a.onclick=()=>document.getElementById('mainNav').classList.remove('open'));
document.getElementById('prayerForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);const arr=JSON.parse(localStorage.getItem('cei-barra-prayer-requests')||'[]');arr.unshift({id:crypto.randomUUID?.()||String(Date.now()),name:fd.get('name'),contact:fd.get('contact'),message:fd.get('message'),createdAt:new Date().toISOString(),read:false});localStorage.setItem('cei-barra-prayer-requests',JSON.stringify(arr));e.currentTarget.reset();document.getElementById('prayerSuccess').textContent='Pedido enviado. Recebemos sua mensagem com carinho.'});
