'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        } hidden md:block ${className}`}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 px-6 py-3">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 pr-4 border-r border-gray-200">
              <Image
                src="/logo.png"
                alt="Sitrabcam - Société Industrielle de Transformation de Blé au Cameroun"
                width={112}
                height={112}
                className="w-28 h-auto drop-shadow-sm"
                priority
                quality={90}
              />
            </div>
            <div className="flex items-center space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => handleNavClick(item.href, item.id, e)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'text-gray-900 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } md:hidden`}
      >
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2">
          <div className="flex items-center justify-between">
            {navigationItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(item.href, item.id, e)}
                type="button"
                className={`flex flex-col items-center px-2 py-2 rounded-lg transition-all duration-250 ease-in-out min-w-0 flex-1 ${
                  activeSection === item.id
                    ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <span className="text-xs font-medium truncate w-full text-center">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <div className="w-1 h-1 bg-green-600 rounded-full mt-1"></div>
                )}
              </button>
            ))}
            <button
              type="button"
              className="flex flex-col items-center px-2 py-2 rounded-lg transition-all duration-250 ease-in-out text-gray-600 hover:text-green-600 min-w-0 flex-1"
              onClick={(e) => {
                e.preventDefault();
                // Scroll to contact section (last section)
                handleNavClick('#contact', 'contact', e);
              }}
            >
              <span className="text-xs font-medium">Plus</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default StickyNavigation;
