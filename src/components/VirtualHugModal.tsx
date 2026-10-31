import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveContent } from '../data/loveContent';

interface VirtualHugModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualHugModal: React.FC<VirtualHugModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Launch romantic heart & sparkle explosion
      try {
        const end = Date.now() + 1.8 * 1000;
        const frame = () => {
          confetti({
            particleCount: 6,
            angle: 60,
            spread: 50,
            origin: { x: 0.1, y: 0.7 },
            colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63', '#D4AF37'],
          });
          confetti({
            particleCount: 6,
            angle: 120,
            spread: 50,
            origin: { x: 0.9, y: 0.7 },
            colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63', '#D4AF37'],
          });
          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        };
        frame();
      } catch {
        // Fallback
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-3.5 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-md sm:max-w-lg w-full bg-gradient-to-br from-[#4A1025] via-[#8B1538] to-[#4A1025] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#F4A6B8]/50 text-center flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glowing circles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button - Touch Ergonomics */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors cursor-pointer flex items-center justify-center touch-manipulation"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated Embracing Heart */}
            <div className="relative mb-4 sm:mb-6 mt-1">
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  filter: [
                    'drop-shadow(0 0 15px rgba(244, 166, 184, 0.6))',
                    'drop-shadow(0 0 35px rgba(244, 166, 184, 0.9))',
                    'drop-shadow(0 0 15px rgba(244, 166, 184, 0.6))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#F4A6B8] to-white flex items-center justify-center text-[#8B1538] shadow-2xl"
              >
                <Heart className="w-11 h-11 sm:w-14 sm:h-14 fill-[#8B1538]" />
              </motion.div>

              <div className="absolute -bottom-1 -right-1 text-xl sm:text-2xl">
                🤗
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-xl sm:text-3xl font-serif font-bold text-white mb-2.5 sm:mb-3 px-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {loveContent.finalSurprise.hugCelebrationTitle}
            </h3>

            {/* Heartfelt Message */}
            <p className="text-sm sm:text-lg text-[#FCE4EC] font-light leading-relaxed mb-6 sm:mb-8 px-1">
              {loveContent.finalSurprise.hugCelebrationMessage}
            </p>

            {/* Romantic Sparks Badge */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-[#F4A6B8] mb-6 sm:mb-8 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wrapped In Infinite Warmth</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            {/* Acknowledge Button */}
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#8B1538] font-semibold text-sm sm:text-base shadow-xl active:scale-95 transition-all cursor-pointer touch-manipulation min-h-[48px]"
            >
              Hug Received! ❤️
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
