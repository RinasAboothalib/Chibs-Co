import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  currentPage: string;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  currentPage,
  onNavigateHome,
}) => {
  return (
    <div className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-gradient-to-b from-[#F2EAE0] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#718096] mb-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-[#7D2235] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#A0AEC0]" />
          <span className="font-medium text-[#101B2B]">{currentPage}</span>
        </div>

        {/* Title & Description with motion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2 font-mono">
            {badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#5C6A79] font-light leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
