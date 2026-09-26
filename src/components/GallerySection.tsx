import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/chibiData';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2">
            Visual Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4">
            The Gallery of Little Stories
          </h2>
          <p className="text-sm sm:text-base text-[#5C6A79] font-light leading-relaxed">
            A visual chronicle of bespoke creations, behind-the-scenes brushwork, and joyful desk companions.
          </p>
        </motion.div>

        {/* Editorial Masonry Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const isWide = item.aspect === 'landscape' && idx % 3 === 0;
            const isTall = item.aspect === 'portrait';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -3 }}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden rounded-2xl bg-[#EAE2D7] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 ${
                  isWide ? 'col-span-2 aspect-[16/9]' : isTall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle dark hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-white">
                  <div className="text-[11px] uppercase tracking-wider text-[#E8A598] font-medium mb-1">
                    {item.category}
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-medium text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#FAF7F2]/80 font-light line-clamp-1">
                    {item.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#FAF7F2] font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].image}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl mb-4"
              />
              <div className="text-center text-white">
                <span className="text-xs uppercase tracking-widest text-[#E8A598]">
                  {GALLERY_ITEMS[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl mt-1">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mt-1 font-light">
                  {GALLERY_ITEMS[activeLightboxIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
