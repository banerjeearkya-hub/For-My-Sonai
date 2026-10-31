import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Mail, Sparkles, X, Feather } from 'lucide-react';
import { loveContent, OpenWhenLetter } from '../data/loveContent';

export const LoveLetters: React.FC = () => {
  const letters = loveContent.openWhenLetters.letters;
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);

  return (
    <section id="letters" className="py-16 sm:py-24 px-3.5 sm:px-6 relative bg-gradient-to-b from-[#FFF8F5] via-[#FCE4EC]/50 to-[#FFF8F5] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B1538]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>Words for the Heart</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-3 sm:mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.openWhenLetters.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.openWhenLetters.subtitle}
          </p>
        </div>

        {/* 6 Envelopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {letters.map((letter: OpenWhenLetter, index: number) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedLetter(letter)}
              className="group cursor-pointer bg-white rounded-2xl p-5 sm:p-7 shadow-lg shadow-[#8B1538]/5 hover:shadow-xl border-2 border-[#F4A6B8]/30 hover:border-[#8B1538]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between touch-manipulation active:scale-98"
            >
              {/* Envelope Flap Accent SVG at Top */}
              <div className="absolute top-0 inset-x-0 h-9 opacity-30 pointer-events-none">
                <svg viewBox="0 0 300 40" className="w-full h-full fill-[#FCE4EC]">
                  <path d="M0,0 L150,30 L300,0 Z" />
                </svg>
              </div>

              <div>
                {/* Wax Seal Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#4A1025] flex items-center justify-center text-white shadow-md animate-wax-glow">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#8B1538]/70 bg-[#FCE4EC] px-2.5 py-0.5 rounded-full">
                    Letter {index + 1}
                  </span>
                </div>

                {/* Letter Title */}
                <h3
                  className="text-lg sm:text-xl font-serif font-bold text-[#4A1025] mb-1.5 group-hover:text-[#8B1538] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {letter.title}
                </h3>

                {/* Letter Subtitle */}
                <p className="text-xs text-[#8B1538] font-medium mb-2.5">
                  {letter.subtitle}
                </p>

                {/* Preview text */}
                <p className="text-xs sm:text-sm text-[#4A1025]/70 italic leading-relaxed line-clamp-2">
                  "{letter.preview}"
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-[#FCE4EC] flex items-center justify-between min-h-[40px]">
                <span className="text-xs font-semibold text-[#8B1538] flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>Open Envelope</span>
                </span>
                <Sparkles className="w-4 h-4 text-[#F4A6B8]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Letter Reading Modal (Stationery Paper Experience) */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-xl sm:max-w-2xl w-full bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/40 my-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Vintage Stationery Decorative Border */}
              <div className="absolute inset-2.5 sm:inset-4 rounded-xl sm:rounded-2xl border border-[#D4AF37]/25 pointer-events-none" />

              {/* Touch-friendly Close Button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-3.5 right-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCE4EC] hover:bg-[#F4A6B8] active:scale-95 text-[#8B1538] transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
                aria-label="Close Letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Wax Seal Header */}
              <div className="flex flex-col items-center text-center mb-4 sm:mb-6 pt-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8B1538] to-[#4A1025] flex items-center justify-center text-white shadow-lg mb-2 sm:mb-3 border-2 border-[#D4AF37]">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Personal & Confidential
                </span>
                <h3
                  className="text-xl sm:text-3xl font-serif font-bold text-[#4A1025] mt-1 px-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {selectedLetter.title}
                </h3>
              </div>

              {/* Letter Body in Handwritten / Elegant Serif */}
              <div className="space-y-3.5 text-sm sm:text-lg text-[#4A1025]/90 leading-relaxed font-serif max-h-[50dvh] overflow-y-auto pr-2">
                {selectedLetter.letter.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="first-letter:text-xl sm:first-letter:text-2xl first-letter:font-bold first-letter:text-[#8B1538]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Romantic Closing Signature */}
              <div className="mt-6 pt-3 sm:pt-4 border-t border-[#F4A6B8]/40 flex flex-col items-end">
                <p className="text-xs sm:text-sm text-[#4A1025]/75 italic">
                  {selectedLetter.closing}
                </p>
                <p
                  className="font-cursive text-xl sm:text-3xl text-[#8B1538] mt-0.5"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  {loveContent.personal.senderNickname}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
