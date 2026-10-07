import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <a
        href={BRAND_CONTACTS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20BE5C] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Blinking / pulsing outer rings */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/50 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-2.5 rounded-full bg-[#25D366]/25 animate-pulse pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Icon Only - NO text */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-sm relative z-10 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
