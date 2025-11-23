'use client';

import { useState, useEffect } from 'react';
import Icon from '../ui/AppIcon';

interface WhatsAppFloatButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

function WhatsAppFloatButton({ 
  phoneNumber = '+237690900698',
  message = 'Bonjour! Je suis intéressé par vos farines de qualité supérieure. Pouvez-vous me donner plus d\'informations?',
  className = ''
}: WhatsAppFloatButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsVisible(scrollPosition > 200);

          const sections = ['accueil', 'probleme', 'solution', 'produits', 'qui-sommes-nous', 'prix', 'contact'];
          const currentSectionElement = sections.find(section => {
            const element = document.getElementById(section);
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          });

          if (currentSectionElement) {
            setCurrentSection(currentSectionElement);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getContextualMessage = () => {
    const baseMessage = 'Bonjour! Je suis intéressé par vos farines de qualité supérieure.';
    
    switch (currentSection) {
      case 'probleme':
        return `${baseMessage} J'ai des problèmes de qualité avec mon fournisseur actuel. Pouvez-vous m'aider?`;
      case 'solution':
        return `${baseMessage} Votre processus de contrôle qualité m'intéresse. Pouvez-vous me donner plus de détails?`;
      case 'produits':
        return `${baseMessage} Je voudrais connaître vos différents types de farine et leurs spécifications.`;
      case 'qui-sommes-nous':
        return `${baseMessage} Votre histoire m'inspire. Pouvez-vous me dire comment vous accompagnez vos partenaires?`;
      case 'prix':
        return `${baseMessage} Je voudrais discuter des prix et des remises pour commandes en gros.`;
      case 'contact':
        return `${baseMessage} Je suis prêt à passer commande. Quelles sont les prochaines étapes?`;
      default:
        return message;
    }
  };

  const handleWhatsAppClick = () => {
    const contextualMessage = getContextualMessage();
    const encodedMessage = encodeURIComponent(contextualMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[200] transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${className}`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <button
          onClick={handleWhatsAppClick}
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-250 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
          aria-label="Contacter via WhatsApp"
        >
          <Icon 
            name="ChatBubbleLeftRightIcon" 
            size={24} 
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
}

export default WhatsAppFloatButton;
