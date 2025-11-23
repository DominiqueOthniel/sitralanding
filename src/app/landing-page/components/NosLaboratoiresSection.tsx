'use client';

import { useState } from 'react';
import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

const NosLaboratoiresSection = () => {
  const [activeLab, setActiveLab] = useState(0);

  const laboratories = [
    {
      name: 'Laboratoire de Contrôle Qualité',
      location: 'Douala - Siège Principal',
      description: 'Notre laboratoire principal effectue 12 tests différents sur chaque lot de farine avant conditionnement.',
      equipment: [
        'Analyseur de protéines',
        'Testeur de force boulangère (Alvéographe)',
        'Analyseur d\'humidité',
        'Testeur de cendres',
        'Analyseur de gluten',
        'Microscope électronique'
      ],
      image: '/assets/images/galerie-3.jpg',
      alt: 'Laboratoire de contrôle qualité moderne avec équipements d\'analyse'
    },
    {
      name: 'Laboratoire de Recherche & Développement',
      location: 'Douala - Siège Principal',
      description: 'Dédié à l\'innovation et au développement de nouvelles formulations de farine adaptées aux besoins locaux.',
      equipment: [
        'Équipements de test de recettes',
        'Four de test boulanger',
        'Analyseur nutritionnel',
        'Système de fermentation contrôlée',
        'Chambre climatique',
        'Équipements de test sensoriel'
      ],
      image: '/assets/images/galerie-3.jpg',
      alt: 'Laboratoire de recherche et développement avec équipements scientifiques'
    },
    {
      name: 'Laboratoire de Microbiologie',
      location: 'Douala - Siège Principal',
      description: 'Spécialisé dans les analyses microbiologiques et la détection de contaminants pour garantir la sécurité alimentaire.',
      equipment: [
        'Hotte à flux laminaire',
        'Étuve de culture',
        'Autoclave',
        'Microscope optique',
        'Analyseur de mycotoxines',
        'Système PCR'
      ],
      image: '/assets/images/galerie-3.jpg',
      alt: 'Laboratoire de microbiologie avec équipements stériles'
    }
  ];

  return (
    <section id="nos-laboratoires" className="py-20 relative">
      {/* Background image with overlay - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/galerie-3.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="BeakerIcon" size={16} className="mr-2" />
            Nos Laboratoires
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence{' '}
            <span className="text-green-600">Scientifique</span>{' '}
            et Innovation
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos laboratoires de pointe garantissent un contrôle qualité rigoureux et une recherche continue.
          </p>
        </div>

        {/* Laboratory Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {laboratories.map((lab, index) => (
            <button
              key={index}
              onClick={() => setActiveLab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-250 ${
                activeLab === index
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {lab.name}
            </button>
          ))}
        </div>

        {/* Active Laboratory Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Laboratory Image */}
            <div className="relative h-96 lg:h-full">
              <AnimatedImage
                src={laboratories[activeLab].image}
                alt={laboratories[activeLab].alt}
                className="w-full h-full object-cover"
                animation="zoom"
                speed={0.4}
                key={activeLab}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              
              {/* Location Badge */}
              <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                <Icon name="MapPinIcon" size={16} className="inline mr-2" />
                {laboratories[activeLab].location}
              </div>
            </div>

            {/* Laboratory Information */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {laboratories[activeLab].name}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {laboratories[activeLab].description}
              </p>

              {/* Equipment */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Icon name="CogIcon" size={20} className="mr-2" />
                  Équipements Principaux
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {laboratories[activeLab].equipment.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <Icon name="CheckIcon" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {laboratories[activeLab].equipment.length}
                  </div>
                  <div className="text-sm text-gray-600">Équipements</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Disponibilité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Laboratories Overview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {laboratories.map((lab, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-250 cursor-pointer"
              onClick={() => setActiveLab(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Icon name="BeakerIcon" size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{lab.name}</h4>
                  <p className="text-sm text-gray-600">{lab.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{lab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosLaboratoiresSection;

