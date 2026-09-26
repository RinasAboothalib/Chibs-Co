import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { BRAND_CONTACTS, IMAGES } from '../data/chibiData';

export const InstagramSection: React.FC = () => {
  const instaGrid = [
    { src: IMAGES.couples, label: 'Custom Wedding Couple' },
    { src: IMAGES.artistStudio, label: 'Hand-painting in studio' },
    { src: IMAGES.workspace, label: 'Work desk companions' },
    { src: IMAGES.familyPortrait, label: 'Family keepsake set' },
    { src: IMAGES.hero, label: 'Sweet Chibis collection' },
    { src: IMAGES.petCompanion, label: 'Miniature pet figurines' },
    { src: IMAGES.giftBox, label: 'Keepsake gift packaging' },
    { src: IMAGES.workshop, label: 'Creative art workshops' },
    { src: IMAGES.couples, label: 'Floral outfit details' },
  ];

  return (
    <section id="instagram" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] mb-2">
            <Instagram className="w-4 h-4" />
            <span>Digital Art Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4">
            More Sweet Chibis on Instagram
          </h2>
          <p className="text-sm sm:text-base text-[#5C6A79] font-light leading-relaxed">
            Follow our daily studio journey, new custom reveals, and see finished pieces before they travel to their new homes.
          </p>
        </motion.div>

        {/* 3x3 Instagram Image Grid with Motion */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
          {instaGrid.map((item, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              href={BRAND_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#EAE2D7] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#101B2B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center text-white">
                <Instagram className="w-6 h-6 mb-2 text-[#E8A598]" />
                <span className="text-xs font-medium tracking-wide">
                  {item.label}
                </span>
                <span className="text-[10px] text-[#FAF7F2]/80 mt-1 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-[#E8A598] text-[#E8A598]" /> View on IG
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Conversion Footprint */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <div className="font-serif text-2xl font-medium text-[#101B2B] mb-1">
            {BRAND_CONTACTS.instagramHandle}
          </div>
          <p className="text-xs sm:text-sm text-[#5C6A79] max-w-md mx-auto mb-6 font-light">
            See our latest creations, behind-the-scenes moments and new Chibis.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={BRAND_CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#101B2B] hover:bg-[#7D2235] text-[#FAF7F2] font-medium text-sm rounded-full shadow-md hover:shadow-lg transition-colors cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#E8A598]" />
            <span>Follow {BRAND_CONTACTS.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
