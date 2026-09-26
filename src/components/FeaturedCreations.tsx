import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CREATIONS_DATA, CreationItem, BRAND_CONTACTS } from '../data/chibiData';

export const FeaturedCreations: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'couples', label: 'Couples' },
    { id: 'families', label: 'Families' },
    { id: 'pets', label: 'Pets' },
    { id: 'personalized', label: 'Personalized' },
    { id: 'desk', label: 'Work Desk' },
    { id: 'gifts', label: 'Gift Sets' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? CREATIONS_DATA
    : CREATIONS_DATA.filter((item) => item.category === selectedFilter);

  const handleInquire = (item: CreationItem) => {
    const text = encodeURIComponent(
      `Hello Chibs & Co.! I saw your "${item.name}" on the website and would love to ask about creating a custom version. Could you please share the details?`
    );
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="creations" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2">
              Bespoke Handcrafted Dolls
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight">
              Meet the Sweet Chibis
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C6A79] max-w-md font-light leading-relaxed">
            Every wooden doll is custom-painted to reflect the unique looks, clothes, and memories of the special people and pets in your life.
          </p>
        </motion.div>

        {/* Filter Controls (Clean Segmented Tabs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer relative ${
                selectedFilter === tab.id
                  ? 'bg-[#101B2B] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F2ECE4] text-[#5C6A79] hover:text-[#101B2B] hover:bg-[#EAE2D7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Creations Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-[#FAF7F2] border border-[#E8E1D7] rounded-2xl overflow-hidden flex flex-col hover:border-[#C8B8A6] hover:shadow-md transition-shadow duration-300"
              >
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] bg-[#EAE4DC] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Clean unboxed tag in corner */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#FAF7F2]/90 backdrop-blur-md text-[#101B2B] shadow-xs">
                      {item.badge || 'Handmade'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#7D2235] font-medium mb-1.5">
                      {item.categoryLabel}
                    </div>
                    <h3 className="font-serif text-2xl text-[#101B2B] font-medium mb-2.5 group-hover:text-[#7D2235] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C6A79] leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-[#EFEAE2] flex items-center justify-between">
                    <span className="text-xs text-[#7A8796] italic">
                      Bespoke to order
                    </span>
                    <button
                      onClick={() => handleInquire(item)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#7D2235] hover:text-[#101B2B] transition-colors py-1 group/btn cursor-pointer"
                    >
                      <span>Inquire via WhatsApp</span>
                      <MessageCircle className="w-3.5 h-3.5 text-[#7D2235] group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom helper text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-[#7A8796]">
            Have a unique theme in mind? Every Chibi is custom tailored to your reference photos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
