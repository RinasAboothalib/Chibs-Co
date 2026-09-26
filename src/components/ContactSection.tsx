import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Phone, Instagram, HeartHandshake } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const ContactSection: React.FC = () => {
  const [userMessage, setUserMessage] = useState('');
  const [userName, setUserName] = useState('');

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Hello Chibs & Co.! My name is ${userName || 'a Sweet Chibis admirer'}. 
${userMessage ? userMessage : "I would love to learn more about ordering a custom hand-painted Sweet Chibi!"}`;
    window.open(`https://wa.me/${BRAND_CONTACTS.whatsappRaw}?text=${encodeURIComponent(fullText)}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Chibs & Co. Order Inquiry from ${userName || 'Customer'}`);
    const body = encodeURIComponent(
      `Hello Chibs & Co.,\n\n${userMessage || "I'm interested in ordering a custom hand-painted Sweet Chibi."}\n\nWarm regards,\n${userName || ''}`
    );
    window.location.href = `mailto:${BRAND_CONTACTS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F6F1EA] border-b border-[#E8E1D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-3">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#101B2B] font-normal tracking-tight mb-4 text-balance">
              Have a Chibi Idea?
            </h2>
            <p className="text-base sm:text-lg text-[#3E4A5B] font-light leading-relaxed mb-8">
              Tell us who you&apos;d like to turn into a Sweet Chibi.
            </p>

            <div className="space-y-4 mb-8">
              {/* WhatsApp Item */}
              <motion.a
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                href={BRAND_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7] flex items-center gap-4 hover:border-[#25D366] transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-[#7A8796] uppercase tracking-wider font-mono">
                    WhatsApp (Fastest Response)
                  </div>
                  <div className="text-base font-medium text-[#101B2B] group-hover:text-[#25D366] transition-colors">
                    {BRAND_CONTACTS.whatsappNumber}
                  </div>
                </div>
              </motion.a>

              {/* Email Item */}
              <motion.a
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                href={BRAND_CONTACTS.emailUrl}
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7] flex items-center gap-4 hover:border-[#7D2235] transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#7D2235]/15 text-[#7D2235] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#7A8796] uppercase tracking-wider font-mono">
                    Email Inquiry
                  </div>
                  <div className="text-base font-medium text-[#101B2B] group-hover:text-[#7D2235] transition-colors">
                    {BRAND_CONTACTS.email}
                  </div>
                </div>
              </motion.a>

              {/* Call Item */}
              <motion.a
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                href={BRAND_CONTACTS.callUrl}
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7] flex items-center gap-4 hover:border-[#101B2B] transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#101B2B]/10 text-[#101B2B] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#7A8796] uppercase tracking-wider font-mono">
                    Direct Call
                  </div>
                  <div className="text-base font-medium text-[#101B2B]">
                    {BRAND_CONTACTS.whatsappNumber}
                  </div>
                </div>
              </motion.a>

              {/* Instagram Item */}
              <motion.a
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                href={BRAND_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E1D7] flex items-center gap-4 hover:border-[#E8A598] transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8A598]/20 text-[#7D2235] flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#7A8796] uppercase tracking-wider font-mono">
                    Instagram Direct
                  </div>
                  <div className="text-base font-medium text-[#101B2B]">
                    {BRAND_CONTACTS.instagramHandle}
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Quick Order Composer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E4DCcf] shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-[#7D2235] font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Personalized Inquiry</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#101B2B] font-medium mb-3">
              Send Your Thoughts Directly
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6A79] mb-6 font-light leading-relaxed">
              Have a question about a gift, couple dolls, or a desk buddy? Drop a quick note below and connect directly with our artist.
            </p>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E4A5B] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Maya"
                  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-[#E2D8CC] focus:border-[#7D2235] focus:outline-none text-[#101B2B] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E4A5B] mb-2">
                  What kind of Sweet Chibi do you have in mind?
                </label>
                <textarea
                  rows={4}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="I would like to create a couple chibi for our 5th anniversary. Could you let me know how long it takes and what photos you need?"
                  className="w-full px-4 py-3 text-sm bg-white rounded-xl border border-[#E2D8CC] focus:border-[#7D2235] focus:outline-none text-[#101B2B] resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-[#25D366] hover:bg-[#20BE5C] text-white font-medium text-sm rounded-full shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleEmailSend}
                  className="w-full sm:w-auto py-3.5 px-6 bg-[#101B2B] hover:bg-[#7D2235] text-[#FAF7F2] font-medium text-sm rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
