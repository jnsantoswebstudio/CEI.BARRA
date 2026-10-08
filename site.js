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
  const prevBtn=document.getElementById('speakerPrev');
  const nextBtn=document.getElementById('speakerNext');
  const viewport=document.querySelector('.speaker-viewport');
  const cards=[...track.querySelectorAll('.speaker-card')];
  if(count<=1){
    prevBtn.disabled=true; nextBtn.disabled=true; dots.innerHTML=''; track.style.transform='none';
    return;
  }

  // Guarda o conteúdo original e cria clones antes/depois para o loop ser realmente contínuo.
  const originals=cards.map(c=>c.cloneNode(true));
  track.innerHTML='';
  const makeCopies=()=>{
    const frag=document.createDocumentFragment();
    [...originals,...originals,...originals].forEach(c=>frag.appendChild(c.cloneNode(true)));
    track.appendChild(frag);
  };
  makeCopies();

  let index=count;
  let timer=null;
  let resizeTimer=null;
  let isAnimating=false;
  let pointerStartX=0;
  let pointerStartY=0;
  let dragging=false;

  const visible=()=>window.innerWidth<=760?1:window.innerWidth<=1050?2:Math.min(3,count);
  const gap=18;
  const updateCardWidths=()=>{
    const v=visible();
    const width=(viewport.clientWidth-gap*(v-1))/v;
    [...track.querySelectorAll('.speaker-card')].forEach(card=>{card.style.flex=`0 0 ${width}px`;});
    return width;
  };
  const position=(animate=true)=>{
    const width=updateCardWidths();
    track.style.transition=animate?'transform .55s cubic-bezier(.22,.61,.36,1)':'none';
    track.style.transform=`translate3d(${-index*(width+gap)}px,0,0)`;
  };
  const currentDot=()=>((index-count)%count+count)%count;
  const renderDots=()=>{
    dots.innerHTML='';
    for(let i=0;i<count;i++){
      const b=document.createElement('button');
      b.type='button';
      b.setAttribute('aria-label',`Ir para o pregador ${i+1}`);
      b.className=i===currentDot()?'active':'';
      b.onclick=()=>{goTo(count+i);restart()};
      dots.appendChild(b);
    }
  };
  const goTo=(target)=>{
    if(isAnimating)return;
    isAnimating=true;
    index=target;
    position(true);
    renderDots();
  };
  const next=()=>goTo(index+1);
  const prev=()=>goTo(index-1);
  const restart=()=>{clearInterval(timer);timer=setInterval(next,5200)};

  track.addEventListener('transitionend',()=>{
    // Ao passar pelos clones, volta para o item equivalente sem o usuário perceber.
    if(index>=count*2){
      index-=count;
      position(false);
    }else if(index< count){
      index+=count;
      position(false);
    }
    isAnimating=false;
    renderDots();
  });

  prevBtn.disabled=false;
  nextBtn.disabled=false;
  prevBtn.onclick=()=>{prev();restart()};
  nextBtn.onclick=()=>{next();restart()};

  viewport.onpointerdown=e=>{
    pointerStartX=e.clientX; pointerStartY=e.clientY; dragging=true;
    viewport.setPointerCapture?.(e.pointerId);
    track.classList.add('dragging');
    clearInterval(timer);
  };
  viewport.onpointerup=e=>{
    if(!dragging)return;
    const dx=e.clientX-pointerStartX;
    const dy=e.clientY-pointerStartY;
    dragging=false;
    track.classList.remove('dragging');
    if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy)) (dx<0?next:prev)();
    restart();
  };
  viewport.onpointercancel=()=>{dragging=false;track.classList.remove('dragging');restart()};
  viewport.onmouseenter=()=>clearInterval(timer);
  viewport.onmouseleave=()=>{if(!dragging)restart()};
  viewport.onfocusin=()=>clearInterval(timer);
  viewport.onfocusout=()=>restart();
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>position(false),160)});

  position(false);
  renderDots();
  restart();
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
