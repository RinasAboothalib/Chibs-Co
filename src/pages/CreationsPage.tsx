import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CREATIONS_DATA, CreationItem, BRAND_CONTACTS, IMAGES } from '../data/chibiData';
import { motion } from 'motion/react';
import { Paintbrush, MessageCircle, ArrowRight, ShieldCheck, Heart, Ruler, Box } from 'lucide-react';

interface CreationsPageProps {
  onNavigateHome: () => void;
  onNavigateCustomization: () => void;
}

export const CreationsPage: React.FC<CreationsPageProps> = ({
  onNavigateHome,
  onNavigateCustomization,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'couples', label: 'Couples & Weddings' },
    { id: 'families', label: 'Family Sets' },
    { id: 'pets', label: 'Pet Companions' },
    { id: 'desk', label: 'Work Desk Chibis' },
    { id: 'gifts', label: 'Gift Sets' },
    { id: 'personalized', label: 'Solo Characters' },
  ];

  const filteredCreations =
    selectedCategory === 'all'
      ? CREATIONS_DATA
      : CREATIONS_DATA.filter((item) => item.category === selectedCategory);

  const handleOrderWhatsApp = (item: CreationItem) => {
    const text = encodeURIComponent(
      `Hi Chibs & Co.! I'm interested in ordering the "${item.name}" (${item.categoryLabel}). ${item.suggestedPrompt}`
    );
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FAF7F2]/90 min-h-screen">
      <PageHeader
        badge="Bespoke Catalog"
        title="Our Handcrafted Collections"
        description="Every Sweet Chibi is turned from responsibly sourced solid wood, hand-painted with organic details, and finished with a satin protective sealant."
        currentPage="Creations"
        onNavigateHome={onNavigateHome}
        bgImage={IMAGES.hero}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#101B2B] text-white shadow-sm'
                    : 'bg-[#EAE2D7] text-[#3E4A5B] hover:bg-[#DDD3C5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Creations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with aspect ratio */}
                <div className="relative aspect-[4/3] bg-[#EAE2D7] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#7D2235] text-[10px] uppercase font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#101B2B] font-medium mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 border-t border-[#F2ECE4] mt-auto">
                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={() => handleOrderWhatsApp(item)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#101B2B] hover:bg-[#7D2235] text-white text-xs font-medium py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  <button
                    onClick={onNavigateCustomization}
                    title="Customize"
                    className="w-10 h-10 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D7] text-[#101B2B] flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-[#E8E1D7]"
                  >
                    <Paintbrush className="w-4 h-4 text-[#7D2235]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specifications & Quality Guarantee Card */}
        <div className="mt-16 bg-[#F4EFEA] border border-[#E8E1D7] rounded-2xl p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl text-[#101B2B] font-medium mb-2">
              Artisan Craftsmanship Specifications
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6A79] font-light">
              Every detail is tailored to your memory, built using heirloom standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 bg-white/70 p-4 rounded-xl border border-[#E8E1D7]/60">
              <ShieldCheck className="w-5 h-5 text-[#2A6F55] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-[#101B2B] mb-1">100% Solid Hardwood</h4>
                <p className="text-[11px] text-[#5C6A79] leading-relaxed">Turned from certified beech and oak wood with natural grain.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/70 p-4 rounded-xl border border-[#E8E1D7]/60">
              <Heart className="w-5 h-5 text-[#7D2235] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-[#101B2B] mb-1">Non-Toxic Pigments</h4>
                <p className="text-[11px] text-[#5C6A79] leading-relaxed">Artist-grade, archival water-based acrylics and gouache.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/70 p-4 rounded-xl border border-[#E8E1D7]/60">
              <Ruler className="w-5 h-5 text-[#121844] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-[#101B2B] mb-1">Heirloom Dimensions</h4>
                <p className="text-[11px] text-[#5C6A79] leading-relaxed">Sizes range from 2.5 inches (pets) to 4.5 inches (adult figures).</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white/70 p-4 rounded-xl border border-[#E8E1D7]/60">
              <Box className="w-5 h-5 text-[#C4820A] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-[#101B2B] mb-1">Gift-Ready Packaging</h4>
                <p className="text-[11px] text-[#5C6A79] leading-relaxed">Packaged in eco-kraft boxes with botanical lavender twine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
