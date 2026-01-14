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
  { value: "20+", label: "Années d\'expérience" },
  { value: "2,500+", label: "Clients satisfaits" },
  { value: "Toutes", label: "Villes du Cameroun" }];


  return (
    <section id="accueil" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 sm:pt-20" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
             <div className="space-y-4 sm:space-y-6">
               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-gray-900 leading-[1.15] tracking-tight">
                 Société{' '}
                 <span className="font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Industrielle</span>{' '}
                 de Transformation de Blé au Cameroun
               </h1>
              
               <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                 Garantie de qualité constante à chaque livraison pour des résultats de cuisson parfaits. 
                 Faites confiance au leader de la production de farine premium au Cameroun.
               </p>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={onOrderClick}
                className="group bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-base font-medium transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 min-h-[48px] touch-manipulation">
                <Icon name="ShoppingCartIcon" size={20} className="inline mr-2 group-hover:scale-110 transition-transform duration-300" />
                Commandez Maintenant
              </button>
              
              <button
                onClick={onWhatsAppClick}
                className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-base font-medium transition-all duration-300 rounded-lg shadow-sm hover:shadow-md active:scale-95 min-h-[48px] touch-manipulation">
                <Icon name="ChatBubbleLeftRightIcon" size={20} className="inline mr-2 group-hover:scale-110 transition-transform duration-300" />
                WhatsApp Contact
              </button>
            </div>

            {/* Trust Metrics - Mobile Responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 border-t border-gray-200">
              {trustMetrics.map((metric, index) =>
              <div key={index} className="group text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                    {metric.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Hero Image - Mobile Optimized */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent rounded-xl sm:rounded-2xl z-10"></div>
              <AnimatedImage
                src="/assets/images/galerie-1.jpg"
                alt="Boulanger professionnel pétrissant de la pâte avec de la farine de qualité supérieure dans une boulangerie moderne"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-700"
                animation="reveal"
                speed={0.5}
              />
              {/* Decorative gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating badge - Mobile Friendly */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">Qualité Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;