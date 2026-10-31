import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, ArrowUp } from 'lucide-react';
import { loveContent } from '../data/loveContent';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: '100 Reasons', href: '#reasons' },
  { label: 'Memories', href: '#gallery' },
  { label: 'Letters', href: '#letters' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Final Surprise', href: '#surprise' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      setIsScrolled(currentScroll > 30);
      setShowBackToTop(currentScroll > 350);

      const sections = navItems.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#FCE4EC] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8B1538] via-[#F4A6B8] to-[#8B1538] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glass Navbar */}
      <nav
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-md shadow-[#8B1538]/5 border-b border-[#F4A6B8]/30 py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 flex items-center justify-between">
          {/* Logo / Personal Title */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer min-w-0"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8B1538] flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            </span>
            <span
              className="text-lg sm:text-2xl font-serif font-bold text-[#8B1538] tracking-tight group-hover:text-[#4A1025] transition-colors truncate"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {loveContent.personal.websiteTitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#8B1538] font-semibold bg-[#FCE4EC]'
                      : 'text-[#4A1025]/80 hover:text-[#8B1538] hover:bg-[#FCE4EC]/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8B1538] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#8B1538] hover:bg-[#FCE4EC] active:scale-95 focus:outline-none transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 top-[54px] bg-black/40 backdrop-blur-xs z-30 md:hidden"
              />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative z-40 md:hidden bg-white/95 backdrop-blur-xl border-b border-[#F4A6B8]/40 px-4 pt-3 pb-6 shadow-2xl"
              >
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between touch-manipulation min-h-[48px] ${
                          isActive
                            ? 'bg-[#8B1538] text-white font-semibold shadow-sm'
                            : 'text-[#4A1025] hover:bg-[#FCE4EC] active:bg-[#FCE4EC]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <Heart className="w-4 h-4 fill-white" />}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Back to Top Button - Positioned to never overlap music player */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#8B1538] text-white shadow-lg shadow-[#8B1538]/40 hover:bg-[#4A1025] transition-colors focus:outline-none flex items-center justify-center cursor-pointer touch-manipulation"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
