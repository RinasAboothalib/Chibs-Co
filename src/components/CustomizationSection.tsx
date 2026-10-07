import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, Camera, Palette, Package } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const CustomizationSection: React.FC = () => {
  const [characterType, setCharacterType] = useState('Couple (2 Figures)');
  const [occasion, setOccasion] = useState('Anniversary');
  const [notes, setNotes] = useState('');

  const characterOptions = [
    'Couple (2 Figures)',
    'Family (3–4 Figures)',
    'Solo Person',
    'Person & Pet',
    'Desk Companion',
  ];

  const occasionOptions = [
    'Anniversary',
    'Wedding / Cake Topper',
    'Birthday Gift',
    'Desk / Workspace',
    'Pet Memorial / Love',
    'Special Keepsake',
  ];

  const steps = [
    {
      num: '01',
      title: 'Share Your Idea',
      description: 'Tell us who you want to celebrate, the occasion, and any special themes or outfit colors.',
      icon: MessageCircle,
    },
    {
      num: '02',
      title: 'Send Your Reference',
      description: 'Share a couple of photos showing hairstyles, clothing patterns, or favorite poses over WhatsApp.',
      icon: Camera,
    },
    {
      num: '03',
      title: 'We Paint Your Chibi',
      description: 'We carefully hand-paint every tiny stroke on solid wood, capturing personality and delicate patterns.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Receive Your Little Character',
      description: 'Your Sweet Chibi is lovingly gift-packaged with protective wrap, ready to cherish or surprise someone.',
      icon: Package,
    },
  ];

  const handleSendCustomOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const promptMessage = `Hello Chibs & Co.! I'd love to order a custom Sweet Chibi!

*Details:*
- Character Type: ${characterType}
- Occasion / Theme: ${occasion}
${notes ? `- Personal Notes & Details: ${notes}` : ''}

I have reference photos ready to send over WhatsApp!`;

    const encoded = encodeURIComponent(promptMessage);
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="customization" className="py-20 sm:py-28 bg-[#F6F1EA] border-b border-[#E8E1D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-3">
            Bespoke Commission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4 text-balance">
            Made To Look Like Someone You Love.
          </h2>
          <p className="text-base sm:text-lg text-[#5C6A79] font-light leading-relaxed">
            No two Sweet Chibis are alike. Every single doll is painted from scratch based on your own real photos, memories, and personal style.
          </p>
        </motion.div>

        {/* 4 Visual Steps with staggered scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8E1D7] flex flex-col justify-between hover:border-[#8C6544] transition-all duration-200 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-[#7D2235] font-semibold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#EAE2D7] text-[#101B2B] flex items-center justify-center group-hover:bg-[#101B2B] group-hover:text-[#FAF7F2] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#101B2B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6A79] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Custom Order Message Builder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF7F2] rounded-3xl border border-[#E4DCcf] shadow-sm p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="mb-2 text-xs uppercase tracking-widest text-[#7D2235] font-semibold font-mono">
            Interactive Custom Chibi Planner
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#101B2B] font-medium mb-3">
            Start Your Custom Order in Minutes
          </h3>
          <p className="text-sm text-[#5C6A79] mb-8 font-light leading-relaxed">
            Select your preferences below to draft your request. When ready, tap the WhatsApp button to connect directly with our artist.
          </p>

          <form onSubmit={handleSendCustomOrder} className="space-y-6">
            {/* Step 1: Character Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E4A5B] mb-2.5">
                1. Select Character Configuration
              </label>
              <div className="flex flex-wrap gap-2">
                {characterOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setCharacterType(opt)}
                    className={`px-3.5 py-2 text-xs sm:text-sm rounded-lg border transition-all text-left cursor-pointer active:scale-95 ${
                      characterType === opt
                        ? 'bg-[#101B2B] text-[#FAF7F2] border-[#101B2B] shadow-xs'
                        : 'bg-white text-[#4A5568] border-[#E2D8CC] hover:border-[#101B2B]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Occasion */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E4A5B] mb-2.5">
                2. What is the Occasion?
              </label>
              <div className="flex flex-wrap gap-2">
                {occasionOptions.map((occ) => (
                  <button
                    type="button"
                    key={occ}
                    onClick={() => setOccasion(occ)}
                    className={`px-3.5 py-2 text-xs sm:text-sm rounded-lg border transition-all text-left cursor-pointer active:scale-95 ${
                      occasion === occ
                        ? 'bg-[#7D2235] text-[#FAF7F2] border-[#7D2235] shadow-xs'
                        : 'bg-white text-[#4A5568] border-[#E2D8CC] hover:border-[#7D2235]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Notes & Personal Touches */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E4A5B] mb-2.5">
                3. Tell Us About Them (Hairstyles, Clothing, Pet Breeds, Glasses, etc.)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="e.g. He wears a navy sweater and round glasses; she has curly brown hair in a floral dress. We also have a black labrador!"
                className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-[#E2D8CC] focus:border-[#7D2235] focus:outline-none text-[#101B2B] placeholder:text-[#9AA6B2] resize-none transition-colors"
              />
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EFEAE2]">
              <div className="flex items-center gap-2 text-xs text-[#5C6A79]">
                <CheckCircle2 className="w-4 h-4 text-[#7D2235]" />
                <span>Primary ordering via WhatsApp: +94 76 770 3581</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20BE5C] text-white font-medium text-sm rounded-full shadow-md hover:shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Start a Custom Order on WhatsApp</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
