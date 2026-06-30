/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DAILY_ETIQUETTES } from '../data/etiquettes';
import { Illustration } from './Illustration';
import { speakArabicText, playPopSound } from '../utils/audio';

interface DailyEtiquetteProps {
  soundEnabled: boolean;
}

export const DailyEtiquette: React.FC<DailyEtiquetteProps> = ({ soundEnabled }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = DAILY_ETIQUETTES[activeIndex];

  // Rotate daily etiquette automatically every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % DAILY_ETIQUETTES.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleSpeech = () => {
    playPopSound();
    if (soundEnabled) {
      const fullText = `أَدَبُ اليَوْمِ: ${currentItem.title}. ${currentItem.description}`;
      speakArabicText(fullText);
    }
  };

  const handleDotClick = (index: number) => {
    playPopSound();
    setActiveIndex(index);
  };

  return (
    <div className="w-full bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 p-1.5 rounded-3xl border-2 border-orange-200/60 shadow-md relative overflow-hidden flex flex-col items-center" id="daily-etiquette-carousel">
      {/* Decorative colored arcs matching the picture */}
      <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border-[10px] border-purple-200/50 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full border-[14px] border-emerald-200/40 pointer-events-none" />

      {/* Blue Ribbon Title label on top right */}
      <div className="absolute top-4 right-4 bg-sky-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm z-10 font-sans border border-sky-400">
        أَدَبُ اليَوْمِ
      </div>

      {/* Main card panel */}
      <div className="w-full bg-white/95 rounded-2xl p-4 flex flex-col items-center relative gap-3 mt-1 shadow-sm border border-orange-50/50">
        
        {/* Rounded Inner Illustration Container */}
        <div className="w-40 h-40 rounded-full border-4 border-emerald-400 flex items-center justify-center bg-white shadow-inner relative group p-3">
          {/* Circular color rays matching the design */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-300 animate-spin" style={{ animationDuration: '40s' }} />
          <Illustration id={currentItem.illustration} className="w-full h-full object-contain" />
        </div>

        {/* Text & Action Speaker Banner */}
        <div className="w-full flex flex-col items-center text-center px-2">
          <div className="bg-amber-100/70 border-2 border-amber-300 rounded-2xl px-5 py-2 w-full flex items-center justify-between shadow-sm relative">
            
            {/* Play Sound Button */}
            <motion.button
              whileHover={{ scale: 1.15, rotate: [0, -4, 4, -4, 0], transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.85 }}
              onClick={handleSpeech}
              className="w-9 h-9 bg-amber-400 flex items-center justify-center rounded-xl text-white text-md cursor-pointer hover:bg-amber-500 shadow-sm border border-amber-500"
              title="اصْمَعْ إِلَى الأَدَبِ"
              id={`btn-listen-daily-${currentItem.id}`}
            >
              🔊
            </motion.button>

            {/* Title & Description with diacritics */}
            <div className="flex-1 text-right pr-3">
              <span className="block text-xs font-bold text-amber-800">أَدَبُ اليَوْمِ:</span>
              <h3 className="text-md font-extrabold text-slate-800 font-sans">
                {currentItem.title}
              </h3>
            </div>
          </div>

          <p className="text-sm font-bold text-slate-600 mt-2.5 leading-relaxed bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 w-full">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* Dots Carousel Indicators */}
      <div className="flex items-center gap-1.5 mt-2.5 mb-1" id="carousel-dots-indicator">
        {DAILY_ETIQUETTES.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleDotClick(index)}
            className={`h-3 rounded-full transition-all cursor-pointer ${
              index === activeIndex ? 'w-6 bg-sky-500 border border-sky-600' : 'w-3 bg-slate-300 hover:bg-slate-400'
            }`}
            id={`btn-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
