'use client';

import { useState } from 'react';
import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

interface Experience {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  results: string[];
  image: string;
  alt: string;
  category: 'boulangerie' | 'patisserie' | 'industriel';
}

const ExperiencesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeExperience, setActiveExperience] = useState(0);

  const categories = [
    { id: 'all', label: 'Toutes', icon: 'StarIcon' },
    { id: 'boulangerie', label: 'Boulangerie', icon: 'ShoppingCartIcon' },
    { id: 'patisserie', label: 'Pâtisserie', icon: 'StarIcon' },
    { id: 'industriel', label: 'Industriel', icon: 'BuildingOfficeIcon' }
  ];

  const experiences: Experience[] = [
    {
      id: 'boulangerie-1',
      title: 'Transformation d\'une Boulangerie Artisanale',
      client: 'Boulangerie Le Pain Doré',
      location: 'Douala, Cameroun',
      description: 'Amélioration de la qualité et de la constance des produits grâce à notre farine premium. Réduction des pertes et augmentation de la satisfaction client.',
      results: [
        'Réduction de 85% des produits ratés',
        'Augmentation de 40% de la clientèle',
        'Amélioration de la texture et du goût',
        'Standardisation des recettes réussie'
      ],
      image: '/assets/images/galerie-1.jpg',
      alt: 'Boulangerie moderne avec pains frais',
      category: 'boulangerie'
    },
    {
      id: 'patisserie-1',
      title: 'Excellence en Pâtisserie Fine',
      client: 'Pâtisserie La Douceur',
      location: 'Yaoundé, Cameroun',
      description: 'Passage à notre farine pâtisserie pour des gâteaux plus moelleux et une meilleure levée. Résultats exceptionnels dès la première utilisation.',
      results: [
        'Texture parfaite des génoises',
        'Meilleure conservation des produits',
        'Réduction des coûts de 15%',
        'Satisfaction client à 98%'
      ],
      image: '/assets/images/galerie-2.jpg',
      alt: 'Pâtisseries fines et élégantes',
      category: 'patisserie'
    },
    {
      id: 'industriel-1',
      title: 'Production Industrielle à Grande Échelle',
      client: 'Biscuiterie Camerounaise SA',
      location: 'Douala, Cameroun',
      description: 'Approvisionnement régulier en farine industrielle pour une production de 10 000 unités par jour. Qualité constante garantie.',
      results: [
        'Zéro interruption de production',
        'Qualité constante sur 12 mois',
        'Réduction des coûts de 20%',
        'Livraisons ponctuelles à 100%'
      ],
      image: '/assets/images/galerie-7.jpg',
      alt: 'Ligne de production industrielle',
      category: 'industriel'
    },
    {
      id: 'boulangerie-2',
      title: 'Expansion d\'une Chaîne de Boulangeries',
      client: 'Boulangerie Express',
      location: 'Yaoundé, Douala, Bafoussam',
      description: 'Standardisation de la qualité sur 5 points de vente grâce à notre farine. Même qualité, même goût, partout.',
      results: [
        'Standardisation réussie sur 5 sites',
        'Formation des équipes incluse',
        'Support technique dédié',
        'Expansion facilitée'
      ],
      image: '/assets/images/galerie-1.jpg',
      alt: 'Chaîne de boulangeries moderne',
      category: 'boulangerie'
    },
    {
      id: 'patisserie-2',
      title: 'Création de Pâtisseries Signature',
      client: 'Atelier Pâtissier Le Gourmet',
      location: 'Douala, Cameroun',
      description: 'Développement de recettes exclusives avec notre farine premium. Création d\'une gamme signature reconnue.',
      results: [
        'Gamme signature créée',
        'Reconnaissance médiatique',
        'Augmentation du CA de 50%',
        'Partenariat long terme'
      ],
      image: '/assets/images/galerie-2.jpg',
      alt: 'Pâtisseries signature élégantes',
      category: 'patisserie'
    }
  ];

  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <section id="nos-experiences" className="py-20 relative">
      {/* Background image with overlay - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/galerie-1.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="StarIcon" size={16} className="mr-2" />
            Nos Expériences
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des{' '}
            <span className="text-green-600">Succès</span>{' '}
            qui Parlent
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur business grâce à nos farines de qualité supérieure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveExperience(0);
              }}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-250 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon name={category.icon as any} size={16} className="mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Active Experience Details */}
        {filteredExperiences.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              {/* Experience Image */}
              <div className="relative h-96 lg:h-full">
                <AnimatedImage
                  src={filteredExperiences[activeExperience]?.image}
                  alt={filteredExperiences[activeExperience]?.alt}
                  className="w-full h-full object-cover"
                  animation="zoom"
                  speed={0.4}
                  key={filteredExperiences[activeExperience]?.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-lg font-bold capitalize">
                  {filteredExperiences[activeExperience]?.category}
                </div>
              </div>

              {/* Experience Information */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {filteredExperiences[activeExperience]?.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900">{filteredExperiences[activeExperience]?.client}</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <Icon name="MapPinIcon" size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-600">{filteredExperiences[activeExperience]?.location}</span>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {filteredExperiences[activeExperience]?.description}
                </p>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Icon name="ChartBarIcon" size={20} className="mr-2" />
                    Résultats Obtenus
                  </h4>
                  <div className="space-y-3">
                    {filteredExperiences[activeExperience]?.results.map((result, idx) => (
                      <div key={idx} className="flex items-start">
                        <Icon name="CheckCircleIcon" size={20} className="text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-green-600 mb-2" />
                  <p className="text-gray-700 italic">
                    "La qualité constante de la farine Sitrabcam a transformé notre business. 
                    Nos clients remarquent la différence et reviennent en masse."
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-semibold">
                    — {filteredExperiences[activeExperience]?.client}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience, index) => (
            <div
              key={experience.id}
              onClick={() => setActiveExperience(index)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-250 cursor-pointer transform hover:scale-105"
            >
              <div className="relative h-48">
                <AnimatedImage
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover"
                  animation="fadeBlur"
                  speed={0.3}
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {experience.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">{experience.title}</h4>
                <p className="text-sm text-gray-600 mb-1">
                  <Icon name="BuildingOfficeIcon" size={14} className="inline mr-1" />
                  {experience.client}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <Icon name="MapPinIcon" size={14} className="inline mr-1" />
                  {experience.location}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">{experience.description}</p>
                <div className="mt-4 flex items-center text-green-600 font-semibold text-sm">
                  Lire plus
                  <Icon name="ArrowRightIcon" size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

