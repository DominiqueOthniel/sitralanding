'use client';

import { useEffect, useRef } from 'react';

interface ConversionTrackingOverlayProps {
  className?: string;
}

function ConversionTrackingOverlay({ className = '' }: ConversionTrackingOverlayProps) {
  const sectionTimers = useRef<{ [key: string]: number }>({});
  const lastScrollDepth = useRef(0);
  const engagementStartTime = useRef(Date.now());
  const hasTrackedSections = useRef<Set<string>>(new Set());

  const sections = [
    'accueil', 'probleme', 'solution', 'produits', 
    'qui-sommes-nous', 'prix', 'contact'
  ];

  useEffect(() => {
    let isEngaged = true;

    const trackEvent = (eventData: { event: string; section?: string; engagement_time?: number; scroll_depth?: number; interaction_type?: string }) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventData.event, {
          event_category: 'engagement',
          event_label: eventData.section || 'unknown',
        });
      }
    };

    const handleScroll = () => {
      if (!isEngaged) return;

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && lastScrollDepth.current < milestone) {
          trackEvent({
            event: 'scroll_depth',
            scroll_depth: milestone,
            engagement_time: Date.now() - engagementStartTime.current,
          });
        }
      });

      lastScrollDepth.current = Math.max(lastScrollDepth.current, scrollPercent);

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView) {
          if (!sectionTimers.current[sectionId]) {
            sectionTimers.current[sectionId] = Date.now();
          }
        } else if (sectionTimers.current[sectionId]) {
          const timeSpent = Date.now() - sectionTimers.current[sectionId];
          
          if (timeSpent > 3000 && !hasTrackedSections.current.has(sectionId)) {
            trackEvent({
              event: 'section_engagement',
              section: sectionId,
              engagement_time: timeSpent,
              scroll_depth: scrollPercent,
            });
            hasTrackedSections.current.add(sectionId);
          }
          
          delete sectionTimers.current[sectionId];
        }
      });
    };

    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isEngaged = false;
      } else {
        isEngaged = true;
        engagementStartTime.current = Date.now();
      }
    });

    trackEvent({
      event: 'page_view',
      engagement_time: 0,
      scroll_depth: 0,
    });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return null;
}

export default ConversionTrackingOverlay;
