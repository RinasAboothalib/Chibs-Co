import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { StorySection } from '../components/StorySection';
import { EventsSection } from '../components/EventsSection';
import { Leaf, Award, Compass, Heart } from 'lucide-react';
import { IMAGES } from '../data/chibiData';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  return (
    <div className="bg-[#FAF7F2]/90 min-h-screen">
      <PageHeader
        badge="Artisan Heritage"
        title="Our Craft &amp; Story"
        description="Founded on the belief that meaningful gifts don't need to be loud — they just need to carry a piece of your heart."
        currentPage="About"
        onNavigateHome={onNavigateHome}
        bgImage={IMAGES.artistStudio}
      />

      {/* Main Artisan Story Section */}
      <StorySection />

      {/* Craft Values */}
      <section className="py-16 sm:py-24 bg-[#F2EAE0] border-y border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2 font-mono">
              The Chibs Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101B2B] font-normal tracking-tight">
              Honoring the Natural Medium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#2A6F55]/10 text-[#2A6F55] flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#101B2B] font-medium mb-2">Sustainable Timber</h3>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                We select ethically harvested beech and oak from certified suppliers with minimal carbon footprint.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#7D2235]/10 text-[#7D2235] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#101B2B] font-medium mb-2">Mindful Hands</h3>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Zero machine printing or digital decals. Every eye, collar, and curl of hair is painted stroke by stroke.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#121844]/10 text-[#121844] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#101B2B] font-medium mb-2">Artisan Grade</h3>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Fine German brushwork using archival pigments that do not yellow, fade, or peel with time.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#C4820A]/10 text-[#C4820A] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#101B2B] font-medium mb-2">Community Rooted</h3>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Hosting creative workshops in Colombo, connecting people through hands-on artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Creative Workshops Section */}
      <EventsSection />
    </div>
  );
};
