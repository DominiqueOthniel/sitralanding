import React from 'react';
import '../styles/tailwind.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#16a34a',
};

export const metadata = {
  title: 'Société Industrielle de Transformation de Blé au Cameroun - Sitrabcam',
  description: 'Société Industrielle de Transformation de Blé au Cameroun. Découvrez la farine premium pour boulangeries, restaurants et industries alimentaires. Qualité constante garantie, livraison rapide dans tout le Cameroun.',
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
    <html lang="fr" className="scroll-smooth md:scroll-smooth">
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
