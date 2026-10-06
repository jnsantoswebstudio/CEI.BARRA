'use client';

import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronDown,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Play,
  Send,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const assetPath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Rua+Arist%C3%B3bulo+Pelodan%2C+499%2C+Barra+de+S%C3%A3o+Jo%C3%A3o%2C+Casimiro+de+Abreu%2C+RJ';

const channels = [
  {
    icon: Instagram,
    eyebrow: 'Instagram',
    title: 'Acompanhe o dia a dia',
    text: 'Avisos, registros dos encontros e novidades da comunidade.',
    label: '@ceibarraoficial',
    href: 'https://www.instagram.com/ceibarraoficial',
  },
  {
    icon: Play,
    eyebrow: 'YouTube',
    title: 'Assista e acompanhe',
    text: 'Conteúdos e transmissões para continuar perto, mesmo de longe.',
    label: '@CeiBarra',
    href: 'https://www.youtube.com/@CeiBarra',
  },
  {
    icon: Camera,
    eyebrow: 'Galeria',
    title: 'Veja nossos momentos',
    text: 'Um acervo de fotografias dos cultos, encontros e celebrações.',
    label: 'Abrir acervo',
    href: 'https://flic.kr/ps/46AsE8',
  },
];

const gallery = [
  {
    src: assetPath('cei-interior.jpg'),
    alt: 'Interior do espaço de celebração da CEI Barra',
    label: 'Celebração',
    size: 'gallery-main',
  },
  {
    src: assetPath('cei-palavra.jpg'),
    alt: 'Momento de ministração da Palavra na CEI Barra',
    label: 'Palavra',
    size: 'gallery-side',
  },
  {
    src: assetPath('cei-mulheres.jpg'),
    alt: 'Encontro da comunidade da CEI Barra',
    label: 'Encontros',
    size: 'gallery-side',
  },
  {
    src: assetPath('cei-culto-comunidade.jpg'),
    alt: 'Comunidade reunida na CEI Barra',
    label: 'Comunidade',
    size: 'gallery-bottom',
  },
  {
    src: assetPath('cei-celebracao.jpg'),
    alt: 'Celebração na CEI Barra',
    label: 'Momentos',
    size: 'gallery-bottom',
  },
];

const faqs = [
  ['Onde fica a CEI Barra?', 'Na Rua Aristóbulo Pelodan, 499, em Barra de São João, Casimiro de Abreu/RJ. Você pode abrir a rota diretamente pelo Google Maps.'],
  ['Quais são os horários dos cultos?', 'A programação deve ser confirmada com a liderança. Para acompanhar os horários e avisos mais recentes, veja o Instagram oficial da CEI Barra.'],
  ['Posso enviar um pedido de oração?', 'Sim. O formulário desta página foi pensado para facilitar esse contato de forma simples e acolhedora.'],
  ['Como posso acompanhar a igreja de longe?', 'Você pode acompanhar os canais oficiais no Instagram, YouTube e no acervo de fotos.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="CEI Barra — início">
            <span className="brand-mark-wrap">
              <img src={assetPath('cei-barra-logo.png')} alt="CEI Barra" className="brand-mark" />
            </span>
            <span className="brand-copy">
              <strong>CEI<span>.</span>BARRA</strong>
              <small>Centro Evangelístico Internacional</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#conectar">Conecte-se</a>
            <a href="#momentos">Momentos</a>
            <a href="#visita">Localização</a>
          </nav>

          <div className="header-actions">
            <a className="icon-link" href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer" aria-label="Instagram da CEI Barra">
              <Instagram size={17} />
            </a>
            <a className="header-cta" href="#visita">Planeje sua visita <ArrowUpRight size={16} /></a>
          </div>

          <button className="mobile-trigger" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {[
              ['Sobre', 'sobre'],
              ['Conecte-se', 'conectar'],
              ['Momentos', 'momentos'],
              ['Localização', 'visita'],
              ['Pedido de oração', 'oracao'],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<ArrowUpRight size={16} /></a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-backdrop">
          <img src={assetPath('cei-interior.jpg')} alt="" aria-hidden="true" fetchPriority="high" />
        </div>
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light"><span /> Barra de São João · Rio de Janeiro</div>
            <h1>Uma comunidade para <span>pertencer.</span></h1>
            <p className="hero-lead">Um lugar para viver a fé, crescer na Palavra e caminhar em comunhão com pessoas reais.</p>
            <div className="hero-buttons">
              <a className="button-primary" href="#visita">Quero conhecer <ArrowUpRight size={17} /></a>
              <a className="button-ghost" href="#oracao">Preciso de oração <Heart size={16} /></a>
            </div>
            <div className="hero-trust">
              <div className="mini-avatars">
                <span><Users size={13} /></span><span><Heart size={13} /></span><span><BookOpen size={13} /></span>
              </div>
              <p>Palavra · Comunidade · Presença</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-card">
              <img src={assetPath('cei-interior.jpg')} alt="Interior da CEI Barra durante uma celebração" fetchPriority="high" />
              <div className="hero-photo-overlay" />
              <div className="hero-photo-caption">
                <span>CEI Barra</span>
                <strong>Uma casa aberta para você.</strong>
              </div>
            </div>
            <div className="hero-floating-card">
              <span className="floating-icon"><MapPin size={17} /></span>
              <span><small>Onde estamos</small><strong>Barra de São João</strong></span>
            </div>
            <div className="hero-number">01</div>
          </div>
        </div>
        <a className="hero-scroll" href="#sobre"><span>Desça para conhecer</span><ChevronDown size={17} /></a>
      </section>

      <section id="sobre" className="intro-section section-pad">
        <div className="page-width intro-grid">
          <div className="intro-aside">
            <div className="eyebrow"><span /> Quem somos</div>
            <div className="intro-side-note">Uma presença local, próxima e acolhedora.</div>
          </div>
          <div className="intro-content">
            <p className="display-kicker">Mais do que um culto.</p>
            <h2>Um lugar para <span>pertencer</span>, crescer e caminhar junto.</h2>
            <p className="body-large">A CEI Barra é uma igreja do Centro Evangelístico Internacional em Barra de São João. Aqui, a presença digital serve a uma ideia simples: facilitar o primeiro passo e aproximar pessoas da comunidade.</p>
            <div className="intro-points">
              <div><span>01</span><strong>Palavra</strong><p>Conteúdo que orienta e fortalece a caminhada.</p></div>
              <div><span>02</span><strong>Comunidade</strong><p>Encontros que criam vínculos e novas histórias.</p></div>
              <div><span>03</span><strong>Acolhimento</strong><p>Um caminho claro para quem está chegando.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="conectar" className="feature-section">
        <div className="page-width feature-grid">
          <div className="feature-intro">
            <div className="eyebrow eyebrow-light"><span /> Seu próximo passo</div>
            <h2>Encontre o seu jeito de <span>se conectar.</span></h2>
            <p>Você pode começar pelo que faz sentido hoje: conhecer o espaço, enviar um pedido ou acompanhar os canais oficiais.</p>
          </div>
          <div className="feature-cards">
            <a href="#visita" className="feature-card">
              <div className="feature-card-top"><span className="feature-index">01</span><MapPin size={21} /></div>
              <h3>Planeje sua visita</h3>
              <p>Endereço e rota em um só lugar para chegar com tranquilidade.</p>
              <span className="feature-link">Como chegar <ArrowUpRight size={15} /></span>
            </a>
            <a href="#oracao" className="feature-card featured">
              <div className="feature-card-top"><span className="feature-index">02</span><Heart size={21} /></div>
              <h3>Peça uma oração</h3>
              <p>Um espaço acolhedor para compartilhar aquilo que está no seu coração.</p>
              <span className="feature-link">Enviar pedido <ArrowUpRight size={15} /></span>
            </a>
            <a href="#canais" className="feature-card">
              <div className="feature-card-top"><span className="feature-index">03</span><Play size={21} /></div>
              <h3>Acompanhe de onde estiver</h3>
              <p>Instagram, YouTube e galeria reunidos para manter você por perto.</p>
              <span className="feature-link">Ver canais <ArrowUpRight size={15} /></span>
            </a>
          </div>
        </div>
      </section>

      <section id="momentos" className="moments-section section-pad">
        <div className="page-width">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow"><span /> Momentos reais</div>
              <h2>Veja o que acontece <span>por aqui.</span></h2>
            </div>
            <a className="text-link" href="https://flic.kr/ps/46AsE8" target="_blank" rel="noreferrer">Abrir galeria <ExternalLink size={15} /></a>
          </div>

          <div className="gallery-grid">
            {gallery.map((photo) => (
              <figure key={photo.src} className={`gallery-card ${photo.size}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="gallery-shade" />
                <figcaption><span>{photo.label}</span><ArrowUpRight size={15} /></figcaption>
              </figure>
            ))}
          </div>
          <div className="gallery-note"><Sparkles size={14} /> Fotografias reais dos encontros e celebrações da CEI Barra.</div>
        </div>
      </section>

      <section id="oracao" className="prayer-section">
        <div className="page-width prayer-grid">
          <div className="prayer-photo">
            <img src={assetPath('cei-mulheres.jpg')} alt="Encontro de mulheres na CEI Barra" loading="lazy" />
            <div className="prayer-photo-shade" />
            <div className="prayer-quote"><span>“</span><p>Você não precisa caminhar sozinho.</p></div>
          </div>
          <div className="prayer-form-card">
            {sent ? (
              <div className="success-state">
                <div className="success-icon"><Heart size={22} /></div>
                <div className="eyebrow"><span /> Recebemos sua mensagem</div>
                <h2>Seu pedido foi preparado.</h2>
                <p>Obrigado por confiar esse momento à CEI Barra.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="reset-button">Enviar outro pedido</Button>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
                <div className="eyebrow"><span /> Pedido de oração</div>
                <h2>O que você gostaria de compartilhar?</h2>
                <p className="form-intro">Escreva com tranquilidade. Este espaço foi criado para facilitar um contato sincero.</p>
                <div className="form-row">
                  <label htmlFor="prayer-name">Seu nome<input aria-hidden="true" tabIndex={-1} className="fake-hidden" /></label>
                  <Input id="prayer-name" required name="name" placeholder="Seu nome" />
                </div>
                <div className="form-row">
                  <label htmlFor="contact-preference">Forma de retorno</label>
                  <NativeSelect id="contact-preference" name="contactPreference" defaultValue="instagram">
                    <NativeSelectOption value="instagram">Mensagem pelo Instagram</NativeSelectOption>
                    <NativeSelectOption value="phone">Telefone, após confirmação do número</NativeSelectOption>
                    <NativeSelectOption value="none">Não preciso de retorno</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div className="form-row">
                  <label htmlFor="prayer-contact">Contato <span>(opcional)</span></label>
                  <Input id="prayer-contact" name="contact" placeholder="@instagram ou telefone" />
                </div>
                <div className="form-row">
                  <label htmlFor="prayer-message">Seu pedido</label>
                  <Textarea id="prayer-message" required name="message" placeholder="Escreva aqui…" />
                </div>
                <Button type="submit" className="form-submit">Enviar pedido <Send size={16} /></Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="visita" className="visit-section section-pad">
        <div className="page-width visit-grid">
          <div className="visit-copy">
            <div className="eyebrow"><span /> Venha conhecer</div>
            <h2>A sua primeira visita começa <span>aqui.</span></h2>
            <p>Você não precisa saber tudo antes de chegar. Aqui estão as informações essenciais para encontrar a CEI Barra.</p>

            <div className="visit-details">
              <div className="visit-detail"><div className="detail-icon"><MapPin size={18} /></div><div><small>Endereço</small><strong>R. Aristóbulo Pelodan, 499</strong><span>Barra de São João · Casimiro de Abreu/RJ</span></div></div>
              <div className="visit-detail"><div className="detail-icon"><CalendarDays size={18} /></div><div><small>Programação</small><strong>Confira os horários atuais</strong><span>Veja os avisos mais recentes no Instagram oficial.</span></div></div>
            </div>

            <div className="visit-buttons">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="button-primary button-dark">Abrir rota <Navigation size={17} /></a>
              <a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer" className="button-text">Ver avisos no Instagram <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="map-frame">
            <iframe title="Mapa da CEI Barra" src="https://www.google.com/maps?q=Rua%20Arist%C3%B3bulo%20Pelodan%2C%20499%2C%20Barra%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20RJ&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-label"><span>CEI.BARRA</span><strong>Barra de São João</strong><MapPin size={16} /></div>
          </div>
        </div>
      </section>

      <section id="canais" className="channels-section section-pad">
        <div className="page-width">
          <div className="section-heading-centered">
            <div className="eyebrow justify-center"><span /> Canais oficiais</div>
            <h2>Continue perto, <span>mesmo de longe.</span></h2>
            <p>Escolha por onde acompanhar a CEI Barra e fique por dentro dos próximos momentos.</p>
          </div>
          <div className="channels-grid">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return <a key={channel.title} href={channel.href} target="_blank" rel="noreferrer" className="channel-card">
                <div className="channel-icon"><Icon size={20} /></div>
                <div className="channel-text"><span>{channel.eyebrow}</span><h3>{channel.title}</h3><p>{channel.text}</p><strong>{channel.label} <ArrowUpRight size={14} /></strong></div>
              </a>;
            })}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="page-width faq-grid">
          <div>
            <div className="eyebrow"><span /> Dúvidas comuns</div>
            <h2>Antes de <span>chegar.</span></h2>
            <p>Informação clara deixa o primeiro passo mais leve.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question} className="faq-item">
              <summary><span>{question}</span><ChevronDown size={19} /></summary>
              <p>{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-orb orb-a" /><div className="final-orb orb-b" />
        <div className="page-width final-inner">
          <span className="final-badge"><Users size={14} /> CEI Barra · Barra de São João</span>
          <h2>Um lugar para <span>viver a fé.</span></h2>
          <p>Quando você estiver pronto para conhecer, a porta está aberta.</p>
          <div className="final-actions">
            <a href="#visita" className="button-primary">Planejar minha visita <ArrowUpRight size={17} /></a>
            <a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer" className="button-ghost">Falar com a igreja <MessageCircle size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <div className="footer-brand">
            <a href="#inicio" className="brand footer-brand-lockup"><span className="brand-mark-wrap"><img src={assetPath('cei-barra-logo.png')} alt="CEI Barra" className="brand-mark" /></span><span className="brand-copy"><strong>CEI<span>.</span>BARRA</strong><small>Centro Evangelístico Internacional</small></span></a>
            <p>Uma presença digital para aproximar pessoas da comunidade da CEI Barra.</p>
          </div>
          <div className="footer-column"><span>Navegação</span><a href="#sobre">Sobre</a><a href="#conectar">Conecte-se</a><a href="#momentos">Momentos</a><a href="#visita">Localização</a></div>
          <div className="footer-column"><span>Endereço</span><p>R. Aristóbulo Pelodan, 499<br />Barra de São João<br />Casimiro de Abreu/RJ</p></div>
        </div>
        <div className="page-width footer-bottom"><span>CEI.BARRA</span><span>Centro Evangelístico Internacional</span><a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer">Instagram oficial <ExternalLink size={13} /></a></div>
      </footer>

      <div className="mobile-cta-bar">
        <a href="#visita"><MapPin size={15} /> Como chegar</a>
        <a href="#oracao"><Heart size={15} /> Pedir oração</a>
      </div>
    </main>
  );
}
