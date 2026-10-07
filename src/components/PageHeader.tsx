import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

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
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-[#E8E1D7] bg-[#101B2B]">
      {/* Background Image with Cinematic Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center filter brightness-90 scale-105"
            loading="eager"
          />
          {/* Multi-layered dark and warm gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B2B]/95 via-[#101B2B]/85 to-[#101B2B]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-transparent to-black/40" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#FAF7F2]/70 mb-5 font-mono">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 text-[#FAF7F2]/80 hover:text-[#E8A598] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#FAF7F2]/40" />
          <span className="font-medium text-[#E8A598]">{currentPage}</span>
        </div>

        {/* Title & Description with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8A598] block mb-3 font-mono">
            {badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-normal tracking-tight mb-5 leading-[1.15]">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#FAF7F2]/85 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
