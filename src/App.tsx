import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { FeaturedCreations } from './components/FeaturedCreations';
import { CustomizationSection } from './components/CustomizationSection';
import { StorySection } from './components/StorySection';
import { GallerySection } from './components/GallerySection';
import { HowItWorks } from './components/HowItWorks';
import { GiftSection } from './components/GiftSection';
import { EventsSection } from './components/EventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollProgress } from './components/ScrollProgress';
import { FlowIndicator } from './components/FlowIndicator';

export default function App() {
  const scrollToCustomization = () => {
    const el = document.getElementById('customization');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCreations = () => {
    const el = document.getElementById('creations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E2530] font-sans flex flex-col selection:bg-[#7D2235] selection:text-[#FAF7F2] relative">
      {/* Top Reading/Scroll Progress Bar */}
      <ScrollProgress />

      {/* 1. Sticky Navigation */}
      <Navbar onOrderClick={scrollToCustomization} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={scrollToCreations}
          onCustomClick={scrollToCustomization}
        />

        {/* 3. Discover Sweet Chibis / Brand Intro */}
        <BrandIntro />

        {/* 4. Featured Creations */}
        <FeaturedCreations />

        {/* 5. Customization Section ("Made To Look Like Someone You Love") */}
        <CustomizationSection />

        {/* 6. Image-Led Story Section ("Every Chibi Begins With a Brush") */}
        <StorySection />

        {/* 7. Gallery Section with Lightbox */}
        <GallerySection />

        {/* 8. How It Works */}
        <HowItWorks />

        {/* 9. Gift Section */}
        <GiftSection />

        {/* 10. Events / Workshops */}
        <EventsSection />

        {/* 11. Customer Love */}
        <TestimonialsSection />

        {/* 12. Instagram Section */}
        <InstagramSection />

        {/* 13. Order / Contact Section */}
        <ContactSection />

        {/* 14. Final CTA */}
        <FinalCta />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Flow Indicator (Desktop Journey Tracker) */}
      <FlowIndicator />

      {/* Sticky Mobile WhatsApp Action */}
      <StickyMobileBar />
    </div>
  );
}
