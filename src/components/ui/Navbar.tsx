"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Community", href: "#community" },
    { name: "Download", href: "#download" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300 border ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg py-3 px-6" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl sm:text-2xl font-bold font-playfair tracking-tight text-white flex items-center gap-3 group"
            aria-label="Pixenz home"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
               <Image 
                 src="/logo.png" 
                 alt="Logo" 
                 width={32}
                 height={32}
                 className="w-full h-full object-cover"
                 priority
               />
            </div>
            Pixenz
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              href="#download" 
              className="!py-2 !px-5 !text-sm !rounded-full opacity-90 hover:opacity-100"
            >
              Get App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl md:hidden pt-24 px-6 animate-fade-in">
          <div className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-medium text-white hover:text-primary transition-colors font-playfair"
              >
                {link.name}
              </a>
            ))}
             <Button 
              variant="primary" 
              href="#download" 
              className="mt-4 !text-lg !px-8 !py-3 w-full max-w-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get App
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

