'use client';

import { useState, useEffect } from 'react';

interface SectionProgressIndicatorProps {
  className?: string;
}

const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'probleme', label: 'Problème' },
  { id: 'solution', label: 'Solution' },
  { id: 'produits', label: 'Produits' },
  { id: 'qui-sommes-nous', label: 'Qui sommes-nous' },
  { id: 'prix', label: 'Prix' },
  { id: 'contact', label: 'Contact' },
];

function SectionProgressIndicator({ className = '' }: SectionProgressIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 100);

      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id),
      }));

      const currentSectionElement = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (currentSectionElement) {
        setCurrentSection(currentSectionElement.id);
      }
    };

    let inThrottle = false;
    const throttledHandleScroll = () => {
      if (!inThrottle) {
        handleScroll();
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, 16);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  const getSectionProgress = (sectionId: string) => {
    const sectionIndex = sections.findIndex(s => s.id === sectionId);
    const totalSections = sections.length;
    return ((sectionIndex + 1) / totalSections) * 100;
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    } else if (sectionId === 'accueil') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } hidden md:block ${className}`}
      >
        <div className="relative">
          <div className="w-1 h-64 bg-gray-200 rounded-full">
            <div
              className="w-full bg-green-600 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>
          
          <div className="absolute inset-0">
            {sections.map((section, index) => {
              const position = (index / (sections.length - 1)) * 100;
              const isActive = currentSection === section.id;
              const isPassed = getSectionProgress(section.id) <= scrollProgress;
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  type="button"
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ top: `${position}%` }}
                  aria-label={`Aller à ${section.label}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-250 ease-in-out ${
                      isActive
                        ? 'bg-green-600 border-green-600 scale-125'
                        : isPassed
                        ? 'bg-green-600 border-green-600 group-hover:scale-125' : 'bg-white border-gray-300 group-hover:border-green-600 group-hover:scale-125'
                    }`}
                  ></div>
                  
                  <div
                    className={`absolute left-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap transition-all duration-250 ease-in-out ${
                      isActive ? 'opacity-100 text-green-600 font-semibold' : 'opacity-0'
                    }`}
                  >
                    <div className="bg-white px-2 py-1 rounded shadow-sm text-sm">
                      {section.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } md:hidden`}
      >
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-green-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        
        {currentSection && (
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 text-center border-b border-gray-100">
            <span className="text-sm font-medium text-green-600">
              {sections.find(s => s.id === currentSection)?.label}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default SectionProgressIndicator;
