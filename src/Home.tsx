import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Send,
  X,
  Youtube,
  Users,
} from 'lucide-react';
import { loadContent, type SiteContent } from './content';


const base = () => import.meta.env.BASE_URL;
const img = (name: string) => `${base()}images/${name}`;
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Arist%C3%B3bulo+Pelodan%2C+499%2C+Barra+de+S%C3%A3o+Jo%C3%A3o%2C+Casimiro+de+Abreu%2C+RJ';

const gallery = [
  ['cei-interior.jpg', 'Culto e adoração'],
  ['cei-palavra.jpg', 'A Palavra'],
  ['cei-mulheres.jpg', 'Comunidade'],
  ['cei-culto-comunidade.jpg', 'Vida em comunhão'],
  ['cei-celebracao.jpg', 'Celebração'],
  ['cei-galeria.jpg', 'Momentos'],
];

function Header({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const links = [['Início', '#inicio'], ['A igreja', '#igreja'], ['Cultos', '#cultos'], ['Ministérios', '#ministerios'], ['Eventos', '#eventos'], ['Mídia', '#midia'], ['Contato', '#contato']];
  return <>
    <div className="notice-bar"><div className="container notice-inner"><span>CEI Barra · Barra de São João · RJ</span><a href={content.instagram} target="_blank" rel="noreferrer">Acompanhe nossas novidades no Instagram →</a></div></div>
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio"><img src={img('cei-barra-logo.png')} alt="CEI Barra" /><span><strong>CEI Barra</strong><small>Centro Evangelístico Internacional</small></span></a>
        <nav className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="header-cta"><a className="icon-social" href={content.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17}/></a><a className="header-visit" href="#contato">Visite-nos <ArrowRight size={15}/></a></div>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="mobile-nav">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={15}/></a>)}<a href="admin.html">Área administrativa<ArrowRight size={15}/></a></nav>}
    </header>
  </>;
}

export default function Home() {
  const [content, setContent] = useState<SiteContent>(() => loadContent());
  const [prayerSent, setPrayerSent] = useState(false);
  useEffect(() => { const on = () => setContent(loadContent()); window.addEventListener('cei-content-updated', on); return () => window.removeEventListener('cei-content-updated', on); }, []);
  const activeServices = useMemo(() => content.services.filter(s => s.active), [content.services]);
  const activeEvents = useMemo(() => content.events.filter(e => e.active), [content.events]);
  const [serviceIndex, setServiceIndex] = useState(0);
  const currentService = activeServices[serviceIndex] ?? activeServices[0];

  const submitPrayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const requests = JSON.parse(localStorage.getItem('cei-barra-prayer-requests') || '[]');
    requests.unshift({ id: crypto.randomUUID(), name: data.get('name'), contact: data.get('contact'), message: data.get('message'), createdAt: new Date().toISOString(), read: false });
    localStorage.setItem('cei-barra-prayer-requests', JSON.stringify(requests));
    setPrayerSent(true);
  };

  return <div className="church-site">
    <Header content={content}/>

    <main>
      <section id="inicio" className="hero-home">
        <div className="hero-photo" style={{ backgroundImage: `url(${img(content.heroImage)})` }}/>
        <div className="hero-shade"/>
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="kicker">{content.heroEyebrow}</span>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroText}</p>
            <div className="hero-actions"><a className="btn btn-solid" href="#cultos">Ver horários <ArrowRight size={16}/></a><a className="btn btn-ghost" href={content.youtube} target="_blank" rel="noreferrer"><Play size={15} fill="currentColor"/> Assistir mensagens</a></div>
          </div>
          <div className="hero-side">
            <div className="hero-info"><span>PRÓXIMO ENCONTRO</span><strong>{currentService ? `${currentService.day} · ${currentService.time}` : 'Confira a programação'}</strong><small>{currentService?.title || 'Cultos e encontros'}</small></div>
            <a className="hero-info hero-link" href={mapsUrl} target="_blank" rel="noreferrer"><span>ONDE ESTAMOS</span><strong>{content.city.split(' • ')[0]}</strong><small>{content.address}</small><ArrowRight size={16}/></a>
          </div>
        </div>
        <div className="container hero-foot"><span>Uma igreja para caminhar junto.</span><a href="#igreja">Conheça a CEI <ChevronDown size={15}/></a></div>
      </section>

      <section className="intro-strip"><div className="container intro-grid"><a href="#cultos"><CalendarDays size={20}/><span><small>CULTOS</small><strong>Veja os dias e horários</strong></span><ArrowRight size={17}/></a><a href="#oracao"><Heart size={20}/><span><small>ORAÇÃO</small><strong>Envie seu pedido</strong></span><ArrowRight size={17}/></a><a href="#midia"><Play size={20}/><span><small>MÍDIA</small><strong>Assista e acompanhe</strong></span><ArrowRight size={17}/></a></div></section>

      <section id="igreja" className="section church-about"><div className="container two-col about-layout"><div className="photo-stack"><img className="main-photo" src={img(content.welcomeImage)} alt="Comunidade da CEI Barra"/><div className="small-photo"><img src={img('cei-palavra.jpg')} alt="Momento de palavra"/></div><div className="photo-caption"><strong>CEI Barra</strong><span>Barra de São João · RJ</span></div></div><div className="about-copy"><span className="section-kicker">A IGREJA</span><h2>{content.welcomeTitle}</h2><p>{content.welcomeText}</p><div className="about-points"><div><span>01</span><strong>Adoração</strong><p>Um ambiente simples para buscar a presença de Deus.</p></div><div><span>02</span><strong>Palavra</strong><p>Mensagem e ensino para a vida cristã.</p></div><div><span>03</span><strong>Comunhão</strong><p>Gente cuidando de gente e caminhando junto.</p></div></div><a className="text-link" href="#contato">Quero visitar a CEI <ArrowRight size={16}/></a></div></div></section>

      <section className="section resources-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">PARA SUA CAMINHADA</span><h2>Conteúdos e cuidados para você.</h2></div><p>Acesse rapidamente áreas de cuidado, comunhão e recursos para continuar sua caminhada durante a semana.</p></div><div className="resource-grid"><a href="#oracao"><Heart size={18}/><span><strong>Pedido de oração</strong><small>Compartilhe seu pedido</small></span><ArrowRight size={15}/></a><a href="#ministerios"><Users size={18}/><span><strong>Ministérios</strong><small>Encontre um lugar para servir</small></span><ArrowRight size={15}/></a><a href="#midia"><Play size={18}/><span><strong>Bíblia e mensagens</strong><small>Continue aprendendo</small></span><ArrowRight size={15}/></a><a href="#contato"><MapPin size={18}/><span><strong>Visitar a CEI</strong><small>Endereço e rota</small></span><ArrowRight size={15}/></a></div></div></section>

      <section id="cultos" className="section services-section"><div className="container"><div className="section-heading center"><span className="section-kicker">PROGRAMAÇÃO</span><h2>Encontre um horário para estar conosco.</h2><p>Confira os encontros da CEI Barra. Os avisos e alterações de última hora também são publicados em nossos canais.</p></div>{activeServices.length > 0 && <div className="service-feature"><button className="service-arrow left" onClick={() => setServiceIndex((serviceIndex - 1 + activeServices.length) % activeServices.length)} aria-label="Culto anterior">‹</button><div className="service-feature-main"><div className="service-day">{currentService.day}</div><div><strong>{currentService.time}</strong><h3>{currentService.title}</h3><p>{currentService.description}</p><span><MapPin size={14}/>{currentService.location}</span></div></div><button className="service-arrow right" onClick={() => setServiceIndex((serviceIndex + 1) % activeServices.length)} aria-label="Próximo culto">›</button></div>}
        <div className="service-grid">{activeServices.map((service) => <article className="service-card" key={service.id}><div className="service-card-top"><span>{service.day}</span><CalendarDays size={17}/></div><strong>{service.time}</strong><h3>{service.title}</h3><p>{service.description}</p><a href="#contato">Como chegar <ArrowRight size={15}/></a></article>)}</div>
      </div></section>

      <section id="ministerios" className="section ministries-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">FAÇA PARTE</span><h2>Há um lugar para você.</h2></div><p>Conheça algumas áreas de comunhão, cuidado e serviço da igreja.</p></div><div className="ministry-grid"><article><img src={img('cei-mulheres.jpg')} alt="Ministério de mulheres"/><div><span>COMUNIDADE</span><h3>Mulheres</h3></div></article><article><img src={img('cei-celebracao.jpg')} alt="Encontro da juventude"/><div><span>GERAÇÕES</span><h3>Jovens</h3></div></article><article><img src={img('cei-palavra.jpg')} alt="Palavra e ensino"/><div><span>ENSINO</span><h3>Palavra</h3></div></article><article><img src={img('cei-galeria.jpg')} alt="Comunidade e encontros"/><div><span>COMUNHÃO</span><h3>Comunidade</h3></div></article></div></div></section>

      <section id="eventos" className="section events-section"><div className="container"><div className="section-heading center"><span className="section-kicker">AGENDA</span><h2>O que vem por aí.</h2><p>Eventos e momentos especiais da nossa comunidade.</p></div><div className="events-grid">{activeEvents.map((event) => <article className="event-card" key={event.id}><div className="event-image"><img src={img(event.image)} alt={event.title}/><div className="date-box"><strong>{event.date}</strong><span>{event.month}</span></div></div><div className="event-body"><span>CEI BARRA</span><h3>{event.title}</h3><p>{event.description}</p><a href={content.instagram} target="_blank" rel="noreferrer">Ver avisos <ArrowRight size={15}/></a></div></article>)}</div></div></section>

      <section id="midia" className="section media-section"><div className="container media-layout"><div className="media-intro"><span className="section-kicker">MÍDIA</span><h2>Continue a caminhada durante a semana.</h2><p>Assista mensagens, acompanhe os cultos e fique por dentro do que está acontecendo na CEI Barra.</p><div className="social-list"><a href={content.instagram} target="_blank" rel="noreferrer"><span className="social-icon"><Instagram/></span><span><small>INSTAGRAM</small><strong>@ceibarraoficial</strong></span><ArrowRight size={15}/></a><a href={content.youtube} target="_blank" rel="noreferrer"><span className="social-icon"><Youtube/></span><span><small>YOUTUBE</small><strong>CEI Barra</strong></span><ArrowRight size={15}/></a><a href={content.facebook} target="_blank" rel="noreferrer"><span className="social-icon"><Facebook/></span><span><small>FACEBOOK</small><strong>CEI Barra</strong></span><ArrowRight size={15}/></a></div></div><div className="media-feature"><img src={img('cei-celebracao.jpg')} alt="Celebração na CEI Barra"/><div className="media-feature-overlay"><span>ASSISTA E ACOMPANHE</span><h3>Uma palavra que continua depois do culto.</h3><a href={content.youtube} target="_blank" rel="noreferrer">Ir para o YouTube <ArrowRight size={15}/></a></div></div></div></section>

      <section className="section gallery-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">MOMENTOS</span><h2>Veja a vida da igreja.</h2></div><a className="text-link" href="https://flic.kr/ps/46AsE8" target="_blank" rel="noreferrer">Galeria completa <ArrowRight size={16}/></a></div><div className="gallery-grid">{gallery.map(([src, label], index) => <figure key={src} className={`gallery-item item-${index}`}><img src={img(src)} alt={label} loading="lazy"/><figcaption>{label}</figcaption></figure>)}</div></div></section>

      <section id="oracao" className="section prayer-section"><div className="container prayer-layout"><div className="prayer-copy"><span className="section-kicker">PEDIDO DE ORAÇÃO</span><h2>Você não precisa carregar tudo sozinho.</h2><p>Compartilhe seu pedido com a nossa equipe. Este espaço existe para você deixar uma mensagem e pedir oração.</p><div className="prayer-note"><Heart size={18}/><span>Seu pedido será guardado no ambiente administrativo desta instalação.</span></div></div><div className="prayer-card">{prayerSent ? <div className="success-box"><div className="success-icon"><Heart size={20}/></div><span className="section-kicker">MENSAGEM RECEBIDA</span><h3>Vamos orar com você.</h3><p>Obrigado por confiar seu pedido. Nossa equipe recebeu a mensagem.</p><button className="btn btn-outline" onClick={() => setPrayerSent(false)}>Enviar outro pedido</button></div> : <form onSubmit={submitPrayer}><label>Seu nome<input name="name" placeholder="Como podemos chamar você?" required/></label><label>Contato <small>(opcional)</small><input name="contact" placeholder="WhatsApp ou e-mail"/></label><label>Pedido de oração<textarea name="message" placeholder="Escreva seu pedido..." required/></label><button className="btn btn-dark full" type="submit">Enviar pedido <Send size={15}/></button></form>}</div></div></section>

      <section id="contato" className="visit-section"><div className="container visit-layout"><div className="visit-copy"><span className="section-kicker">VAMOS CONVERSAR</span><h2>Será uma alegria receber você.</h2><p>Estamos em Barra de São João. Salve o endereço, abra a rota e acompanhe nossos canais antes de sair.</p><div className="contact-data"><div><MapPin size={19}/><span><small>ENDEREÇO</small><strong>{content.address}</strong><em>{content.city}</em></span></div><div><MessageCircle size={19}/><span><small>CONTATO</small><strong>{content.phone}</strong><em>{content.email}</em></span></div></div><div className="visit-actions"><a className="btn btn-light-solid" href={mapsUrl} target="_blank" rel="noreferrer">Abrir rota <ArrowRight size={15}/></a><a className="btn btn-light-outline" href={content.instagram} target="_blank" rel="noreferrer">Falar pelo Instagram <Instagram size={15}/></a></div></div><div className="map-frame"><iframe title="Mapa da CEI Barra" src="https://www.google.com/maps?q=Rua%20Arist%C3%B3bulo%20Pelodan%2C%20499%2C%20Barra%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
    </main>

    <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a className="brand" href="#inicio"><img src={img('cei-barra-logo.png')} alt="CEI Barra"/><span><strong>CEI Barra</strong><small>Centro Evangelístico Internacional</small></span></a><p>Uma igreja para viver a fé em comunidade.</p></div><div><small>NAVEGAÇÃO</small><a href="#igreja">A igreja</a><a href="#cultos">Cultos</a><a href="#ministerios">Ministérios</a><a href="#eventos">Eventos</a></div><div><small>CANAIS</small><a href={content.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={content.youtube} target="_blank" rel="noreferrer">YouTube</a><a href={content.facebook} target="_blank" rel="noreferrer">Facebook</a></div><div><small>ADMINISTRAÇÃO</small><a href="admin.html">Área administrativa</a><a href="#oracao">Pedidos de oração</a></div></div><div className="container footer-bottom"><span>© CEI Barra · Centro Evangelístico Internacional</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    <div className="mobile-action"><a href="#contato"><MapPin size={15}/> Como chegar</a><a href="#oracao"><Heart size={15}/> Pedir oração</a></div>
  </div>;
}
