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
      src: '/assets/images/galerie-1.jpg',
      alt: 'Installation de production Sitrabcam',
      title: 'Installation de Production',
      description: 'Vue d\'ensemble de nos installations modernes',
      category: 'installation'
    },
    {
      id: 'galerie-2',
      src: '/assets/images/galerie-2.jpg',
      alt: 'Équipements de transformation du blé',
      title: 'Équipements Modernes',
      description: 'Machines de dernière génération pour une qualité optimale',
      category: 'production'
    },
    {
      id: 'galerie-3',
      src: '/assets/images/galerie-3.jpg',
      alt: 'Laboratoire de contrôle qualité',
      title: 'Contrôle Qualité',
      description: 'Tests rigoureux sur chaque lot de farine',
      category: 'laboratoire'
    },
    {
      id: 'galerie-4',
      src: '/assets/images/galerie-4.jpg',
      alt: 'Sacs de farine premium',
      title: 'Produits Finis',
      description: 'Nos farines conditionnées avec soin',
      category: 'produits'
    },
    {
      id: 'galerie-5',
      src: '/assets/images/galerie-5.jpg',
      alt: 'Équipe professionnelle Sitrabcam',
      title: 'Notre Équipe',
      description: 'Des professionnels dévoués à l\'excellence',
      category: 'equipe'
    },
    {
      id: 'galerie-6',
      src: '/assets/images/galerie-6.jpg',
      alt: 'Processus de production',
      title: 'Processus de Production',
      description: 'Transformation du blé en farine premium',
      category: 'production'
    },
    {
      id: 'galerie-7',
      src: '/assets/images/galerie-7.jpg',
      alt: 'Installations Sitrabcam',
      title: 'Nos Installations',
      description: 'Infrastructure moderne et performante',
      category: 'installation'
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
          backgroundImage: 'url(/assets/images/galerie-4.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>

      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="PhotoIcon" size={16} className="mr-2" />
            Galerie Photos
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Découvrez{' '}
            <span className="text-green-600">Nos Installations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez nos installations modernes, nos équipements de pointe et notre processus 
            de production qui garantit une qualité supérieure à chaque étape.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSelectedImage(null);
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

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
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

