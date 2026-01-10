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
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased text-gray-900 bg-white">{children}

        {/* Optimize scroll performance on mobile - disable transitions during scroll */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.innerWidth <= 768) {
                  let scrollTimer = null;
                  let isScrolling = false;
                  
                  function handleScrollStart() {
                    if (!isScrolling) {
                      isScrolling = true;
                      document.documentElement.classList.add('scrolling');
                      document.body.classList.add('scrolling');
                    }
                    
                    clearTimeout(scrollTimer);
                    scrollTimer = setTimeout(function() {
                      isScrolling = false;
                      document.documentElement.classList.remove('scrolling');
                      document.body.classList.remove('scrolling');
                    }, 150);
                  }
                  
                  window.addEventListener('scroll', handleScrollStart, { passive: true });
                }
              })();
            `,
          }}
        />

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
