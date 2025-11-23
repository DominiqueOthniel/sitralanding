'use client';

import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

const ProblemSection = () => {
  const problemStats = [
  {
    icon: "ExclamationTriangleIcon",
    stat: "73%",
    description: "des boulangeries perdent des clients à cause de la qualité inconstante"
  },
  {
    icon: "CurrencyDollarIcon",
    stat: "45%",
    description: "de pertes financières dues aux produits ratés"
  },
  {
    icon: "FaceAngryIcon",
    stat: "8/10",
    description: "clients insatisfaits ne reviennent jamais"
  }];


  const painPoints = [
  {
    title: "Qualité Inconstante",
    description: "Votre farine change de texture et de performance d'une livraison à l'autre, rendant impossible la standardisation de vos recettes.",
    image: "https://images.unsplash.com/photo-1675725291010-cb1020860cb2",
    alt: "Pain raté avec texture inégale et croûte brûlée sur une planche en bois"
  },
  {
    title: "Livraisons Imprévisibles",
    description: "Retards constants, quantités incorrectes et emballages défaillants perturbent votre production quotidienne.",
    image: "https://images.unsplash.com/photo-1554899040-8908812f65d5",
    alt: "Camion de livraison en panne sur route poussiéreuse avec marchandises éparpillées"
  },
  {
    title: "Prix Cachés",
    description: "Frais supplémentaires non annoncés, variations de prix imprévisibles et conditions de paiement défavorables.",
    image: "https://images.unsplash.com/photo-1651043696082-7e5c615c109f",
    alt: "Facture avec surcharges cachées et calculatrice montrant coûts élevés"
  }];


  return (
    <section id="probleme" className="py-20 relative">
      {/* Background image with overlay - Champs de blé mûr ondulant au vent - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=75&auto=format&fit=crop)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="ExclamationTriangleIcon" size={16} className="mr-2" />
            Problèmes Actuels du Marché
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Vos Clients Vous{' '}
            <span className="text-red-600">Abandonnent-ils</span> ?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La qualité inconstante de la farine détruit la réputation de votre entreprise. 
            Chaque produit raté coûte plus que le prix de la farine elle-même.
          </p>
        </div>

        {/* Problem Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problemStats.map((stat, index) =>
          <div key={index} className="bg-white rounded-xl p-8 text-center shadow-card hover:shadow-lg transition-all duration-250">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Icon name={stat.icon as any} size={32} className="text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-4">{stat.stat}</div>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          )}
        </div>

        {/* Pain Points */}
        <div className="space-y-16">
          {painPoints.map((point, index) =>
          <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl image-hover-zoom">
                  <AnimatedImage
                    src={point.image}
                    alt={point.alt}
                    className="w-full h-80"
                    animation={index === 0 ? 'slide' : index === 1 ? 'fadeBlur' : 'glow'}
                    speed={0.6}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{point.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {point.description}
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <div className="flex items-start">
                    <Icon name="ExclamationTriangleIcon" size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Impact sur votre business</h4>
                      <p className="text-red-700 text-sm">
                        Ces problèmes coûtent en moyenne 150,000 XAF par mois aux entreprises camerounaises 
                        en produits ratés, clients perdus et réputation endommagée.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Il est temps de changer de fournisseur
            </h3>
            <p className="text-gray-600 mb-6">
              Ne laissez plus la qualité inconstante détruire votre réputation. 
              Découvrez notre solution qui garantit des résultats parfaits à chaque fois.
            </p>
            <div className="flex items-center justify-center text-green-600 font-semibold">
              <span>Voir notre solution</span>
              <Icon name="ArrowDownIcon" size={20} className="ml-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProblemSection;