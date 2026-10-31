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

    // Launch celebratory rose petal & heart confetti
    try {
      confetti({
        particleCount: 65,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#8B1538', '#F4A6B8', '#FFF8F5', '#E91E63'],
        shapes: ['circle'],
        scalar: 1.2,
      });
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ['#F4A6B8', '#8B1538'],
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ['#F4A6B8', '#8B1538'],
        });
      }, 300);
    } catch {
      // Confetti fallback
    }

    // Delay slightly for envelope animation before transitioning out
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4A1025] via-[#8B1538] to-[#4A1025] text-white px-4 select-none overflow-hidden"
      >
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#F4A6B8]/15 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#8B1538]/30 blur-3xl pointer-events-none animate-float-slow" />

        <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
          {/* Gentle Sparkling Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4A6B8] text-sm mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#F4A6B8]" />
            <span className="font-medium tracking-wide">A Private Romantic Universe</span>
          </motion.div>

          {/* Cinematic Greetings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white mb-4 drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.welcomeScreen.greeting}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#FCE4EC] font-light max-w-md mx-auto mb-10 leading-relaxed drop-shadow"
          >
            {loveContent.welcomeScreen.subtitle}
          </motion.p>

          {/* 3D Animated Envelope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-64 h-44 mb-10 cursor-pointer group"
            onClick={handleOpenSurprise}
          >
            {/* Envelope Body */}
            <div className="w-full h-full bg-[#FFF8F5] rounded-xl shadow-2xl relative overflow-hidden border-2 border-[#F4A6B8]/40 flex items-center justify-center">
              {/* Envelope liner pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FCE4EC] to-[#FFF8F5] opacity-80" />

              {/* Letter Peek When Opening */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={isOpening ? { y: -20, opacity: 1 } : { y: 25, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-x-4 top-4 h-32 bg-white rounded-lg shadow-md border border-[#F4A6B8]/30 flex flex-col items-center justify-center p-3 text-[#8B1538]"
              >
                <Heart className="w-6 h-6 text-[#8B1538] fill-[#8B1538] mb-1" />
                <span className="font-serif text-sm font-semibold">For My Sonai ❤️</span>
                <span className="text-[11px] text-[#4A1025]/70 italic mt-0.5">Crafted with all my love</span>
              </motion.div>

              {/* Envelope Flap */}
              <motion.div
                className="absolute inset-x-0 top-0 h-24 origin-top z-10"
                initial={false}
                animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 10 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
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
                className="absolute z-20 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B1538] to-[#4A1025] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg animate-wax-glow"
              >
                <Heart className="w-6 h-6 text-white fill-white" />
              </motion.div>
            </div>

            <p className="text-xs text-[#FCE4EC]/75 mt-3 italic tracking-wide">
              {loveContent.welcomeScreen.envelopeNote}
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenSurprise}
            disabled={hasStarted}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F4A6B8] via-[#E91E63] to-[#8B1538] text-white font-medium text-lg shadow-xl shadow-[#8B1538]/50 hover:shadow-2xl hover:shadow-[#F4A6B8]/40 transition-all duration-300 border border-white/30 cursor-pointer"
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
