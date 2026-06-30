/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Game, Category } from '../types';
import { speakArabicText, stopSpeaking, playPopSound, playSuccessSound, playFailureSound, playTrophyUnlockSound } from '../utils/audio';

interface GameViewerProps {
  game: Game;
  category: Category;
  soundEnabled: boolean;
  onComplete: () => void;
  onClose: () => void;
  lowEndMode?: boolean;
}

export const GameViewer: React.FC<GameViewerProps> = ({
  game,
  category,
  soundEnabled,
  onComplete,
  onClose,
  lowEndMode = false
}) => {
  const sortingItems = game.sortingItems || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const currentItem = sortingItems[currentIndex];

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handleReadItem = () => {
    if (!soundEnabled || !currentItem) return;
    setIsReading(true);
    playPopSound();
    speakArabicText(currentItem.text, () => {
      setIsReading(false);
    });
  };

  // Auto-read on change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (soundEnabled && !gameFinished && currentItem) {
        handleReadItem();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [currentIndex, gameFinished]);

  const handleChoice = (isGoodChoice: boolean) => {
    if (isAnswered) return;

    const correct = currentItem.isGood === isGoodChoice;
    setIsCorrect(correct);
    setSelectedAnswer(isGoodChoice);
    setIsAnswered(true);

    if (correct) {
      setScore((prev) => prev + 1);
      playSuccessSound();
      if (soundEnabled) {
        const cheerText = isGoodChoice 
          ? `رائع! نعم، هذا سلوك طيب وجميل!`
          : `أحسنت! نعم، هذا سلوك خاطئ يجب أن نتجنبه!`;
        speakArabicText(cheerText);
      }
    } else {
      playFailureSound();
      if (soundEnabled) {
        const correctionText = currentItem.isGood
          ? `عفواً يا بطل، هذا سلوك طيب وصحيح! يجب أن نفعله!`
          : `عفواً يا بطل، هذا سلوك خاطئ وسيئ! يجب ألا نفعله!`;
        speakArabicText(correctionText);
      }
    }
  };

  const handleNext = () => {
    stopSpeaking();
    playPopSound();
    setIsAnswered(false);
    setSelectedAnswer(null);
    
    if (currentIndex < sortingItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameFinished(true);
      playTrophyUnlockSound();
    }
  };

  const handleFinishGame = () => {
    playSuccessSound();
    onComplete();
  };

  return (
    <div className="w-full bg-slate-50 rounded-[32px] border-4 border-amber-200/60 p-5 flex flex-col gap-5 shadow-lg relative" id="game-portal-modal">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
        <button
          onClick={() => {
            stopSpeaking();
            playPopSound();
            onClose();
          }}
          className="w-10 h-10 bg-rose-50 border-2 border-rose-300 text-rose-500 rounded-2xl flex items-center justify-center text-lg active:scale-95 transition-transform cursor-pointer"
          title="عَوْدَةٌ إِلَى الرَّئِيسِيَّةِ"
          id="btn-close-game"
        >
          ✖️
        </button>

        <div className="text-center">
          <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-wider font-mono">أَلْعَابٌ تَفَاعُلِيَّةٌ 🎮</span>
          <h2 className="text-lg font-extrabold text-slate-800 font-sans mt-0.5">{game.title}</h2>
        </div>

        {/* Score indicator */}
        <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl text-emerald-600 text-xs font-bold" id="game-live-score">
          <span>🏆</span>
          <span>{score} / {sortingItems.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!gameFinished && currentItem ? (
          <motion.div
            key={currentIndex}
            initial={lowEndMode ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={lowEndMode ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={lowEndMode ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            transition={lowEndMode ? { duration: 0.15 } : undefined}
            className="flex-1 flex flex-col items-center gap-5"
          >
            {/* Round card describing behavior */}
            <div className="w-full bg-white rounded-3xl p-6 border-4 border-emerald-200 shadow-md flex flex-col items-center gap-4 relative overflow-hidden" id="behavior-question-card">
              {/* Background faint grid or burst */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-50 rounded-full opacity-40 blur-sm" />

              {/* Behavior Emoji Sticker */}
              <div className="w-20 h-20 bg-emerald-50 rounded-full border-2 border-emerald-200 flex items-center justify-center text-5xl shadow-inner relative z-10 animate-pulse">
                {currentItem.icon}
              </div>

              {/* Speaker sound button */}
              <button
                onClick={handleReadItem}
                className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-xl cursor-pointer transition-all shadow-md z-10 ${
                  isReading
                    ? 'bg-emerald-500 border-emerald-600 text-white animate-pulse'
                    : 'bg-amber-400 border-amber-500 text-white hover:bg-amber-500 active:scale-90'
                }`}
                title="اقْرَأْ لِي السُّلُوكَ"
                id={`btn-read-behavior-${currentItem.id}`}
              >
                🔊
              </button>

              {/* Large Behavior Text with Tashkeel */}
              <p className="text-lg md:text-xl font-black text-slate-700 leading-relaxed text-center font-sans tracking-wide relative z-10">
                {currentItem.text}
              </p>
            </div>

            {/* Answer feedback alert banner */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`w-full text-center py-3 px-5 rounded-2xl border-2 font-bold text-sm leading-relaxed ${
                  isCorrect
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                    : 'bg-rose-100 border-rose-300 text-rose-800'
                }`}
                id="answer-feedback-banner"
              >
                {isCorrect ? (
                  <span>عَمَلٌ رَائِعٌ! إِجَابَةٌ صَحِيحَةٌ! 🎉🌟</span>
                ) : (
                  <span>حَاوِلْ مَرَّةً أُخْرَى! التَّعَلُّمُ مُفِيدٌ! 💡</span>
                )}
              </motion.div>
            )}

            {/* Big Choice Buttons 👍 👎 */}
            {!isAnswered ? (
              <div className="w-full grid grid-cols-2 gap-4 mt-auto">
                {/* Good behavior 👍 */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice(true)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-[28px] py-4 md:py-5 border-b-4 border-emerald-700 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-md text-center active:translate-y-1 active:border-b-0 transition-all"
                  id="btn-choice-good"
                >
                  <span className="text-4xl">👍</span>
                  <span className="font-extrabold text-sm font-sans block">سُلُوكٌ طَيِّبٌ</span>
                  <span className="text-[10px] font-bold opacity-85 block">Good Deed</span>
                </motion.button>

                {/* Bad behavior 👎 */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice(false)}
                  className="bg-rose-500 hover:bg-rose-600 text-white rounded-[28px] py-4 md:py-5 border-b-4 border-rose-700 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-md text-center active:translate-y-1 active:border-b-0 transition-all"
                  id="btn-choice-bad"
                >
                  <span className="text-4xl">👎</span>
                  <span className="font-extrabold text-sm font-sans block">سُلُوكٌ خَاطِئٌ</span>
                  <span className="text-[10px] font-bold opacity-85 block">Wrong Deed</span>
                </motion.button>
              </div>
            ) : (
              // Next button when question is answered
              <div className="w-full mt-auto">
                <button
                  onClick={handleNext}
                  className="w-full bg-amber-400 border-b-4 border-amber-600 text-white font-extrabold py-4 rounded-2xl shadow-md cursor-pointer hover:bg-amber-500 text-center active:translate-y-1 active:border-b-0 transition-all text-md"
                  id="btn-game-next"
                >
                  السُّؤَالُ التَّالِي ⏩
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          // Victory screen
          <motion.div
            key="game-finished"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-grow flex flex-col items-center justify-center text-center gap-6 py-6"
            id="game-completion-card"
          >
            {/* Victory cup */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300 border-4 border-emerald-500 flex items-center justify-center shadow-lg relative animate-bounce">
              <span className="text-7xl">🏆</span>
              <div className="absolute -top-3 -right-3 text-4xl">🎉</div>
              <div className="absolute -bottom-3 -left-3 text-4xl">✨</div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black text-slate-800 font-sans">بَطَلُ الآدَابِ العَظِيمِ!</h2>
              <p className="text-sm font-bold text-slate-500 px-6">
                لَقَدْ أَجَبْتَ عَلَى الأَسْئِلَةِ كُلِّهَا بِذَكَاءٍ وَأَدَبٍ! لَقَدْ تَعَلَّمْتَ سُلُوكِيَّاتٍ جَمِيلَةً تُرْضِي اللهَ وَالْوَالِدَيْنِ!
              </p>
            </div>

            {/* Reward score cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex flex-col items-center">
                <span className="text-[10px] font-bold text-emerald-600 block">النَّتِيجَةُ</span>
                <span className="text-lg font-black text-emerald-800 font-mono mt-0.5">{score} / {sortingItems.length}</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl flex flex-col items-center">
                <span className="text-[10px] font-bold text-amber-600 block">الجَائِزَةُ</span>
                <span className="text-lg font-black text-amber-800 font-mono mt-0.5">+٢٠ نَجْمَة</span>
              </div>
            </div>

            {/* Claim rewards and close game */}
            <button
              onClick={handleFinishGame}
              className="w-full max-w-xs bg-emerald-500 border-b-4 border-emerald-700 hover:border-emerald-600 text-white font-extrabold text-md py-4 rounded-2xl shadow-md transition-all active:translate-y-1 active:border-b-0 cursor-pointer text-center"
              id="btn-claim-game-rewards"
            >
              احْصُلْ عَلَى الجَائِزَةِ! 🎁
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
