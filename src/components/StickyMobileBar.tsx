import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const StickyMobileBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past hero
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 right-4 z-40 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <a
        href={BRAND_CONTACTS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-xl hover:bg-[#20BE5C] active:scale-95 transition-all text-xs font-semibold"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  );
};
