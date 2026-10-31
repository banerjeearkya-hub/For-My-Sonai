import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass } from 'lucide-react';
import { loveContent } from '../data/loveContent';

export const Hero: React.FC = () => {
  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#FFF8F5] via-[#FCE4EC]/50 to-[#FFF8F5]"
    >
      {/* Romantic Ambient Glowing Circles */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#F4A6B8]/30 via-[#FCE4EC]/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-[#8B1538]/10 rounded-full blur-2xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F4A6B8]/20 rounded-full blur-2xl pointer-events-none animate-float-reverse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Curated With Love Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#F4A6B8]/50 shadow-sm text-[#8B1538] text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#8B1538]" />
          <span>{loveContent.hero.badge}</span>
        </motion.div>

        {/* Personalized Salutation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-cursive text-3xl sm:text-4xl text-[#8B1538] mb-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Dearest {loveContent.personal.herName},
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#4A1025] leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Welcome to Your <br className="hidden sm:inline" />
          <span className="shimmer-text">Little Universe, {loveContent.personal.nickname} ❤️</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#4A1025]/80 max-w-2xl font-normal leading-relaxed mb-10"
        >
          {loveContent.hero.subtitle}
        </motion.p>

        {/* Glowing CTA Button & Secondary Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToStory}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B1538] to-[#4A1025] text-white font-medium text-lg shadow-xl shadow-[#8B1538]/30 hover:shadow-2xl hover:shadow-[#8B1538]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#F4A6B8] group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-serif tracking-wide">{loveContent.hero.ctaButton}</span>
            <Heart className="w-4 h-4 fill-[#F4A6B8] text-[#F4A6B8] animate-pulse" />
          </button>
        </motion.div>

        {/* Floating Heart Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-xs uppercase tracking-widest text-[#8B1538]/70 flex items-center gap-2"
        >
          <span className="w-8 h-px bg-[#F4A6B8]" />
          <span>{loveContent.hero.floatingNote}</span>
          <span className="w-8 h-px bg-[#F4A6B8]" />
        </motion.div>
      </div>
    </section>
  );
};
