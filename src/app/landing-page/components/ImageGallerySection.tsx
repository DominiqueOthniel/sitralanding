'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '../../../components/ui/AppIcon';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: 'production' | 'laboratoire' | 'produits' | 'equipe' | 'installation';
}

const ImageGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryImages: GalleryImage[] = [
    {
      id: 'galerie-1',
      src: '/assets/images/usine-exterieur.jpg',
      alt: 'Vue extérieure de nos installations Sitrabcam',
      title: 'Nos Installations',
      description: 'Infrastructure moderne de production à Douala',
      category: 'installation'
    },
    {
      id: 'galerie-2',
      src: '/assets/images/machines-production.jpg',
      alt: 'Machines industrielles de production',
      title: 'Équipements de Production',
      description: 'Technologie de pointe pour une farine de qualité supérieure',
      category: 'production'
    },
    {
      id: 'galerie-3',
      src: '/assets/images/laboratoire-analyse-qualite.jpg',
      alt: 'Laboratoire d\'analyse qualité avec équipement SD MATIC',
      title: 'Contrôle Qualité Rigoureux',
      description: 'Analyses en temps réel de chaque lot de farine',
      category: 'laboratoire'
    },
    {
      id: 'galerie-4',
      src: '/assets/images/entrepot-production.jpg',
      alt: 'Entrepôt avec stocks de sacs de farine',
      title: 'Capacité de Production',
      description: 'Stocks importants pour répondre à vos besoins',
      category: 'produits'
    },
    {
      id: 'galerie-5',
      src: '/assets/images/zone-chargement.jpg',
      alt: 'Zone de chargement et livraison avec camion',
      title: 'Logistique & Livraison',
      description: 'Système de livraison efficace vers toutes les régions',
      category: 'installation'
    },
    {
      id: 'galerie-6',
      src: '/assets/images/laboratoire-controle.jpg',
      alt: 'Laboratoire de contrôle qualité complet',
      title: 'Laboratoire de Contrôle',
      description: 'Tests approfondis: humidité, protéines, gluten, cendres',
      category: 'laboratoire'
    },
    {
      id: 'galerie-7',
      src: '/assets/images/galerie-7.jpg',
      alt: 'Installations Sitrabcam',
      title: 'Notre Savoir-Faire',
      description: 'Plus de 20 ans d\'excellence dans la production de farine',
      category: 'production'
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes', icon: 'PhotoIcon' },
    { id: 'production', label: 'Production', icon: 'CogIcon' },
    { id: 'laboratoire', label: 'Laboratoire', icon: 'BeakerIcon' },
    { id: 'produits', label: 'Produits', icon: 'CubeIcon' },
    { id: 'equipe', label: 'Équipe', icon: 'UserGroupIcon' },
    { id: 'installation', label: 'Installations', icon: 'BuildingOfficeIcon' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galerie" className="py-20 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/entrepot-production.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>

      <div className="container mx-auto px-4 section-content">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Icon name="PhotoIcon" size={16} className="mr-2" />
            Galerie Photos
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Découvrez{' '}
            <span className="text-green-600">Nos Installations</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explorez nos installations modernes, nos équipements de pointe et notre processus 
            de production qui garantit une qualité supérieure à chaque étape.
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedImage(null);
              }}
              className={`flex items-center px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-250 active:scale-95 touch-manipulation min-h-[40px] ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 border border-gray-200'
              }`}
            >
              <Icon name={category.icon as any} size={16} className="mr-1.5 sm:mr-2" />
              <span className="whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Image Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  onError={(e) => {
                    console.error('Erreur de chargement de l\'image:', image.src);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                {image.category && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                )}

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.title && (
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-sm opacity-90">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{galleryImages.length}</div>
            <div className="text-gray-600">Photos</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600">Catégories</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600">Années d'expérience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Laboratoires</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors z-10"
            aria-label="Fermer"
          >
            <Icon name="XMarkIcon" size={32} />
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 text-white hover:text-green-400 transition-colors z-10"
                aria-label="Image précédente"
              >
                <Icon name="ChevronLeftIcon" size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 text-white hover:text-green-400 transition-colors z-10"
                aria-label="Image suivante"
              >
                <Icon name="ChevronRightIcon" size={32} />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
              quality={95}
              priority
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              {filteredImages[selectedImage].title && (
                <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              )}
              {filteredImages[selectedImage].description && (
                <p className="text-lg opacity-90">{filteredImages[selectedImage].description}</p>
              )}
              <p className="text-sm opacity-75 mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Keyboard Navigation */}
          <div
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeLightbox();
              if (e.key === 'ArrowLeft') navigateImage('prev');
              if (e.key === 'ArrowRight') navigateImage('next');
            }}
            className="absolute inset-0"
          />
        </div>
      )}
    </section>
  );
};

export default ImageGallerySection;

