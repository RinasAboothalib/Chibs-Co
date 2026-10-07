import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home, ArrowDown } from 'lucide-react';
import { IMAGES } from '../data/chibiData';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  currentPage: string;
  onNavigateHome: () => void;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  currentPage,
  onNavigateHome,
  bgImage,
}) => {
  const activeBg = bgImage || IMAGES.hero;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#101B2B] text-[#FAF7F2]">
      {/* Background Image with Cinematic Scrim Overlay & Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src={activeBg}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-95"
          fetchPriority="high"
        />
        {/* Measured multi-layer scrim to match Home Hero */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/60 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,27,43,0.45)_100%)]" />
      </div>

      {/* Ambient floating orbs matching Home Hero */}
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

      {/* Hero Content Container matching Home Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center flex flex-col items-center justify-center">
        {/* Breadcrumb Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm tracking-wider uppercase font-mono text-[#FAF7F2]/90"
        >
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-[#E8A598] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#FAF7F2]/50" />
          <span className="text-[#E8A598] font-semibold">{currentPage}</span>
        </motion.div>

        {/* Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8A598] block mb-4 font-mono"
        >
          {badge}
        </motion.span>

        {/* Main Display Headline matching Home Hero size */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FAF7F2] leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-sm text-balance"
        >
          {title}
        </motion.h1>

        {/* Subtitle matching Home Hero presence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-xl text-[#FAF7F2]/85 font-light leading-relaxed max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>
      </div>

      {/* Bouncing Scroll Down Indicator at bottom */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#FAF7F2]/60 hover:text-white transition-colors cursor-pointer group"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-[#FAF7F2]/50 group-hover:text-[#E8A598] transition-colors">
          Explore Below
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E8A598] transition-colors bg-white/5 backdrop-blur-xs">
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </motion.button>
    </section>
  );
};
