/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Reward, UserProgress } from '../types';
import { REWARDS } from '../data/etiquettes';
import { speakArabicText, playPopSound } from '../utils/audio';

interface BadgeCabinetProps {
  progress: UserProgress;
  soundEnabled: boolean;
}

export const BadgeCabinet: React.FC<BadgeCabinetProps> = ({ progress, soundEnabled }) => {
  // Determine child's rank based on stars
  const getRankAndBadge = (starsCount: number) => {
    if (starsCount >= 120) return { rank: "حَافِظُ الآدَابِ البَطَل 👑", icon: "👑", text: "أنت بطل الآداب الأعلى والقدوة الطيبة!" };
    if (starsCount >= 70) return { rank: "أَمِيرُ الأَدَبِ المَحْبُوب 🌟", icon: "🌟", text: "أنت أمير محبوب بأدبك الجميل!" };
    if (starsCount >= 30) return { rank: "فَارِسُ الآدَابِ الصَّغِير 🛡️", icon: "🛡️", text: "أنت فارس حقيقي تطبق الآداب اليومية!" };
    return { rank: "بَطَل مُبْتَدِئ كَرِيم 🌱", icon: "🌱", text: "أنت بطل طيب تبدأ مغامرتك الصالحة!" };
  };

  const currentRankInfo = getRankAndBadge(progress.stars);

  const handleBadgeClick = (reward: Reward, isUnlocked: boolean) => {
    playPopSound();
    if (!soundEnabled) return;

    if (isUnlocked) {
      speakArabicText(`وِسَامُ ${reward.title}. رائع! لقد حصلت على هذا الوسام لأنك بطل صالح في ${reward.description}`);
    } else {
      speakArabicText(`هذا هو وِسَامُ ${reward.title}. لتفوز به، اقرأ القصة والعب لعبة ${reward.title}`);
    }
  };

  const handleRankVoice = () => {
    playPopSound();
    if (!soundEnabled) return;
    speakArabicText(`لقبُكَ الحَالِي هو: ${currentRankInfo.rank}. ${currentRankInfo.text}`);
  };

  return (
    <div className="w-full bg-white rounded-[32px] border-4 border-amber-200/60 p-5 flex flex-col gap-6 shadow-md" id="badge-shelf-page">
      
      {/* Current Level Profile Card */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl p-5 text-white flex items-center justify-between shadow-md relative overflow-hidden" id="level-rank-card">
        {/* Decorative rays */}
        <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full pointer-events-none" />
        
        <div className="flex flex-col gap-1 text-right">
          <span className="text-[10px] font-extrabold tracking-wider opacity-90 uppercase font-mono">الرُّتْبَةُ الحَالِيَّةُ</span>
          <h2 className="text-lg font-black font-sans leading-tight">
            {currentRankInfo.rank}
          </h2>
          <p className="text-xs font-semibold opacity-95 mt-1 leading-relaxed">
            {currentRankInfo.text}
          </p>
        </div>

        {/* Level Audio Speaker */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0], transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.85 }}
          onClick={handleRankVoice}
          className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-2xl text-2xl hover:bg-white/30 cursor-pointer shadow-inner border border-white/30"
          title="اصْمَعْ اللَّقَبَ"
          id="btn-speak-rank"
        >
          🔊
        </motion.button>
      </div>

      {/* Badge Cabinet Display Cabinet Grid */}
      <div className="flex flex-col gap-3">
        <h3 className="text-md font-extrabold text-slate-800 text-right pr-1">خِزَانَةُ أَوْسِمَةِ الأَدَبِ 🏆</h3>
        
        {/* Wood shelving background pattern */}
        <div className="bg-amber-100/40 rounded-3xl p-4 border-2 border-amber-200/60 flex flex-col gap-5 relative" id="badge-wooden-shelf">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {REWARDS.map((reward) => {
              const isUnlocked = progress.unlockedRewards.includes(reward.id);
              
              return (
                <motion.button
                  key={reward.id}
                  whileHover={{ scale: isUnlocked ? 1.12 : 1.05, rotate: isUnlocked ? [0, -3, 3, -3, 0] : 0, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleBadgeClick(reward, isUnlocked)}
                  className={`aspect-square p-4 rounded-2xl border-2 flex flex-col items-center justify-between shadow-sm relative cursor-pointer transition-all ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-white to-amber-50/20 border-amber-400 shadow-amber-100'
                      : 'bg-slate-100/80 border-slate-200 opacity-60'
                  }`}
                  id={`btn-badge-cabinet-item-${reward.id}`}
                >
                  {/* Lock Indicator */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-slate-200/45 rounded-2xl flex items-center justify-center backdrop-blur-[0.5px]">
                      <span className="text-lg bg-white border-2 border-slate-300 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                        🔒
                      </span>
                    </div>
                  )}

                  {/* Sparkly corner stars for unlocked awards */}
                  {isUnlocked && (
                    <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] shadow-sm animate-pulse">
                      ⭐
                    </div>
                  )}

                  {/* Large Badge Graphic representation */}
                  <span className="text-4xl filter drop-shadow-sm leading-none mt-2 select-none">
                    {reward.icon}
                  </span>

                  {/* Title text */}
                  <div className="text-center w-full mt-2">
                    <span className="text-xs font-black text-slate-700 block line-clamp-1">
                      {reward.title.replace("وِسَامُ", "").trim()}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 block tracking-wide font-mono uppercase">
                      {reward.id}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Wooden Shelf line shadow decorations */}
          <div className="w-full h-3.5 bg-amber-200/70 border border-amber-300/60 rounded-full shadow-inner mt-1" />
        </div>
      </div>

      {/* Daily Progress Tracker Goal status */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 flex flex-col gap-2.5" id="rewards-daily-status-tracker">
        <h4 className="text-xs font-black text-slate-600">تَقَدُّمُكَ اليَوْمِيُّ 📈</h4>
        <div className="flex items-center justify-between text-xs font-extrabold text-slate-500">
          <span>{progress.unlockedRewards.length} / 5 أَوْسِمَة كَامِلَة</span>
          <span>المُسْتَوَى {Math.floor(progress.stars / 40) + 1}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
            style={{ width: `${(progress.unlockedRewards.length / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
