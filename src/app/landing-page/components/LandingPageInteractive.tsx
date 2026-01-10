'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from './HeroSection';
import StickyNavigation from '../../../components/common/StickyNavigation';
import WhatsAppFloatButton from '../../../components/common/WhatsAppFloatButton';
import SectionProgressIndicator from '../../../components/common/SectionProgressIndicator';
import ConversionTrackingOverlay from '../../../components/common/ConversionTrackingOverlay';
import AnimatedSection from '../../../components/ui/AnimatedSection';

// Lazy loading des composants non critiques pour améliorer les performances
const MotDuPDGSection = lazy(() => import('./MotDuPDGSection'));
const NosLaboratoiresSection = lazy(() => import('./NosLaboratoiresSection'));
const ProductShowcase = lazy(() => import('./ProductShowcase'));
const AboutSection = lazy(() => import('./TestimonialsSection'));
const ExperiencesSection = lazy(() => import('./ExperiencesSection'));
const ImageGallerySection = lazy(() => import('./ImageGallerySection'));
const FAQSection = lazy(() => import('./FAQSection'));
const ContactSection = lazy(() => import('./ContactSection'));

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleOrderClick = () => {
    if (!isHydrated) return;
    
    // Disable smooth scroll on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    const scrollBehavior = isMobile ? 'auto' : 'smooth';
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: scrollBehavior as ScrollBehavior });
    }
  };

  const handleWhatsAppClick = () => {
    if (!isHydrated) return;
    
    const message = 'Bonjour! Je suis intéressé par vos farines de qualité supérieure. Pouvez-vous me donner plus d\'informations sur votre catalogue?';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/237690900698?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Navigation Components */}
      <StickyNavigation />
      <SectionProgressIndicator />
      
      {/* Main Content Sections */}
      <HeroSection 
        onOrderClick={handleOrderClick}
        onWhatsAppClick={handleWhatsAppClick}
      />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={0}>
          <MotDuPDGSection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <NosLaboratoiresSection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <ProductShowcase />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <AboutSection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <ExperiencesSection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={100}>
          <ImageGallerySection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <FAQSection />
        </AnimatedSection>
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AnimatedSection animation="fadeInUp" delay={200}>
          <ContactSection />
        </AnimatedSection>
      </Suspense>
      
      {/* Floating Action Components */}
      <WhatsAppFloatButton 
        phoneNumber="+237690900698"
        message="Bonjour! Je suis intéressé par vos farines de qualité supérieure du Cameroun. Pouvez-vous me donner plus d'informations?"
      />
      
      {/* Analytics & Tracking */}
      <ConversionTrackingOverlay />
    </>
  );
};

export default LandingPageInteractive;