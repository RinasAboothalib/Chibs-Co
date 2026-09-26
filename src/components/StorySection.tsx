import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IMAGES } from '../data/chibiData';

export const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const secondaryImageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const mainImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 1.02]);

  return (
    <section
      id="our-story"
      ref={containerRef}
      className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Image Collage with Subtle Motion Flow */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ scale: mainImageScale }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#EAE2D7]"
            >
              <img
                src={IMAGES.artistStudio}
                alt="Artist holding and delicately painting a wooden peg doll with fine brush"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Overlapping secondary offset image with parallax motion */}
            <motion.div
              style={{ y: secondaryImageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-10 -right-8 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] z-20 aspect-square bg-[#EAE2D7]"
            >
              <img
                src={IMAGES.giftBox}
                alt="Handcrafted finished Sweet Chibi presented in keepsake gift box"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Subtle decorative spinning stamp */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-[#8C6544]/30 flex items-center justify-center p-2 text-center pointer-events-none -z-0"
            >
              <span className="font-serif text-[10px] text-[#8C6544] tracking-widest uppercase">
                Artisan Studio &bull; Handmade
              </span>
            </motion.div>
          </div>

          {/* Editorial Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pl-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-3">
              The Artisan Process
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-6 leading-tight text-balance">
              Every Chibi Begins With a Brush.
            </h2>

            <p className="text-base sm:text-lg text-[#3E4A5B] font-light leading-relaxed mb-6">
              From a simple wooden figure to a tiny character filled with personality, every piece is individually painted by hand.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#5C6A79] leading-relaxed font-light mb-8">
              <p>
                In a world filled with factory duplicates, there is an irreplaceable warmth in something made slowly, patiently, and specifically for you. Each turned wooden blank is individually inspected before our brushes ever touch the surface.
              </p>
              <p>
                We spend time mixing custom paint shades to match real hair tones, delicate clothing patterns, and pet coat textures. Layer by layer, tiny expressions emerge — rosy cheeks, thoughtful smiles, and little quirks that make someone instantly recognizable.
              </p>
            </div>

            {/* Editorial Quote Box */}
            <blockquote className="border-l-2 border-[#7D2235] pl-4 italic font-serif text-base sm:text-lg text-[#101B2B]">
              &ldquo;We don&apos;t just paint wood — we preserve a personal moment you can hold in the palm of your hand.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
