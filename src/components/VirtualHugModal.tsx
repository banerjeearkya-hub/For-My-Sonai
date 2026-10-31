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
        const end = Date.now() + 2 * 1000;
        const frame = () => {
          confetti({
            particleCount: 8,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63', '#D4AF37'],
          });
          confetti({
            particleCount: 8,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-lg w-full bg-gradient-to-br from-[#4A1025] via-[#8B1538] to-[#4A1025] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#F4A6B8]/50 text-center flex flex-col items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glowing circles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated Embracing Heart */}
            <div className="relative mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  filter: [
                    'drop-shadow(0 0 15px rgba(244, 166, 184, 0.6))',
                    'drop-shadow(0 0 35px rgba(244, 166, 184, 0.9))',
                    'drop-shadow(0 0 15px rgba(244, 166, 184, 0.6))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#F4A6B8] to-white flex items-center justify-center text-[#8B1538] shadow-2xl"
              >
                <Heart className="w-14 h-14 fill-[#8B1538]" />
              </motion.div>

              <div className="absolute -bottom-1 -right-1 text-2xl">
                🤗
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {loveContent.finalSurprise.hugCelebrationTitle}
            </h3>

            {/* Heartfelt Message */}
            <p className="text-base sm:text-lg text-[#FCE4EC] font-light leading-relaxed mb-8">
              {loveContent.finalSurprise.hugCelebrationMessage}
            </p>

            {/* Floating Romantic Sparks */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4A6B8] mb-8 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Wrapped In Infinite Warmth</span>
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Acknowledge Button */}
            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-white text-[#8B1538] font-semibold text-base shadow-xl hover:bg-[#FFF8F5] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Hug Received! ❤️
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
