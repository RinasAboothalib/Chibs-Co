import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { HowItWorks } from '../components/HowItWorks';
import { GiftSection } from '../components/GiftSection';
import { ChevronDown, HelpCircle, Package, Send, Clock, Sparkles } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigateHome: () => void;
  onNavigateCustomization: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateHome,
  onNavigateCustomization,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How long does a custom Chibi take to make?',
      a: 'Standard orders typically take 3 to 5 business days to hand-paint and cure properly. During festive peak seasons or large family sets (4+ pieces), we recommend booking 1 to 2 weeks in advance.',
    },
    {
      q: 'Can I see the doll before it is shipped?',
      a: 'Yes, absolutely! We always send high-resolution photos of the finished doll on WhatsApp or email for your review before applying the protective top coat and shipping.',
    },
    {
      q: 'What kind of photos should I provide?',
      a: 'Clear front-facing or 3/4 angle photos showing the person’s typical hairstyle, facial features, and the specific outfit, dress, glasses, or pet markings you would like us to capture.',
    },
    {
      q: 'Do you deliver across Sri Lanka and internationally?',
      a: 'Yes! We offer island-wide doorstep courier across Sri Lanka (typically 1-3 days) and secure international tracked air courier for overseas clients.',
    },
    {
      q: 'How durable are the wooden dolls?',
      a: 'Sweet Chibis are crafted from solid hardwood and sealed with a water-resistant satin matte topcoat. They are designed to last for decades as desktop companions and display keepsakes.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <PageHeader
        badge="Crafting Journey"
        title="How It Works &amp; Gift Packaging"
        description="A simple, personal ordering journey from your favorite photo to a thoughtfully packaged wooden keepsake."
        currentPage="How It Works"
        onNavigateHome={onNavigateHome}
      />

      {/* 4-Step Process Section */}
      <HowItWorks />

      {/* Gift Packaging & Milestone Moments Section */}
      <GiftSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-[#F2EAE0] border-t border-[#E8E1D7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2 font-mono">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#101B2B] font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] rounded-2xl border border-[#E8E1D7] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#101B2B] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7D2235] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed border-t border-[#E8E1D7]/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onNavigateCustomization}
              className="inline-flex items-center gap-2 bg-[#7D2235] hover:bg-[#681C2B] text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ready to Order? Start Customizing</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
