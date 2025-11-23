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
    <section id="accueil" className="relative min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium mb-8">
              <Icon name="ShieldCheckIcon" size={16} className="mr-2" />
              Qualité Certifiée ISO 22000
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              La Farine de{' '}
              <span className="font-semibold">Qualité Supérieure</span>{' '}
              du Cameroun
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Garantie de qualité constante à chaque livraison pour des résultats de cuisson parfaits. 
              Faites confiance au leader de la distribution de farine premium au Cameroun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={onOrderClick}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 text-base font-medium transition-colors duration-200">
                <Icon name="ShoppingCartIcon" size={20} className="inline mr-2" />
                Commandez Maintenant
              </button>
              
              <button
                onClick={onWhatsAppClick}
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-3.5 text-base font-medium transition-colors duration-200">
                <Icon name="ChatBubbleLeftRightIcon" size={20} className="inline mr-2" />
                WhatsApp Contact
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              {trustMetrics.map((metric, index) =>
              <div key={index} className="text-left">
                  <div className="text-3xl font-light text-gray-900 mb-1">
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
          <div className="relative">
            <div className="relative overflow-hidden">
              <AnimatedImage
                src="/assets/images/galerie-1.jpg"
                alt="Boulanger professionnel pétrissant de la pâte avec de la farine de qualité supérieure dans une boulangerie moderne"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                animation="reveal"
                speed={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;