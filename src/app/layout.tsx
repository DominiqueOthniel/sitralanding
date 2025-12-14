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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sitrabcam.com'),
  title: {
    default: 'Sitrabcam - Farine Premium au Cameroun | Leader de la Transformation de Blé',
    template: '%s | Sitrabcam'
  },
  description: 'Sitrabcam est le leader de la production de farine premium au Cameroun. Farine enrichie en fer, zinc, acide folique et vitamine B12. Qualité constante garantie pour boulangeries, restaurants et industries alimentaires. Livraison rapide dans tout le Cameroun.',
  keywords: [
    'farine Cameroun',
    'farine premium',
    'farine enrichie',
    'farine boulangerie',
    'Sitrabcam',
    'farine de blé',
    'transformation blé Cameroun',
    'farine industrielle',
    'farine alimentaire',
    'farine qualité supérieure',
    'farine Douala',
    'farine CEMAC',
    'farine enrichie fer zinc',
    'farine vitamine B12',
    'farine acide folique'
  ],
  authors: [{ name: 'Sitrabcam' }],
  creator: 'Sitrabcam',
  publisher: 'Sitrabcam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CM',
    url: '/',
    siteName: 'Sitrabcam',
    title: 'Sitrabcam - Farine Premium au Cameroun | Leader de la Transformation de Blé',
    description: 'Sitrabcam est le leader de la production de farine premium au Cameroun. Farine enrichie en fer, zinc, acide folique et vitamine B12. Qualité constante garantie.',
    images: [
      {
        url: '/assets/images/galerie-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sitrabcam - Farine Premium au Cameroun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitrabcam - Farine Premium au Cameroun',
    description: 'Leader de la production de farine premium au Cameroun. Qualité constante garantie.',
    images: ['/assets/images/galerie-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  category: 'Food & Beverage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Données structurées JSON-LD pour le SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sitrabcam',
    legalName: 'Société Industrielle de Transformation de Blé au Cameroun',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sitrabcam.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sitrabcam.com'}/logo.png`,
    description: 'Leader de la production de farine premium au Cameroun. Farine enrichie en fer, zinc, acide folique et vitamine B12.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BP.9442',
      addressLocality: 'Douala',
      addressCountry: 'CM',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+237-233-39-23-09',
      contactType: 'Customer Service',
      areaServed: 'CM',
      availableLanguage: ['fr'],
    },
    sameAs: [
      // Ajoutez vos réseaux sociaux ici si disponibles
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://sitrabcam.com',
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
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
