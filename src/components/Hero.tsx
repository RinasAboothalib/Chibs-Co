import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Instagram, Heart } from 'lucide-react';
import { BRAND_CONTACTS, IMAGES } from '../data/chibiData';

interface HeroProps {
  onExploreClick: () => void;
  onCustomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#101B2B]">
      {/* Background Image with warm editorial scrim overlay & motion scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src={IMAGES.hero}
          alt="Hand-painted wooden Sweet Chibis on artisan studio desk"
          className="w-full h-full object-cover object-center filter brightness-95"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Measured dark gallery scrim to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/60 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,27,43,0.4)_100%)]" />
      </div>

      {/* Floating subtle organic brushstroke ambient orbs */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 sm:right-24 w-48 h-48 rounded-full bg-[#E8A598]/20 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 left-8 sm:left-20 w-64 h-64 rounded-full bg-[#7D2235]/25 blur-3xl pointer-events-none z-0"
      />

      {/* Hero content container with staggered entrance */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center text-[#FAF7F2]">

        {/* Small eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm tracking-widest uppercase font-medium text-[#FAF7F2]/90"
        >
          <Heart className="w-3.5 h-3.5 text-[#E8A598]" />
          <span>Hand-Painted &bull; Personalized &bull; Made With Love</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FAF7F2] leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-sm text-balance"
        >
          Little Wooden Characters,
          <span className="block italic font-light text-[#E8A598] mt-1 sm:mt-2">
            Made Especially for You.
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/85 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Meet our Sweet Chibis — hand-painted wooden dolls created as meaningful gifts, keepsakes and charming additions to your workspace.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF7F2] text-[#101B2B] hover:bg-white font-medium text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-colors cursor-pointer"
          >
            Explore Sweet Chibis
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCustomClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#7D2235] hover:bg-[#68192A] text-[#FAF7F2] font-medium text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-colors border border-[#8E2F43] cursor-pointer"
          >
            Create a Custom Chibi
          </motion.button>
        </motion.div>

        {/* Instagram badge CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="inline-block"
        >
          <a
            href={BRAND_CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition-colors py-1.5 px-4 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-sm border border-white/10"
          >
            <Instagram className="w-4 h-4 text-[#E8A598]" />
            <span>Follow {BRAND_CONTACTS.instagramHandle} on Instagram</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-[#FAF7F2]/60 hover:text-[#FAF7F2] transition-colors cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};
