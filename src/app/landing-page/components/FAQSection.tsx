'use client';

import { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'quality' | 'delivery' | 'pricing' | 'general';
}

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const message = 'Bonjour! J\'ai une question concernant vos produits. Pouvez-vous m\'aider?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/237690900698?text=${encodedMessage}`, '_blank');
  };

  const categories = [
    { id: 'all', label: 'Toutes', icon: 'QuestionMarkCircleIcon' },
    { id: 'quality', label: 'Qualité', icon: 'ShieldCheckIcon' },
    { id: 'delivery', label: 'Livraison', icon: 'TruckIcon' },
    { id: 'general', label: 'Général', icon: 'InformationCircleIcon' }
  ];

  const faqs: FAQ[] = [
    {
      id: 'quality-1',
      category: 'quality',
      question: 'Comment garantissez-vous la qualité constante de votre farine ?',
      answer: 'Notre processus de contrôle qualité comprend 4 étapes rigoureuses : sélection des grains selon 15 critères, tests laboratoire sur chaque lot (12 analyses différentes), mouture à température contrôlée (<40°C), et conditionnement sous atmosphère protectrice. Chaque sac est tracé et nous conservons des échantillons pendant 6 mois pour garantir la reproductibilité.'
    },
    {
      id: 'quality-2',
      category: 'quality',
      question: 'Quelle est la durée de conservation de votre farine ?',
      answer: 'Notre farine se conserve 6 mois dans son emballage d\'origine, stockée dans un endroit sec et frais (température < 25°C, humidité < 65%). Grâce à notre conditionnement hermétique sous atmosphère protectrice, elle maintient toutes ses propriétés nutritives et boulangères pendant toute cette période.'
    },
    {
      id: 'quality-3',
      category: 'quality',
      question: 'Proposez-vous des analyses de conformité pour chaque lot ?',
      answer: 'Oui, chaque lot est accompagné d\'un certificat d\'analyse complet incluant : taux de protéines, humidité, cendres, force boulangère (W), indice de chute de Hagberg, analyses microbiologiques et recherche de mycotoxines. Ces documents sont disponibles en format papier et numérique.'
    },
    {
      id: 'delivery-1',
      category: 'delivery',
      question: 'Quels sont vos délais de livraison ?',
      answer: 'Nos délais varient selon votre localisation : Douala et Yaoundé 24-48h, autres grandes villes 48-72h. Pour les régions du Nord, les délais peuvent être plus longs compte tenu de la distance. Toutes nos livraisons sont trackées en temps réel via SMS et WhatsApp.'
    },
    {
      id: 'delivery-2',
      category: 'delivery',
      question: 'Livrez-vous dans toute l\'Afrique Centrale ?',
      answer: 'Actuellement, nous livrons dans toutes les villes du Cameroun. Pour les livraisons au nord, nous travaillons avec des partenaires logistiques certifiés et proposons des conditions spéciales pour les gros volumes.'
    },
    {
      id: 'delivery-3',
      category: 'delivery',
      question: 'Comment sont emballés vos produits pour le transport ?',
      answer: 'Nos sacs sont renforcés multicouches (papier kraft + film plastique) résistants à l\'humidité et aux chocs. Pour les big bags, nous utilisons des contenants étanches avec système de vidange. Chaque palette est filmée et protégée. Nous garantissons l\'intégrité de vos produits jusqu\'à la livraison.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Quelles sont vos conditions de paiement ?',
      answer: 'Nous proposons plusieurs options de paiement flexibles adaptées à vos besoins. Contactez-nous pour discuter des modalités qui conviennent le mieux à votre entreprise. Nous acceptons les chèques, et les virements à la caisse.'
    },
    {
      id: 'general-1',
      category: 'general',
      question: 'Depuis combien de temps êtes-vous sur le marché ?',
      answer: 'Nous sommes présents sur le marché camerounais depuis plus de 20 ans. Nous avons commencé comme distributeur local et avons progressivement développé notre propre chaîne de contrôle qualité. Aujourd\'hui, nous approvisionnons plus de 2500 entreprises dans toutes les villes du Cameroun.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Proposez-vous un service client dédié ?',
      answer: 'Oui, chaque client Business et Enterprise dispose d\'un conseiller dédié. Notre service client est disponible du lundi au samedi de 7h à 19h par téléphone, WhatsApp et email. Pour les urgences, nous avons une ligne d\'astreinte 24/7. Nous nous engageons à répondre sous 2h maximum.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'Organisez-vous des formations pour vos clients ?',
      answer: 'Oui, nous proposons des formations gratuites pour nos clients Enterprise : techniques de stockage, optimisation des recettes, gestion des stocks, et nouvelles tendances boulangères. Ces formations sont animées par nos experts qualité et des boulangers partenaires. Calendrier disponible sur demande.'
    }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20 relative">
      {/* Background image with overlay - Laboratoire d'analyse et contrôle qualité - Optimized */}
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
            <Icon name="QuestionMarkCircleIcon" size={16} className="mr-2" />
            Questions Fréquentes
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Toutes les{' '}
            <span className="text-green-600">Réponses</span>{' '}
            à Vos Questions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous avons rassemblé les questions les plus fréquentes de nos clients. 
            Si vous ne trouvez pas votre réponse, contactez-nous directement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-250 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon name={category.icon as any} size={16} className="mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-250 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-250"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <Icon
                  name={openFAQ === faq.id ? "ChevronUpIcon" : "ChevronDownIcon"}
                  size={20}
                  className={`text-gray-500 flex-shrink-0 transition-transform duration-250 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe d'experts est là pour répondre à toutes vos questions 
              spécifiques sur nos produits et services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-250"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} className="inline mr-2" />
                Chat WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;