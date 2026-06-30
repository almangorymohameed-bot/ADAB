/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  color: string;
  rotation: number;
}

interface ParticleCelebrationProps {
  active: boolean;
  onFinished: () => void;
  lowEndMode?: boolean;
}

const EMOJIS = ['⭐', '✨', '🎉', '💖', '🍪', '🕌', '🏡', '🐱', '👍', '🌸'];
const COLORS = ['text-yellow-400', 'text-rose-400', 'text-sky-400', 'text-emerald-400', 'text-purple-400', 'text-amber-400'];

export const ParticleCelebration: React.FC<ParticleCelebrationProps> = ({ active, onFinished, lowEndMode = false }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    // Generate 35 beautiful random particles shooting from bottom or center (or just 8 for lowEndMode)
    const count = lowEndMode ? 8 : 40;
    const newParticles: Particle[] = Array.from({ length: count }).map((_, index) => {
      const isLeft = Math.random() > 0.5;
      return {
        id: index,
        x: isLeft ? Math.random() * 80 - 150 : Math.random() * 80 + 70, // spread outwards from center
        y: Math.random() * -300 - 150, // shoot upwards
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        size: Math.floor(Math.random() * 20) + 18, // 18px to 38px
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360
      };
    });

    setParticles(newParticles);

    // Automatic cleanup after 3 seconds
    const timer = setTimeout(() => {
      onFinished();
    }, 3200);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-end justify-center overflow-hidden" id="confetti-particles-overlay">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0.1, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0.8, 0],
            x: p.x,
            y: p.y,
            scale: [0.5, 1.2, 1, 0.8],
            rotate: p.rotation
          }}
          transition={{
            duration: 2.8,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            fontSize: `${p.size}px`,
            left: '50%',
            bottom: '20%'
          }}
          className={`${p.color} filter drop-shadow-sm`}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};
