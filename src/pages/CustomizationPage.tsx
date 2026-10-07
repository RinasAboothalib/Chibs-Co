import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CustomizationSection } from '../components/CustomizationSection';
import { CheckCircle2, Clock, Camera } from 'lucide-react';
import { IMAGES } from '../data/chibiData';

interface CustomizationPageProps {
  onNavigateHome: () => void;
}

export const CustomizationPage: React.FC<CustomizationPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#FAF7F2]/90 min-h-screen">
      <PageHeader
        badge="Interactive Studio"
        title="Custom Order Studio"
        description="Design a personalized Sweet Chibi doll inspired by real photos, distinctive hairstyles, favorite outfits, eyeglasses, and engraved memories."
        currentPage="Customization"
        onNavigateHome={onNavigateHome}
        bgImage={IMAGES.workspace}
      />

      {/* Main Interactive Customization Builder */}
      <CustomizationSection />

      {/* Production & Proof Guarantee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="bg-[#F2EAE0] border border-[#E8E1D7] rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7D2235] block mb-2 font-mono">
              Peace of Mind Guarantee
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#101B2B] font-medium mb-3">
              How We Ensure Your Chibi Looks Just Right
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6A79] font-light leading-relaxed">
              We never ship an order until you have seen high-resolution photos and given your full approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#7D2235]/10 text-[#7D2235] flex items-center justify-center mb-4">
                <Camera className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#101B2B] font-medium mb-2">
                Photo Reference Consultation
              </h4>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Send us photos of the person, wedding dress, work uniform, or pet markings via WhatsApp or email.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#2A6F55]/10 text-[#2A6F55] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#101B2B] font-medium mb-2">
                Pre-Seal Photo Review
              </h4>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Before applying the permanent protective matte sealant, our artist sends clear photos of the doll for your confirmation.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#E8E1D7]">
              <div className="w-10 h-10 rounded-xl bg-[#121844]/10 text-[#121844] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base text-[#101B2B] font-medium mb-2">
                3 to 5 Days Handcrafting
              </h4>
              <p className="text-xs text-[#5C6A79] leading-relaxed">
                Each character requires multiple delicate coats of hand-mixed paint and proper curing for lifelong durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
