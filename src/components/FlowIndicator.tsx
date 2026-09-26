import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

interface SectionFlowItem {
  id: string;
  label: string;
  step: string;
}

const FLOW_SECTIONS: SectionFlowItem[] = [
  { id: 'hero', label: 'Welcome', step: '01' },
  { id: 'about', label: 'Discover', step: '02' },
  { id: 'creations', label: 'Creations', step: '03' },
  { id: 'customization', label: 'Customize', step: '04' },
  { id: 'our-story', label: 'Our Story', step: '05' },
  { id: 'gallery', label: 'Gallery', step: '06' },
  { id: 'how-it-works', label: 'Process', step: '07' },
  { id: 'gift-ideas', label: 'Gifts', step: '08' },
  { id: 'events', label: 'Workshops', step: '09' },
  { id: 'contact', label: 'Order', step: '10' },
];

export const FlowIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const scrollPosition = window.scrollY + 250;
      for (let i = FLOW_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(FLOW_SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(FLOW_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 pointer-events-auto"
        >
          {/* Subtle vertical spine track */}
          <div className="bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8E1D7] p-2 rounded-full shadow-sm flex flex-col items-center gap-2">
            {FLOW_SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="group relative flex items-center justify-center cursor-pointer p-1"
                  aria-label={`Jump to ${sec.label}`}
                >
                  {/* Indicator Dot */}
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-2.5 h-6 bg-[#7D2235]'
                        : 'w-2 h-2 bg-[#D1C7BA] group-hover:bg-[#101B2B] group-hover:scale-125'
                    }`}
                  />

                  {/* Tooltip Label */}
                  <div className="absolute right-7 px-2.5 py-1 rounded-md bg-[#101B2B] text-[#FAF7F2] text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-sm flex items-center gap-1.5">
                    <span className="text-[#E8A598] font-mono text-[9px]">{sec.step}</span>
                    <span>{sec.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#FAF7F2]/90 hover:bg-[#7D2235] text-[#101B2B] hover:text-[#FAF7F2] border border-[#E8E1D7] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
