import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { loveContent, GalleryPhoto } from '../data/loveContent';

export const MemoryGallery: React.FC = () => {
  const photos = loveContent.gallery.items;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + photos.length) % photos.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  // Touch swipe support for mobile lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || selectedPhotoIndex === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      // Swiped left -> next photo
      setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
    } else if (diff < -45) {
      // Swiped right -> prev photo
      setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
    }
    touchStartX.current = null;
  };

  const activePhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 px-3.5 sm:px-6 relative bg-[#FFF8F5] overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#FCE4EC]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cherished Moments</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-3 sm:mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.gallery.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.gallery.subtitle}
          </p>
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {photos.map((item: GalleryPhoto, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-xl shadow-lg shadow-[#8B1538]/10 hover:shadow-2xl transition-all duration-300 relative border border-[#F4A6B8]/30 touch-manipulation active:scale-98"
            >
              {/* Washi Tape at Top */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-[#F4A6B8]/40 backdrop-blur-xs border-dashed border border-white/60 -rotate-1 shadow-xs pointer-events-none rounded-xs" />

              {/* Photo Frame */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#FCE4EC]/30 mb-3 sm:mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#8B1538] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              {/* Polaroid Handwritten Caption */}
              <div className="px-1 text-center">
                <h3
                  className="text-base sm:text-lg font-serif font-bold text-[#4A1025] mb-0.5 sm:mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs sm:text-sm font-cursive text-[#8B1538] leading-snug"
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.25rem' }}
                >
                  {item.caption}
                </p>
                <span className="text-[10px] sm:text-[11px] text-[#4A1025]/50 tracking-wider uppercase block mt-1">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Mobile Touch Swipe */}
      <AnimatePresence>
        {activePhoto && selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedPhotoIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button - Touch Friendly */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation active:scale-95"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null ? (prev - 1 + photos.length) % photos.length : null
                );
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation active:scale-95"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null ? (prev + 1) % photos.length : null
                );
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer touch-manipulation active:scale-95"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-3.5 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[58vh] sm:max-h-[70vh] rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-auto max-h-[58vh] sm:max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              <div className="pt-3 sm:pt-4 text-center">
                <h3
                  className="text-lg sm:text-2xl font-serif font-bold text-[#4A1025]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {activePhoto.title}
                </h3>
                <p
                  className="font-cursive text-base sm:text-xl text-[#8B1538] mt-0.5"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  {activePhoto.caption}
                </p>
                <div className="flex items-center justify-center gap-3 mt-1">
                  <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                    {activePhoto.date} • {selectedPhotoIndex + 1} of {photos.length}
                  </span>
                  <span className="text-[10px] text-gray-400 sm:hidden">
                    (Swipe left/right)
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
