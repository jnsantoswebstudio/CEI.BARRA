import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CEI Barra | Centro Evangelístico Internacional',
  description:
    'Conheça a CEI Barra em Barra de São João. Uma comunidade para viver a fé, crescer na Palavra e caminhar em comunhão.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'CEI Barra | Há lugar para você aqui',
    description:
      'Conheça a CEI Barra, encontre os canais oficiais e planeje sua visita à comunidade.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CEI Barra — site institucional' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CEI Barra | Há lugar para você aqui',
    description:
      'Conheça a CEI Barra, encontre os canais oficiais e planeje sua visita à comunidade.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
