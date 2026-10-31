import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Shuffle, Sparkles, RotateCcw } from 'lucide-react';
import { loveContent, LoveReason } from '../data/loveContent';

export const LoveReasons: React.FC = () => {
  const allReasons = loveContent.reasons.items;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Filter reasons based on category
  const filteredReasons =
    selectedCategory === 'All'
      ? allReasons
      : allReasons.filter((r) => r.category === selectedCategory);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Clamp index in case category changes
  const activeIndex = Math.min(currentIndex, filteredReasons.length - 1);
  const currentReason: LoveReason = filteredReasons[activeIndex] || allReasons[0];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReasons.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredReasons.length) % filteredReasons.length);
    }, 150);
  };

  const handleRandom = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const randomIdx = Math.floor(Math.random() * filteredReasons.length);
      setCurrentIndex(randomIdx);
    }, 150);
  };

  const categories = ['All', 'Smile', 'Kindness', 'Happiness', 'Soul', 'Moments'];

  return (
    <section id="reasons" className="py-16 sm:py-24 px-3.5 sm:px-6 relative bg-gradient-to-b from-[#FFF8F5] via-[#FCE4EC]/40 to-[#FFF8F5] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#8B1538]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Countless Thoughts of You</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-3 sm:mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.reasons.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.reasons.subtitle}
          </p>
        </div>

        {/* Category Pills - Horizontally scrollable on mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 mb-8 px-2 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer touch-manipulation min-h-[36px] flex items-center ${
                selectedCategory === cat
                  ? 'bg-[#8B1538] text-white shadow-md shadow-[#8B1538]/20'
                  : 'bg-white/85 text-[#4A1025]/75 border border-[#F4A6B8]/40 active:bg-[#FCE4EC]'
              }`}
            >
              {cat === 'All' ? `All (${allReasons.length})` : cat}
            </button>
          ))}
        </div>

        {/* 3D Flip Card Container */}
        <div className="flex flex-col items-center">
          <div
            className="w-full max-w-md sm:max-w-lg h-76 sm:h-88 cursor-pointer perspective-1000 select-none touch-manipulation px-1"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl glass-panel p-6 sm:p-10 flex flex-col items-center justify-between shadow-xl shadow-[#8B1538]/10 border-2 border-[#F4A6B8]/50 backface-hidden">
                <div className="flex items-center justify-between w-full">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#8B1538] text-[11px] sm:text-xs font-semibold">
                    {currentReason.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#8B1538]/70 tracking-widest uppercase">
                    Reason #{currentReason.id} of {allReasons.length}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center my-auto px-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#8B1538] to-[#F4A6B8] flex items-center justify-center text-white shadow-lg mb-3 sm:mb-4 animate-wax-glow">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
                  </div>
                  <h3
                    className="text-xl sm:text-3xl font-serif font-bold text-[#4A1025] mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Reason #{currentReason.id}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8B1538] font-medium flex items-center gap-1.5 mt-1 sm:mt-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tap to reveal what makes you special</span>
                  </p>
                </div>

                <div className="text-[11px] text-[#4A1025]/50 italic">
                  Tap card to flip ↺
                </div>
              </div>

              {/* BACK OF CARD (REVEALED REASON) */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#8B1538] via-[#4A1025] to-[#8B1538] text-white p-6 sm:p-10 flex flex-col items-center justify-between shadow-2xl border-2 border-[#F4A6B8]/60 backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="flex items-center justify-between w-full text-white/80">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[#FCE4EC] text-[11px] sm:text-xs font-medium">
                    {currentReason.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#F4A6B8]">
                    #{currentReason.id} / 100
                  </span>
                </div>

                <div className="my-auto text-center px-1">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4A6B8] fill-[#F4A6B8] mx-auto mb-3 animate-pulse" />
                  <p
                    className="text-lg sm:text-2xl font-serif font-medium leading-relaxed text-[#FFF8F5]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    "{currentReason.text}"
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#FCE4EC]/70">
                  <RotateCcw className="w-3 h-3" />
                  <span>Tap to flip back</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thumb-friendly Navigation Controls */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs sm:max-w-md px-2">
            <button
              onClick={handlePrev}
              className="p-3 sm:px-5 sm:py-3 rounded-full bg-white border border-[#F4A6B8]/50 text-[#8B1538] hover:bg-[#FCE4EC] active:scale-95 shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium cursor-pointer touch-manipulation min-h-[46px] min-w-[46px]"
              aria-label="Previous Reason"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              onClick={handleRandom}
              className="grow px-4 py-3 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#F4A6B8] to-[#8B1538] text-white shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-medium cursor-pointer touch-manipulation min-h-[46px]"
            >
              <Shuffle className="w-4 h-4" />
              <span>Surprise Me 🎲</span>
            </button>

            <button
              onClick={handleNext}
              className="p-3 sm:px-5 sm:py-3 rounded-full bg-white border border-[#F4A6B8]/50 text-[#8B1538] hover:bg-[#FCE4EC] active:scale-95 shadow-xs transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium cursor-pointer touch-manipulation min-h-[46px] min-w-[46px]"
              aria-label="Next Reason"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter indicator */}
          <p className="text-[11px] sm:text-xs text-[#4A1025]/60 mt-3 font-medium">
            Viewing reason {activeIndex + 1} of {filteredReasons.length} in {selectedCategory}
          </p>
        </div>
      </div>
    </section>
  );
};
