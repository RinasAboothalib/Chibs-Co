import React from 'react';
import { Hero } from '../components/Hero';
import { BrandIntro } from '../components/BrandIntro';
import { FeaturedCreations } from '../components/FeaturedCreations';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCta } from '../components/FinalCta';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Palette } from 'lucide-react';
import { IMAGES } from '../data/chibiData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        onExploreClick={() => onNavigate('creations')}
        onCustomClick={() => onNavigate('customization')}
      />

      {/* Brand Intro / Philosophy */}
      <BrandIntro />

      {/* Featured Creations Showcase */}
      <FeaturedCreations />

      {/* Quick Navigation Cards to Other Sections */}
      <section className="py-16 sm:py-20 bg-[#F4EFEA] border-y border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2 font-mono">
              Explore Our World
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#101B2B] font-normal tracking-tight">
              Crafted with Heart, Made to Last
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Custom Builder */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('customization')}
              className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#7D2235]/10 text-[#7D2235] flex items-center justify-center mb-6 group-hover:bg-[#7D2235] group-hover:text-white transition-colors">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#101B2B] font-medium mb-3">
                  Custom Order Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed mb-6">
                  Design a miniature wooden doll made to look like someone you cherish. Tailored outfits, hairstyles, and engraved wooden bases.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7D2235] group-hover:gap-3 transition-all">
                <span>Start Designing</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 2: Visual Archive Gallery */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('gallery')}
              className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#121844]/10 text-[#121844] flex items-center justify-center mb-6 group-hover:bg-[#121844] group-hover:text-white transition-colors">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#101B2B] font-medium mb-3">
                  Visual Gallery Archive
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed mb-6">
                  Explore high-resolution photographs of wedding keepsakes, four-piece family sets, pet companions, and behind-the-scenes brushwork.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#121844] group-hover:gap-3 transition-all">
                <span>View All Photos</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 3: Artisan Story */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('about')}
              className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8E1D7] shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2A6F55]/10 text-[#2A6F55] flex items-center justify-center mb-6 group-hover:bg-[#2A6F55] group-hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#101B2B] font-medium mb-3">
                  Our Craft &amp; Story
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed mb-6">
                  Discover how raw solid hardwood turns into cherished heirlooms through mindful brush strokes, non-toxic colors, and protective natural seals.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2A6F55] group-hover:gap-3 transition-all">
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final Call to Action */}
      <FinalCta onCustomClick={() => onNavigate('customization')} />
    </div>
  );
};
