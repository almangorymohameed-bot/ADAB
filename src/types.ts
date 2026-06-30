/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CategoryId = 'eating' | 'prayer' | 'friends' | 'home' | 'cleanliness' | 'toilet' | 'respect' | 'talking' | 'greeting';

export interface Category {
  id: CategoryId;
  title: string;       // e.g. "أَكْل"
  englishTitle: string;
  shape: 'cloud' | 'star' | 'heart' | 'house' | 'flower' | 'toilet' | 'respect' | 'talking' | 'greeting';
  color: string;       // Tailwind class for bg/text
  borderColor: string;
  icon: string;        // Emoji or SVG descriptor
}

export interface StorySlide {
  text: string;        // Text with diacritics (تَشْكِيل)
  illustration: string; // Identifier for SVG illustration to render
  highlightWord?: string; // Word to highlight or animate
}

export interface Story {
  categoryId: CategoryId;
  title: string;       // Story title
  slides: StorySlide[];
  badgeName: string;   // e.g. "وِسَامُ الأَكْلِ النَّظِيفِ"
  badgeIcon: string;   // SVG/Emoji representing the badge
}

export interface GameQuestion {
  id: string;
  scenario: string;    // Scenario description
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  illustration: string; // SVG illustration descriptor
}

export interface DragDropItem {
  id: string;
  text: string;
  isGood: boolean;     // Is it positive/good behavior?
  icon: string;        // Emoji
}

export interface Game {
  categoryId: CategoryId;
  title: string;
  type: 'sorting' | 'quiz' | 'sequence';
  questions?: GameQuestion[];
  sortingItems?: DragDropItem[];
}

export interface Reward {
  id: CategoryId;
  title: string;       // e.g. "وِسَامُ الأَكْلِ"
  icon: string;
  description: string;
  color: string;
  unlockedAt?: string;
}

export interface UserProgress {
  name: string;
  avatar: string;      // Emoji or avatar ID
  stars: number;
  completedStories: CategoryId[];
  completedGames: CategoryId[];
  unlockedRewards: CategoryId[];
  dailyStreak: number;
  lastActiveDate?: string;
  theme?: 'default' | 'forest' | 'space' | 'sea';
  lowEndMode?: boolean;
  dialect?: 'standard' | 'sudanese';
}
