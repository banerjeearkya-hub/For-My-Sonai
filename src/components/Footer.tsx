import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { loveContent } from '../data/loveContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E040D] text-white py-12 px-4 sm:px-6 relative border-t border-[#8B1538]/40 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Heart Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-[#8B1538] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#8B1538]/50">
          <Heart className="w-6 h-6 fill-white" />
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-serif font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {loveContent.personal.websiteTitle}
        </h3>

        {/* Message */}
        <p className="text-sm text-[#FCE4EC]/80 max-w-md mx-auto leading-relaxed mb-6 font-light">
          A dedicated universe made with boundless love, gentle smiles, and heartfelt moments for{' '}
          <span className="font-semibold text-white">{loveContent.personal.herName}</span> (
          {loveContent.personal.nickname}).
        </p>

        {/* Signature */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4A6B8] mb-8 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#F4A6B8]" />
          <span>{loveContent.personal.senderNickname}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F4A6B8]" />
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs text-[#FCE4EC]/60 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-white/5"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Return to Top</span>
        </button>

        {/* Copyright / Date */}
        <p className="text-[11px] text-[#FCE4EC]/40 mt-6 tracking-wider">
          Made exclusively for Nasrin • {new Date().getFullYear()} • Always & Forever ❤️
        </p>
      </div>
    </footer>
  );
};
