import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="reasons" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#FFF8F5] via-[#FCE4EC]/40 to-[#FFF8F5] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#8B1538]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Countless Thoughts of You</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.reasons.title}
          </h2>

          <p className="text-base sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.reasons.subtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8B1538] text-white shadow-md shadow-[#8B1538]/20'
                  : 'bg-white/80 text-[#4A1025]/70 border border-[#F4A6B8]/40 hover:bg-[#FCE4EC]'
              }`}
            >
              {cat === 'All' ? `All (${allReasons.length})` : cat}
            </button>
          ))}
        </div>

        {/* 3D Flip Card Container */}
        <div className="flex flex-col items-center">
          <div
            className="w-full max-w-lg h-80 sm:h-88 cursor-pointer perspective-1000 select-none"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 w-full h-full rounded-3xl glass-panel p-8 sm:p-10 flex flex-col items-center justify-between shadow-xl shadow-[#8B1538]/10 border-2 border-[#F4A6B8]/50 backface-hidden">
                <div className="flex items-center justify-between w-full">
                  <span className="px-3 py-1 rounded-full bg-[#FCE4EC] text-[#8B1538] text-xs font-semibold">
                    {currentReason.category}
                  </span>
                  <span className="text-xs font-bold text-[#8B1538]/70 tracking-widest uppercase">
                    Reason #{currentReason.id} of {allReasons.length}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#8B1538] to-[#F4A6B8] flex items-center justify-center text-white shadow-lg mb-4 animate-wax-glow">
                    <Heart className="w-8 h-8 fill-white" />
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-serif font-bold text-[#4A1025] mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Reason #{currentReason.id}
                  </h3>
                  <p className="text-sm text-[#8B1538] font-medium flex items-center gap-1.5 mt-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Tap to reveal what makes you special</span>
                  </p>
                </div>

                <div className="text-xs text-[#4A1025]/50 italic">
                  Click card to flip ↺
                </div>
              </div>

              {/* BACK OF CARD (REVEALED REASON) */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-[#8B1538] via-[#4A1025] to-[#8B1538] text-white p-8 sm:p-10 flex flex-col items-center justify-between shadow-2xl border-2 border-[#F4A6B8]/60 backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="flex items-center justify-between w-full text-white/80">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-[#FCE4EC] text-xs font-medium">
                    {currentReason.category}
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#F4A6B8]">
                    #{currentReason.id} / 100
                  </span>
                </div>

                <div className="my-auto text-center px-2">
                  <Heart className="w-6 h-6 text-[#F4A6B8] fill-[#F4A6B8] mx-auto mb-4 animate-pulse" />
                  <p
                    className="text-xl sm:text-2xl md:text-2xl font-serif font-medium leading-relaxed text-[#FFF8F5]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    "{currentReason.text}"
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#FCE4EC]/70">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Tap to flip back</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-3 sm:gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 sm:px-5 sm:py-3 rounded-full bg-white border border-[#F4A6B8]/50 text-[#8B1538] hover:bg-[#FCE4EC] shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-medium cursor-pointer active:scale-95"
              aria-label="Previous Reason"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={handleRandom}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#F4A6B8] to-[#8B1538] text-white shadow-md hover:shadow-xl transition-all flex items-center gap-2 text-sm font-medium cursor-pointer active:scale-95 hover:scale-105"
            >
              <Shuffle className="w-4 h-4" />
              <span>Surprise Me 🎲</span>
            </button>

            <button
              onClick={handleNext}
              className="p-3 sm:px-5 sm:py-3 rounded-full bg-white border border-[#F4A6B8]/50 text-[#8B1538] hover:bg-[#FCE4EC] shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm font-medium cursor-pointer active:scale-95"
              aria-label="Next Reason"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter indicator */}
          <p className="text-xs text-[#4A1025]/60 mt-4 font-medium">
            Viewing reason {activeIndex + 1} of {filteredReasons.length} in {selectedCategory}
          </p>
        </div>
      </div>
    </section>
  );
};
