import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { InstagramSection } from '../components/InstagramSection';
import { BRAND_CONTACTS } from '../data/chibiData';
import { MapPin, Clock, Truck, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        badge="Direct Connection"
        title="Get in Touch with Our Studio"
        description="Have a question about a bespoke piece or need advice on capturing details? Reach out directly via WhatsApp, Instagram DM, or our inquiry form below."
        currentPage="Contact"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Contact Section with Form & Instant WhatsApp */}
      <ContactSection />

      {/* Studio Info & Shipping Highlights */}
      <section className="py-12 sm:py-16 bg-[#F2EAE0] border-t border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 p-6 rounded-2xl border border-[#E8E1D7] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#7D2235]/10 text-[#7D2235] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#101B2B] font-medium mb-1">
                  Artisan Studio Origin
                </h4>
                <p className="text-xs text-[#5C6A79] leading-relaxed">
                  Based in Sri Lanka. Every doll is lovingly carved, sketched, and painted in our creative home studio.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-[#E8E1D7] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2A6F55]/10 text-[#2A6F55] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#101B2B] font-medium mb-1">
                  Studio Working Hours
                </h4>
                <p className="text-xs text-[#5C6A79] leading-relaxed">
                  Monday – Saturday: 9:00 AM – 7:00 PM (IST). WhatsApp messages are typically answered within 1-2 hours.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-[#E8E1D7] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#121844]/10 text-[#121844] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#101B2B] font-medium mb-1">
                  Island-Wide &amp; Global Shipping
                </h4>
                <p className="text-xs text-[#5C6A79] leading-relaxed">
                  Carefully wrapped in protective bubble wrap and packaged in kraft boxes for safe transit anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Community Section */}
      <InstagramSection />
    </div>
  );
};
