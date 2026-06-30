/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface IllustrationProps {
  id: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ id, className = "w-full h-full max-h-48" }) => {
  // Common visual helper: cute smiley face
  const renderSmiley = (cx: number, cy: number, scale = 1, wink = false) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`} id="smiley-eyes-mouth">
      {/* Eyes */}
      {wink ? (
        <>
          <path d="M-10,-5 Q-5,-10 0,-5" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="10" cy="-5" r="3" fill="#1e293b" />
        </>
      ) : (
        <>
          <circle cx="-10" cy="-5" r="3.5" fill="#1e293b" />
          <circle cx="10" cy="-5" r="3.5" fill="#1e293b" />
          {/* Eye sparkles */}
          <circle cx="-11" cy="-7" r="1" fill="#ffffff" />
          <circle cx="9" cy="-7" r="1" fill="#ffffff" />
        </>
      )}
      {/* Rosy cheeks */}
      <circle cx="-15" cy="1" r="4.5" fill="#fca5a5" opacity="0.6" />
      <circle cx="15" cy="1" r="4.5" fill="#fca5a5" opacity="0.6" />
      {/* Smiley Mouth */}
      <path d="M-6,3 Q0,10 6,3" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );

  // Helper for sparkling star
  const renderStar = (cx: number, cy: number, r: number, fill = "#fef08a") => (
    <polygon
      points={`
        ${cx},${cy - r} 
        ${cx + r * 0.3},${cy - r * 0.3} 
        ${cx + r},${cy} 
        ${cx + r * 0.3},${cy + r * 0.3} 
        ${cx},${cy + r} 
        ${cx - r * 0.3},${cy + r * 0.3} 
        ${cx - r},${cy} 
        ${cx - r * 0.3},${cy - r * 0.3}
      `}
      fill={fill}
      stroke="#ca8a04"
      strokeWidth="2.5"
      strokeLinejoin="round"
      id="sparkle-star-shape"
    />
  );

  switch (id) {
    // -----------------------------------------------------------------
    // EATING CATEGORY ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'dirty_hands_duck':
      return (
        <svg viewBox="0 0 200 160" className={className} id="dirty-hands-duck-svg">
          {/* Background pastel bubble */}
          <circle cx="100" cy="80" r="70" fill="#f0f9ff" />
          {/* A delicious cookie sitting on the table */}
          <rect x="30" y="110" width="140" height="20" rx="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="3" />
          <circle cx="50" cy="108" r="15" fill="#d97706" stroke="#b45309" strokeWidth="2.5" />
          <circle cx="45" cy="103" r="2" fill="#451a03" />
          <circle cx="53" cy="112" r="2" fill="#451a03" />
          <circle cx="56" cy="102" r="2" fill="#451a03" />
          {/* Duck body */}
          <ellipse cx="100" cy="95" rx="35" ry="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Duck wings with muddy brown smudges */}
          <path d="M 60 95 C 45 95, 45 110, 60 110" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          <path d="M 140 95 C 155 95, 155 110, 140 110" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Dirt on left wing */}
          <circle cx="50" cy="100" r="4" fill="#78350f" opacity="0.8" />
          <circle cx="54" cy="105" r="3" fill="#78350f" opacity="0.8" />
          {/* Dirt on right wing */}
          <circle cx="148" cy="102" r="4" fill="#78350f" opacity="0.8" />
          <circle cx="144" cy="106" r="3" fill="#78350f" opacity="0.8" />
          {/* Duck head */}
          <circle cx="100" cy="55" r="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Mud on head */}
          <path d="M 88 38 Q 93 45 98 40" fill="none" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
          {/* Beak */}
          <path d="M 85 58 Q 100 70 115 58 Z" fill="#f97316" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(100, 52, 0.9)}
        </svg>
      );

    case 'washing_hands_duck':
      return (
        <svg viewBox="0 0 200 160" className={className} id="washing-hands-duck-svg">
          <circle cx="100" cy="80" r="70" fill="#f0fdf4" />
          {/* Faucet */}
          <path d="M 120 20 L 140 20 Q 145 20 145 25 L 145 40" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          {/* Droplets of water */}
          <circle cx="145" cy="52" r="4" fill="#38bdf8" />
          <circle cx="144" cy="64" r="3.5" fill="#38bdf8" />
          <circle cx="146" cy="74" r="3" fill="#38bdf8" />
          {/* Duck body */}
          <ellipse cx="85" cy="95" rx="35" ry="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Duck head */}
          <circle cx="85" cy="55" r="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Beak */}
          <path d="M 70 58 Q 85 70 100 58 Z" fill="#f97316" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(85, 52, 0.9, true)}
          {/* Wings rubbing hands together under the faucet */}
          <path d="M 110 95 Q 130 85 140 85" fill="none" stroke="#ca8a04" strokeWidth="3.5" strokeLinecap="round" />
          {/* Soap bubbles! */}
          <circle cx="132" cy="80" r="7" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
          <circle cx="142" cy="85" r="5" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
          <circle cx="136" cy="90" r="6" fill="#ffffff" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
        </svg>
      );

    case 'eating_duck':
      return (
        <svg viewBox="0 0 200 160" className={className} id="eating-duck-svg">
          <circle cx="100" cy="80" r="70" fill="#fffbeb" />
          {/* Table */}
          <rect x="20" y="115" width="160" height="15" rx="5" fill="#fed7aa" stroke="#f97316" strokeWidth="2.5" />
          {/* Glass of milk */}
          <rect x="135" y="75" width="22" height="38" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
          {/* Milk line */}
          <rect x="138" y="83" width="16" height="26" rx="2" fill="#ffffff" />
          <path d="M 139 90 Q 146 88 153 90" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
          {/* Cookie in hand */}
          <circle cx="55" cy="100" r="16" fill="#d97706" stroke="#b45309" strokeWidth="3" />
          {/* Bite marks */}
          <path d="M 39 100 A 6 6 0 0 1 45 92 A 6 6 0 0 1 48 108" fill="#fffbeb" />
          <circle cx="53" cy="94" r="2.5" fill="#451a03" />
          <circle cx="62" cy="102" r="2.5" fill="#451a03" />
          <circle cx="58" cy="108" r="2" fill="#451a03" />
          {/* Duck body */}
          <ellipse cx="98" cy="100" rx="28" ry="24" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Duck head */}
          <circle cx="98" cy="62" r="22" fill="#fef08a" stroke="#ca8a04" strokeWidth="3.5" />
          {/* Beak */}
          <path d="M 86 65 Q 98 75 110 65 Z" fill="#f97316" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(98, 59, 0.85)}
          {/* Right hand waving */}
          <path d="M 118 95 Q 128 85 125 75" fill="none" stroke="#ca8a04" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'hungry_bunny':
      return (
        <svg viewBox="0 0 200 160" className={className} id="hungry-bunny-svg">
          {/* Background pastel bubble */}
          <circle cx="100" cy="80" r="70" fill="#fffbeb" />
          {/* Table */}
          <rect x="25" y="115" width="150" height="15" rx="5" fill="#ffedd5" stroke="#f97316" strokeWidth="2.5" />
          {/* Plate with carrots */}
          <ellipse cx="100" cy="115" rx="35" ry="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2.5" />
          {/* Carrots */}
          <polygon points="85,112 110,110 100,105" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
          <path d="M 85 112 Q 80 115 78 112" stroke="#22c55e" strokeWidth="2" fill="none" />
          <polygon points="95,115 120,112 110,108" fill="#f97316" stroke="#ea580c" strokeWidth="2" />
          {/* Bunny body */}
          <ellipse cx="100" cy="98" rx="28" ry="24" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny head */}
          <circle cx="100" cy="60" r="22" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny ears */}
          <ellipse cx="88" cy="30" rx="6" ry="18" transform="rotate(-15, 88, 30)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="88" cy="30" rx="3" ry="12" transform="rotate(-15, 88, 30)" fill="#fecdd3" />
          <ellipse cx="112" cy="30" rx="6" ry="18" transform="rotate(15, 112, 30)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="112" cy="30" rx="3" ry="12" transform="rotate(15, 112, 30)" fill="#fecdd3" />
          {/* Smiley eyes/mouth */}
          {renderSmiley(100, 58, 0.85)}
          <polygon points="98,63 102,63 100,65" fill="#f43f5e" />
          {/* Paw indicators */}
          <ellipse cx="80" cy="115" rx="7" ry="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          <ellipse cx="120" cy="115" rx="7" ry="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          {/* Sparkles */}
          {renderStar(45, 45, 6)}
          {renderStar(155, 50, 7)}
        </svg>
      );

    case 'bunny_saying_bismillah':
      return (
        <svg viewBox="0 0 200 160" className={className} id="bunny-saying-bismillah-svg">
          {/* Background pastel bubble */}
          <circle cx="100" cy="80" r="70" fill="#f0f9ff" />
          {/* Speech bubble saying Bismillah */}
          <rect x="35" y="10" width="130" height="26" rx="13" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <polygon points="100,36 95,36 100,42" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          <text x="100" y="26" fontFamily="'Tajawal', sans-serif" fontWeight="bold" fontSize="10.5" fill="#ffffff" textAnchor="middle">بِسْمِ اللَّهِ</text>
          {/* Bunny body */}
          <ellipse cx="100" cy="100" rx="28" ry="24" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny head */}
          <circle cx="100" cy="62" r="22" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny ears */}
          <ellipse cx="88" cy="32" rx="6" ry="18" transform="rotate(-10, 88, 32)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="88" cy="32" rx="3" ry="12" transform="rotate(-10, 88, 32)" fill="#fecdd3" />
          <ellipse cx="112" cy="32" rx="6" ry="18" transform="rotate(10, 112, 32)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="112" cy="32" rx="3" ry="12" transform="rotate(10, 112, 32)" fill="#fecdd3" />
          {/* Smiley eyes/mouth */}
          {renderSmiley(100, 60, 0.85, true)}
          <polygon points="98,65 102,65 100,67" fill="#f43f5e" />
          {/* Hands raised in supplication/politeness */}
          <ellipse cx="86" cy="90" rx="6" ry="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          <ellipse cx="114" cy="90" rx="6" ry="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          {/* Sparkles */}
          {renderStar(40, 50, 7)}
          {renderStar(160, 55, 6)}
        </svg>
      );

    case 'bunny_remembering':
      return (
        <svg viewBox="0 0 200 160" className={className} id="bunny-remembering-svg">
          {/* Background pastel bubble */}
          <circle cx="100" cy="80" r="70" fill="#fffde7" />
          {/* Glowing lightbulb over head */}
          <circle cx="100" cy="18" r="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <rect x="97" y="26" width="6" height="4" fill="#94a3b8" />
          <line x1="100" y1="8" x2="100" y2="4" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
          <line x1="88" y1="15" x2="84" y2="13" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
          <line x1="112" y1="15" x2="116" y2="13" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
          {/* Bunny body */}
          <ellipse cx="100" cy="100" rx="28" ry="24" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny head */}
          <circle cx="100" cy="62" r="22" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny ears (one straight, one bent) */}
          <ellipse cx="86" cy="32" rx="6" ry="18" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="86" cy="32" rx="3" ry="12" fill="#fecdd3" />
          <path d="M 110 50 Q 125 35 120 28 Q 115 24 108 38" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 112 47 Q 120 37 118 32 Q 115 30 110 38" fill="#fecdd3" />
          {/* Expressive happy face */}
          <circle cx="92" cy="56" r="3.5" fill="#1e293b" />
          <circle cx="91" cy="54" r="1" fill="#ffffff" />
          <path d="M104,56 Q108,52 112,56" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="83" cy="64" r="4.5" fill="#fca5a5" opacity="0.6" />
          <circle cx="117" cy="64" r="4.5" fill="#fca5a5" opacity="0.6" />
          <path d="M96,65 Q100,74 104,65 Z" fill="#f43f5e" stroke="#1e293b" strokeWidth="2" />
          <polygon points="98,61 102,61 100,63" fill="#f43f5e" />
          {/* Left paw pointing up to head/idea */}
          <path d="M 80 100 Q 72 80 82 72" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="82" cy="72" r="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          <ellipse cx="116" cy="100" rx="6" ry="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
        </svg>
      );

    case 'bunny_thanking_allah':
      return (
        <svg viewBox="0 0 200 160" className={className} id="bunny-thanking-allah-svg">
          {/* Background pastel bubble */}
          <circle cx="100" cy="80" r="70" fill="#ecfdf5" />
          {/* Table */}
          <rect x="25" y="115" width="150" height="15" rx="5" fill="#ffedd5" stroke="#f97316" strokeWidth="2.5" />
          {/* Plate with left-overs (just carrot leaves) */}
          <ellipse cx="100" cy="115" rx="35" ry="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2.5" />
          <path d="M 90 112 Q 88 108 85 106 M 105 112 Q 108 108 110 106" stroke="#22c55e" strokeWidth="2" fill="none" />
          {/* Bunny full body with a happy full tummy */}
          <ellipse cx="100" cy="100" rx="32" ry="26" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny head */}
          <circle cx="100" cy="62" r="22" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          {/* Bunny ears */}
          <ellipse cx="88" cy="32" rx="6" ry="18" transform="rotate(-15, 88, 32)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="88" cy="32" rx="3" ry="12" transform="rotate(-15, 88, 32)" fill="#fecdd3" />
          <ellipse cx="112" cy="32" rx="6" ry="18" transform="rotate(15, 112, 32)" fill="#f1f5f9" stroke="#64748b" strokeWidth="3" />
          <ellipse cx="112" cy="32" rx="3" ry="12" transform="rotate(15, 112, 32)" fill="#fecdd3" />
          {/* Content, smiling closed eyes face */}
          <path d="M85,58 Q90,53 95,58" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M105,58 Q110,53 115,58" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="82" cy="63" r="4.5" fill="#fca5a5" opacity="0.6" />
          <circle cx="118" cy="63" r="4.5" fill="#fca5a5" opacity="0.6" />
          <path d="M94,64 Q100,72 106,64" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="98,61 102,61 100,63" fill="#f43f5e" />
          {/* Rubbing full belly */}
          <path d="M 72 98 Q 88 105 92 100" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="92" cy="100" r="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
          <path d="M 128 98 Q 112 105 108 100" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="108" cy="100" r="5" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
          {/* Glowing reward stars */}
          {renderStar(42, 45, 9)}
          {renderStar(155, 35, 7)}
        </svg>
      );

    // -----------------------------------------------------------------
    // PRAYER CATEGORY ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'hearing_adhan':
      return (
        <svg viewBox="0 0 200 160" className={className} id="hearing-adhan-svg">
          <circle cx="100" cy="80" r="70" fill="#f3e8ff" />
          {/* Star decorations */}
          {renderStar(40, 40, 6)}
          {renderStar(160, 45, 8)}
          {renderStar(145, 105, 5)}
          {/* Mosque Dome in background */}
          <path d="M 70 120 L 70 95 Q 70 65 100 65 Q 130 65 130 95 L 130 120 Z" fill="#c084fc" stroke="#a855f7" strokeWidth="3" />
          {/* Golden Crescent on dome */}
          <path d="M 100 45 Q 106 45 106 53 Q 106 59 100 59 Q 94 59 94 52 Q 94 48 98 46" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Minaret tower */}
          <rect x="50" y="70" width="15" height="50" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2.5" />
          <path d="M 45 70 L 57.5 50 L 70 70 Z" fill="#c084fc" stroke="#a855f7" strokeWidth="2.5" />
          {/* Sound waves emitting from mosque */}
          <path d="M 140 70 Q 155 60 152 45" fill="none" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 148 78 Q 165 65 160 48" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
          {/* Boy standing listening */}
          <circle cx="100" cy="115" r="16" fill="#fed7aa" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(100, 115, 0.7)}
        </svg>
      );

    case 'making_wudu':
      return (
        <svg viewBox="0 0 200 160" className={className} id="making-wudu-svg">
          <circle cx="100" cy="80" r="70" fill="#f0f9ff" />
          {/* Blue Sink basin */}
          <ellipse cx="100" cy="118" rx="55" ry="18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="3.5" />
          {/* Water flowing from silver tap */}
          <path d="M 100 45 L 100 60 Q 100 62 105 62" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          <path d="M 100 62 L 100 105" stroke="#38bdf8" strokeWidth="4.5" strokeDasharray="5,3" fill="none" />
          {/* Splashes */}
          <path d="M 90 108 C 88 100, 80 102, 85 112" fill="#bae6fd" />
          <path d="M 110 108 C 112 100, 120 102, 115 112" fill="#bae6fd" />
          {/* Two hands scooping water */}
          <circle cx="90" cy="95" r="9" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
          <circle cx="110" cy="95" r="9" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
          {/* Bubbles */}
          <circle cx="75" cy="100" r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="1" opacity="0.8" />
          <circle cx="125" cy="102" r="5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" opacity="0.8" />
        </svg>
      );

    case 'praying_boy':
      return (
        <svg viewBox="0 0 200 160" className={className} id="praying-boy-svg">
          <circle cx="100" cy="80" r="70" fill="#fae8ff" />
          {/* Colorful Prayer Rug (سجادة) */}
          <polygon points="40,128 160,128 145,95 55,95" fill="#a855f7" stroke="#7e22ce" strokeWidth="2.5" />
          {/* Rug patterns */}
          <line x1="60" y1="100" x2="140" y2="100" stroke="#fef08a" strokeWidth="2" strokeDasharray="3,3" />
          {/* Golden fringe */}
          <line x1="40" y1="128" x2="160" y2="128" stroke="#ca8a04" strokeWidth="4.5" strokeDasharray="4,2" />
          {/* Praying child */}
          {/* Boy robe */}
          <path d="M 80 120 L 120 120 L 110 88 L 90 88 Z" fill="#bfdbfe" stroke="#2563eb" strokeWidth="3" />
          {/* Boy head */}
          <circle cx="100" cy="66" r="18" fill="#fed7aa" stroke="#ea580c" strokeWidth="3" />
          {/* White prayer cap (Kufi) */}
          <path d="M 84 58 Q 100 45 116 58 Z" fill="#ffffff" stroke="#d1d5db" strokeWidth="2.5" />
          {renderSmiley(100, 68, 0.75)}
          {/* Raised hands */}
          <path d="M 82 92 Q 78 80 82 78" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
          <path d="M 118 92 Q 122 80 118 78" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
          {/* Sparkling blessing stars */}
          {renderStar(40, 50, 6)}
          {renderStar(155, 60, 8)}
        </svg>
      );

    // -----------------------------------------------------------------
    // FRIENDS CATEGORY ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'sad_lonely_play':
      return (
        <svg viewBox="0 0 200 160" className={className} id="sad-lonely-play-svg">
          <circle cx="100" cy="80" r="70" fill="#fff1f2" />
          {/* Ground */}
          <line x1="20" y1="115" x2="180" y2="115" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />
          {/* Cute boy sitting on left, sad */}
          <path d="M 45 115 L 65 115 L 60 95 L 50 95 Z" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2.5" />
          <circle cx="55" cy="80" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {/* Sad eyes / mouth */}
          <circle cx="51" cy="78" r="2" fill="#1e293b" />
          <circle cx="59" cy="78" r="2" fill="#1e293b" />
          <path d="M 52 86 Q 55 82 58 86" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Toy car on floor */}
          <rect x="75" y="105" width="22" height="10" rx="3" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <circle cx="80" cy="115" r="3.5" fill="#1e293b" />
          <circle cx="92" cy="115" r="3.5" fill="#1e293b" />
          {/* Girl looking shyly from right */}
          <circle cx="140" cy="85" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {/* Girl hair */}
          <path d="M 125 85 Q 130 70 145 70 Q 155 75 152 85" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <path d="M 152 80 C 158 80, 158 90, 152 90" fill="#f59e0b" />
          {/* Shy smile */}
          <circle cx="136" cy="83" r="1.5" fill="#1e293b" />
          <circle cx="144" cy="83" r="1.5" fill="#1e293b" />
          <path d="M 137 89 Q 140 91 143 89" stroke="#1e293b" strokeWidth="1.5" fill="none" />
        </svg>
      );

    case 'sharing_toys':
      return (
        <svg viewBox="0 0 200 160" className={className} id="sharing-toys-svg">
          <circle cx="100" cy="80" r="70" fill="#fff1f2" />
          <line x1="20" y1="115" x2="180" y2="115" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />
          {/* Boy on left holding out the toy car */}
          <path d="M 45 115 L 65 115 L 60 95 L 50 95 Z" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2.5" />
          <circle cx="55" cy="80" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(55, 80, 0.55)}
          <path d="M 62 95 Q 80 90 85 95" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          {/* The car suspended in the middle between them */}
          <rect x="85" y="90" width="18" height="9" rx="2.5" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
          {/* Girl on right reaching out to receive it with joy */}
          <path d="M 135 115 L 155 115 L 150 95 L 140 95 Z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2.5" />
          <circle cx="145" cy="80" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {/* Girl hair */}
          <path d="M 130 80 Q 135 68 148 68 Q 158 72 156 80" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          {renderSmiley(145, 80, 0.55, true)}
          <path d="M 138 95 Q 120 90 115 95" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          {/* Floating pink heart */}
          <path d="M 100 50 Q 100 45 95 45 Q 90 45 90 50 Q 90 58 100 65 Q 110 58 110 50 Q 110 45 105 45 Q 100 45 100 50" fill="#f43f5e" />
        </svg>
      );

    case 'happy_friends':
      return (
        <svg viewBox="0 0 200 160" className={className} id="happy-friends-svg">
          <circle cx="100" cy="80" r="70" fill="#ffe4e6" />
          {/* Large Red Heart in background */}
          <path d="M 100 75 Q 100 62 88 62 Q 76 62 76 74 Q 76 92 100 108 Q 124 92 124 74 Q 124 62 112 62 Q 100 62 100 75" fill="#fda4af" opacity="0.4" />
          {/* Stars */}
          {renderStar(35, 50, 7)}
          {renderStar(165, 55, 7)}
          {/* Boy on left holding hand */}
          <path d="M 50 120 L 70 120 L 65 92 L 55 92 Z" fill="#60a5fa" stroke="#2563eb" strokeWidth="2.5" />
          <circle cx="60" cy="74" r="14" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(60, 74, 0.65)}
          {/* Girl on right holding hand */}
          <path d="M 130 120 L 150 120 L 145 92 L 135 92 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2.5" />
          <circle cx="140" cy="74" r="14" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {/* Girl ponytail */}
          <path d="M 152 70 Q 165 74 162 84" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
          {renderSmiley(140, 74, 0.65)}
          {/* Holding hands line in center */}
          <path d="M 74 96 Q 100 104 126 96" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // -----------------------------------------------------------------
    // HOME CATEGORY ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'messy_room':
      return (
        <svg viewBox="0 0 200 160" className={className} id="messy-room-svg">
          <circle cx="100" cy="80" r="70" fill="#fef3c7" />
          {/* Floor line */}
          <line x1="20" y1="115" x2="180" y2="115" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
          {/* Bookcase - tidy but has toys on floor */}
          <rect x="35" y="45" width="28" height="70" fill="#d97706" stroke="#92400e" strokeWidth="2.5" />
          <line x1="35" y1="68" x2="63" y2="68" stroke="#92400e" strokeWidth="2" />
          <line x1="35" y1="91" x2="63" y2="91" stroke="#92400e" strokeWidth="2" />
          {/* Messy stuff on floor */}
          {/* Teddy bear lying on floor */}
          <circle cx="130" cy="108" r="7" fill="#a16207" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="125" cy="102" r="3.5" fill="#a16207" />
          <circle cx="135" cy="102" r="3.5" fill="#a16207" />
          {/* Sad face on bear */}
          <circle cx="129" cy="107" r="1" fill="#ffffff" />
          <circle cx="131" cy="107" r="1" fill="#ffffff" />
          {/* Red Toy car lying on floor sideways */}
          <rect x="80" y="106" width="16" height="8" rx="2" fill="#ef4444" stroke="#991b1b" strokeWidth="1.5" />
          <circle cx="84" cy="114" r="3" fill="#1e293b" />
          <circle cx="92" cy="114" r="3" fill="#1e293b" />
          {/* Crumpled paper balls */}
          <circle cx="160" cy="110" r="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="110" cy="112" r="4.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        </svg>
      );

    case 'cleaning_room':
      return (
        <svg viewBox="0 0 200 160" className={className} id="cleaning-room-svg">
          <circle cx="100" cy="80" r="70" fill="#fef3c7" />
          <line x1="20" y1="115" x2="180" y2="115" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
          {/* Toy Chest */}
          <rect x="110" y="75" width="45" height="40" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
          <polygon points="105,75 155,75 150,65 110,65" fill="#0284c7" />
          {/* Star on toy chest */}
          {renderStar(132, 95, 5, "#eab308")}
          {/* Boy holding teddy bear placing it in chest */}
          <path d="M 45 115 L 65 115 L 60 92 L 50 92 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
          <circle cx="55" cy="74" r="12" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(55, 74, 0.6)}
          {/* Hands holding the teddy bear */}
          <path d="M 64 92 Q 85 85 95 85" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="90" cy="85" r="7" fill="#a16207" stroke="#713f12" strokeWidth="1.5" />
          <circle cx="86" cy="80" r="3" fill="#a16207" />
          <circle cx="94" cy="80" r="3" fill="#a16207" />
          {/* Sparkles of cleanliness */}
          {renderStar(30, 60, 6)}
          {renderStar(165, 45, 7)}
        </svg>
      );

    case 'happy_mother_clean':
      return (
        <svg viewBox="0 0 200 160" className={className} id="happy-mother-clean-svg">
          <circle cx="100" cy="80" r="70" fill="#fef3c7" />
          {/* Cozy House Background element */}
          <rect x="30" y="70" width="140" height="50" fill="#fffbeb" opacity="0.6" stroke="#fcd34d" strokeDasharray="3,3" />
          {/* Proud Boy smiling on left */}
          <path d="M 45 120 L 65 120 L 60 92 L 50 92 Z" fill="#34d399" stroke="#059669" strokeWidth="2.5" />
          <circle cx="55" cy="74" r="13" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {renderSmiley(55, 74, 0.65, true)}
          {/* Happy Mother smiling on right, taller */}
          <path d="M 125 120 L 155 120 L 150 75 L 130 75 Z" fill="#ec4899" stroke="#db2777" strokeWidth="2.5" />
          <circle cx="140" cy="52" r="16" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          {/* Hijab/Hair on Mother */}
          <path d="M 122 52 C 122 32, 158 32, 158 52 C 158 68, 122 68, 122 52" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
          {renderSmiley(140, 52, 0.75)}
          {/* Arms holding hands or high-five */}
          <path d="M 66 94 Q 100 80 126 90" fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
          {renderStar(100, 60, 9)}
        </svg>
      );

    // -----------------------------------------------------------------
    // CLEANLINESS CATEGORY ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'dirty_kitten':
      return (
        <svg viewBox="0 0 200 160" className={className} id="dirty-kitten-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfdf5" />
          {/* Dirty mud pile */}
          <path d="M 30 115 Q 100 100 170 115 Z" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />
          {/* Kitten body */}
          <ellipse cx="100" cy="100" rx="26" ry="20" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
          {/* Kitten tail */}
          <path d="M 125 100 Q 140 85 135 75" fill="none" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" />
          {/* Kitten head */}
          <circle cx="100" cy="68" r="18" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
          {/* Cat ears */}
          <polygon points="85,55 95,50 93,60" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
          <polygon points="115,55 105,50 107,60" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
          {renderSmiley(100, 70, 0.65)}
          {/* Whiskers */}
          <line x1="77" y1="70" x2="68" y2="68" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="77" y1="73" x2="67" y2="74" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="123" y1="70" x2="132" y2="68" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="123" y1="73" x2="133" y2="74" stroke="#1e293b" strokeWidth="1.5" />
          {/* Mud spots on kitten cheeks */}
          <circle cx="88" cy="73" r="3.5" fill="#451a03" opacity="0.8" />
          <circle cx="112" cy="72" r="3" fill="#451a03" opacity="0.8" />
        </svg>
      );

    case 'rabbit_advice':
      return (
        <svg viewBox="0 0 200 160" className={className} id="rabbit-advice-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfdf5" />
          {/* Blackboard showing teeth brushing sketch */}
          <rect x="30" y="35" width="55" height="42" rx="3" fill="#0f766e" stroke="#115e59" strokeWidth="3" />
          <rect x="42" y="45" width="30" height="15" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="52" x2="72" y2="52" stroke="#ffffff" strokeWidth="1.5" />
          {/* Chalk brush */}
          <line x1="46" y1="67" x2="54" y2="67" stroke="#ffffff" strokeWidth="2" />
          {/* Fluffy white Rabbit on right pointing */}
          {/* Rabbit body */}
          <ellipse cx="132" cy="110" rx="22" ry="24" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
          {/* Rabbit head */}
          <circle cx="132" cy="74" r="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
          {/* Long ears */}
          <ellipse cx="125" cy="46" rx="5" ry="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2.5" />
          <ellipse cx="125" cy="46" rx="2.5" ry="12" fill="#fda4af" />
          <ellipse cx="139" cy="46" rx="5" ry="16" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2.5" />
          <ellipse cx="139" cy="46" rx="2.5" ry="12" fill="#fda4af" />
          {renderSmiley(132, 74, 0.65)}
          {/* Arm pointing to blackboard */}
          <path d="M 112 95 Q 85 80 92 75" fill="none" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case 'clean_kitten':
      return (
        <svg viewBox="0 0 200 160" className={className} id="clean-kitten-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfdf5" />
          {/* Flowers in background */}
          <circle cx="35" cy="95" r="7" fill="#f43f5e" />
          <circle cx="30" cy="90" r="5" fill="#fecdd3" />
          <circle cx="40" cy="90" r="5" fill="#fecdd3" />
          <circle cx="35" cy="103" r="5" fill="#fecdd3" />
          {/* Sparkles */}
          {renderStar(35, 40, 7)}
          {renderStar(165, 55, 6)}
          {renderStar(155, 115, 8)}
          {/* Clean Orange Kitten holding toothbrush */}
          <ellipse cx="100" cy="104" rx="26" ry="22" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
          <circle cx="100" cy="68" r="18" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
          {/* Cat ears */}
          <polygon points="85,55 95,50 93,60" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
          <polygon points="115,55 105,50 107,60" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
          {renderSmiley(100, 68, 0.65, true)}
          {/* Toothbrush in kitty hand */}
          <path d="M 120 100 Q 140 90 145 92" fill="none" stroke="#06b6d4" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="140" y="85" width="8" height="6" fill="#ffffff" stroke="#0891b2" strokeWidth="1" />
        </svg>
      );

    // -----------------------------------------------------------------
    // DAILY CAROUSEL FEATURED ILLUSTRATIONS
    // -----------------------------------------------------------------
    case 'say_hello_daily':
      return (
        <svg viewBox="0 0 200 160" className={className} id="say-hello-daily-svg">
          {/* Sun background */}
          <circle cx="100" cy="80" r="70" fill="#ffedd5" />
          {/* Big smiling star behind */}
          {renderStar(160, 40, 15, "#fde047")}
          {/* Cute kid waving waving */}
          <path d="M 70 140 L 130 140 Q 120 95 100 95 Q 80 95 70 140 Z" fill="#60a5fa" stroke="#2563eb" strokeWidth="3.5" />
          <circle cx="100" cy="68" r="24" fill="#ffedd5" stroke="#ea580c" strokeWidth="3.5" />
          {/* Beautiful black hair */}
          <path d="M 74 62 Q 100 35 126 62 Q 120 48 100 48 Q 80 48 74 62 Z" fill="#1e293b" />
          {renderSmiley(100, 68, 0.85)}
          {/* Waving Hand (just like in the image!) */}
          <path d="M 122 105 Q 145 92 148 75" fill="none" stroke="#ea580c" strokeWidth="4.5" strokeLinecap="round" />
          {/* Hearts of friendship */}
          <path d="M 152 82 Q 152 78 149 78 Q 146 78 146 82 Q 146 87 152 92 Q 158 87 158 82 Q 158 78 155 78 Q 152 78 152 82" fill="#ef4444" />
        </svg>
      );

    case 'say_bismillah_daily':
      return (
        <svg viewBox="0 0 200 160" className={className} id="say-bismillah-daily-svg">
          <circle cx="100" cy="80" r="70" fill="#e0f2fe" />
          {/* Open Book */}
          <rect x="45" y="85" width="110" height="40" rx="5" fill="#ca8a04" stroke="#854d0e" strokeWidth="3" />
          {/* Pages */}
          <path d="M 50 115 C 75 110, 95 115, 100 115 C 105 115, 125 110, 150 115 L 145 92 C 125 90, 105 94, 100 94 C 95 94, 75 90, 55 92 Z" fill="#ffffff" stroke="#334155" strokeWidth="2" />
          {/* Arabic text placeholder lines */}
          <line x1="60" y1="98" x2="90" y2="98" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="60" y1="105" x2="85" y2="105" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="110" y1="98" x2="140" y2="98" stroke="#cbd5e1" strokeWidth="2.5" />
          <line x1="110" y1="105" x2="135" y2="105" stroke="#cbd5e1" strokeWidth="2.5" />
          {/* Arabic lettering symbol "Bismillah" in sky */}
          <text x="100" y="55" textAnchor="middle" fill="#0284c7" fontWeight="bold" fontSize="16" fontFamily="sans-serif">بِسْمِ اللهِ</text>
          {renderStar(45, 45, 8)}
          {renderStar(155, 45, 6)}
        </svg>
      );

    case 'helping_parents_daily':
      return (
        <svg viewBox="0 0 200 160" className={className} id="helping-parents-daily-svg">
          <circle cx="100" cy="80" r="70" fill="#f0fdf4" />
          {/* Tray with a cup of water */}
          <rect x="70" y="90" width="60" height="10" rx="2" fill="#a1a1aa" stroke="#52525b" strokeWidth="2" />
          <rect x="90" y="70" width="20" height="20" rx="3" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
          {/* Steam/Happiness curves rising from cup */}
          <path d="M 96 64 Q 98 58 100 64" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 104 64 Q 106 58 108 64" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Hands holding tray */}
          <circle cx="68" cy="95" r="7" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          <circle cx="132" cy="95" r="7" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          {/* Healing hearts and stars */}
          {renderStar(35, 50, 7)}
          {renderStar(165, 55, 6)}
          <path d="M 100 42 Q 100 38 97 38 Q 94 38 94 42 Q 94 46 100 50 L 100 50 Q 106 46 106 42 Q 106 38 103 38 Q 100 38 100 42" fill="#22c55e" />
        </svg>
      );

    case 'entering_toilet':
      return (
        <svg viewBox="0 0 200 160" className={className} id="entering-toilet-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfeff" />
          {/* Toilet door, slightly open */}
          <rect x="50" y="30" width="100" height="100" rx="8" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="4" />
          <rect x="55" y="35" width="40" height="90" fill="#cbd5e1" />
          {/* Door sign: toilet emoji */}
          <text x="75" y="80" fontSize="20" textAnchor="middle">🚽</text>
          {/* Left foot walking in */}
          <path d="M 115 125 Q 110 115 105 120" fill="none" stroke="#0891b2" strokeWidth="6" strokeLinecap="round" />
          {renderStar(40, 40, 8, "#22d3ee")}
          {renderStar(160, 50, 6, "#22d3ee")}
        </svg>
      );

    case 'toilet_dua':
      return (
        <svg viewBox="0 0 200 160" className={className} id="toilet-dua-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfeff" />
          {/* Decorative scroll or frame */}
          <rect x="30" y="40" width="140" height="80" rx="10" fill="#ffffff" stroke="#06b6d4" strokeWidth="3" />
          {/* Beautiful Arabic text scroll effect */}
          <text x="100" y="75" textAnchor="middle" fill="#0891b2" fontWeight="bold" fontSize="13" fontFamily="sans-serif">بِسْمِ اللهِ</text>
          <text x="100" y="98" textAnchor="middle" fill="#0891b2" fontWeight="bold" fontSize="11" fontFamily="sans-serif">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الخُبُثِ</text>
          {renderStar(40, 50, 6, "#22d3ee")}
          {renderStar(160, 110, 8, "#22d3ee")}
        </svg>
      );

    case 'washing_hands_toilet':
      return (
        <svg viewBox="0 0 200 160" className={className} id="washing-hands-toilet-svg">
          <circle cx="100" cy="80" r="70" fill="#ecfeff" />
          {/* Water tap with droplets and soap bubbles */}
          <path d="M 100 25 L 100 45 L 90 45" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          <path d="M 100 45 Q 100 65 100 85" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="4,4" />
          {/* Cute hands */}
          <circle cx="85" cy="100" r="10" fill="#ffedd5" stroke="#d97706" strokeWidth="2" />
          <circle cx="115" cy="100" r="10" fill="#ffedd5" stroke="#d97706" strokeWidth="2" />
          {/* Bubbles */}
          <circle cx="75" cy="85" r="6" fill="#ffffff" stroke="#06b6d4" opacity="0.9" />
          <circle cx="125" cy="85" r="8" fill="#ffffff" stroke="#06b6d4" opacity="0.9" />
          <circle cx="100" cy="110" r="5" fill="#ffffff" stroke="#06b6d4" opacity="0.9" />
        </svg>
      );

    case 'helping_elder':
      return (
        <svg viewBox="0 0 200 160" className={className} id="helping-elder-svg">
          <circle cx="100" cy="80" r="70" fill="#f0fdf4" />
          {/* Elderly person head with white beard/hair */}
          <circle cx="70" cy="65" r="18" fill="#fee2e2" stroke="#475569" strokeWidth="2" />
          <path d="M 52 65 A 18 18 0 0 1 88 65" fill="#ffffff" />
          <path d="M 60 78 C 65 88, 75 88, 80 78" fill="#ffffff" stroke="#475569" strokeWidth="2" />
          {/* Little boy */}
          <circle cx="130" cy="75" r="15" fill="#ffedd5" stroke="#475569" strokeWidth="2" />
          {/* Shopping bag of vegetables */}
          <rect x="90" y="90" width="25" height="30" rx="3" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          {/* Carrots/Greens inside */}
          <path d="M 95 90 L 92 80 M 102 90 L 100 78 M 110 90 L 112 82" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          {/* Hearts of respect */}
          <path d="M 100 45 Q 100 41 97 41 Q 94 41 94 45 Q 94 49 100 53 Q 106 49 106 45 Q 106 41 103 41 Q 100 41 100 45" fill="#ef4444" />
        </svg>
      );

    case 'loving_younger':
      return (
        <svg viewBox="0 0 200 160" className={className} id="loving-younger-svg">
          <circle cx="100" cy="80" r="70" fill="#f0fdf4" />
          {/* Bigger sibling */}
          <circle cx="80" cy="65" r="18" fill="#ffedd5" stroke="#0f766e" strokeWidth="2" />
          <path d="M 72 60 Q 80 64 88 60" fill="none" stroke="#1e293b" strokeWidth="2" />
          {/* Kiss emoji symbol floating */}
          <text x="105" y="65" fontSize="16">😘</text>
          {/* Baby sibling with pacifier or happy face */}
          <circle cx="125" cy="75" r="14" fill="#ffedd5" stroke="#0f766e" strokeWidth="2" />
          <circle cx="125" cy="80" r="3" fill="#ef4444" />
          {/* Hearts */}
          <path d="M 100 100 Q 100 96 97 96 Q 94 96 94 100 Q 94 104 100 108 Q 106 104 106 100 Q 106 96 103 96 Q 100 96 100 100" fill="#ec4899" />
        </svg>
      );

    case 'listening_parents':
      return (
        <svg viewBox="0 0 200 160" className={className} id="listening-parents-svg">
          <circle cx="100" cy="80" r="70" fill="#f0fdf4" />
          {/* Parent talking gently */}
          <circle cx="75" cy="60" r="16" fill="#ffedd5" stroke="#115e59" strokeWidth="2.5" />
          <path d="M 68 55 Q 75 58 82 55" stroke="#1e293b" strokeWidth="2" fill="none" />
          {/* Child listening happily */}
          <circle cx="125" cy="75" r="14" fill="#ffedd5" stroke="#115e59" strokeWidth="2.5" />
          {renderSmiley(125, 73, 0.7)}
          {/* Ear highlight to emphasize listening */}
          <circle cx="138" cy="75" r="3" fill="#ffedd5" stroke="#115e59" strokeWidth="1.5" />
          {renderStar(45, 45, 7, "#34d399")}
          {renderStar(155, 110, 6, "#34d399")}
        </svg>
      );

    case 'quiet_talking':
      return (
        <svg viewBox="0 0 200 160" className={className} id="quiet-talking-svg">
          <circle cx="100" cy="80" r="70" fill="#fff7ed" />
          {/* Quiet symbol: finger on mouth */}
          <circle cx="100" cy="60" r="22" fill="#ffedd5" stroke="#c2410c" strokeWidth="3" />
          {/* Eye winking */}
          <path d="M 90 55 Q 95 50 100 55" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="110" cy="55" r="2.5" fill="#1e293b" />
          {/* Finger (Shh) */}
          <rect x="97" y="62" width="6" height="22" rx="3" fill="#ffedd5" stroke="#c2410c" strokeWidth="2.5" />
          {/* Musical/soft sound waves */}
          <path d="M 130 50 Q 135 55 130 60" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 138 45 Q 145 55 138 65" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );

    case 'waiting_turn':
      return (
        <svg viewBox="0 0 200 160" className={className} id="waiting-turn-svg">
          <circle cx="100" cy="80" r="70" fill="#fff7ed" />
          {/* Raise hand with clock or schedule */}
          <circle cx="85" cy="65" r="16" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
          <path d="M 80 60 Q 85 63 90 60" stroke="#1e293b" strokeWidth="2" fill="none" />
          {/* Raised Arm */}
          <path d="M 100 65 L 115 45" stroke="#ea580c" strokeWidth="6" strokeLinecap="round" />
          {/* Small Clock representing waiting */}
          <circle cx="140" cy="85" r="14" fill="#ffffff" stroke="#c2410c" strokeWidth="2.5" />
          <line x1="140" y1="85" x2="140" y2="78" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="85" x2="147" y2="85" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'honest_girl':
      return (
        <svg viewBox="0 0 200 160" className={className} id="honest-girl-svg">
          <circle cx="100" cy="80" r="70" fill="#fff7ed" />
          {/* Girl with hand on heart (honesty symbol) */}
          <circle cx="100" cy="55" r="20" fill="#ffedd5" stroke="#ea580c" strokeWidth="3" />
          {renderSmiley(100, 52, 0.9)}
          {/* Hand on heart */}
          <circle cx="100" cy="95" r="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
          {/* Big pink flower of truth */}
          <circle cx="145" cy="90" r="10" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" />
          <circle cx="145" cy="90" r="3" fill="#fbbf24" />
        </svg>
      );

    case 'greeting_friends':
      return (
        <svg viewBox="0 0 200 160" className={className} id="greeting-friends-svg">
          <circle cx="100" cy="80" r="70" fill="#e0e7ff" />
          {/* Two friends greeting each other */}
          <circle cx="65" cy="65" r="14" fill="#ffedd5" stroke="#4f46e5" strokeWidth="2" />
          {/* Arm waving */}
          <path d="M 51 65 Q 40 55 45 45" fill="none" stroke="#4f46e5" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="135" cy="65" r="14" fill="#ffedd5" stroke="#4f46e5" strokeWidth="2" />
          {/* Speech bubble saying "Salam!" */}
          <rect x="75" y="30" width="50" height="22" rx="5" fill="#ffffff" stroke="#6366f1" strokeWidth="2" />
          <text x="100" y="45" textAnchor="middle" fill="#4f46e5" fontWeight="black" fontSize="10">سَلَام!</text>
        </svg>
      );

    case 'handshaking':
      return (
        <svg viewBox="0 0 200 160" className={className} id="handshaking-svg">
          <circle cx="100" cy="80" r="70" fill="#e0e7ff" />
          {/* Two hands shaking */}
          <path d="M 40 80 H 75" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
          <path d="M 160 80 H 125" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
          {/* Hands clasping together */}
          <circle cx="100" cy="80" r="16" fill="#ffedd5" stroke="#4338ca" strokeWidth="3" />
          {/* Hearts above hands */}
          <path d="M 100 45 Q 100 41 97 41 Q 94 41 94 45 Q 94 49 100 53 Q 106 49 106 45 Q 106 41 103 41 Q 100 41 100 45" fill="#ec4899" />
        </svg>
      );

    case 'spreading_peace':
      return (
        <svg viewBox="0 0 200 160" className={className} id="spreading-peace-svg">
          <circle cx="100" cy="80" r="70" fill="#e0e7ff" />
          {/* Peaceful dove/bird flying */}
          <path d="M 100 55 C 80 40, 60 55, 100 85 C 140 55, 120 40, 100 55 Z" fill="#ffffff" stroke="#4f46e5" strokeWidth="2.5" />
          <circle cx="100" cy="50" r="6" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />
          {/* Olive branch in beak */}
          <path d="M 100 46 Q 94 44 92 48" fill="none" stroke="#22c55e" strokeWidth="2" />
          {/* Glowing rays of peace */}
          {renderStar(40, 50, 8, "#818cf8")}
          {renderStar(160, 60, 6, "#818cf8")}
          {renderStar(100, 115, 7, "#818cf8")}
        </svg>
      );

    case 'say_assalamu_alaykum':
      return (
        <svg viewBox="0 0 200 160" className={className} id="say-assalamu-alaykum-svg">
          <circle cx="100" cy="80" r="70" fill="#e0e7ff" />
          {/* Beautiful text card display */}
          <rect x="25" y="40" width="150" height="80" rx="12" fill="#ffffff" stroke="#6366f1" strokeWidth="3" />
          <text x="100" y="70" textAnchor="middle" fill="#4f46e5" fontWeight="black" fontSize="13" fontFamily="sans-serif">السَّلَامُ عَلَيْكُمْ</text>
          <text x="100" y="95" textAnchor="middle" fill="#4f46e5" fontWeight="black" fontSize="11" fontFamily="sans-serif">وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</text>
          {renderStar(40, 50, 6, "#818cf8")}
          {renderStar(160, 110, 8, "#818cf8")}
        </svg>
      );

    default:
      // Generic beautiful star for fallback
      return (
        <svg viewBox="0 0 100 100" className={className} id="default-star-svg">
          {renderStar(50, 50, 35)}
        </svg>
      );
  }
};
