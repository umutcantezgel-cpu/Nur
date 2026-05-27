import type {Metadata} from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ToastProvider } from '@/contexts/toast-context';
import { ToastContainer } from '@/components/ui/toast-container';
import { GlobalLoader } from '@/components/ui/global-loader';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { WishlistProvider } from '@/contexts/wishlist-context';
import { constructMetadata } from '@/lib/metadata';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata({
  title: 'Nur | Licht für deine Seele',
  description: 'Trag dich in die VIP-Warteliste ein und erhalte exklusiven Zugang zu unserem ersten Drop.',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nur",
    "url": "https://ay-nur.de",
    "logo": "https://ay-nur.de/logo.svg",
    "description": "Licht für deine Seele. Premium Islamic Lifestyle und Handwerkskunst aus Istanbul."
  };

  return (
    <html lang="de" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased font-sans text-on-surface bg-bg-primary overflow-x-hidden min-h-screen flex flex-col" suppressHydrationWarning>
        <CursorGlow />
        <GlobalLoader />
        <ToastProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
