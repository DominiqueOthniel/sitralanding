'use client';

import AnimatedImage from '../../../components/ui/AnimatedImage';
import Icon from '../../../components/ui/AppIcon';

const AboutSection = () => {
  const values = [
    {
      icon: 'LightBulbIcon',
      title: 'Innovation Responsable',
      description:
        'Nous investissons continuellement dans la recherche pour garantir des farines performantes, tracées et respectueuses des standards internationaux.',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Qualité Garantie',
      description:
        'Chaque lot est contrôlé selon 15 points de conformité. Zéro compromis sur la sécurité alimentaire.',
    },
    {
      icon: 'ArrowPathIcon',
      title: 'Partenariats Durables',
      description:
        'Nous accompagnons les boulangeries, restaurants et industriels avec un support logistique, technique et financier personnalisé.',
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Ancrage Camerounais',
      description:
        'Présents dans toutes les villes du Cameroun, nous travaillons avec des producteurs locaux et des coopératives pour valoriser le savoir-faire national.',
    },
  ];

  const milestones = [
    {
      year: '2001',
      title: 'Nos débuts',
      description: 'Création du premier moulin pilote à Douala avec une équipe de 12 passionnés de filières céréalières.',
    },
    {
      year: '2010',
      title: 'Expansion régionale',
      description: 'Ouverture de nos entrepôts régionaux à Yaoundé, Garoua et Bafoussam pour réduire les délais de livraison.',
    },
    {
      year: '2015',
      title: 'Certification et innovation',
      description: 'Mise en place du laboratoire interne, certification ISO 22000 et traçabilité numérique complète du grain au sac.',
    },
  ];

  const stats = [
    { value: '2 500+', label: 'Partenaires actifs au Cameroun' },
    { value: '98%', label: 'Satisfaction sur les audits qualité' },
    { value: '24h', label: 'Délai moyen de livraison nationale' },
  ];

  return (
    <section id="qui-sommes-nous" className="py-20 relative">
      {/* Background image with overlay - Équipe de meuniers et experts qualité - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/galerie-5.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={16} className="mr-2" />
            Qui sommes-nous ?
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Partenaire{' '}
            <span className="text-green-600">privilégié</span>{' '}
            des boulangers et pâtissiers du Cameroun
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Depuis plus de 20 ans, nous <span className="font-bold text-gray-900 bg-yellow-200 px-2 py-1 rounded">produisons des farines</span> hautes performances pour les boulangeries,
            pâtisseries, restaurateurs et acteurs industriels. Notre force : une chaîne intégrée du grain au produit fini,
            des standards internationaux et un accompagnement humain au quotidien.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-green-50 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre raison d'être</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantir la constance, la sécurité et la disponibilité des farines d’exception sur tout le territoire. Nous assurons
                la maîtrise totale de la chaîne de valeur : sélection des blés, contrôles laboratoire, logistique réfrigérée,
                support technique en atelier et formation continue de vos équipes.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white border border-green-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatedImage
              src="/assets/images/galerie-5.jpg"
              alt="Équipe de meuniers camerounais contrôlant la qualité des grains"
              className="w-full h-[420px] rounded-3xl shadow-2xl"
              animation="fadeBlur"
              speed={0.4}
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border border-green-100">
              <div className="flex items-center mb-3">
                <Icon name="ShieldCheckIcon" size={20} className="text-green-600 mr-2" />
                <span className="font-semibold text-gray-900">Contrôles quotidiens</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                3 laboratoires internes, 12 points de contrôle, traçabilité digitale complète pour chaque sac livré.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value) => (
            <div key={value.title} className="bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mb-4">
                <Icon name={value.icon as any} size={24} className="text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl px-6 py-10 md:px-10 md:py-14 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Les étapes clés de notre histoire</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative bg-white rounded-2xl p-6 shadow-md border border-green-100">
                <div className="text-green-600 font-bold text-xl mb-2">{milestone.year}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Icon name="DocumentTextIcon" size={24} className="text-green-600 mr-3" />
              Nos engagements quotidiens
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Icon name="CheckCircleIcon" size={18} className="text-green-600 mr-3 mt-1" />
                <span>Livraisons garanties en 24h sur Douala et Yaoundé, 72h partout ailleurs.</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircleIcon" size={18} className="text-green-600 mr-3 mt-1" />
                <span>Formations trimestrielles gratuites pour vos équipes boulangères et industrielles.</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircleIcon" size={18} className="text-green-600 mr-3 mt-1" />
                <span>Assistance technique 7j/7 assurée par nos techniciens meuniers sur site.</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircleIcon" size={18} className="text-green-600 mr-3 mt-1" />
                <span>Programme de recyclage des sacs et accompagnement RSE pour vos ateliers.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Notre équipe leadership</h4>
              <p className="text-gray-600 leading-relaxed">
                Une direction pluridisciplinaire issue de la meunerie, de la logistique et de la nutrition. Nous croyons à la proximité,
                l’écoute et la co-construction avec nos clients pour faire rayonner les savoir-faire camerounais.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-10 md:p-14 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Envie d’écrire la suite avec nous ?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez les partenaires Farine Cameroun et bénéficiez d’une qualité maîtrisée, d’une logistique fluide et
            d’un accompagnement métier au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Rencontrons-nous
            </a>
            <button
              type="button"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                // Disable smooth scroll on mobile for better performance
                const isMobile = window.innerWidth <= 768;
                const scrollBehavior = isMobile ? 'auto' : 'smooth';
                
                const element = document.getElementById('catalogue');
                if (element) {
                  element.scrollIntoView({ behavior: scrollBehavior as ScrollBehavior });
                }
              }}
            >
              Découvrir notre catalogue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;