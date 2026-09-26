import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Creations', href: '#creations' },
    { label: 'Customization', href: '#customization' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D7] py-3.5'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Zone with official circular logo badge */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group transition-transform active:scale-95"
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
                isScrolled ? 'text-[#101B2B] group-hover:text-[#7D2235]' : 'text-[#FAF7F2] group-hover:text-[#E8A598]'
              }`}
            >
              CHIBS & CO.
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors relative py-1 hover:underline underline-offset-4 ${
                  isScrolled
                    ? 'text-[#3E4A5B] hover:text-[#101B2B]'
                    : 'text-[#FAF7F2]/90 hover:text-[#FAF7F2]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOrderClick}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95 ${
                isScrolled
                  ? 'bg-[#7D2235] text-[#FAF7F2] hover:bg-[#661B2B]'
                  : 'bg-[#FAF7F2] text-[#101B2B] hover:bg-white'
              }`}
            >
              <span>Order a Chibi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors focus:outline-none ${
                isScrolled
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
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#E8E1D7] shadow-xl py-6 px-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif text-[#101B2B] hover:text-[#7D2235] transition-colors py-1 border-b border-[#EFEAE2]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderClick();
                }}
                className="w-full py-3 bg-[#7D2235] text-[#FAF7F2] rounded-full font-medium text-center text-sm shadow-sm"
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
