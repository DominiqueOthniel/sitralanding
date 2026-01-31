/** @type {import('next').NextConfig} */
const nextConfig = {
    // EXPORT STATIQUE : Génère un site HTML pur (pas besoin de Node.js)
    output: 'export',
    // Trailing slash pour la version HTML : génère index.html dans chaque dossier (compatibilité hébergement statique)
    trailingSlash: true,
    // Chemins relatifs pour que le CSS/JS s'affichent correctement en version HTML (fichiers ou serveur)
    assetPrefix: './',

    // Désactiver les source maps en production pour améliorer les performances
    productionBrowserSourceMaps: false,
    distDir: process.env.DIST_DIR || '.next',
    
    // Compression et optimisation
    compress: true,
    poweredByHeader: false,
    
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    
    // Optimisation des images (unoptimized pour l'export statique)
    images: {
      unoptimized: true, // Requis pour l'export statique
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pixabay.com',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
    },
    
    // Optimisation du bundle (optimizeCss désactivé pour éviter les problèmes de CSS en export statique)
    experimental: {
      optimizeCss: false,
    },
    
    // Webpack config - loader component-tagger retiré pour éviter les erreurs de build
    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.(jsx|tsx)$/,
    //     exclude: [/node_modules/],
    //     use: [{
    //       loader: '@dhiwise/component-tagger/nextLoader',
    //     }],
    //   });
    //   return config;
    // },
  };
  
  export default nextConfig;
  