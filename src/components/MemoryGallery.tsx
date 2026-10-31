import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { loveContent, GalleryPhoto } from '../data/loveContent';

export const MemoryGallery: React.FC = () => {
  const photos = loveContent.gallery.items;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

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

  const activePhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 relative bg-[#FFF8F5] overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FCE4EC]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cherished Moments</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.gallery.subtitle}
          </p>
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {photos.map((item: GalleryPhoto, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ rotate: `${item.tilt}deg` }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group cursor-pointer bg-white p-4 pb-6 rounded-lg shadow-xl shadow-[#8B1538]/10 hover:shadow-2xl hover:shadow-[#8B1538]/20 transition-all duration-300 relative border border-[#F4A6B8]/30"
            >
              {/* Cute Washi Tape at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#F4A6B8]/40 backdrop-blur-xs border-dashed border border-white/60 -rotate-2 shadow-xs pointer-events-none rounded-xs" />

              {/* Photo Frame */}
              <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-[#FCE4EC]/30 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  className="text-lg font-serif font-bold text-[#4A1025] mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-cursive text-[#8B1538] text-base leading-snug"
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.25rem' }}
                >
                  {item.caption}
                </p>
                <span className="text-[11px] text-[#4A1025]/50 tracking-wider uppercase block mt-1">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip for adding real photos */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-[#8B1538]/80 bg-[#FCE4EC]/50 px-4 py-2 rounded-full border border-[#F4A6B8]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customize anytime by replacing files in <code>public/gallery/</code> and editing <code>loveContent.ts</code></span>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
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
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
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
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              <div className="pt-4 text-center">
                <h3
                  className="text-2xl font-serif font-bold text-[#4A1025]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {activePhoto.title}
                </h3>
                <p
                  className="font-cursive text-xl text-[#8B1538] mt-1"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  {activePhoto.caption}
                </p>
                <span className="text-xs text-gray-400 mt-1 block uppercase tracking-wider">
                  {activePhoto.date} • {selectedPhotoIndex + 1} of {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
