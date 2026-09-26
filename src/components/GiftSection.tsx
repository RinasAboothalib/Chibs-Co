import React from 'react';
import { motion } from 'motion/react';
import { Gift, Heart, Cake, Sparkles, Users, PawPrint, Briefcase, Trophy, ArrowUpRight } from 'lucide-react';
import { GIFT_MOMENTS, GiftMoment, BRAND_CONTACTS } from '../data/chibiData';

export const GiftSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake':
        return Cake;
      case 'Heart':
        return Heart;
      case 'Sparkles':
        return Sparkles;
      case 'Users':
        return Users;
      case 'PawPrint':
        return PawPrint;
      case 'Briefcase':
        return Briefcase;
      case 'Trophy':
        return Trophy;
      default:
        return Gift;
    }
  };

  const handleMomentSelect = (moment: GiftMoment) => {
    const text = encodeURIComponent(
      `Hello Chibs & Co.! I am looking for a special gift for an upcoming "${moment.title}". Could we discuss ideas for a custom Sweet Chibi?`
    );
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="gift-ideas" className="py-20 sm:py-28 bg-[#F6F1EA] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2">
            Thoughtful Gifting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4 text-balance">
            A Gift That Feels Personal.
          </h2>
          <p className="text-base sm:text-lg text-[#3E4A5B] font-light leading-relaxed">
            Looking for something more meaningful than an ordinary gift? Turn a person, couple, family or beloved pet into a little wooden keepsake.
          </p>
        </motion.div>

        {/* Moments Cards Grid with Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {GIFT_MOMENTS.map((moment, idx) => {
            const Icon = getIcon(moment.icon);
            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => handleMomentSelect(moment)}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] flex flex-col justify-between hover:border-[#7D2235] hover:shadow-md transition-shadow duration-200 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EAE2D7] text-[#7D2235] flex items-center justify-center group-hover:bg-[#7D2235] group-hover:text-[#FAF7F2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] text-[#7A8796] font-mono uppercase tracking-wider">
                      {moment.popularFor}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#101B2B] mb-2 group-hover:text-[#7D2235] transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6A79] leading-relaxed font-light mb-6">
                    {moment.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFEAE2] flex items-center justify-between text-xs font-medium text-[#7D2235]">
                  <span>Request for this occasion</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
