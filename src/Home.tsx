import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Play,
  Send,
  Youtube,
  X,
} from 'lucide-react';

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Rua+Arist%C3%B3bulo+Pelodan%2C+499%2C+Barra+de+S%C3%A3o+Jo%C3%A3o%2C+Casimiro+de+Abreu%2C+RJ';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/ceibarraoficial', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@CeiBarra', icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/ceibsj', icon: Facebook },
];

const gallery = [
  ['cei-interior.jpg', 'Celebração'],
  ['cei-palavra.jpg', 'Palavra'],
  ['cei-mulheres.jpg', 'Comunidade'],
  ['cei-culto-comunidade.jpg', 'Encontros'],
  ['cei-celebracao.jpg', 'Momentos'],
];

const faqs = [
  ['Onde fica a CEI Barra?', 'Na Rua Aristóbulo Pelodan, 499, Barra de São João, Casimiro de Abreu/RJ. Use o botão de rota para abrir o endereço no Google Maps.'],
  ['Quais são os horários dos cultos?', 'A programação deve ser conferida pelos canais oficiais, onde a igreja publica os horários e avisos mais recentes.'],
  ['Posso enviar um pedido de oração?', 'Sim. Você pode usar o formulário desta página e compartilhar seu pedido com tranquilidade.'],
  ['Como acompanhar a CEI Barra de longe?', 'Instagram, YouTube, Facebook e a galeria de fotos são os canais oficiais para acompanhar a igreja.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main className="church-site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>CEI Barra • Barra de São João • RJ</span>
          <div className="topbar-links">
            <a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#visita">Como chegar</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="CEI Barra — início">
            <img src={img('cei-barra-logo.png')} alt="CEI Barra" />
            <div>
              <strong>CEI Barra</strong>
              <span>Centro Evangelístico Internacional</span>
            </div>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#igreja">A Igreja</a>
            <a href="#momentos">Momentos</a>
            <a href="#midia">Mídia</a>
            <a href="#oracao">Oração</a>
            <a href="#visita">Contato</a>
          </nav>

          <div className="header-socials">
            {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={17} />
              </a>
            ))}
            <a className="header-button" href="#visita">Visite-nos <ArrowRight size={16} /></a>
          </div>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            {[
              ['Início', 'inicio'],
              ['A Igreja', 'igreja'],
              ['Momentos', 'momentos'],
              ['Mídia', 'midia'],
              ['Oração', 'oracao'],
              ['Contato', 'visita'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <img className="hero-image" src={img('cei-interior.jpg')} alt="Interior da CEI Barra durante uma celebração" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="overline">SEJA BEM-VINDO À CEI BARRA</p>
            <h1>Um lugar para <em>viver a fé</em> juntos.</h1>
            <p className="hero-text">Uma igreja para conhecer pessoas, crescer na Palavra e caminhar mais perto de Deus.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#visita">Quero conhecer a CEI <ArrowRight size={17} /></a>
              <a className="btn btn-light" href="#oracao">Pedido de oração <Heart size={16} /></a>
            </div>
          </div>
          <aside className="hero-card">
            <span className="hero-card-label">NOS ENCONTRE</span>
            <strong>Barra de São João</strong>
            <p>R. Aristóbulo Pelodan, 499<br />Casimiro de Abreu/RJ</p>
            <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir rota <Navigation size={15} /></a>
          </aside>
        </div>
        <a className="scroll-cue" href="#igreja"><span>Conheça a igreja</span><ChevronDown size={17} /></a>
      </section>

      <section className="quick-links">
        <div className="container quick-grid">
          <a href="#agenda" className="quick-item">
            <span className="quick-icon"><CalendarDays size={19} /></span>
            <span><small>PROGRAMAÇÃO</small><strong>Confira os próximos encontros</strong></span>
            <ArrowRight size={17} />
          </a>
          <a href="#oracao" className="quick-item">
            <span className="quick-icon"><Heart size={19} /></span>
            <span><small>ORAÇÃO</small><strong>Compartilhe seu pedido</strong></span>
            <ArrowRight size={17} />
          </a>
          <a href="#midia" className="quick-item">
            <span className="quick-icon"><Play size={19} /></span>
            <span><small>MÍDIA</small><strong>Assista e acompanhe</strong></span>
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section id="igreja" className="section welcome-section">
        <div className="container welcome-grid">
          <div className="photo-frame photo-frame-large">
            <img src={img('cei-culto-comunidade.jpg')} alt="Comunidade reunida na CEI Barra" loading="lazy" />
            <div className="photo-badge"><span>CEI BARRA</span><strong>Comunidade que caminha junto.</strong></div>
          </div>
          <div className="welcome-copy">
            <p className="section-label">A IGREJA</p>
            <h2>Seja em um culto, em um encontro ou em uma conversa, <em>há espaço para você.</em></h2>
            <p>A CEI Barra faz parte do Centro Evangelístico Internacional e está em Barra de São João. Nosso site reúne as informações que ajudam você a dar o primeiro passo e conhecer mais de perto a comunidade.</p>
            <div className="welcome-list">
              <div><span><Check size={15} /></span><div><strong>Palavra</strong><p>Conteúdo e mensagens para fortalecer a caminhada.</p></div></div>
              <div><span><Check size={15} /></span><div><strong>Comunidade</strong><p>Um ambiente de comunhão, serviço e amizade.</p></div></div>
              <div><span><Check size={15} /></span><div><strong>Acolhimento</strong><p>Uma recepção simples para quem está chegando.</p></div></div>
            </div>
            <a className="text-button" href="#midia">Conhecer nossos canais <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="agenda" className="agenda-section">
        <div className="container agenda-grid">
          <div>
            <p className="section-label light-label">ENCONTROS</p>
            <h2>Venha como você está.</h2>
            <p className="agenda-lead">Para não passar informação desatualizada, os horários e avisos mais recentes ficam nos canais oficiais da CEI Barra.</p>
            <div className="agenda-actions">
              <a className="btn btn-white" href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer">Ver programação no Instagram <Instagram size={16} /></a>
              <a className="agenda-text-link" href="#visita">Como chegar <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="agenda-cards">
            <div className="agenda-card main">
              <span>01</span>
              <div>
                <small>CELEBRAÇÕES</small>
                <h3>Momentos de adoração e Palavra</h3>
                <p>Confira a agenda atualizada antes de sua visita.</p>
              </div>
            </div>
            <div className="agenda-card">
              <span>02</span>
              <div><small>COMUNIDADE</small><h3>Encontros para caminhar junto</h3></div>
            </div>
            <div className="agenda-card">
              <span>03</span>
              <div><small>ORAÇÃO</small><h3>Um espaço para pedir oração</h3></div>
            </div>
          </div>
        </div>
      </section>

      <section id="momentos" className="section moments-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-label">MOMENTOS REAIS</p><h2>Um pouco do que acontece <em>por aqui.</em></h2></div>
            <a className="text-button" href="https://flic.kr/ps/46AsE8" target="_blank" rel="noreferrer">Abrir galeria completa <ArrowRight size={16} /></a>
          </div>
          <div className="gallery-grid-new">
            {gallery.map(([src, label], index) => (
              <figure key={src} className={`gallery-card-new gallery-${index}`}>
                <img src={img(src)} alt={label} loading="lazy" />
                <figcaption>{label}<ArrowRight size={15} /></figcaption>
              </figure>
            ))}
          </div>
          <p className="photo-note">Fotos reais dos cultos e encontros da CEI Barra.</p>
        </div>
      </section>

      <section id="midia" className="section media-section">
        <div className="container media-grid">
          <div className="media-copy">
            <p className="section-label">MÍDIA E CONTEÚDO</p>
            <h2>Continue perto, <em>mesmo de longe.</em></h2>
            <p>Use os canais oficiais para acompanhar mensagens, registros, avisos e novidades da CEI Barra.</p>
            <div className="social-grid">
              <a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer"><Instagram size={21} /><span><small>INSTAGRAM</small><strong>@ceibarraoficial</strong></span><ArrowRight size={16} /></a>
              <a href="https://www.youtube.com/@CeiBarra" target="_blank" rel="noreferrer"><Youtube size={21} /><span><small>YOUTUBE</small><strong>@CeiBarra</strong></span><ArrowRight size={16} /></a>
              <a href="https://www.facebook.com/ceibsj" target="_blank" rel="noreferrer"><Facebook size={21} /><span><small>FACEBOOK</small><strong>CEI Barra</strong></span><ArrowRight size={16} /></a>
            </div>
          </div>
          <a className="media-feature" href="https://www.youtube.com/@CeiBarra" target="_blank" rel="noreferrer">
            <img src={img('cei-palavra.jpg')} alt="Momento de ministração da Palavra" loading="lazy" />
            <span className="media-play"><Play size={20} fill="currentColor" /></span>
            <div className="media-feature-copy"><small>YOUTUBE</small><strong>Acompanhe uma Palavra e fique por dentro.</strong><span>Visitar canal <ArrowRight size={15} /></span></div>
          </a>
        </div>
      </section>

      <section id="oracao" className="prayer-section">
        <div className="container prayer-grid-new">
          <div className="prayer-photo-new"><img src={img('cei-mulheres.jpg')} alt="Encontro da comunidade da CEI Barra" loading="lazy" /></div>
          <div className="prayer-panel">
            {!sent ? (
              <>
                <p className="section-label">PEDIDO DE ORAÇÃO</p>
                <h2>Quer compartilhar algo para que a gente possa <em>orar com você?</em></h2>
                <p className="prayer-intro">Preencha os campos abaixo. O formulário é uma forma simples de facilitar esse contato.</p>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <label>Seu nome<input required placeholder="Seu nome" /></label>
                  <label>Contato <span>(opcional)</span><input placeholder="Instagram ou telefone" /></label>
                  <label>Seu pedido<textarea required placeholder="Escreva aqui..." /></label>
                  <button className="form-button" type="submit">Enviar pedido <Send size={16} /></button>
                </form>
              </>
            ) : (
              <div className="sent-state">
                <div className="sent-icon"><Heart size={23} /></div>
                <p className="section-label">MENSAGEM RECEBIDA</p>
                <h2>Obrigado por <em>compartilhar.</em></h2>
                <p>Seu pedido foi preparado. Para enviar outro, clique abaixo.</p>
                <button className="outline-button" type="button" onClick={() => setSent(false)}>Enviar outro pedido</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="visita" className="visit-section-new">
        <div className="container visit-grid-new">
          <div className="visit-copy-new">
            <p className="section-label light-label">COMO CHEGAR</p>
            <h2>Será uma alegria <em>receber você.</em></h2>
            <p>Encontre o endereço, abra a rota no mapa e confira os avisos mais recentes antes de sair de casa.</p>
            <div className="address-card">
              <MapPin size={20} />
              <div><small>ENDEREÇO</small><strong>R. Aristóbulo Pelodan, 499</strong><span>Barra de São João • Casimiro de Abreu/RJ</span></div>
            </div>
            <div className="visit-actions">
              <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir rota <Navigation size={16} /></a>
              <a className="btn btn-outline-light" href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer">Ver avisos <Instagram size={16} /></a>
            </div>
          </div>
          <div className="map-box">
            <iframe title="Mapa da CEI Barra" src="https://www.google.com/maps?q=Rua%20Arist%C3%B3bulo%20Pelodan%2C%20499%2C%20Barra%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="faq-section-new">
        <div className="container faq-grid-new">
          <div><p className="section-label">DÚVIDAS</p><h2>Antes de <em>chegar.</em></h2><p>Informações essenciais para quem está conhecendo a CEI Barra agora.</p></div>
          <div className="faq-list-new">
            {faqs.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={18} /></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <footer className="footer-new">
        <div className="container footer-top-new">
          <div className="footer-brand-new">
            <a className="brand" href="#inicio"><img src={img('cei-barra-logo.png')} alt="CEI Barra" /><div><strong>CEI Barra</strong><span>Centro Evangelístico Internacional</span></div></a>
            <p>Barra de São João • Casimiro de Abreu/RJ</p>
          </div>
          <div><small>NAVEGAÇÃO</small><a href="#igreja">A Igreja</a><a href="#momentos">Momentos</a><a href="#midia">Mídia</a><a href="#oracao">Oração</a></div>
          <div><small>REDES</small><a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/@CeiBarra" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.facebook.com/ceibsj" target="_blank" rel="noreferrer">Facebook</a></div>
          <div><small>ENDEREÇO</small><p>R. Aristóbulo Pelodan, 499<br />Barra de São João<br />Casimiro de Abreu/RJ</p></div>
        </div>
        <div className="container footer-bottom-new"><span>© CEI Barra</span><span>Centro Evangelístico Internacional</span><a href="#inicio">Voltar ao topo <ArrowRight size={14} /></a></div>
      </footer>

      <div className="mobile-bottom-bar"><a href="#visita"><MapPin size={15} /> Como chegar</a><a href="#oracao"><MessageCircle size={15} /> Pedir oração</a></div>
    </main>
  );
}
