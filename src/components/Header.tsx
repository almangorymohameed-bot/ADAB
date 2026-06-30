/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { speakArabicText, playPopSound } from '../utils/audio';

interface HeaderProps {
  userName: string;
  stars: number;
  streak: number;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onOpenNameModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  userName,
  stars,
  streak,
  soundEnabled,
  setSoundEnabled,
  onOpenNameModal
}) => {
  const displayGreeting = userName ? `مَرْحَبًا يَا ${userName}! 👋` : "مَرْحَبًا يَا بَطَل! 👋";

  const triggerVoiceGreeting = () => {
    playPopSound();
    if (soundEnabled) {
      const texts = [
        userName ? `مرحباً يا ${userName}! كفك يا بطل! أنت رائع جداً!` : "مرحباً يا بطل! كفك يا بطل! أهلاً بك في تطبيق آدابي!",
        "اليوم سنتعلم آداباً إسلامية جميلة لتفوز بالجوائز!"
      ];
      // Speak the greeting
      speakArabicText(texts.join(" "));
    }
  };

  // Trigger high-five greeting on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (soundEnabled) {
        speakArabicText(userName ? `مرحباً يا ${userName}! أهلاً بك في تطبيق آدابي!` : "أهلاً بك يا بطل في تطبيق آدابي! اضغط على الأشكال لتبدأ التعلم!");
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="w-full flex flex-col gap-4 bg-white/85 backdrop-blur-md px-5 py-4 rounded-3xl border-2 border-orange-100 shadow-sm" id="main-app-header">
      {/* Upper bar with app logo and controls */}
      <div className="flex items-center justify-between">
        {/* Interactive High-Five Hand (Left Side matching the image!) */}
        <button
          onClick={triggerVoiceGreeting}
          className="w-14 h-14 bg-amber-100 active:scale-90 hover:scale-105 transition-transform flex items-center justify-center rounded-2xl border-2 border-amber-300 shadow-sm text-3xl cursor-pointer"
          title="أَعْطِنِي خَمْسَة! (High Five)"
          id="btn-high-five"
        >
          ✋
        </button>

        {/* Center Title Logo */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5" id="app-logo-area">
            <span className="text-4xl font-extrabold text-amber-600 font-sans tracking-wide drop-shadow-sm">آدَابِي</span>
            <span className="text-3xl">📖🤲</span>
          </div>
          <p className="text-[10px] font-bold text-amber-500 tracking-widest uppercase font-mono mt-0.5">آدَابِي اليَوْمِيَّة</p>
        </div>

        {/* Right Buttons: Voice Switch & Profile Editor */}
        <div className="flex items-center gap-2">
          {/* Audio Speaker Toggle */}
          <button
            onClick={() => {
              playPopSound();
              setSoundEnabled(!soundEnabled);
            }}
            className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center text-xl transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-50 border-emerald-300 text-emerald-600 hover:bg-emerald-100'
                : 'bg-slate-50 border-slate-300 text-slate-400 hover:bg-slate-100'
            }`}
            title={soundEnabled ? "إِيقَافُ الصَّوْتِ" : "تَشْغِيلُ الصَّوْتِ"}
            id="btn-toggle-sound"
          >
            {soundEnabled ? "🔊" : "🔇"}
          </button>

          {/* Profile Editor */}
          <button
            onClick={() => {
              playPopSound();
              onOpenNameModal();
            }}
            className="w-11 h-11 bg-sky-50 border-2 border-sky-300 text-sky-600 rounded-2xl flex items-center justify-center text-xl hover:bg-sky-100 transition-all cursor-pointer"
            title="تَعْدِيلُ الاسْمِ"
            id="btn-edit-profile"
          >
            👤
          </button>
        </div>
      </div>

      {/* Hero Greeting and Stats */}
      <div className="flex items-center justify-between border-t border-dashed border-orange-100 pt-3" id="hero-greeting-stats">
        <div className="flex items-center gap-2">
          {/* Animated Smiling Star */}
          <div className="text-3xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold text-slate-800 tracking-tight font-sans">
              {displayGreeting}
            </h1>
            <p className="text-xs font-semibold text-slate-400">مُسْتَعِدٌّ لِلْمَغَامَرَةِ الصَّالِحَةِ؟</p>
          </div>
        </div>

        {/* Badges / Stars Indicators */}
        <div className="flex items-center gap-2.5">
          {/* Streak Flame */}
          <div className="flex items-center gap-1 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-2xl shadow-sm text-rose-600" title="الحَمَاسُ اليَوْمِيُّ">
            <span className="text-lg">🔥</span>
            <span className="text-sm font-extrabold font-mono">{streak}</span>
            <span className="text-[10px] font-bold">يَوْم</span>
          </div>

          {/* Star Balance */}
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-2xl shadow-sm text-amber-600" title="رَصِيدُ النُّجُومِ">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-extrabold font-mono">{stars}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
