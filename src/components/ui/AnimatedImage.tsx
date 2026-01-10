'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: 'parallax' | 'zoom' | 'reveal' | 'rotate' | 'glow' | 'slide' | 'fadeBlur';
  speed?: number;
  threshold?: number;
}

function AnimatedImage({
  src,
  alt,
  className = '',
  animation = 'reveal',
  speed = 0.5,
  threshold = 0.1,
}: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  useEffect(() => {
    // Disable parallax and zoom scroll animations on mobile for better scroll performance
    const isMobile = window.innerWidth <= 768;
    
    if ((animation === 'parallax' || animation === 'zoom') && !isMobile) {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (ref.current) {
              const rect = ref.current.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const elementTop = rect.top;
              const elementHeight = rect.height;
              
              // Calculate scroll progress (0 to 1)
              const scrollProgress = Math.max(0, Math.min(1, 
                (windowHeight - elementTop) / (windowHeight + elementHeight)
              ));
              
              setScrollY(scrollProgress);
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
    }
  }, [animation]);

  const getAnimationStyle = () => {
    // Disable complex animations on mobile for better scroll performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    
    const baseStyle: React.CSSProperties = {
      transition: isMobile ? 'opacity 0.3s ease' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    switch (animation) {
      case 'parallax':
        // Disable parallax on mobile, use simple reveal instead
        if (isMobile) {
          return {
            ...baseStyle,
            transform: 'none',
            opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
          };
        }
        return {
          ...baseStyle,
          transform: `translateY(${scrollY * 50 * speed}px) scale(${1 + scrollY * 0.1})`,
          opacity: 0.3 + scrollY * 0.7,
        };
      
      case 'zoom':
        // Disable zoom scroll animation on mobile, use simple reveal instead
        if (isMobile) {
          return {
            ...baseStyle,
            transform: 'none',
            opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
          };
        }
        return {
          ...baseStyle,
          transform: `scale(${1 + scrollY * 0.3})`,
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
        };
      
      case 'reveal':
        return {
          ...baseStyle,
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(1.1) translateY(30px)',
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
          filter: 'none',
        };
      
      case 'rotate':
        return {
          ...baseStyle,
          transform: isVisible ? 'rotate(0deg) scale(1)' : 'rotate(5deg) scale(0.9)',
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
        };
      
      case 'glow':
        return {
          ...baseStyle,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
          boxShadow: isVisible 
            ? '0 0 30px rgba(34, 139, 34, 0.3), 0 0 60px rgba(34, 139, 34, 0.2)' 
            : '0 0 0px rgba(34, 139, 34, 0)',
        };
      
      case 'slide':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.9)',
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
        };
      
      case 'fadeBlur':
        return {
          ...baseStyle,
          opacity: isVisible ? 1 : (imageLoaded ? 0.8 : 0.5),
          filter: 'none',
          transform: isVisible ? 'scale(1)' : 'scale(1.05)',
        };
      
      default:
        return baseStyle;
    }
  };

  // Détecter si l'image est externe ou locale
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  const isLocal = !isExternal && (src.startsWith('/') || src.startsWith('./') || src.startsWith('data:'));

  // Disable will-change on mobile for better scroll performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={isMobile ? {} : { willChange: 'transform, opacity' }}
    >
      {isExternal ? (
        // Pour les images externes, utiliser img avec lazy loading
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={getAnimationStyle()}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        // Pour les images locales, utiliser Next.js Image optimisé
        <div 
          className="relative w-full h-full"
          style={getAnimationStyle()}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={`${className.includes('object-contain') ? 'object-contain' : 'object-cover'} transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => {
              setImageLoaded(true);
            }}
            onError={(e) => {
              console.error('Erreur de chargement de l\'image:', src);
              setImageLoaded(true); // Afficher quand même pour éviter un écran blanc
            }}
            loading="lazy"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            placeholder="empty"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </div>
      )}
      
      {/* Shine effect overlay */}
      {animation === 'glow' && isVisible && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine pointer-events-none" />
      )}
      
      {/* Gradient overlay for depth */}
      {animation === 'reveal' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      )}
    </div>
  );
}

export default AnimatedImage;

