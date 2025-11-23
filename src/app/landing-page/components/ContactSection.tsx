'use client';

import { useState } from 'react';

import Icon from '../../../components/ui/AppIcon';

interface ContactForm {
  name: string;
  business: string;
  email: string;
  phone: string;
  city: string;
  monthlyVolume: string;
  productType: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    business: '',
    email: '',
    phone: '',
    city: '',
    monthlyVolume: '',
    productType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: 'PhoneIcon',
      title: 'Téléphone',
      details: ['+237 690 900 698'],
      action: 'Appeler maintenant'
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp',
      details: ['+237 690 900 698'],
      action: 'Envoyer message'
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Email',
      details: ['kenjudith@sitrabcam.com'],
      action: 'Envoyer email'
    },
    {
      icon: 'MapPinIcon',
      title: 'Adresse',
      details: ['Zone Industrielle Bassa', 'BP 1234 Douala, Cameroun'],
      action: 'Voir sur carte'
    }
  ];

  const cities = [
    'Douala', 'Yaoundé', 'Bafoussam', 'Garoua', 'Bamenda', 'Maroua', 
    'Ngaoundéré', 'Bertoua', 'Ebolowa', 'Kribi', 'Limbe', 'Autre'
  ];

  const productTypes = [
    'Farine Boulangerie Premium',
    'Farine Pâtisserie Délicate', 
    'Farine Pizza Napoletana',
    'Farine Industrielle Pro',
    'Mix de produits',
    'Conseil personnalisé'
  ];

  const volumeRanges = [
    '10-25 sacs/mois',
    '25-50 sacs/mois',
    '50-100 sacs/mois',
    '100-200 sacs/mois',
    '200+ sacs/mois'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        business: '',
        email: '',
        phone: '',
        city: '',
        monthlyVolume: '',
        productType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `Bonjour! Je suis ${formData.name || '[Nom]'} de ${formData.business || '[Entreprise]'}. Je suis intéressé par vos farines de qualité supérieure. Pouvez-vous me contacter pour discuter de mes besoins?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/237690900698?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background image with overlay - Entrepôt et logistique de distribution - Optimized */}
      <div 
        className="absolute inset-0 z-0 section-bg-image"
        style={{
          backgroundImage: 'url(/assets/images/galerie-7.jpg)'
        }}
      >
        <div className="section-bg-overlay-strong"></div>
      </div>
      <div className="container mx-auto px-4 section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="PhoneIcon" size={16} className="mr-2" />
            Contactez-Nous
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prêt à{' '}
            <span className="text-green-600">Transformer</span>{' '}
            Votre Business ?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez nos experts dès aujourd'hui pour une consultation gratuite 
            et découvrez comment notre farine premium peut révolutionner vos produits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demande de Devis Personnalisé
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Icon name="CheckCircleIcon" size={20} className="text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">
                    Merci ! Votre demande a été envoyée avec succès.
                  </span>
                </div>
                <p className="text-green-700 text-sm mt-2">
                  Nous vous contacterons dans les 2 heures ouvrables.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Icon name="ExclamationTriangleIcon" size={20} className="text-red-600 mr-2" />
                  <span className="text-red-800 font-semibold">
                    Erreur lors de l'envoi. Veuillez réessayer.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Ville
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    aria-label="Ville"
                  >
                    <option value="">Sélectionnez votre ville</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Volume mensuel
                  </label>
                  <select
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    aria-label="Volume mensuel"
                  >
                    <option value="">Sélectionnez votre volume</option>
                    {volumeRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Type de produit recherché
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  aria-label="Type de produit recherché"
                >
                  <option value="">Sélectionnez un produit</option>
                  {productTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Décrivez vos besoins spécifiques..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-250"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="inline mr-2 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} className="inline mr-2" />
                      Envoyer la Demande
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-250"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={20} className="inline mr-2" />
                  WhatsApp Direct
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const handleContactAction = () => {
                  if (info.title === 'Téléphone') {
                    window.location.href = 'tel:+237690900698';
                  } else if (info.title === 'Email') {
                    window.location.href = 'mailto:kenjudith@sitrabcam.com?subject=Demande d\'information - Farine Sitrabcam';
                  } else if (info.title === 'WhatsApp') {
                    const message = 'Bonjour! Je suis intéressé par vos farines de qualité supérieure. Pouvez-vous me donner plus d\'informations?';
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/237690900698?text=${encodedMessage}`, '_blank');
                  } else if (info.title === 'Adresse') {
                    window.open('https://www.google.com/maps/search/?api=1&query=Zone+Industrielle+Bassa+Douala+Cameroun', '_blank');
                  }
                };

                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-250">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name={info.icon as any} size={24} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <button 
                          onClick={handleContactAction}
                          className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-250 mt-2"
                        >
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Farine Cameroun - Zone Industrielle Bassa, Douala"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=4.0511,-9.7679&z=14&output=embed"
                  className="border-0"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPinIcon" size={16} className="text-green-600" />
                    <span className="text-sm font-semibold text-gray-900">Notre Siège</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="ClockIcon" size={20} className="mr-2 text-green-600" />
                Horaires d'Ouverture
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">7h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">8h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-red-600 font-semibold">Fermé</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <Icon name="PhoneIcon" size={14} className="inline mr-1" />
                  Service d'urgence 24/7 disponible pour nos clients Enterprise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;