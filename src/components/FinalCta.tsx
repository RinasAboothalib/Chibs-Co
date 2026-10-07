import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONTACTS, IMAGES } from '../data/chibiData';

interface FinalCtaProps {
  onCustomClick?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCustomClick }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#101B2B] text-[#FAF7F2] overflow-hidden">
      {/* Background with subtle photo texture and dark warm vignette */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src={IMAGES.couples}
          alt="Hand-painted wooden sweet chibis"
          className="w-full h-full object-cover filter blur-[2px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#101B2B]/85" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Cinematic headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FAF7F2] leading-[1.1] mb-6 text-balance">
          Your Story.
          <span className="block text-[#E8A598] italic font-light">Your People.</span>
          <span className="block">Your Chibi.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#FAF7F2]/80 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Let&apos;s turn something meaningful into a little wooden keepsake.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {onCustomClick ? (
            <motion.button
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCustomClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#7D2235] hover:bg-[#68192A] text-[#FAF7F2] font-medium text-sm sm:text-base rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 border border-[#8E2F43] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Create My Chibi</span>
            </motion.button>
          ) : (
            <motion.a
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href={BRAND_CONTACTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#7D2235] hover:bg-[#68192A] text-[#FAF7F2] font-medium text-sm sm:text-base rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 border border-[#8E2F43] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Create My Chibi</span>
            </motion.a>
          )}

          <motion.a
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            href={BRAND_CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-medium text-sm sm:text-base rounded-full backdrop-blur-sm border border-white/15 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Instagram className="w-5 h-5 text-[#E8A598]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
