import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { loveContent } from '../data/loveContent';
import { VirtualHugModal } from './VirtualHugModal';

export const FinalSurprise: React.FC = () => {
  const [hugModalOpen, setHugModalOpen] = useState(false);

  return (
    <section
      id="surprise"
      className="py-20 sm:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-[#4A1025] via-[#330817] to-[#1E040D] text-white overflow-hidden select-none"
    >
      {/* Cinematic Glowing Background & Stars */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[700px] bg-[#8B1538]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#F4A6B8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#8B1538]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center px-1">
        {/* Subtle Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F4A6B8]/30 text-[#F4A6B8] text-[11px] sm:text-xs uppercase tracking-widest font-semibold mb-6 sm:mb-10 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{loveContent.finalSurprise.badge}</span>
        </motion.div>

        {/* Pulsing Glowing Pink Heart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mb-6 sm:mb-10"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#8B1538] to-[#F4A6B8] flex items-center justify-center text-white shadow-2xl animate-pulse-glow">
            <Heart className="w-10 h-10 sm:w-14 sm:h-14 fill-white text-white" />
          </div>
        </motion.div>

        {/* Salutation */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-cursive text-3xl sm:text-5xl text-[#F4A6B8] mb-4 sm:mb-6"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          {loveContent.finalSurprise.salutation}
        </motion.h3>

        {/* Emotional Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-xl font-serif text-[#FFF8F5]/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-1">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            "{loveContent.finalSurprise.paragraph1}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-sm sm:text-lg text-[#FCE4EC]/85 font-light"
          >
            {loveContent.finalSurprise.paragraph2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm sm:text-lg text-[#F4A6B8] font-medium"
          >
            {loveContent.finalSurprise.paragraph3}
          </motion.p>
        </div>

        {/* Sign Off */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 sm:mt-12 flex flex-col items-center"
        >
          <span className="text-[10px] sm:text-xs tracking-widest text-[#FCE4EC]/60 uppercase font-sans mb-1">
            Always & Truly
          </span>
          <span
            className="font-cursive text-2xl sm:text-4xl text-[#F4A6B8]"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {loveContent.finalSurprise.signOff}
          </span>
        </motion.div>

        {/* Final Hug Interactive Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 sm:mt-14 w-full sm:w-auto px-4"
        >
          <button
            onClick={() => setHugModalOpen(true)}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-gradient-to-r from-[#F4A6B8] via-[#E91E63] to-[#8B1538] text-white font-serif font-bold text-base sm:text-xl shadow-2xl shadow-[#F4A6B8]/30 active:scale-95 transition-all duration-300 border-2 border-white/40 cursor-pointer touch-manipulation min-h-[52px]"
          >
            <span>{loveContent.finalSurprise.hugButtonText}</span>
            <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Hug Modal */}
      <VirtualHugModal isOpen={hugModalOpen} onClose={() => setHugModalOpen(false)} />
    </section>
  );
};
