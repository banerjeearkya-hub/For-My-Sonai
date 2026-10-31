import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Sparkles, Quote } from 'lucide-react';
import { loveContent, TimelineItem } from '../data/loveContent';

export const StoryTimeline: React.FC = () => {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 relative bg-[#FFF8F5] overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FCE4EC]/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F4A6B8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE4EC] border border-[#F4A6B8]/40 text-[#8B1538] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Journey</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A1025] mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {loveContent.storyTimeline.title}
          </h2>

          <p className="text-base sm:text-lg text-[#4A1025]/75 leading-relaxed font-light">
            {loveContent.storyTimeline.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#8B1538] via-[#F4A6B8] to-[#8B1538]/20" />

          {/* Mobile Left Vertical Line */}
          <div className="md:hidden absolute left-5 top-4 bottom-8 w-0.5 bg-gradient-to-b from-[#8B1538] via-[#F4A6B8] to-[#8B1538]/20" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {loveContent.storyTimeline.items.map((item: TimelineItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center shadow-lg z-20 group">
                    <Heart className="w-4 h-4 text-[#8B1538] fill-[#FCE4EC] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Spacer for 50% width on Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Container */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl shadow-xl shadow-[#8B1538]/5 border border-[#F4A6B8]/40 hover:shadow-2xl hover:border-[#8B1538]/50 transition-all duration-300">
                      {/* Tag & Date Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#FCE4EC] text-[#8B1538] text-xs font-semibold tracking-wide">
                          {item.tag}
                        </span>

                        <div className="inline-flex items-center gap-1.5 text-xs text-[#4A1025]/60 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#8B1538]" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3
                        className="text-xl sm:text-2xl font-serif font-bold text-[#4A1025] mb-3"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-sm sm:text-base text-[#4A1025]/85 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Optional Photo */}
                      {item.image && (
                        <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/9] shadow-inner border border-[#F4A6B8]/30 group">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                      )}

                      {/* Romantic Quote */}
                      {item.quote && (
                        <div className="flex items-start gap-2 pt-3 border-t border-[#F4A6B8]/30 text-xs sm:text-sm text-[#8B1538] italic font-serif">
                          <Quote className="w-4 h-4 shrink-0 text-[#F4A6B8] rotate-180" />
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
