import React from 'react';
import { Instagram, MessageCircle, Mail, Phone, Heart } from 'lucide-react';
import { BRAND_CONTACTS } from '../data/chibiData';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Creations', href: '#creations' },
    { label: 'Customization', href: '#customization' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Events & Camps', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B131F] text-[#FAF7F2] pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20 shrink-0 bg-[#121844]">
                <img
                  src={BRAND_CONTACTS.logo}
                  alt="Chibs & Co. Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-wide text-[#FAF7F2] leading-none mb-1">
                  {BRAND_CONTACTS.name}
                </h3>
                <span className="text-[11px] text-[#E8A598] tracking-widest uppercase font-mono">
                  Artisan Gifts &bull; Painted with Joy
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A0AEC0] font-light max-w-sm mb-6 leading-relaxed">
              {BRAND_CONTACTS.tagline} Bespoke Sweet Chibis crafted as personal keepsakes, wedding toppers, pet tributes, and desk smiles.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#7D2235] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
              <a
                href={BRAND_CONTACTS.emailUrl}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#7D2235] text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8A598] mb-4">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-[#A0AEC0]">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E8A598] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#A0AEC0]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E8A598]" />
                <a href={BRAND_CONTACTS.callUrl} className="hover:text-white transition-colors">
                  {BRAND_CONTACTS.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8A598]" />
                <a href={BRAND_CONTACTS.emailUrl} className="hover:text-white transition-colors">
                  {BRAND_CONTACTS.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#E8A598]" />
                <a
                  href={BRAND_CONTACTS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BRAND_CONTACTS.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#718096] gap-3">
          <div>
            &copy; 2026 Chibs &amp; Co. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#718096]">
            <span>Built by -</span>
            <a
              href="https://visualstudiosplus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A0AEC0] hover:text-[#E8A598] transition-colors underline underline-offset-2 decoration-[#718096]/50 hover:decoration-[#E8A598]"
            >
              Visual Studios Plus (Pvt) Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
