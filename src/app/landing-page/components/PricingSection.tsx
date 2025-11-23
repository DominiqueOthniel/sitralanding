'use client';

import { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  pricePerSac: number;
  features: string[];
  popular?: boolean;
  savings?: string;
}

const PricingSection = () => {
  const [monthlyVolume, setMonthlyVolume] = useState(50);
  const [selectedCity, setSelectedCity] = useState('douala');

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Parfait pour les petites boulangeries et pâtisseries',
      minQuantity: 10,
      pricePerSac: 19500,
      features: [
        'Livraison sous 48h',
        'Support téléphonique',
        'Paiement à 30 jours',
        'Farine premium qualité'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Idéal pour restaurants et moyennes entreprises',
      minQuantity: 50,
      pricePerSac: 18500,
      features: [
        'Livraison sous 24h',
        'Support prioritaire',
        'Paiement à 45 jours',
        'Remise sur volume',
        'Conseiller dédié'
      ],
      popular: true,
      savings: '5%'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Solution pour production industrielle',
      minQuantity: 200,
      pricePerSac: 17200,
      features: [
        'Livraison express',
        'Support 24/7',
        'Paiement à 60 jours',
        'Prix préférentiels',
        'Gestionnaire de compte',
        'Formations incluses'
      ],
      savings: '12%'
    }
  ];

  const cities = [
    { id: 'douala', name: 'Douala', deliveryFee: 0 },
    { id: 'yaounde', name: 'Yaoundé', deliveryFee: 2500 },
    { id: 'bafoussam', name: 'Bafoussam', deliveryFee: 3500 },
    { id: 'garoua', name: 'Garoua', deliveryFee: 4500 },
    { id: 'bamenda', name: 'Bamenda', deliveryFee: 3000 },
    { id: 'maroua', name: 'Maroua', deliveryFee: 5000 }
  ];

  const calculateTotal = (tier: PricingTier) => {
    const quantity = Math.max(monthlyVolume, tier.minQuantity);
    const subtotal = quantity * tier.pricePerSac;
    const deliveryFee = cities.find(city => city.id === selectedCity)?.deliveryFee || 0;
    return subtotal + deliveryFee;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price).replace('XAF', 'XAF');
  };

  return (
    <section id="prix" className="py-20 relative">
      {/* Background image with overlay - Ligne de production industrielle et silos - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1629990391433-8e11ccb725ca?w=1920&q=75&auto=format&fit=crop)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="CurrencyDollarIcon" size={16} className="mr-2" />
            Tarifs Transparents
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des{' '}
            <span className="text-green-600">Prix Justes</span>{' '}
            pour Tous
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculez instantanément vos coûts avec notre tarification transparente. 
            Plus vous commandez, plus vous économisez.
          </p>
        </div>

        {/* Interactive Calculator */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Calculateur de Prix Personnalisé
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Volume Selector */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Volume mensuel (sacs de 25kg)
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Volume mensuel en sacs de 25kg"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>10</span>
                  <span className="font-bold text-green-600">{monthlyVolume} sacs</span>
                  <span>500+</span>
                </div>
              </div>
            </div>

            {/* City Selector */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Ville de livraison
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Ville de livraison"
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name} {city.deliveryFee > 0 && `(+${formatPrice(city.deliveryFee)} livraison)`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier) => {
            const isEligible = monthlyVolume >= tier.minQuantity;
            const total = calculateTotal(tier);
            const quantity = Math.max(monthlyVolume, tier.minQuantity);
            
            return (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-250 ${
                  tier.popular
                    ? 'ring-2 ring-green-500 scale-105'
                    : isEligible
                    ? 'hover:shadow-xl'
                    : 'opacity-60'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Plus Populaire
                    </div>
                  </div>
                )}

                {tier.savings && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{tier.savings}
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-green-600">
                      {formatPrice(tier.pricePerSac)}
                    </div>
                    <div className="text-sm text-gray-500">par sac de 25kg</div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="text-sm text-gray-600 mb-2">
                      Votre commande: {quantity} sacs
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(total)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Total mensuel (livraison incluse)
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="CheckIcon" size={16} className="text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  disabled={!isEligible}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-250 ${
                    isEligible
                      ? tier.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white' :'bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600' :'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isEligible
                    ? 'Choisir ce Plan'
                    : `Minimum ${tier.minQuantity} sacs`
                  }
                </button>

                {!isEligible && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Augmentez votre volume pour débloquer ce tarif
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Icon name="ClockIcon" size={16} className="mr-2" />
              <span className="font-semibold">Offre Limitée</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              -20% sur Votre Première Commande
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Testez notre qualité supérieure avec une remise exceptionnelle. 
              Offre valable jusqu'au 30 novembre 2024.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-250">
                <Icon name="ShoppingCartIcon" size={20} className="inline mr-2" />
                Profiter de l'Offre
              </button>
              <button className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors duration-250">
                <Icon name="PhoneIcon" size={20} className="inline mr-2" />
                Appeler Maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default PricingSection;