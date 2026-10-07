import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export type NavPageId = 'home' | 'about' | 'creations' | 'customization' | 'gallery' | 'how-it-works' | 'contact';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavPageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'creations', label: 'Creations' },
    { id: 'customization', label: 'Customization' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const isLightNav = isScrolled || activePage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightNav
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D7] py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Logo & Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group transition-transform active:scale-95 cursor-pointer text-left"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-md ring-2 ring-white/60 transition-transform group-hover:scale-105 shrink-0 bg-[#121844]">
              <img
                src={BRAND_CONTACTS.logo}
                alt="Chibs & Co. Artisan Gifts Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`font-serif text-xl sm:text-2xl tracking-wide font-medium transition-colors ${
                isLightNav ? 'text-[#101B2B] group-hover:text-[#7D2235]' : 'text-[#FAF7F2] group-hover:text-[#E8A598]'
              }`}
            >
              CHIBS &amp; CO.
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors relative py-1 cursor-pointer font-sans text-xs xl:text-sm ${
                    isActive
                      ? isLightNav
                        ? 'text-[#7D2235] font-semibold'
                        : 'text-[#E8A598] font-semibold'
                      : isLightNav
                      ? 'text-[#3E4A5B] hover:text-[#101B2B]'
                      : 'text-[#FAF7F2]/85 hover:text-[#FAF7F2]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isLightNav ? 'bg-[#7D2235]' : 'bg-[#E8A598]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('customization')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-xs active:scale-95 cursor-pointer ${
                isLightNav
                  ? 'bg-[#7D2235] text-[#FAF7F2] hover:bg-[#661B2B]'
                  : 'bg-[#FAF7F2] text-[#101B2B] hover:bg-white'
              }`}
            >
              <span>Order a Chibi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors focus:outline-none cursor-pointer ${
                isLightNav
                  ? 'text-[#101B2B] hover:bg-[#EAE4DC]'
                  : 'text-[#FAF7F2] hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#E8E1D7] shadow-xl py-6 px-6 animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base sm:text-lg font-serif py-2 px-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EAE2D7] text-[#7D2235] font-semibold'
                      : 'text-[#101B2B] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#7D2235]" />}
                </button>
              );
            })}
            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('customization');
                }}
                className="w-full py-3 bg-[#7D2235] text-[#FAF7F2] rounded-full font-medium text-center text-sm shadow-sm cursor-pointer"
              >
                Order a Custom Chibi
              </button>
              <a
                href={BRAND_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-[#5C6A79] hover:text-[#101B2B] pt-1"
              >
                Instagram: {BRAND_CONTACTS.instagramHandle}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
