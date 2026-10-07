import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, FileText, Image as ImageIcon, Paintbrush, Gift } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Idea',
      description: 'Reach out via WhatsApp or email. Let us know who you’re making a chibi for and what vibe or memory you want to capture.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Share Your Reference',
      description: 'Send a few clear photos of hairstyles, distinctive outfits, eyeglasses, or cute pet coats so we can catch all the details.',
      icon: ImageIcon,
    },
    {
      step: '03',
      title: 'We Hand-Paint Your Chibi',
      description: 'Your wooden peg doll is meticulously painted with fine artist brushes, delicate layering, and sealed for lasting quality.',
      icon: Paintbrush,
    },
    {
      step: '04',
      title: 'Your Custom Creation Is Ready',
      description: 'We send you a preview photo of the finished Sweet Chibi before carefully wrapping it for pickup or delivery to your hands.',
      icon: Gift,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2">
            The Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4">
            From Your Idea to Your Chibi
          </h2>
          <p className="text-sm sm:text-base text-[#5C6A79] font-light leading-relaxed">
            A simple, warm, and collaborative process to turn your favorite memories into a miniature keepsake.
          </p>
        </motion.div>

        {/* Four Steps Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#F8F3EC] p-8 rounded-2xl border border-[#E8E1D7] flex flex-col justify-between hover:border-[#8C6544] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-normal text-[#7D2235]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#101B2B] flex items-center justify-center border border-[#E2D8CC] group-hover:bg-[#101B2B] group-hover:text-[#FAF7F2] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#101B2B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6A79] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Order CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={BRAND_CONTACTS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20BE5C] text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Order Through WhatsApp (+94 76 770 3581)</span>
          </motion.a>
          <p className="text-xs text-[#7A8796] mt-3">
            Quick responses &bull; Reference photo uploads &bull; Friendly personal consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};
