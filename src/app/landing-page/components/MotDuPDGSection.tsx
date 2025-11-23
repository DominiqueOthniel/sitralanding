'use client';

import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

const MotDuPDGSection = () => {
  return (
    <section id="mot-du-pdg" className="py-20 relative">
      {/* Background image with overlay - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/galerie-5.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="ChatBubbleLeftRightIcon" size={16} className="mr-2" />
              Message du Président Directeur Général
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Un{' '}
              <span className="text-green-600">Engagement</span>{' '}
              pour l'Excellence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* PDG Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <AnimatedImage
                  src="/assets/images/galerie-5.jpg"
                  alt="PDG de Sitrabcam - Portrait professionnel"
                  className="w-full h-96 object-cover"
                  animation="fadeBlur"
                  speed={0.4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Signature Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-green-100">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Signature</div>
                  <div className="font-bold text-gray-900">PDG Sitrabcam</div>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="UserIcon" size={32} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Jean Kuete</h3>
                    <p className="text-gray-600">Président Directeur Général</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Chers partenaires et clients,
                  </p>
                  
                  <p>
                    Depuis plus de 20 ans, <strong className="text-gray-900">Sitrabcam</strong> s'engage à innover 
                    dans l'industrie de la farine au Cameroun. Notre mission est simple : fournir une farine de qualité 
                    supérieure qui répond aux standards internationaux tout en valorisant le savoir-faire local.
                  </p>
                  
                  <p>
                    Chaque grain de blé que nous transformons passe par un processus rigoureux de contrôle qualité. 
                    Nous investissons continuellement dans nos équipements, nos laboratoires et la formation de nos 
                    équipes pour garantir une constance exceptionnelle dans chaque sac de farine que nous produisons.
                  </p>
                  
                  <p>
                    Votre confiance est notre plus grande récompense. C'est pourquoi nous nous engageons à maintenir 
                    les plus hauts standards de qualité, de transparence et de service client. Ensemble, construisons 
                    l'avenir de la boulangerie camerounaise.
                  </p>
                  
                  <p className="text-lg font-semibold text-gray-900 pt-4">
                    Merci de votre confiance.
                  </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">20+</div>
                    <div className="text-sm text-gray-600">Années</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">2500+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">Toutes</div>
                    <div className="text-sm text-gray-600">Villes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotDuPDGSection;

