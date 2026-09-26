import React from 'react';
import { motion } from 'motion/react';
import { Palette, HeartHandshake, Sparkles } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      iconBg: 'bg-[#101B2B]',
      iconColor: 'text-[#E8A598]',
      title: 'Smooth Solid Wood',
      text: 'Carefully turned natural wooden peg dolls, weighted comfortably and polished smooth as an organic canvas.',
    },
    {
      icon: Palette,
      iconBg: 'bg-[#7D2235]',
      iconColor: 'text-[#FAF7F2]',
      title: 'Intricate Hand-Painting',
      text: 'Every hairstyle, clothing motif, and eye sparkle is painted with micro brushes — no mass printing, only artist touch.',
    },
    {
      icon: HeartHandshake,
      iconBg: 'bg-[#8C6544]',
      iconColor: 'text-[#FAF7F2]',
      title: 'Sealed Keepsake Quality',
      text: 'Finished with gentle protective non-toxic sealant, guarding colors and memories for years to come.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden border-b border-[#E8E1D7]">
      {/* Decorative ambient subtle circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4EDE4]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-3"
        >
          The World of Chibs &amp; Co.
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-6 text-balance"
        >
          Where Little Wooden Figures Tell Big Stories.
        </motion.h2>

        {/* Core narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#3E4A5B] font-light leading-relaxed mb-6 max-w-3xl mx-auto"
        >
          At Chibs &amp; Co., ordinary wooden pieces become little characters with personality, color and meaning.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base text-[#5C6A79] leading-relaxed max-w-2xl mx-auto mb-14 font-light"
        >
          Each Sweet Chibi is lovingly designed and painted entirely by hand. Whether honoring a cherished couple, celebrating a family milestone, remembering a faithful pet, or gifting a smile to sit beside your computer monitor, our creations preserve what matters most in a charming, tangible form.
        </motion.p>

        {/* Craftsmanship Pillars with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#E8E1D7]/70 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-[#F7F2EC] border border-[#E8E1D7]/60 transition-shadow hover:shadow-sm"
              >
                <div className={`w-10 h-10 rounded-full ${pillar.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#101B2B] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A79] leading-relaxed font-light">
                  {pillar.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
