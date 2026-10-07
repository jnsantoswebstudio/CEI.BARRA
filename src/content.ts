export type Service = { id: string; day: string; time: string; title: string; description: string; location: string; active: boolean };
export type EventItem = { id: string; date: string; month: string; title: string; description: string; image: string; active: boolean };
export type SiteContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  welcomeTitle: string;
  welcomeText: string;
  welcomeImage: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  instagram: string;
  youtube: string;
  facebook: string;
  services: Service[];
  events: EventItem[];
};

export const defaultContent: SiteContent = {
  heroEyebrow: 'CENTRO EVANGELÍSTICO INTERNACIONAL',
  heroTitle: 'Uma igreja para viver a presença de Deus em comunidade.',
  heroText: 'Seja bem-vindo à CEI Barra. Aqui você encontra um lugar para adorar, aprender, servir e caminhar junto.',
  heroImage: 'cei-interior.jpg',
  welcomeTitle: 'Seja bem-vindo à CEI Barra',
  welcomeText: 'Somos uma comunidade cristã em Barra de São João, reunida para buscar a Deus, crescer na Palavra e cuidar uns dos outros. Chegue como você está. Será uma alegria receber você e sua família.',
  welcomeImage: 'cei-culto-comunidade.jpg',
  address: 'Rua Aristóbulo Pelodan, 499',
  city: 'Barra de São João • Casimiro de Abreu/RJ',
  phone: '(22) 99999-9999',
  email: 'contato@ceibarra.org.br',
  instagram: 'https://www.instagram.com/ceibarraoficial',
  youtube: 'https://www.youtube.com/@CeiBarra',
  facebook: 'https://www.facebook.com/ceibsj',
  services: [
    { id: '1', day: 'DOMINGO', time: '18:00', title: 'Culto de Celebração', description: 'Um tempo de louvor, Palavra e comunhão para toda a família.', location: 'CEI Barra', active: true },
    { id: '2', day: 'QUARTA', time: '19:30', title: 'Culto da Palavra', description: 'Uma noite para aprofundar a fé e crescer no conhecimento da Palavra.', location: 'CEI Barra', active: true },
    { id: '3', day: 'SEXTA', time: '19:30', title: 'Encontro de Oração', description: 'Momento de intercessão, cuidado e busca pela presença de Deus.', location: 'CEI Barra', active: true },
  ],
  events: [
    { id: '1', date: '18', month: 'OUT', title: 'Celebração em família', description: 'Uma noite especial de louvor e comunhão. Acompanhe os avisos nos canais oficiais.', image: 'cei-celebracao.jpg', active: true },
    { id: '2', date: '25', month: 'OUT', title: 'Encontro da comunidade', description: 'Um momento para estar juntos, compartilhar e fortalecer vínculos.', image: 'cei-mulheres.jpg', active: true },
  ],
};

const KEY = 'cei-barra-content-v3';
export function loadContent(): SiteContent {
  try {
    const saved = localStorage.getItem(KEY);
    if (!saved) return defaultContent;
    const parsed = JSON.parse(saved) as SiteContent;
    return {
      ...defaultContent,
      ...parsed,
      services: Array.isArray(parsed.services) ? parsed.services : defaultContent.services,
      events: Array.isArray(parsed.events) ? parsed.events : defaultContent.events,
    };
  } catch {
    return defaultContent;
  }
}
export function saveContent(content: SiteContent) {
  localStorage.setItem(KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('cei-content-updated'));
}
export function resetContent() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event('cei-content-updated'));
}
