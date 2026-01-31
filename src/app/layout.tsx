import React from 'react';
import '../styles/tailwind.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#16a34a',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sitrabcam.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Société Industrielle de Transformation de Blé au Cameroun - Sitrabcam',
  description: 'Société Industrielle de Transformation de Blé au Cameroun. Découvrez la farine premium pour boulangeries, restaurants et industries alimentaires. Qualité constante garantie, livraison rapide dans tout le Cameroun.',
  keywords: ['farine', 'Cameroun', 'Sitrabcam', 'boulangerie', 'farine LION', 'farine ELEPHANT', 'farine RENARD', 'farine ADORA', 'farine La Complète', 'farine BISCOTI'],
  authors: [{ name: 'Sitrabcam' }],
  creator: 'Sitrabcam',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Sitrabcam - Farine Cameroun',
    title: 'Sitrabcam - Société Industrielle de Transformation de Blé au Cameroun',
    description: 'Farine premium pour boulangeries, restaurants et industries. Qualité constante, livraison dans tout le Cameroun.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitrabcam - Farine Cameroun',
    description: 'Farine premium pour boulangeries et industries au Cameroun.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased text-gray-900 bg-white">{children}

        {/* Scripts chargés de manière asynchrone pour améliorer les performances */}
        <script 
          type="module" 
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ffarinecam7406back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.9"
          async
          defer
        />
        <script 
          type="module" 
          src="https://static.rocket.new/rocket-shot.js?v=0.0.1"
          async
          defer
        />
      </body>
    </html>
  );
}
