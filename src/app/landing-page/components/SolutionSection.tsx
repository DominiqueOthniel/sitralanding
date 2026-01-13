'use client';

import { useState } from 'react';
import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const qualitySteps = [
  {
    title: "Sélection Rigoureuse",
    description: "Nous sélectionnons uniquement les meilleurs grains de blé selon 15 critères de qualité stricts.",
    details: "Analyse protéique, taux d'humidité, résistance gluten, absence de mycotoxines",
    icon: "MagnifyingGlassIcon",
    image: "https://images.unsplash.com/photo-1599456942086-8430fb30fa00",
    alt: "Grains de blé dorés dans les mains d'un expert qualité avec loupe d'inspection"
  },
  {
    title: "Tests Laboratoire",
    description: "Chaque lot passe par 12 tests en laboratoire interne avant conditionnement.",
    details: "Analyses physico-chimiques, contrôle granulométrie, analyses rhéologiques, vérification qualité",
    icon: "BeakerIcon",
    image: "https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83",
    alt: "Technicien en blouse blanche analysant échantillons de farine dans laboratoire moderne"
  },
  {
    title: "Mouture Contrôlée",
    description: "Processus de mouture à température contrôlée préservant toutes les propriétés nutritives.",
    details: "Température < 40°C, mouture progressive, tamisage multiple, contrôle finesse",
    icon: "CogIcon",
    image: "https://images.unsplash.com/photo-1664831731615-9bddc341d608",
    alt: "Moulin industriel moderne avec système de contrôle température pour mouture de blé"
  },
  {
    title: "Conditionnement Hermétique",
    description: "Emballage sous atmosphère protectrice garantissant fraîcheur et conservation optimale.",
    details: "Sachets multicouches, protection UV, étanchéité parfaite, traçabilité complète",
    icon: "ShieldCheckIcon",
    image: "https://images.unsplash.com/photo-1638981369408-20b28d5932f7",
    alt: "Sacs de farine hermétiquement scellés avec codes de traçabilité sur ligne de conditionnement"
  }];


  const benefits = [
  {
    title: "Texture Constante",
    description: "Même élasticité et absorption d\'eau à chaque utilisation",
    icon: "HandRaisedIcon",
    metric: "99.8%",
    metricLabel: "de consistance"
  },
  {
    title: "Résultats Fiables",
    description: "Levée parfaite et goût authentique garantis",
    icon: "ChartBarIcon",
    metric: "100%",
    metricLabel: "de réussite"
  },
  {
    title: "Prix Compétitifs",
    description: "Tarifs dégressifs selon volume avec transparence totale",
    icon: "CurrencyDollarIcon",
    metric: "25%",
    metricLabel: "d\'économies"
  },
  {
    title: "Livraison Rapide",
    description: "Livraison dans toutes les villes du Cameroun",
    icon: "TruckIcon",
    metric: "24-48h",
    metricLabel: "délai moyen"
  }];


  return (
    <section id="solution" className="py-20 relative">
      {/* Background image with overlay - Moulin industriel et machines de transformation - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1664831731615-9bddc341d608?w=1920&q=75&auto=format&fit=crop)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="ShieldCheckIcon" size={16} className="mr-2" />
            Notre Solution Éprouvée
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            La{' '}
            <span className="text-green-600">Garantie Qualité</span>{' '}
            qui Change Tout
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre processus de contrôle qualité en 4 étapes garantit une farine parfaitement 
            constante qui transformera vos résultats de cuisson.
          </p>
        </div>

        {/* Interactive Quality Process */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              {qualitySteps.map((step, index) =>
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                activeStep === index ?
                'bg-green-50 border-2 border-green-500 shadow-lg' :
                'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`
                }
                onClick={() => setActiveStep(index)}>

                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  activeStep === index ? 'bg-green-500' : 'bg-gray-400'}`
                  }>
                      <Icon name={step.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      {activeStep === index &&
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-green-800 font-medium">{step.details}</p>
                        </div>
                    }
                    </div>
                  </div>
                </div>
              )}
            </div>

                  {/* Active Step Image */}
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl image-hover-tilt">
                      <AnimatedImage
                        src={qualitySteps[activeStep].image}
                        alt={qualitySteps[activeStep].alt}
                        className="w-full h-96"
                        animation="zoom"
                        speed={0.4}
                        key={activeStep}
                      />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-1">
                      Étape {activeStep + 1}: {qualitySteps[activeStep].title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {qualitySteps[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) =>
          <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-500 transition-colors duration-250">
                <Icon name={benefit.icon as any} size={32} className="text-green-600 group-hover:text-white transition-colors duration-250" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
              <div className="text-sm text-gray-500 mb-4">{benefit.metricLabel}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          )}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Icon name="ShieldCheckIcon" size={40} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Garantie Satisfaction 100% ou Remboursé
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Si notre farine ne répond pas à vos attentes de qualité dans les 30 premiers jours, 
              nous vous remboursons intégralement et reprenons la marchandise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center bg-white/20 rounded-lg px-6 py-3">
                <Icon name="ClockIcon" size={20} className="mr-2" />
                <span className="font-semibold">30 jours de garantie</span>
              </div>
              <div className="flex items-center justify-center bg-white/20 rounded-lg px-6 py-3">
                <Icon name="CurrencyDollarIcon" size={20} className="mr-2" />
                <span className="font-semibold">Remboursement intégral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionSection;