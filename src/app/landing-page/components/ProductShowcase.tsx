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
    id: 'farine-boulangerie',
    name: 'Farine Boulangerie Premium',
    type: 'Type 55',
    description: 'Farine spécialement conçue pour la boulangerie artisanale. Texture parfaite pour pains, viennoiseries et pâtisseries.',
    specifications: {
      protein: '11-12%',
      moisture: '≤ 15%',
      ash: '0.50-0.60%',
      gluten: 'Fort'
    },
    usageRecommendations: [
    'Pain blanc et complet',
    'Viennoiseries (croissants, pains au chocolat)',
    'Pâtes brisées et feuilletées',
    'Brioches et pains de mie'],

    packaging: ['Sacs 25kg', 'Sacs 50kg', 'Big bags 1000kg'],
    image: "/assets/images/galerie-4.jpg",
    alt: 'Sacs de farine premium empilés dans boulangerie avec pain frais en arrière-plan',
    popular: true
  },
  {
    id: 'farine-patisserie',
    name: 'Farine Pâtisserie Délicate',
    type: 'Type 45',
    description: 'Farine extra-fine pour pâtisserie de haute qualité. Idéale pour gâteaux moelleux et pâtisseries délicates.',
    specifications: {
      protein: '9-10%',
      moisture: '≤ 14%',
      ash: '0.40-0.50%',
      gluten: 'Modéré'
    },
    usageRecommendations: [
    'Gâteaux et génoise',
    'Pâtisseries fines',
    'Biscuits et cookies',
    'Crêpes et pancakes'],

    packaging: ['Sacs 25kg', 'Sacs 50kg'],
    image: "/assets/images/galerie-2.jpg",
    alt: 'Pâtissier saupoudrant farine fine sur plan de travail avec gâteaux élégants'
  },
  {
    id: 'farine-pizza',
    name: 'Farine Pizza Napoletana',
    type: 'Type 00',
    description: 'Farine italienne authentique pour pizzas croustillantes. Fermentation lente et texture incomparable.',
    specifications: {
      protein: '12-13%',
      moisture: '≤ 15%',
      ash: '0.45-0.55%',
      gluten: 'Très fort'
    },
    usageRecommendations: [
    'Pizza napolitaine',
    'Pâtes fraîches',
    'Pain italien',
    'Focaccia'],

    packaging: ['Sacs 25kg', 'Sacs 50kg'],
    image: "/assets/images/galerie-6.jpg",
    alt: 'Pizzaiolo étalant pâte à pizza avec farine type 00 dans cuisine professionnelle'
  },
  {
    id: 'farine-industrielle',
    name: 'Farine Industrielle Pro',
    type: 'Multi-usage',
    description: 'Solution économique pour production industrielle. Qualité constante pour grandes quantités.',
    specifications: {
      protein: '10-11%',
      moisture: '≤ 15%',
      ash: '0.55-0.65%',
      gluten: 'Standard'
    },
    usageRecommendations: [
    'Production industrielle',
    'Biscuiterie',
    'Plats préparés',
    'Restauration collective'],

    packaging: ['Big bags 1000kg', 'Vrac sur commande'],
    image: "/assets/images/galerie-7.jpg",
    alt: 'Ligne de production industrielle avec convoyeurs et silos de farine automatisés'
  }];


  return (
    <section id="catalogue" className="py-20 relative">
      {/* Background image with overlay - Sacs de farine et production artisanale - Optimized */}
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
            <Icon name="CubeIcon" size={16} className="mr-2" />
            Notre Catalogue
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre{' '}
            <span className="text-green-600">Catalogue</span>{' '}
            Complet
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de farines premium, chacune spécialement 
            formulée pour des applications spécifiques et des résultats parfaits.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product, index) =>
          <button
            key={product.id}
            onClick={() => setActiveProduct(index)}
            className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-250 ${
            activeProduct === index ?
            'bg-green-600 text-white shadow-lg' :
            'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`
            }>

              {product.popular &&
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">!</span>
                </div>
            }
              {product.name}
            </button>
          )}
        </div>

        {/* Active Product Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative h-96 lg:h-full">
              <AnimatedImage
                src={products[activeProduct].image}
                alt={products[activeProduct].alt}
                className="w-full h-full"
                animation="parallax"
                speed={0.5}
                key={activeProduct}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              
              {/* Popular Badge */}
              {products[activeProduct].popular &&
              <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Plus Populaire
                </div>
              }
            </div>

            {/* Product Information */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mr-4">
                  {products[activeProduct].name}
                </h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {products[activeProduct].type}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {products[activeProduct].description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Icon name="DocumentTextIcon" size={20} className="mr-2" />
                  Spécifications Techniques
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(products[activeProduct].specifications).map(([key, value]) =>
                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                      <div className="font-semibold text-gray-900">{value}</div>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-250">
                  <Icon name="ShoppingCartIcon" size={20} className="inline mr-2" />
                  Commander ce Produit
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-250">
                  <Icon name="DocumentArrowDownIcon" size={20} className="inline mr-2" />
                  Fiche Technique
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications Qualité</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={24} className="text-green-600" />
              <span className="font-semibold">ISO 22000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ShieldCheckIcon" size={24} className="text-green-600" />
              <span className="font-semibold">HACCP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="StarIcon" size={24} className="text-green-600" />
              <span className="font-semibold">Halal Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="GlobeAltIcon" size={24} className="text-green-600" />
              <span className="font-semibold">Export Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProductShowcase;