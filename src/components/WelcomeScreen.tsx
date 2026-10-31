import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { loveContent } from '../data/loveContent';

interface WelcomeScreenProps {
  onOpen: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleOpenSurprise = () => {
    if (isOpening) return;
    setIsOpening(true);
    setHasStarted(true);

    // Celebratory rose petal & heart confetti tuned for mobile viewports
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63'],
        shapes: ['circle'],
        scalar: 1.1,
      });
      setTimeout(() => {
        confetti({
          particleCount: 30,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#F4A6B8', '#8B1538'],
        });
        confetti({
          particleCount: 30,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#F4A6B8', '#8B1538'],
        });
      }, 300);
    } catch {
      // Fallback
    }

    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4A1025] via-[#8B1538] to-[#4A1025] text-white px-4 py-6 select-none overflow-y-auto min-h-[100dvh]"
      >
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#F4A6B8]/15 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#8B1538]/30 blur-3xl pointer-events-none animate-float-slow" />

        <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center my-auto">
          {/* Sparkling Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4A6B8] text-xs sm:text-sm mb-4 sm:mb-6 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4A6B8]" />
            <span className="font-medium tracking-wide">A Private Romantic Universe</span>
          </motion.div>

          {/* Cinematic Greetings */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.welcomeScreen.greeting}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-[#FCE4EC] font-light max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow"
          >
            {loveContent.welcomeScreen.subtitle}
          </motion.p>

          {/* 3D Animated Envelope - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-56 sm:w-64 h-38 sm:h-44 mb-6 sm:mb-8 cursor-pointer group"
            onClick={handleOpenSurprise}
          >
            {/* Envelope Body */}
            <div className="w-full h-full bg-[#FFF8F5] rounded-xl shadow-2xl relative overflow-hidden border-2 border-[#F4A6B8]/40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FCE4EC] to-[#FFF8F5] opacity-80" />

              {/* Letter Peek When Opening */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={isOpening ? { y: -16, opacity: 1 } : { y: 25, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-x-3 sm:inset-x-4 top-3 sm:top-4 h-28 sm:h-32 bg-white rounded-lg shadow-md border border-[#F4A6B8]/30 flex flex-col items-center justify-center p-2 text-[#8B1538]"
              >
                <Heart className="w-5 h-5 text-[#8B1538] fill-[#8B1538] mb-0.5" />
                <span className="font-serif text-xs sm:text-sm font-semibold">For My Sonai ❤️</span>
                <span className="text-[10px] sm:text-[11px] text-[#4A1025]/70 italic mt-0.5">Crafted with all my love</span>
              </motion.div>

              {/* Envelope Flap */}
              <motion.div
                className="absolute inset-x-0 top-0 h-20 sm:h-24 origin-top z-10"
                initial={false}
                animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 10 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <svg viewBox="0 0 256 100" className="w-full h-full drop-shadow-md">
                  <path d="M0,0 L128,85 L256,0 Z" fill="#FCE4EC" stroke="#F4A6B8" strokeWidth="2" />
                </svg>
              </motion.div>

              {/* Wax Seal Heart */}
              <motion.div
                animate={
                  isOpening
                    ? { scale: 1.4, opacity: 0 }
                    : { scale: [1, 1.08, 1] }
                }
                transition={{ duration: 2.2, repeat: isOpening ? 0 : Infinity }}
                className="absolute z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#4A1025] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg animate-wax-glow"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
              </motion.div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#FCE4EC]/75 mt-2.5 italic tracking-wide">
              {loveContent.welcomeScreen.envelopeNote}
            </p>
          </motion.div>

          {/* Call to Action Button (Thumb friendly) */}
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenSurprise}
            disabled={hasStarted}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#F4A6B8] via-[#E91E63] to-[#8B1538] text-white font-medium text-base sm:text-lg shadow-xl shadow-[#8B1538]/50 hover:shadow-2xl transition-all duration-300 border border-white/30 cursor-pointer min-h-[50px]"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif tracking-wide">{loveContent.welcomeScreen.buttonText}</span>
            <Sparkles className="w-4 h-4 text-white/90 animate-pulse" />
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
