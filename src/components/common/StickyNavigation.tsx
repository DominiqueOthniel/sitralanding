'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '../ui/AppIcon';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface StickyNavigationProps {
  className?: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'mot-du-pdg', label: 'Le mot du PDG', href: '#mot-du-pdg' },
  { id: 'nos-laboratoires', label: 'Nos laboratoires', href: '#nos-laboratoires' },
  { id: 'catalogue', label: 'Catalogue', href: '#catalogue' },
  { id: 'qui-sommes-nous', label: 'Qui sommes-nous', href: '#qui-sommes-nous' },
  { id: 'nos-experiences', label: 'Nos expériences', href: '#nos-experiences' },
  { id: 'galerie', label: 'Galerie', href: '#galerie' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

function StickyNavigation({ className = '' }: StickyNavigationProps) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);

      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // Find the section that is currently most visible in the viewport
      let currentSection = null;
      let maxVisible = 0;

      sections.forEach(section => {
        if (!section.element) return;
        
        const rect = section.element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.max(0, rect.bottom - viewportHeight);
        const visibleHeight = rect.height - visibleTop - visibleBottom;
        const visibleRatio = Math.max(0, visibleHeight / viewportHeight);

        // Section is active if it's in the upper portion of viewport
        if (rect.top <= 150 && rect.bottom >= 150 && visibleRatio > maxVisible) {
          maxVisible = visibleRatio;
          currentSection = section;
        }
      });

      // Fallback: if no section found, check which one is closest to top
      if (!currentSection) {
        sections.forEach(section => {
          if (!section.element) return;
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && (!currentSection || rect.top > currentSection.element!.getBoundingClientRect().top)) {
            currentSection = section;
          }
        });
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    let timeoutId: NodeJS.Timeout;
    let ticking = false;
    
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      }, 10);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleNavClick = (href: string, id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    setActiveSection(id);
    
    // Find the element with a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Get the position of the element relative to the document
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        // Account for the fixed navigation bar height (around 100px)
        const offsetPosition = elementPosition - 100;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      } else {
        // Fallback: try scrolling to hash
        window.location.hash = id;
        // Scroll to top if it's accueil
        if (id === 'accueil') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
    }, 10);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out backdrop-blur-md ${
          isVisible ? 'bg-white/95 shadow-lg border-b border-gray-100' : 'bg-white/80'
        } hidden md:block ${className}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-10">
              <Image
                src="/logo.png"
                alt="Sitrabcam - Société Industrielle de Transformation de Blé au Cameroun"
                width={120}
                height={120}
                className="h-12 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
                priority
                quality={90}
                onClick={(e) => handleNavClick('#accueil', 'accueil', e as any)}
              />
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(item.href, item.id, e)}
                    type="button"
                    className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? 'text-gray-900 bg-gray-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={(e) => handleNavClick('#contact', 'contact', e)}
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Top Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out backdrop-blur-md ${
          isVisible ? 'bg-white/95 shadow-sm border-b border-gray-100' : 'bg-white/90'
        } md:hidden`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Image
              src="/logo.png"
              alt="Sitrabcam"
              width={100}
              height={100}
              className="h-10 w-auto cursor-pointer"
              priority
              quality={90}
              onClick={(e) => handleNavClick('#accueil', 'accueil', e as any)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200 z-[101] relative"
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[98] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-[99] transition-all duration-300 ease-in-out pt-16 md:hidden shadow-xl ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  handleNavClick(item.href, item.id, e);
                  setIsMobileMenuOpen(false);
                }}
                type="button"
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={(e) => {
                handleNavClick('#contact', 'contact', e);
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Olam Style */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out md:hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-center justify-around py-2">
              {[
                { id: 'accueil', label: 'Accueil', icon: 'HomeIcon' },
                { id: 'catalogue', label: 'Catalogue', icon: 'CubeIcon' },
                { id: 'contact', label: 'Contact', icon: 'PhoneIcon' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(`#${item.id}`, item.id, e)}
                  type="button"
                  className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 flex-1 ${
                    activeSection === item.id
                      ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  <Icon 
                    name={item.icon as any} 
                    size={22} 
                    className={`mb-1 ${activeSection === item.id ? 'text-gray-900' : 'text-gray-500'}`}
                  />
                  <span className="text-xs font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full"></div>
                  )}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 flex-1 ${
                  isMobileMenuOpen ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                <svg
                  className="w-5 h-5 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-xs font-medium">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyNavigation;
