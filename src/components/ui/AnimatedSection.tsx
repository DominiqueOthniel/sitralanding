'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeInUp';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  stagger?: boolean;
}

function AnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  stagger = false,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          
          // Animate child elements with stagger effect
          if (stagger && ref.current) {
            const children = ref.current.querySelectorAll('[data-animate-child]');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100);
              (child as HTMLElement).style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
            });
          }
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
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
  }, [threshold, hasAnimated, stagger, duration]);

  // Disable animations on mobile for better scroll performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  const animationClasses = {
    fadeIn: isVisible || isMobile ? 'opacity-100' : 'opacity-0',
    slideUp: isVisible || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    slideLeft: isVisible || isMobile ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
    slideRight: isVisible || isMobile ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
    scale: isVisible || isMobile ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
    fadeInUp: isVisible || isMobile ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`${isMobile ? '' : 'transition-all ease-out'} ${animationClasses[animation]} ${className}`}
      style={isMobile ? {} : {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: 'translate3d(0,0,0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;

