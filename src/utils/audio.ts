/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Simple Audio Synthesizer using Web Audio API (no assets needed!)
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
}

export function playPopSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.warn('Audio synthesis failed:', e);
  }
}

export function playSuccessSound() {
  try {
    const ctx = getAudioContext();
    // A happy chime (two notes ascending)
    const notes = [300, 450, 600];
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.1);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime + index * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + index * 0.1 + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.1);
      osc.stop(ctx.currentTime + index * 0.1 + 0.2);
    });
  } catch (e) {
    console.warn('Audio synthesis failed:', e);
  }
}

export function playFailureSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    console.warn('Audio synthesis failed:', e);
  }
}

export function playTrophyUnlockSound() {
  try {
    const ctx = getAudioContext();
    // Arpeggio chime
    const notes = [261.6, 329.6, 392.0, 523.3, 659.3, 784.0, 1046.5];
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.08);

      gain.gain.setValueAtTime(0.15, ctx.currentTime + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + index * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.08);
      osc.stop(ctx.currentTime + index * 0.08 + 0.3);
    });
  } catch (e) {
    console.warn('Audio synthesis failed:', e);
  }
}

import { translateToSudanese } from './dialect';

let currentDialect: 'standard' | 'sudanese' = 'standard';

export function setAudioDialect(dialect: 'standard' | 'sudanese') {
  currentDialect = dialect;
}

export type NarratorVoiceType = 'cartoon' | 'father' | 'mother';
let currentNarratorVoice: NarratorVoiceType = 'cartoon';

export function setNarratorVoice(voice: NarratorVoiceType) {
  currentNarratorVoice = voice;
}

// Arabic Speech Synthesis
let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speakArabicText(text: string, onEnd?: () => void) {
  try {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      if (onEnd) onEnd();
      return;
    }

    // Stop current speaking
    window.speechSynthesis.cancel();

    // Dynamically translate standard text to Sudanese if active
    const targetText = currentDialect === 'sudanese' ? translateToSudanese(text) : text;

    // Clean text from excessive emoji to prevent weird speech synthesis artifacts
    const cleanedText = targetText.replace(/[\u2600-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDC00-\uDFFF]/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.lang = 'ar-SA'; // Arabic Saudi Arabia or general Arabic
    
    // Attempt to find a high-quality Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }

    // Configure rate and pitch based on narrator voice choice
    if (currentNarratorVoice === 'father') {
      utterance.pitch = 0.85; // Deep, calm paternal voice
      utterance.rate = 0.85;  // Slower, comforting pace
    } else if (currentNarratorVoice === 'mother') {
      utterance.pitch = 1.25; // Warm, high maternal voice
      utterance.rate = 0.92;  // Clear, caring pace
    } else { // cartoon
      utterance.pitch = 1.5;  // High, lively cartoon voice
      utterance.rate = 1.0;   // Energetic pace
    }
    
    utterance.onend = () => {
      if (onEnd) onEnd();
      currentUtterance = null;
    };

    utterance.onerror = (e) => {
      // Quietly handle errors without cluttering console logs
      if (onEnd) onEnd();
      currentUtterance = null;
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    // Quietly handle errors without cluttering console logs
    if (onEnd) onEnd();
  }
}

export function stopSpeaking() {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    currentUtterance = null;
  } catch (e) {
    console.warn('Failed to stop speech synthesis gracefully:', e);
  }
}

export function isSpeaking(): boolean {
  try {
    return 'speechSynthesis' in window && window.speechSynthesis.speaking;
  } catch {
    return false;
  }
}
