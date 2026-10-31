import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Sparkles, Quote } from 'lucide-react';
import { loveContent, TimelineItem } from '../data/loveContent';

export const StoryTimeline: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 px-3.5 sm:px-6 relative bg-[#FFF8F5] overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#FCE4EC]/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20 px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Journey</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-3 sm:mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.storyTimeline.title}
          </h2>

          <p className="text-sm sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.storyTimeline.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#8B1538] via-[#F4A6B8] to-[#8B1538]/20" />

          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute left-4 top-4 bottom-8 w-0.5 bg-gradient-to-b from-[#8B1538] via-[#F4A6B8] to-[#8B1538]/20" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-8 sm:gap-16">
            {loveContent.storyTimeline.items.map((item: TimelineItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center shadow-md z-20">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B1538] fill-[#FCE4EC]" />
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Container */}
                  <div
                    className={`w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="glass-panel p-4 sm:p-7 rounded-2xl shadow-lg shadow-[#8B1538]/5 border border-[#F4A6B8]/40 hover:shadow-xl transition-all duration-300">
                      {/* Tag & Date Header */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FCE4EC] text-[#8B1538] text-[11px] sm:text-xs font-semibold tracking-wide">
                          {item.tag}
                        </span>

                        <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-[#4A1025]/60 font-medium">
                          <Calendar className="w-3 h-3 text-[#8B1538]" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3
                        className="text-lg sm:text-2xl font-serif font-bold text-[#4A1025] mb-2 sm:mb-3"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-xs sm:text-base text-[#4A1025]/85 leading-relaxed mb-3 sm:mb-4">
                        {item.description}
                      </p>

                      {/* Photo with responsive aspect */}
                      {item.image && (
                        <div className="relative rounded-xl overflow-hidden mb-3 sm:mb-4 aspect-[4/3] sm:aspect-[16/9] shadow-xs border border-[#F4A6B8]/30">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}

                      {/* Romantic Quote */}
                      {item.quote && (
                        <div className="flex items-start gap-1.5 pt-2.5 border-t border-[#F4A6B8]/30 text-xs sm:text-sm text-[#8B1538] italic font-serif">
                          <Quote className="w-3.5 h-3.5 shrink-0 text-[#F4A6B8] rotate-180 mt-0.5" />
                          <span>"{item.quote}"</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
