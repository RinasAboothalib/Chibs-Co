import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Mail } from 'lucide-react';
import { IMAGES, BRAND_CONTACTS } from '../data/chibiData';

export const EventsSection: React.FC = () => {
  const handleEventInquiry = () => {
    const text = encodeURIComponent(
      `Hello Chibs & Co.! I am inquiring about your creative experiences, craft workshops, or event collaborations. Could you share more details?`
    );
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#101B2B] text-[#FAF7F2] rounded-3xl overflow-hidden shadow-xl border border-[#243348]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#E8A598] mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Community &amp; Creativity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#FAF7F2] mb-6 leading-tight text-balance">
                  Creative Experiences
                </h2>
                <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light mb-6">
                  Beyond individual orders, Chibs &amp; Co. hosts and collaborates on interactive painting experiences, creative camps, and hands-on art workshops.
                </p>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed font-light mb-8">
                  Whether for a boutique gathering, school summer activity, or private event, participants discover the tactile joy of holding a paintbrush and breathing personality into wooden characters.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEventInquiry}
                  className="px-6 py-3.5 bg-[#7D2235] hover:bg-[#68192A] text-[#FAF7F2] text-xs sm:text-sm font-medium rounded-full shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask About Events on WhatsApp</span>
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${BRAND_CONTACTS.email}?subject=Inquiry%20regarding%20Chibs%20%26%20Co.%20Workshops`}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF7F2] text-xs sm:text-sm font-medium rounded-full border border-white/15 transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Inquiry</span>
                </motion.a>
              </div>
            </div>

            {/* Right Workshop Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full bg-[#1A2638] overflow-hidden">
              <img
                src={IMAGES.workshop}
                alt="Chibs and Co creative wooden doll painting workshop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B]/60 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
