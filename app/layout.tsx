import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BlvckMeta — Your Block. Your People.',
    template: '%s | BlvckMeta',
  },
  description:
    'BlvckMeta is the neighborhood social network rooted in Black culture. Connect with your block, discover local vibes, and build community.',
  keywords: ['BlvckMeta', 'neighborhood', 'social network', 'Black culture', 'community'],
  authors: [{ name: "Ellington 'RIXX' Bass Sr." }],
  creator: 'Rixx City Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blvckmeta.com',
    siteName: 'BlvckMeta',
    title: 'BlvckMeta — Your Block. Your People.',
    description:
      'BlvckMeta is the neighborhood social network rooted in Black culture.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlvckMeta — Your Block. Your People.',
    description: 'BlvckMeta is the neighborhood social network rooted in Black culture.',
    creator: '@blvckmeta',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        {/* Skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Nav />

        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
