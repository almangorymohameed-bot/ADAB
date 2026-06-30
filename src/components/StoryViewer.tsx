/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Story, Category } from '../types';
import { Illustration } from './Illustration';
import { speakArabicText, stopSpeaking, playPopSound, playSuccessSound, playTrophyUnlockSound } from '../utils/audio';
import { getDialectText, getSudaneseHighlightWord } from '../utils/dialect';

interface StoryViewerProps {
  story: Story;
  category: Category;
  soundEnabled: boolean;
  onComplete: () => void;
  onClose: () => void;
  lowEndMode?: boolean;
  dialect?: 'standard' | 'sudanese';
}

export const StoryViewer: React.FC<StoryViewerProps> = ({
  story,
  category,
  soundEnabled,
  onComplete,
  onClose,
  lowEndMode = false,
  dialect = 'standard'
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [storyFinished, setStoryFinished] = useState(false);

  const currentSlide = story.slides[currentSlideIndex];

  // Stop reading when changing slides or closing
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleReadSlide = () => {
    if (!soundEnabled) return;
    setIsReading(true);
    playPopSound();
    const translatedText = getDialectText(currentSlide.text, dialect);
    speakArabicText(translatedText, () => {
      setIsReading(false);
    });
  };

  // Auto-read on slide transition if sound is enabled
  useEffect(() => {
    const timer = setTimeout(() => {
      if (soundEnabled && !storyFinished) {
        handleReadSlide();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [currentSlideIndex, storyFinished]);

  const handleNext = () => {
    stopSpeaking();
    playPopSound();
    if (currentSlideIndex < story.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setStoryFinished(true);
      playTrophyUnlockSound();
    }
  };

  const handlePrev = () => {
    stopSpeaking();
    playPopSound();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleFinishStory = () => {
    playSuccessSound();
    onComplete();
  };

  return (
    <div className="w-full bg-slate-50 rounded-[32px] border-4 border-amber-200/60 p-5 flex flex-col gap-5 shadow-lg relative" id="story-reader-modal">
      
      {/* Upper header section */}
      <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
        <button
          onClick={() => {
            stopSpeaking();
            playPopSound();
            onClose();
          }}
          className="w-10 h-10 bg-rose-50 border-2 border-rose-300 text-rose-500 rounded-2xl flex items-center justify-center text-lg active:scale-95 transition-transform cursor-pointer"
          title="عَوْدَةٌ إِلَى الرَّئِيسِيَّةِ"
          id="btn-close-story"
        >
          ✖️
        </button>

        <div className="text-center">
          <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-wider font-mono">قِصَّةٌ مُشَوِّقَةٌ 📖</span>
          <h2 className="text-lg font-extrabold text-slate-800 font-sans mt-0.5">{story.title}</h2>
        </div>

        {/* Category sticker */}
        <div className={`px-3 py-1.5 rounded-2xl border text-xs font-bold ${category.color} ${category.borderColor}`} id="story-category-sticker">
          {category.title}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!storyFinished ? (
          <motion.div
            key={currentSlideIndex}
            initial={lowEndMode ? { opacity: 0 } : { opacity: 0, x: 50 }}
            animate={lowEndMode ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={lowEndMode ? { opacity: 0 } : { opacity: 0, x: -50 }}
            transition={lowEndMode ? { duration: 0.15 } : undefined}
            className="flex-1 flex flex-col items-center gap-5 py-2"
          >
            {/* Slide Illustration frame */}
            <div className="w-full aspect-[4/3] max-h-56 rounded-3xl border-4 border-slate-200 bg-white p-4 flex items-center justify-center shadow-inner relative overflow-hidden" id={`story-slide-frame-${currentSlideIndex}`}>
              {/* Colorful circular burst in bg */}
              <div className="absolute w-40 h-40 bg-slate-100 rounded-full scale-110 pointer-events-none" />
              <Illustration id={currentSlide.illustration} className="w-full h-full object-contain relative z-10" />
            </div>

            {/* Read text aloud section */}
            <div className="w-full bg-white rounded-2xl p-4 border-2 border-slate-200 shadow-sm flex flex-col items-center gap-3 relative">
              {/* Audio Reading Trigger */}
              <button
                onClick={handleReadSlide}
                className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-xl cursor-pointer transition-all shadow-md ${
                  isReading
                    ? 'bg-emerald-500 border-emerald-600 text-white animate-pulse'
                    : 'bg-amber-400 border-amber-500 text-white hover:bg-amber-500 active:scale-90'
                }`}
                title="اقْرَأْ لِي القِصَّةَ"
                id={`btn-narrate-slide-${currentSlideIndex}`}
              >
                🔊
              </button>

              {/* Story text with Tashkeel */}
              <p className="text-md md:text-lg font-extrabold text-slate-700 leading-relaxed text-center font-sans tracking-wide">
                {getDialectText(currentSlide.text, dialect).split(" ").map((word, i) => {
                  const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                  const actualHighlightWord = dialect === 'sudanese' ? getSudaneseHighlightWord(currentSlide.highlightWord) : currentSlide.highlightWord;
                  const isHighlighted = actualHighlightWord && cleanedWord.includes(actualHighlightWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
                  return (
                    <span
                      key={i}
                      className={`inline-block mx-0.5 transition-colors ${
                        isHighlighted ? 'text-amber-500 underline decoration-wavy decoration-amber-400 font-extrabold text-lg md:text-xl' : ''
                      }`}
                    >
                      {word}{' '}
                    </span>
                  );
                })}
              </p>
            </div>

            {/* Slide control navigation buttons */}
            <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-dashed border-slate-200">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-2xl border-2 text-sm font-bold cursor-pointer transition-all active:scale-95 ${
                  currentSlideIndex === 0
                    ? 'border-slate-200 text-slate-300 bg-slate-100 cursor-not-allowed'
                    : 'border-slate-300 text-slate-600 bg-white hover:bg-slate-50'
                }`}
                id="btn-prev-slide"
              >
                ◀️ السَّابِقُ
              </button>

              {/* Progress Indicator */}
              <div className="flex items-center gap-1.5" id="story-progress-dots">
                {story.slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === currentSlideIndex ? 'w-5 bg-amber-400' : 'w-2.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="flex items-center gap-1 px-5 py-2.5 rounded-2xl border-2 border-amber-400 text-white bg-amber-400 font-extrabold text-sm hover:bg-amber-500 active:scale-95 transition-all cursor-pointer"
                id="btn-next-slide"
              >
                {currentSlideIndex === story.slides.length - 1 ? 'نِهَايَةٌ 🏆' : 'التَّالِي ▶️'}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="story-finished"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-grow flex flex-col items-center justify-center text-center gap-6 py-6"
            id="story-completion-card"
          >
            {/* Success Reward Badge */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 border-4 border-amber-500 flex items-center justify-center shadow-lg relative animate-bounce">
              <span className="text-7xl">{story.badgeIcon}</span>
              <div className="absolute -top-3 -right-3 text-4xl">🎉</div>
              <div className="absolute -bottom-3 -left-3 text-4xl">🌟</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black text-slate-800 font-sans">تُمَّتْ القِصَّةُ بِنَجَاح!</h2>
              <p className="text-sm font-bold text-slate-500 px-6">
                لَقَدْ كُنْتَ مُسْتَمِعًا بَطَلًا وَرَائِعًا! لَقَدْ حَصَلْتَ عَلَى وِسَامِ {story.badgeName} وَأَصْبَحْتَ جَاهِزًا لِلُّعْبَةِ!
              </p>
            </div>

            {/* Completion reward stats display */}
            <div className="flex items-center gap-3 bg-amber-100/60 border border-amber-300 px-5 py-2.5 rounded-2xl" id="story-completion-stars">
              <span className="text-2xl">⭐</span>
              <span className="text-lg font-black text-amber-800">+١٠ نُجُوم جَدِيدَة!</span>
            </div>

            {/* Play game button */}
            <button
              onClick={handleFinishStory}
              className="w-full max-w-xs bg-emerald-500 border-b-4 border-emerald-700 hover:border-emerald-600 text-white font-extrabold text-md py-4 rounded-2xl shadow-md transition-all active:translate-y-1 active:border-b-0 cursor-pointer text-center"
              id="btn-complete-story"
            >
              افْتَحْ اللُّعْبَةَ الآنَ! 🎮
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
