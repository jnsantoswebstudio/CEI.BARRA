'use client';

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ExternalLink,
  Heart,
  Images,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Play,
  Send,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Rua+Arist%C3%B3bulo+Pelodan%2C+499%2C+Barra+de+S%C3%A3o+Jo%C3%A3o%2C+Casimiro+de+Abreu%2C+RJ';

const channels = [
  {
    icon: Camera,
    title: 'Instagram',
    description: 'Avisos, registros e novidades da comunidade.',
    label: '@ceibarraoficial',
    href: 'https://www.instagram.com/ceibarraoficial',
  },
  {
    icon: Play,
    title: 'YouTube',
    description: 'Conteúdos e transmissões em um canal próprio.',
    label: '@CeiBarra',
    href: 'https://www.youtube.com/@CeiBarra',
  },
  {
    icon: Images,
    title: 'Galeria',
    description: 'Fotografias reais dos cultos e eventos da CEI Barra.',
    label: 'Ver acervo',
    href: 'https://flic.kr/ps/46AsE8',
  },
];

const gallery = [
  {
    src: '/images/cei-culto-comunidade.jpg',
    alt: 'Comunidade reunida na CEI Barra',
    label: 'Comunhão',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/cei-palavra.jpg',
    alt: 'Ministração da Palavra na CEI Barra',
    label: 'Palavra',
    className: '',
  },
  {
    src: '/images/cei-mulheres.jpg',
    alt: 'Encontro realizado na CEI Barra',
    label: 'Encontros',
    className: '',
  },
  {
    src: '/images/cei-celebracao.jpg',
    alt: 'Celebração no templo da CEI Barra',
    label: 'Celebração',
    className: 'md:col-span-2',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f5ef] text-[#111814]">
      <div className="bg-[#0f6b48] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.19em] text-white/90 sm:text-[11px]">
        Conceito visual não oficial — JN Santos Web Studio
      </div>

      <header className="absolute left-0 right-0 top-[32px] z-30 border-b border-white/15">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#inicio" className="flex items-center gap-3" aria-label="CEI Barra — Início">
            <img
              src="./images/cei-barra-logo.png"
              alt="Símbolo CEI Barra"
              width="56"
              height="56"
              className="h-14 w-14 rounded-full border border-white/20 object-cover shadow-lg"
            />
            <div className="leading-none text-white">
              <strong className="block font-serif text-2xl font-semibold tracking-wide">CEI BARRA</strong>
              <span className="text-[9px] uppercase tracking-[0.22em] text-white/65">
                Centro Evangelístico Internacional
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex" aria-label="Menu principal">
            <a href="#sobre" className="transition hover:text-white">Quem somos</a>
            <a href="#conectar" className="transition hover:text-white">Conecte-se</a>
            <a href="#galeria" className="transition hover:text-white">Momentos</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.instagram.com/ceibarraoficial"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#0d5038]"
              aria-label="Instagram da CEI Barra"
            >
              <Camera size={18} />
            </a>
            <a href="#visita" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#b9ef70] px-5 text-sm font-bold text-[#102219] transition hover:bg-white">
              Planeje sua visita <ArrowRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#09120e]/97 px-5 py-5 text-white shadow-2xl lg:hidden" aria-label="Menu para celular">
            {[
              ['Quem somos', 'sobre'],
              ['Conecte-se', 'conectar'],
              ['Momentos', 'galeria'],
              ['Contato', 'contato'],
            ].map(([item, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-white/10 py-3 text-lg">
                {item} <ChevronRight size={18} className="text-[#b9ef70]" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative isolate min-h-[820px] bg-[#08120e] pt-28 md:min-h-[900px]">
        <img src="./images/cei-interior.jpg" alt="Interior da CEI Barra durante uma reunião" className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-65" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,11,8,.96)_0%,rgba(4,11,8,.78)_43%,rgba(4,11,8,.25)_78%,rgba(4,11,8,.54)_100%)]" />
        <div className="absolute -left-28 top-64 -z-10 h-96 w-96 rounded-full bg-[#34d399]/15 blur-3xl" />

        <div className="mx-auto flex min-h-[700px] max-w-[1440px] items-end px-5 pb-16 pt-36 md:px-10 md:pb-24 lg:px-16">
          <div className="max-w-4xl text-white">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b9ef70]">
              <span className="h-px w-10 bg-[#b9ef70]" /> Uma casa para viver a fé
            </div>
            <h1 className="max-w-3xl font-serif text-[clamp(3.8rem,8.6vw,8.8rem)] font-medium leading-[0.86] tracking-[-0.045em]">
              Há lugar para <em className="font-normal text-[#b9ef70]">você</em> aqui.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/76 md:text-xl">
              Uma comunidade em Barra de São João para celebrar, crescer na Palavra e caminhar em comunhão.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#visita" className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#b9ef70] px-7 font-bold text-[#102219] transition hover:bg-white">
                Quero conhecer a CEI Barra <ArrowRight size={18} />
              </a>
              <a href="#oracao" className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-7 font-semibold text-white transition hover:bg-white/10">
                Enviar pedido de oração
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[42%] border-l border-t border-white/15 bg-black/30 p-7 backdrop-blur-md lg:block">
          <div className="flex items-center gap-4 text-white">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#b9ef70] text-[#102219]"><MapPin size={20} /></span>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">Encontre a gente</span>
              <strong className="mt-1 block text-sm">R. Aristóbulo Pelodan, 499 · Barra de São João</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="section-title mt-5 max-w-2xl">Fé que se vive em <em>comunidade.</em></h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4e5b53]">
              A CEI Barra é uma igreja do Centro Evangelístico Internacional em Barra de São João. Sua presença digital mostra uma comunidade que compartilha a Palavra, registra seus encontros e mantém canais ativos para caminhar perto das pessoas.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-[#6a756e]">
              Este conceito organiza essa presença em um único lugar: acolhe quem está chegando, orienta a primeira visita e conecta cada pessoa aos canais oficiais.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {['A serviço do Senhor Jesus', 'Barra de São João', 'Conteúdo e encontros'].map((tag) => (
                <span key={tag} className="rounded-full border border-[#cad2c8] bg-white/55 px-4 py-2 text-xs font-semibold text-[#33443a]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -left-5 -top-5 -z-10 h-full w-full rounded-t-[11rem] border border-[#93ab97]" />
            <div className="relative h-[620px] overflow-hidden rounded-t-[10rem] rounded-b-[2rem] bg-[#102219] shadow-[0_30px_80px_rgba(24,49,34,.2)]">
              <img src="./images/cei-palavra.jpg" alt="Celebração e Palavra na CEI Barra" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 pt-28 text-white">
                <p className="font-serif text-3xl leading-tight">“Uma igreja a serviço do Senhor Jesus.”</p>
                <span className="mt-3 block text-xs uppercase tracking-[0.2em] text-white/60">Apresentação pública da CEI Barra</span>
              </div>
            </div>
            <div className="absolute -right-4 top-14 rounded-2xl bg-[#b9ef70] p-5 text-[#102219] shadow-xl md:-right-10">
              <BookOpen size={23} />
              <strong className="mt-3 block text-sm">Palavra</strong>
              <span className="text-xs opacity-65">que orienta</span>
            </div>
          </div>
        </div>
      </section>

      <section id="conectar" className="bg-[#0b1812] px-5 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#b9ef70] before:bg-[#b9ef70]">Conecte-se</p>
              <h2 className="section-title mt-5 max-w-3xl text-white">Seu próximo passo começa de forma <em>simples.</em></h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/60 lg:pb-2">O site transforma curiosidade em um caminho claro: visitar, pedir oração ou acompanhar os canais da igreja.</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 lg:grid-cols-3">
            {[
              { icon: MapPin, number: '01', title: 'Planeje sua visita', text: 'Veja o endereço, abra a rota no mapa e encontre as informações essenciais antes de sair de casa.', href: '#visita', action: 'Ver localização' },
              { icon: Heart, number: '02', title: 'Peça uma oração', text: 'Um formulário acolhedor organiza o primeiro contato e permite enviar uma mensagem com privacidade.', href: '#oracao', action: 'Escrever pedido' },
              { icon: Play, number: '03', title: 'Acompanhe de onde estiver', text: 'Instagram, YouTube e galeria ficam reunidos para ninguém perder os próximos conteúdos.', href: '#canais', action: 'Ver canais oficiais' },
            ].map((card) => (
              <a key={card.number} href={card.href} className="group relative bg-[#102219] p-8 transition hover:bg-[#143223] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#b9ef70] text-[#102219]"><card.icon size={21} /></span>
                  <span className="font-mono text-xs text-white/30">{card.number}</span>
                </div>
                <h3 className="mt-14 font-serif text-4xl leading-none">{card.title}</h3>
                <p className="mt-5 leading-7 text-white/56">{card.text}</p>
                <span className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[#b9ef70]">{card.action} <ArrowRight size={16} className="transition group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#b9ef70]/20 bg-[#b9ef70]/5 p-5 text-sm text-white/70">
            <CircleAlert className="mt-0.5 shrink-0 text-[#b9ef70]" size={18} />
            <p><strong className="text-white">Programação e horários:</strong> informação a confirmar com a liderança. Na versão final, os horários fixos e a agenda de eventos aparecerão em destaque e poderão ser atualizados pela equipe.</p>
          </div>
        </div>
      </section>

      <section id="galeria" className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Momentos reais</p>
              <h2 className="section-title mt-5 max-w-3xl">Uma comunidade que já está em <em>movimento.</em></h2>
            </div>
            <a href="https://flic.kr/ps/46AsE8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-[#0f6b48] hover:underline">Ver acervo de fotos <ExternalLink size={16} /></a>
          </div>

          <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-4 md:auto-rows-[300px]">
            {gallery.map((photo) => (
              <figure key={photo.src} className={`group relative overflow-hidden rounded-[1.5rem] bg-[#102219] ${photo.className}`}>
                <img src={`.${photo.src}`} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#718078]">Imagens reais disponibilizadas no acervo público da CEI Barra. A seleção final será validada pela igreja antes da publicação oficial.</p>
        </div>
      </section>

      <section id="oracao" className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[2.5rem] bg-[#e3efde] lg:grid-cols-[.88fr_1.12fr]">
          <div className="relative isolate min-h-[520px] overflow-hidden bg-[#102219] p-8 text-white md:p-12 lg:min-h-[700px] lg:p-16">
            <img src="./images/cei-mulheres.jpg" alt="Momento de ministração na CEI Barra" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-38" loading="lazy" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,24,17,.42),rgba(10,24,17,.96))]" />
            <div className="flex h-full flex-col justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#b9ef70] text-[#102219]"><Heart size={23} /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b9ef70]">Pedido de oração</p>
                <h2 className="mt-5 max-w-lg font-serif text-5xl leading-[.95] md:text-6xl">Você não precisa caminhar sozinho.</h2>
                <p className="mt-6 max-w-md leading-7 text-white/65">Um canal respeitoso para quem deseja compartilhar um pedido e se aproximar da comunidade.</p>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-12 lg:p-16">
            {sent ? (
              <output className="flex min-h-[540px] flex-col items-center justify-center text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#0f6b48] text-white"><CheckCircle2 size={35} /></span>
                <h3 className="mt-7 font-serif text-4xl">Mensagem preparada.</h3>
                <p className="mt-4 max-w-md leading-7 text-[#5d6b62]">Este formulário é demonstrativo. Na versão oficial, o pedido será encaminhado com segurança ao canal definido pela igreja.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-8 h-12 rounded-full border-[#9ca99f] px-6">Preencher novamente</Button>
              </output>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f6b48]">Fale com a igreja</p>
                  <h3 className="mt-3 font-serif text-4xl leading-tight">Como podemos orar por você?</h3>
                  <p className="mt-3 text-sm leading-6 text-[#66736b]">Demonstração: nenhum dado será enviado neste protótipo.</p>
                </div>
                <label htmlFor="prayer-name" className="block text-sm font-semibold">Seu nome</label>
                <div className="-mt-4"><Input id="prayer-name" required name="name" placeholder="Como podemos chamar você?" className="h-12 rounded-xl border-[#aebcae] bg-white/65 px-4" /></div>
                <label htmlFor="contact-preference" className="block text-sm font-semibold">Forma de retorno</label>
                <div className="-mt-4"><NativeSelect className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:border-[#aebcae] [&_select]:bg-white/65 [&_select]:px-4" id="contact-preference" name="contactPreference" defaultValue="instagram">
                    <NativeSelectOption value="instagram">Mensagem pelo Instagram</NativeSelectOption>
                    <NativeSelectOption value="phone">Telefone — após confirmação do número</NativeSelectOption>
                    <NativeSelectOption value="none">Não preciso de retorno</NativeSelectOption>
                  </NativeSelect></div>
                <label htmlFor="prayer-contact" className="block text-sm font-semibold">Contato (opcional)</label>
                <div className="-mt-4"><Input id="prayer-contact" name="contact" placeholder="Seu @ no Instagram ou telefone" className="h-12 rounded-xl border-[#aebcae] bg-white/65 px-4" /></div>
                <label htmlFor="prayer-message" className="block text-sm font-semibold">Pedido de oração</label>
                <div className="-mt-4"><Textarea id="prayer-message" required name="message" placeholder="Escreva sua mensagem com tranquilidade…" className="min-h-32 rounded-xl border-[#aebcae] bg-white/65 p-4" /></div>
                <Button type="submit" className="h-14 w-full rounded-full bg-[#0f6b48] px-7 text-base font-bold text-white hover:bg-[#0a5035]">
                  Preparar pedido <Send className="ml-2" size={17} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="visita" className="bg-[#0f6b48] px-5 py-24 text-white md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.76fr_1.24fr] lg:items-stretch">
          <div className="flex flex-col justify-between py-2">
            <div>
              <p className="eyebrow text-[#d2ffa0] before:bg-[#d2ffa0]">Venha nos conhecer</p>
              <h2 className="mt-6 font-serif text-6xl leading-[.92] tracking-[-0.035em] md:text-7xl">Sua primeira visita começa <em className="text-[#d2ffa0]">aqui.</em></h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-white/68">Abra a rota, consulte a programação atual nos canais oficiais e chegue com tranquilidade.</p>
            </div>
            <div className="mt-12 space-y-6 border-t border-white/20 pt-8">
              <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[#d2ffa0]" size={22} /><div><span className="text-xs uppercase tracking-[.16em] text-white/50">Endereço confirmado</span><p className="mt-1 font-semibold leading-6">Rua Aristóbulo Pelodan, 499<br />Barra de São João · Casimiro de Abreu/RJ</p></div></div>
              <div className="flex gap-4"><CalendarDays className="mt-1 shrink-0 text-[#d2ffa0]" size={22} /><div><span className="text-xs uppercase tracking-[.16em] text-white/50">Cultos e programação</span><p className="mt-1 font-semibold">Informação a confirmar</p></div></div>
            </div>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex h-14 w-fit items-center gap-3 rounded-full bg-[#d2ffa0] px-7 font-bold text-[#102219] transition hover:bg-white"><Navigation size={18} /> Abrir rota no Google Maps</a>
          </div>

          <div className="min-h-[520px] overflow-hidden rounded-[2rem] bg-[#d8e6d4] p-3 shadow-2xl">
            <iframe
              title="Mapa da CEI Barra"
              src="https://www.google.com/maps?q=Rua%20Arist%C3%B3bulo%20Pelodan%2C%20499%2C%20Barra%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20RJ&output=embed"
              className="h-full min-h-[496px] w-full rounded-[1.4rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="canais" className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <p className="eyebrow justify-center before:hidden">Canais oficiais</p>
            <h2 className="section-title mx-auto mt-5 max-w-3xl">Tudo reunido em um só <em>lugar.</em></h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#647169]">O site não substitui as redes sociais. Ele organiza os caminhos e leva cada pessoa ao conteúdo certo.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => (
              <a key={channel.title} href={channel.href} target="_blank" rel="noreferrer" className="group rounded-[1.6rem] border border-[#d4dcd1] bg-white/70 p-7 transition hover:-translate-y-1 hover:border-[#0f6b48]/35 hover:shadow-xl">
                <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#e3efde] text-[#0f6b48]"><channel.icon size={21} /></span><ExternalLink size={17} className="text-[#7f8c84]" /></div>
                <h3 className="mt-8 font-serif text-3xl">{channel.title}</h3>
                <p className="mt-3 leading-6 text-[#69766e]">{channel.description}</p>
                <span className="mt-8 block text-sm font-bold text-[#0f6b48]">{channel.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Dúvidas comuns</p>
            <h2 className="section-title mt-5">Antes de <em>chegar.</em></h2>
            <p className="mt-5 leading-7 text-[#68756d]">Respostas objetivas reduzem inseguranças e ajudam novos visitantes a decidir pelo primeiro passo.</p>
          </div>
          <div className="divide-y divide-[#cbd5ca] border-y border-[#cbd5ca]">
            {[
              ['Onde fica a CEI Barra?', 'Na Rua Aristóbulo Pelodan, 499, em Barra de São João, Casimiro de Abreu/RJ. O botão de rota abre o endereço no Google Maps.'],
              ['Quais são os horários dos cultos?', 'Os horários atuais precisam ser confirmados com a liderança. Enquanto isso, a programação pode ser consultada no Instagram oficial.'],
              ['Posso enviar um pedido de oração?', 'Sim. A proposta inclui um formulário próprio; o destino e a política de privacidade serão configurados com a igreja na versão oficial.'],
              ['A igreja possui WhatsApp?', 'O número oficial não foi informado. O botão está demonstrado no protótipo e será ativado somente após a confirmação do contato correto.'],
            ].map(([question, answer]) => (
              <details key={question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-2xl font-semibold"><span>{question}</span><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#9ead9f] text-[#0f6b48] transition group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pb-2 pt-4 leading-7 text-[#657169]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative isolate overflow-hidden bg-[#07100c] px-5 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="absolute -right-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#0f6b48]/35 blur-[100px]" />
        <div className="mx-auto max-w-[1120px] text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#b9ef70] text-[#102219]"><Users size={26} /></span>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.23em] text-[#b9ef70]">CEI Barra · Barra de São João</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-6xl leading-[.9] tracking-[-0.04em] md:text-8xl">Uma casa de fé. Uma comunidade para chamar de sua.</h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#visita" className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#b9ef70] px-8 font-bold text-[#102219] transition hover:bg-white">Planejar minha visita <ArrowRight size={18} /></a>
            <Dialog>
              <DialogTrigger render={<button aria-label="Falar com a CEI Barra pelo WhatsApp" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/25 px-8 font-bold text-white transition hover:bg-white/10" />}>
                <MessageCircle size={18} /> Falar pelo WhatsApp
              </DialogTrigger>
              <DialogContent className="max-w-md rounded-[1.6rem] bg-[#f4f5ef] p-7 text-[#111814]">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl">WhatsApp a confirmar</DialogTitle>
                  <DialogDescription className="mt-2 leading-6 text-[#627067]">
                    O número oficial da CEI Barra ainda não foi informado. Na versão final, este botão abrirá uma conversa pronta com a equipe da igreja.
                  </DialogDescription>
                </DialogHeader>
                <a href="https://www.instagram.com/ceibarraoficial" target="_blank" rel="noreferrer" className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f6b48] px-6 font-bold text-white">Usar o Instagram agora <ExternalLink size={16} /></a>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <footer className="bg-[#050b08] px-5 pb-28 pt-12 text-white/65 md:px-10 md:pb-12 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><img src="./images/cei-barra-logo.png" alt="CEI Barra" width="48" height="48" className="h-12 w-12 rounded-full" loading="lazy" /><strong className="font-serif text-2xl text-white">CEI BARRA</strong></div>
            <p className="mt-5 max-w-md text-sm leading-6">Centro Evangelístico Internacional de Barra de São João. Informações institucionais, horários e contatos serão validados antes da publicação oficial.</p>
          </div>
          <div><span className="text-xs font-bold uppercase tracking-[.18em] text-white">Navegação</span><div className="mt-4 grid gap-3 text-sm"><a href="#sobre">Quem somos</a><a href="#conectar">Conecte-se</a><a href="#galeria">Momentos</a><a href="#visita">Localização</a></div></div>
          <div><span className="text-xs font-bold uppercase tracking-[.18em] text-white">Endereço</span><p className="mt-4 text-sm leading-6">R. Aristóbulo Pelodan, 499<br />Barra de São João<br />Casimiro de Abreu/RJ</p></div>
        </div>
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 pt-7 text-xs md:flex-row md:items-center md:justify-between"><p>© Conceito CEI Barra. Todos os direitos reservados.</p><p className="text-white/40">Conceito visual não oficial — JN Santos Web Studio</p></div>
      </footer>

      <Dialog>
        <DialogTrigger render={<button className="fixed bottom-6 right-6 z-40 hidden h-14 items-center gap-3 rounded-full bg-[#b9ef70] px-5 font-bold text-[#102219] shadow-[0_18px_45px_rgba(0,0,0,.25)] transition hover:-translate-y-1 md:flex" aria-label="Abrir informação sobre WhatsApp" />}>
          <MessageCircle size={20} /> WhatsApp
        </DialogTrigger>
        <DialogContent className="max-w-md rounded-[1.6rem] bg-[#f4f5ef] p-7 text-[#111814]">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl">WhatsApp a confirmar</DialogTitle>
            <DialogDescription className="mt-2 leading-6 text-[#627067]">O número oficial não foi fornecido. Este atalho será ativado após a igreja confirmar o contato que deve receber as mensagens.</DialogDescription>
          </DialogHeader>
          <a href="#oracao" className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f6b48] px-6 font-bold text-white">Usar o formulário <ArrowRight size={16} /></a>
        </DialogContent>
      </Dialog>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-white/15 bg-[#07100c]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <a href="#visita" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#b9ef70] text-sm font-bold text-[#102219]"><MapPin size={16} /> Como chegar</a>
        <a href="#oracao" className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 text-sm font-bold text-white"><Heart size={16} /> Pedir oração</a>
      </div>
    </main>
  );
}
