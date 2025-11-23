'use client';

import { useState } from 'react';
import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  specifications: {
    protein: string;
    moisture: string;
    ash: string;
    gluten: string;
  };
  usageRecommendations: string[];
  packaging: string[];
  image: string;
  alt: string;
  popular?: boolean;
}

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products: Product[] = [
  {
    id: 'farine-force',
    name: 'Farine de Force',
    type: 'Type 65',
    description: 'Farine à haute teneur en gluten, idéale pour les pâtes qui nécessitent une grande élasticité et une excellente rétention gazeuse.',
    specifications: {
      protein: '12-14%',
      moisture: '≤ 15%',
      ash: '0.60-0.75%',
      gluten: 'Très fort'
    },
    usageRecommendations: [
    'Pains spéciaux',
    'Brioches et viennoiseries',
    'Pâtes levées longues',
    'Produits nécessitant une forte élasticité'],

    packaging: ['Sacs 25kg', 'Sacs 50kg', 'Big bags 1000kg'],
    image: "/assets/images/galerie-4.jpg",
    alt: 'Farine de force pour boulangerie professionnelle',
    popular: true
  },
  {
    id: 'farine-boulangere',
    name: 'Farine Boulangère',
    type: 'Type 55',
    description: 'Farine polyvalente par excellence pour tous vos besoins en boulangerie. Texture parfaite et résultats constants.',
    specifications: {
      protein: '11-12%',
      moisture: '≤ 15%',
      ash: '0.50-0.60%',
      gluten: 'Fort'
    },
    usageRecommendations: [
    'Pain blanc et traditionnel',
    'Viennoiseries',
    'Pâtes brisées',
    'Pains de mie'],

    packaging: ['Sacs 25kg', 'Sacs 50kg', 'Big bags 1000kg'],
    image: "/assets/images/galerie-1.jpg",
    alt: 'Farine boulangère premium pour professionnels'
  },
  {
    id: 'farine-beignets',
    name: 'Farine de Beignets',
    type: 'Type 45',
    description: 'Farine spécialement formulée pour des beignets légers, croustillants et moelleux. Absorption optimale pour une texture parfaite.',
    specifications: {
      protein: '9-10%',
      moisture: '≤ 14%',
      ash: '0.40-0.50%',
      gluten: 'Modéré'
    },
    usageRecommendations: [
    'Beignets et donuts',
    'Fritures',
    'Crêpes et pancakes',
    'Pâtisseries frites'],

    packaging: ['Sacs 25kg', 'Sacs 50kg'],
    image: "/assets/images/photo_2025-11-23_17-28-51.jpg",
    alt: 'Farine de beignets pour fritures et pâtisseries'
  },
  {
    id: 'farine-complete',
    name: 'Farine Complète',
    type: 'Type 150',
    description: 'Farine intégrale riche en fibres et nutriments. Parfaite pour des pains complets savoureux et nutritifs.',
    specifications: {
      protein: '12-13%',
      moisture: '≤ 15%',
      ash: '1.20-1.50%',
      gluten: 'Fort'
    },
    usageRecommendations: [
    'Pains complets',
    'Pains aux céréales',
    'Pains de campagne',
    'Produits diététiques'],

    packaging: ['Sacs 25kg', 'Sacs 50kg'],
    image: "/assets/images/sac-farine-complete.png",
    alt: 'Sac de farine complète riche en fibres et nutriments'
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