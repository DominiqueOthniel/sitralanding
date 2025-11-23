/** @type {import('next').NextConfig} */
const nextConfig = {
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
    
    // Optimisation des images
    images: {
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
    
    // Optimisation du bundle
    experimental: {
      optimizeCss: true,
    },
    
    webpack(config) {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: '@dhiwise/component-tagger/nextLoader',
        }],
      });
      return config;
    },
  };
  
  export default nextConfig;
  