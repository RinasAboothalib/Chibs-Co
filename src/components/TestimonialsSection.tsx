import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/chibiData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2">
            Keepsake Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4">
            Made With Love. Loved By Many.
          </h2>
          <p className="text-sm sm:text-base text-[#5C6A79] font-light leading-relaxed">
            Heartfelt reflections from patrons who commissioned Sweet Chibis for their most cherished milestones.
          </p>
        </motion.div>

        {/* Testimonials Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F8F3EC] p-8 rounded-2xl border border-[#E8E1D7] flex flex-col justify-between hover:border-[#8C6544] transition-shadow hover:shadow-sm relative"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#8C6544] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#8C6544]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#3E4A5B] font-light leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#EAE2D7] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-[#101B2B]">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-[#7A8796] uppercase tracking-wider block">
                    {item.occasion}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#7D2235] flex items-center justify-center border border-[#E2D8CC]">
                  <Heart className="w-3.5 h-3.5 fill-[#7D2235]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
