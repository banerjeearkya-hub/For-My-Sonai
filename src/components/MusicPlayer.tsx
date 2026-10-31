import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Heart, ChevronUp, ChevronDown } from 'lucide-react';
import { loveContent } from '../data/loveContent';
import { romanticAudio } from '../utils/romanticAudio';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(loveContent.music.initialVolume || 0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visualizerBars, setVisualizerBars] = useState([0.3, 0.6, 0.4, 0.7, 0.5]);

  useEffect(() => {
    // Initialize audio URL from config
    romanticAudio.initCustomAudio(loveContent.music.audioSrc);
    romanticAudio.setVolume(volume);

    // Set callback for visualizer bars
    romanticAudio.setVisualizerCallback((bars) => {
      setVisualizerBars(bars);
    });

    return () => {
      romanticAudio.pause();
    };
  }, []);

  const togglePlay = async () => {
    if (isPlaying) {
      romanticAudio.pause();
      setIsPlaying(false);
    } else {
      await romanticAudio.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (isMuted && newVol > 0) {
      setIsMuted(false);
      romanticAudio.setMuted(false);
    }
    romanticAudio.setVolume(newVol);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    romanticAudio.setMuted(nextMuted);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 select-none">
      <motion.div
        layout
        className="glass-panel rounded-2xl shadow-xl shadow-[#8B1538]/15 border border-[#F4A6B8]/50 overflow-hidden bg-white/90 backdrop-blur-xl"
      >
        {/* Compact Bar */}
        <div className="p-2.5 sm:p-3 flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8B1538] to-[#F4A6B8] flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </button>

          {/* Track Info & Visualizer */}
          <div
            className="cursor-pointer flex flex-col justify-center pr-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif font-bold text-[#4A1025] max-w-[120px] sm:max-w-[150px] truncate">
                {loveContent.music.trackTitle}
              </span>

              {/* Animated Visualizer Bars */}
              <div className="flex items-end gap-0.5 h-3.5 w-6">
                {visualizerBars.map((height, i) => (
                  <span
                    key={i}
                    className="w-1 bg-[#8B1538] rounded-full transition-all duration-150"
                    style={{
                      height: isPlaying ? `${Math.max(3, height * 14)}px` : '3px',
                      opacity: isPlaying ? 0.9 : 0.4,
                    }}
                  />
                ))}
              </div>
            </div>

            <span className="text-[10px] text-[#8B1538] font-medium flex items-center gap-1">
              <Heart className="w-2.5 h-2.5 fill-[#8B1538]" />
              <span>{isPlaying ? 'Playing Romantic Melody' : 'Click to Play'}</span>
            </span>
          </div>

          {/* Expand/Collapse Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-[#8B1538] hover:bg-[#FCE4EC] transition-colors cursor-pointer"
            aria-label="Expand Player Controls"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Controls Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-3 pt-1 border-t border-[#FCE4EC] flex flex-col gap-2.5"
            >
              {/* Volume Slider & Mute */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="p-1 rounded-md text-[#8B1538] hover:bg-[#FCE4EC] transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-28 sm:w-36 h-1.5 bg-[#FCE4EC] rounded-lg appearance-none cursor-pointer accent-[#8B1538]"
                />

                <span className="text-[10px] text-[#4A1025]/60 font-semibold w-7">
                  {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                </span>
              </div>

              {/* Note on custom MP3 replacement */}
              <p className="text-[10px] text-[#4A1025]/60 italic max-w-[210px] leading-tight">
                Plays soothing romantic melody. Add your own MP3 in <code>public/music/</code> anytime!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
