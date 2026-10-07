import React, { useState, useEffect } from 'react';
import { Navbar, NavPageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CreationsPage } from './pages/CreationsPage';
import { CustomizationPage } from './pages/CustomizationPage';
import { GalleryPage } from './pages/GalleryPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [activePage, setActivePage] = useState<NavPageId>('home');

  useEffect(() => {
    // Read initial hash from URL if present
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '') as NavPageId;
      const validPages: NavPageId[] = [
        'home',
        'about',
        'creations',
        'customization',
        'gallery',
        'how-it-works',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page: string) => {
    const pageId = page as NavPageId;
    setActivePage(pageId);
    window.location.hash = `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E2530] font-sans flex flex-col selection:bg-[#7D2235] selection:text-[#FAF7F2] relative">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Sticky Navigation Header with active page highlight */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOrderClick={() => navigateTo('customization')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && <HomePage onNavigate={navigateTo} />}

        {activePage === 'about' && (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {activePage === 'creations' && (
          <CreationsPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateCustomization={() => navigateTo('customization')}
          />
        )}

        {activePage === 'customization' && (
          <CustomizationPage onNavigateHome={() => navigateTo('home')} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage onNavigateHome={() => navigateTo('home')} />
        )}

        {activePage === 'how-it-works' && (
          <HowItWorksPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateCustomization={() => navigateTo('customization')}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage onNavigateHome={() => navigateTo('home')} />
        )}
      </main>

      {/* Footer with page links and hyperlinked creator company */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky WhatsApp Contact Bar for Mobile */}
      <StickyMobileBar />
    </div>
  );
}
