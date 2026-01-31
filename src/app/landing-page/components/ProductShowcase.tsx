'use client';

import { useState, useEffect } from 'react';
import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';
import { assetUrl } from '../../../config';

interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  specifications: {
    protein: string;
    moisture: string;
    ash: string;
    gluten?: string;
  };
  usageRecommendations: string[];
  packaging: string[];
  image: string;
  alt: string;
  popular?: boolean;
}

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sitrabcam.com';

  // Ajouter les données structurées JSON-LD pour les produits
  useEffect(() => {
    const productSchemas = products.map((product) => ({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: `${baseUrl}${product.image}`,
      brand: {
        '@type': 'Brand',
        name: 'Sitrabcam',
      },
      category: 'Food & Beverage',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'XAF',
        itemCondition: 'https://schema.org/NewCondition',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '2500',
      },
    }));

    // Injecter les scripts JSON-LD
    productSchemas.forEach((schema, index) => {
      const scriptId = `product-schema-${index}`;
      if (document.getElementById(scriptId)) {
        return;
      }
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Nettoyer les scripts lors du démontage
      productSchemas.forEach((_, index) => {
        const scriptId = `product-schema-${index}`;
        const script = document.getElementById(scriptId);
        if (script) {
          script.remove();
        }
      });
    };
  }, [baseUrl]);

  const products: Product[] = [
  {
    id: 'farine-lion',
    name: 'Farine LION (Haute gamme)',
    type: 'Type 65',
    description: 'Farine à haute teneur en protéines, idéale pour les pâtes qui nécessitent une grande élasticité et une excellente rétention gazeuse.',
    specifications: {
      protein: 'Min 12.5%',
      moisture: 'Max 14%',
      ash: '0.65%'
    },
    usageRecommendations: [
    'Pains spéciaux',
    'Brioches et viennoiseries',
    'Pâtes levées longues',
    'Produits nécessitant une forte élasticité'],

    packaging: ['Sacs 50kg'],
    image: assetUrl("/assets/images/sac-lion.jpg"),
    alt: 'Sac de Farine LION 50kg',
    popular: true
  },
  {
    id: 'farine-elephant',
    name: 'Farine ELEPHANT (Moyenne gamme)',
    type: 'Type 55',
    description: 'Farine polyvalente par excellence pour tous vos besoins en boulangerie. Texture parfaite et résultats constants.',
    specifications: {
      protein: 'Min 12.0%',
      moisture: 'Max 14%',
      ash: '0.65%'
    },
    usageRecommendations: [
    'Brioches et viennoiseries',
    'Pain blanc et traditionnel',
    'Pains de mie',
    'Pains spéciaux'],

    packaging: ['Sacs 50kg'],
    image: assetUrl("/assets/images/sac-elephant.jpg"),
    alt: 'Sac de Farine ELEPHANT 50kg'
  },
  {
    id: 'farine-renard',
    name: 'Farine RENARD (Standard)',
    type: 'Type 55',
    description: 'Farine standard de qualité pour la production courante de pains et produits de boulangerie.',
    specifications: {
      protein: 'Min 11.5%',
      moisture: 'Max 14%',
      ash: '0.65%'
    },
    usageRecommendations: [
    'Pain courant',
    'Boulangerie standard',
    'Usage quotidien'],

    packaging: ['Sacs 50kg', 'Sacs 25kg'],
    image: assetUrl("/assets/images/sac-renard.jpg"),
    alt: 'Sac de Farine RENARD'
  },
  {
    id: 'farine-adora',
    name: 'Farine ADORA (Beignets)',
    type: 'Type 45',
    description: 'Farine spécialement formulée pour des beignets légers, croustillants et moelleux. Absorption optimale pour une texture parfaite.',
    specifications: {
      protein: 'Min 11.5%',
      moisture: 'Max 14%',
      ash: '0.65 – 0.70%'
    },
    usageRecommendations: [
    'Beignets et donuts',
    'Fritures',
    'Crêpes et pancakes',
    'Pâtisseries frites'],

    packaging: ['Sacs 50kg', 'Sacs 25kg', 'Sacs 10kg', 'Big bags 5kg (10x5kg)'],
    image: assetUrl("/assets/images/sac-adora.jpg"),
    alt: 'Sac de Farine ADORA'
  },
  {
    id: 'farine-complete',
    name: 'Farine La Complète',
    type: 'Type 150',
    description: 'Farine intégrale riche en fibres et nutriments. Parfaite pour des pains complets savoureux et nutritifs.',
    specifications: {
      protein: 'Min 11.5%',
      moisture: 'Max 14%',
      ash: '1.10 – 1.50%'
    },
    usageRecommendations: [
    'Pains complets',
    'Pains aux céréales',
    'Pains de campagne',
    'Produits diététiques'],

    packaging: ['Sacs 25kg'],
    image: assetUrl("/assets/images/sac-la-complete.jpg"),
    alt: 'Sac de Farine La Complète 25kg'
  },
  {
    id: 'farine-biscoti',
    name: 'Farine BISCOTI (Industrielle)',
    type: 'Industrielle',
    description: 'Farine spécialement conçue pour la production industrielle de biscuits, garantissant une régularité parfaite.',
    specifications: {
      protein: 'Min 11.5%',
      moisture: 'Max 14%',
      ash: '0.65%'
    },
    usageRecommendations: [
    'Biscuits',
    'Production industrielle',
    'Biscuiterie'],

    packaging: ['Sacs 50kg'],
    image: assetUrl("/assets/images/sac-biscoti.jpg"),
    alt: 'Sac de Farine BISCOTI 50kg'
  }];


  return (
    <section id="catalogue" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <Icon name="CubeIcon" size={16} className="mr-2.5 text-gray-600" />
            Notre Catalogue
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Notre{' '}
            <span className="font-semibold">Catalogue</span>{' '}
            Complet
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de farines premium, chacune spécialement 
            formulée pour des applications spécifiques et des résultats parfaits.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {products.map((product, index) =>
          <button
            key={product.id}
            onClick={() => setActiveProduct(index)}
            className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeProduct === index ?
            'bg-gray-900 text-white shadow-lg scale-105' :
            'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'}`
            }>

              {product.popular &&
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs text-white font-bold">!</span>
                </div>
            }
              {product.name}
            </button>
          )}
        </div>

        {/* Active Product Details */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative h-96 lg:h-[600px] group overflow-hidden bg-gray-50 flex items-center justify-center">
              <AnimatedImage
                src={products[activeProduct].image}
                alt={products[activeProduct].alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                animation="parallax"
                speed={0.5}
                key={activeProduct}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Popular Badge */}
              {products[activeProduct].popular &&
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-200">
                  ⭐ Plus Populaire
                </div>
              }
            </div>

            {/* Product Information */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">
                  {products[activeProduct].name}
                </h3>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200">
                  {products[activeProduct].type}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {products[activeProduct].description}
              </p>

              {/* Specifications */}
              <div className="mb-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-5 flex items-center">
                  <Icon name="DocumentTextIcon" size={20} className="mr-2.5 text-gray-600" />
                  Spécifications Techniques
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(products[activeProduct].specifications).map(([key, value]) =>
                  <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors duration-200">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{key}</div>
                      <div className="font-semibold text-gray-900 text-lg">{value}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Usage Recommendations */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Icon name="LightBulbIcon" size={20} className="mr-2" />
                  Utilisations Recommandées
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {products[activeProduct].usageRecommendations.map((usage, index) =>
                  <div key={index} className="flex items-center">
                      <Icon name="CheckIcon" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{usage}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Packaging Options */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Icon name="ArchiveBoxIcon" size={20} className="mr-2" />
                  Options de Conditionnement
                </h4>
                <div className="flex flex-wrap gap-2">
                  {products[activeProduct].packaging.map((pack, index) =>
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pack}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <Icon name="ShoppingCartIcon" size={20} className="inline mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Commander ce Produit
                </button>
                <button className="group flex-1 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 px-6 py-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md">
                  <Icon name="DocumentArrowDownIcon" size={20} className="inline mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Fiche Technique
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>);

};

export default ProductShowcase;