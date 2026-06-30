/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Category } from '../types';
import { playPopSound } from '../utils/audio';

interface CategoryCardProps {
  category: Category;
  completed: boolean;
  onSelect: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, completed, onSelect }) => {
  // Select custom shape classes and SVG frames to match the picture
  const renderShapeDecoration = () => {
    switch (category.shape) {
      case 'cloud':
        return (
          // Cloud SVG overlay
          <svg className="absolute inset-0 w-full h-full text-sky-200/40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 20 50 Q 15 35 30 30 Q 50 15 70 30 Q 85 30 80 50 Q 85 70 70 75 Q 50 85 30 75 Q 15 70 20 50 Z" fill="currentColor" />
          </svg>
        );
      case 'star':
        return (
          // Star SVG overlay
          <svg className="absolute inset-0 w-full h-full text-purple-200/35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="currentColor" />
          </svg>
        );
      case 'heart':
        return (
          // Heart SVG overlay
          <svg className="absolute inset-0 w-full h-full text-rose-200/35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 90 Q 50 90 20 55 Q 5 35 25 15 Q 40 10 50 30 Q 60 10 75 15 Q 95 35 80 55 Z" fill="currentColor" />
          </svg>
        );
      case 'house':
        return (
          // House SVG overlay
          <svg className="absolute inset-0 w-full h-full text-amber-200/35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,5 95,45 80,45 80,95 20,95 20,45 5,45" fill="currentColor" />
          </svg>
        );
      case 'flower':
        return (
          // Flower shape overlay
          <svg className="absolute inset-0 w-full h-full text-emerald-200/35 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 50 Q 50 20 30 30 Q 10 40 30 50 Q 10 60 30 70 Q 50 80 50 50 M 50 50 Q 50 80 70 70 Q 90 60 70 50 Q 90 40 70 30 Q 50 20 50 50 Z" fill="currentColor" />
          </svg>
        );
      case 'toilet':
        return (
          // Bubble/Water SVG overlay
          <svg className="absolute inset-0 w-full h-full text-cyan-200/30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="25" cy="25" r="10" fill="currentColor" />
            <circle cx="80" cy="40" r="12" fill="currentColor" />
            <circle cx="35" cy="75" r="8" fill="currentColor" />
            <circle cx="70" cy="80" r="14" fill="currentColor" />
          </svg>
        );
      case 'respect':
        return (
          // Heart/Medal overlay
          <svg className="absolute inset-0 w-full h-full text-teal-200/30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 10 40 C 10 25, 30 25, 50 45 C 70 25, 90 25, 90 40 C 90 70, 50 90, 50 90 C 50 90, 10 70, 10 40 Z" fill="currentColor" />
          </svg>
        );
      case 'talking':
        return (
          // Chat bubble outline
          <svg className="absolute inset-0 w-full h-full text-orange-200/30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 10 30 Q 10 10 30 10 L 70 10 Q 90 10 90 30 L 90 60 Q 90 80 70 80 L 40 80 L 20 95 L 25 80 Q 10 75 10 60 Z" fill="currentColor" />
          </svg>
        );
      case 'greeting':
        return (
          // Radiant burst
          <svg className="absolute inset-0 w-full h-full text-indigo-200/30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="20" fill="currentColor" />
            <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 20 20 L 80 80 M 20 80 L 80 20" stroke="currentColor" strokeWidth="4" />
          </svg>
        );
    }
  };

  // Specific shape border colors and classes
  const shapeTheme = {
    cloud: {
      border: 'border-sky-300 bg-sky-50 text-sky-700',
      shadow: 'shadow-sky-100',
      emojiBg: 'bg-sky-100 border-sky-200',
      label: 'أَكْل',
      illustration: (
        // Cookie & Milk Vector Icon
        <g id="cookie-milk-icon">
          <ellipse cx="40" cy="55" rx="14" ry="14" fill="#d97706" stroke="#b45309" strokeWidth="2" />
          <circle cx="34" cy="50" r="1.5" fill="#451a03" />
          <circle cx="44" cy="52" r="1.5" fill="#451a03" />
          <circle cx="39" cy="62" r="1.5" fill="#451a03" />
          {/* Milk Cup */}
          <rect x="62" y="36" width="16" height="28" rx="2" fill="#f8fafc" stroke="#64748b" strokeWidth="2.5" />
          <rect x="64" y="42" width="12" height="20" rx="1" fill="#ffffff" />
          {/* Happy faces */}
          <circle cx="70" cy="50" r="1" fill="#1e293b" />
          <path d="M 68 53 Q 70 55 72 53" stroke="#1e293b" strokeWidth="1" fill="none" />
        </g>
      )
    },
    star: {
      border: 'border-purple-300 bg-purple-50 text-purple-700',
      shadow: 'shadow-purple-100',
      emojiBg: 'bg-purple-100 border-purple-200',
      label: 'صَلَاة',
      illustration: (
        // Boy Praying Icon
        <g id="mosque-star-icon">
          <path d="M 35 65 L 35 50 Q 35 32 50 32 Q 65 32 65 50 L 65 65 Z" fill="#c084fc" stroke="#a855f7" strokeWidth="2" />
          {/* Crescent */}
          <path d="M 50 20 Q 54 20 54 24 Q 54 27 50 27 Q 47 27 47 23 Q 47 21 49 20" fill="#eab308" />
          {/* Glowing Star */}
          <polygon points="50,42 53,48 59,48 54,52 56,58 50,54 44,58 46,52 41,48 47,48" fill="#fef08a" />
        </g>
      )
    },
    heart: {
      border: 'border-rose-300 bg-rose-50 text-rose-700',
      shadow: 'shadow-rose-100',
      emojiBg: 'bg-rose-100 border-rose-200',
      label: 'أَصْدِقَاء',
      illustration: (
        // Friends Holding Hands Icon
        <g id="friends-holding-hands-icon">
          {/* Big Pink Heart */}
          <path d="M 50 64 Q 50 54 42 54 Q 32 54 32 64 Q 32 78 50 90 Q 68 78 68 64 Q 68 54 58 54 Q 50 54 50 64" fill="#fecdd3" stroke="#f43f5e" strokeWidth="2" />
          {/* Hand shaking or happy faces */}
          <circle cx="42" cy="42" r="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <circle cx="58" cy="42" r="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <path d="M 46 42 Q 50 45 54 42" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )
    },
    house: {
      border: 'border-amber-300 bg-amber-50 text-amber-700',
      shadow: 'shadow-amber-100',
      emojiBg: 'bg-amber-100 border-amber-200',
      label: 'بَيْت',
      illustration: (
        // Home Icon
        <g id="home-icon">
          <polygon points="50,22 82,50 18,50" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <rect x="26" y="50" width="48" height="32" fill="#fed7aa" stroke="#b45309" strokeWidth="2" />
          {/* Door */}
          <rect x="44" y="62" width="12" height="20" rx="2" fill="#b45309" />
          <circle cx="53" cy="72" r="1.5" fill="#fef08a" />
        </g>
      )
    },
    flower: {
      border: 'border-emerald-300 bg-emerald-50 text-emerald-700',
      shadow: 'shadow-emerald-100',
      emojiBg: 'bg-emerald-100 border-emerald-200',
      label: 'نَظَافَة',
      illustration: (
        // Waving Cat Icon
        <g id="kitten-clean-icon">
          <circle cx="50" cy="56" r="15" fill="#a8a29e" stroke="#57534e" strokeWidth="2" />
          {/* Ears */}
          <polygon points="38,44 46,40 45,49" fill="#a8a29e" stroke="#57534e" strokeWidth="1.5" />
          <polygon points="62,44 54,40 55,49" fill="#a8a29e" stroke="#57534e" strokeWidth="1.5" />
          {/* Eyes & nose */}
          <circle cx="45" cy="52" r="1.5" fill="#1e293b" />
          <circle cx="55" cy="52" r="1.5" fill="#1e293b" />
          <polygon points="50,56 48,54 52,54" fill="#fda4af" />
          {/* Soap Bubbles */}
          <circle cx="70" cy="40" r="5" fill="#ffffff" stroke="#06b6d4" strokeWidth="1" opacity="0.9" />
          <circle cx="76" cy="46" r="3" fill="#ffffff" stroke="#06b6d4" strokeWidth="1" opacity="0.9" />
        </g>
      )
    },
    toilet: {
      border: 'border-cyan-300 bg-cyan-50 text-cyan-700',
      shadow: 'shadow-cyan-100',
      emojiBg: 'bg-cyan-100 border-cyan-200',
      label: 'الخَلَاء',
      illustration: (
        <g id="toilet-clean-icon">
          <rect x="35" y="45" width="30" height="25" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 50 45 L 50 35 C 50 30 55 30 55 35" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="57" r="4" fill="#38bdf8" />
          <circle cx="42" cy="78" r="3" fill="#06b6d4" opacity="0.6" />
          <circle cx="58" cy="82" r="2" fill="#06b6d4" opacity="0.6" />
        </g>
      )
    },
    respect: {
      border: 'border-teal-300 bg-teal-50 text-teal-700',
      shadow: 'shadow-teal-100',
      emojiBg: 'bg-teal-100 border-teal-200',
      label: 'الِاحْتِرَام',
      illustration: (
        <g id="respect-icon">
          <circle cx="35" cy="40" r="10" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
          <circle cx="65" cy="48" r="8" fill="#fda4af" stroke="#e11d48" strokeWidth="2" />
          <path d="M 35 50 Q 35 75 50 75 Q 65 75 65 56" fill="none" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
        </g>
      )
    },
    talking: {
      border: 'border-orange-300 bg-orange-50 text-orange-700',
      shadow: 'shadow-orange-100',
      emojiBg: 'bg-orange-100 border-orange-200',
      label: 'التَّحَدُّث',
      illustration: (
        <g id="talking-icon">
          <rect x="25" y="32" width="50" height="36" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <polygon points="40,68 45,78 52,68" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <rect x="40" y="66" width="12" height="4" fill="#ffedd5" />
          <circle cx="40" cy="46" r="2" fill="#ea580c" />
          <circle cx="60" cy="46" r="2" fill="#ea580c" />
          <path d="M 46 54 Q 50 58 54 54" stroke="#ea580c" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      )
    },
    greeting: {
      border: 'border-indigo-300 bg-indigo-50 text-indigo-700',
      shadow: 'shadow-indigo-100',
      emojiBg: 'bg-indigo-100 border-indigo-200',
      label: 'السَّلَام',
      illustration: (
        <g id="greeting-icon">
          <polygon points="50,25 57,40 73,40 60,50 65,65 50,55 35,65 40,50 27,40 43,40" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <path d="M 25 25 Q 50 15 75 25" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeDasharray="2,2" />
          <path d="M 25 75 Q 50 85 75 75" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeDasharray="2,2" />
        </g>
      )
    }
  }[category.shape];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        playPopSound();
        onSelect();
      }}
      className={`w-full aspect-[4/5] relative rounded-[32px] border-4 p-5 flex flex-col items-center justify-between shadow-md overflow-hidden cursor-pointer transition-all ${shapeTheme.border} ${shapeTheme.shadow}`}
      id={`btn-category-${category.id}`}
    >
      {/* Playful background shape graphic */}
      {renderShapeDecoration()}

      {/* Ribbon for Category Completion Star */}
      {completed && (
        <div className="absolute top-3 left-3 bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md animate-pulse border border-emerald-400 z-10" title="مَكْتَمِل!">
          ⭐
        </div>
      )}

      {/* Decorative inner background star or cloud badge */}
      <span className="absolute top-3 right-4 text-2xl drop-shadow-sm select-none z-10">
        {category.icon.slice(0, 2)}
      </span>

      {/* Center Cartoon Vector Drawing */}
      <div className="flex-1 w-full flex items-center justify-center mt-3 z-10" id={`illustration-container-${category.id}`}>
        <svg viewBox="0 0 100 100" className="w-24 h-24 drop-shadow-sm">
          {shapeTheme.illustration}
        </svg>
      </div>

      {/* Bottom Large Label Pill */}
      <div className="w-full text-center z-10">
        <div className="bg-white/95 backdrop-blur-sm border-2 border-inherit rounded-2xl py-1.5 px-4 shadow-sm inline-block min-w-[85%]">
          <span className="text-base font-extrabold font-sans block leading-none">
            {shapeTheme.label}
          </span>
          <span className="text-[10px] font-bold text-slate-400 block mt-0.5 tracking-wider uppercase font-mono">
            {category.englishTitle}
          </span>
        </div>
      </div>
    </motion.button>
  );
};
