'use client';

import Image from 'next/image';
import Icon from '../../../components/ui/AppIcon';
import AnimatedImage from '../../../components/ui/AnimatedImage';

interface HeroSectionProps {
  onOrderClick: () => void;
  onWhatsAppClick: () => void;
}

const HeroSection = ({ onOrderClick, onWhatsAppClick }: HeroSectionProps) => {
  const trustMetrics = [
  { value: "15+", label: "Années d\'expérience" },
  { value: "2,500+", label: "Clients satisfaits" },
  { value: "12", label: "Villes desservies" }];


  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay - Optimisé avec Next.js Image */}
      <div className="absolute inset-0 z-0 section-bg-image">
        <Image
          src="/assets/images/galerie-4.jpg"
          alt="Champs de blé"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/70 to-white/75 backdrop-blur-[0.5px]"></div>
      </div>
      
      {/* Background Pattern - Enhanced visibility */}
      <div className="absolute inset-0 opacity-8 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 section-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between mb-12">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Sitrabcam - Société Industrielle de Transformation de Blé au Cameroun"
                  width={160}
                  height={160}
                  className="w-40 h-auto drop-shadow-lg"
                  priority
                  quality={90}
                />
                <div className="text-sm hidden sm:block text-left text-gray-600">
                  <span className="block font-semibold text-green-700">Minoterie Sitrabcam</span>
                  <span className="block text-gray-500">Société Industrielle de Transformation de Blé au Cameroun</span>
                </div>
              </div>
              <div className="sm:hidden mt-4 text-xs text-gray-500">
                Minoterie Sitrabcam • Farines premium du Cameroun
              </div>
            </div>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="ShieldCheckIcon" size={16} className="mr-2" />
              Qualité Certifiée ISO 22000
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              La Farine de{' '}
              <span className="text-green-600">Qualité Supérieure</span>{' '}
              du Cameroun
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Garantie de qualité constante à chaque livraison pour des résultats de cuisson parfaits. 
              Faites confiance au leader de la distribution de farine premium au Cameroun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onOrderClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-xl shadow-lg hover-lift">

                <Icon name="ShoppingCartIcon" size={20} className="inline mr-2" />
                Commandez Maintenant
              </button>
              
              <button
                onClick={onWhatsAppClick}
                className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-lg hover-lift">

                <Icon name="ChatBubbleLeftRightIcon" size={20} className="inline mr-2" />
                WhatsApp Contact
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {trustMetrics.map((metric, index) =>
              <div key={index} className={`text-center transform transition-all duration-300 ease-out hover:scale-110 stagger-item`}>
                  <div className={`text-2xl md:text-3xl font-bold text-green-600 mb-1 animate-float metric-${index}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-3xl image-hover-tilt">
              <AnimatedImage
                src="/assets/images/galerie-1.jpg"
                alt="Boulanger professionnel pétrissant de la pâte avec de la farine de qualité supérieure dans une boulangerie moderne"
                className="w-full h-96 lg:h-[500px]"
                animation="reveal"
                speed={0.5}
              />

              
              {/* Floating Quality Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900">Qualité Garantie</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={24} className="text-gray-400" />
      </div>
    </section>);

};

export default HeroSection;