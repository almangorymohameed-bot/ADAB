/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProgress, CategoryId, Story, Game } from './types';
import { CATEGORIES, STORIES, GAMES } from './data/etiquettes';
import { Header } from './components/Header';
import { DailyEtiquette } from './components/DailyEtiquette';
import { CategoryCard } from './components/CategoryCard';
import { StoryViewer } from './components/StoryViewer';
import { GameViewer } from './components/GameViewer';
import { BadgeCabinet } from './components/BadgeCabinet';
import { ParticleCelebration } from './components/ParticleCelebration';
import { playPopSound, playSuccessSound, speakArabicText, stopSpeaking, setAudioDialect } from './utils/audio';

const STORAGE_KEY = 'adabi_child_progress_v1';
const SOUND_KEY = 'adabi_sound_enabled';

const AVATARS = ['🐼', '🦊', '🦁', '🐰', '🐱', '🐣', '🦖', '🦄'];
const POPULAR_NAMES = ['أَحْمَد', 'سَارَة', 'يُوسُف', 'مَرْيَم', 'عُمَر', 'فَاطِمَة', 'زِيَاد', 'لَيْلَى'];

export default function App() {
  const [progress, setProgress] = useState<UserProgress>({
    name: '',
    avatar: '🐼',
    stars: 10, // Start with 10 stars for encouragement
    completedStories: [],
    completedGames: [],
    unlockedRewards: [],
    dailyStreak: 1,
    theme: 'default'
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'home' | 'games' | 'stories' | 'cabinet'>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | null>(null);
  
  // Active reading/gaming states
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  // Modals / Animation triggers
  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🐼');
  const [selectedTheme, setSelectedTheme] = useState<'default' | 'forest' | 'space' | 'sea'>('default');
  const [lowEndMode, setLowEndMode] = useState<boolean>(false);
  const [selectedDialect, setSelectedDialect] = useState<'standard' | 'sudanese'>('standard');

  // Sync selected dialect with audio engine
  useEffect(() => {
    setAudioDialect(selectedDialect);
  }, [selectedDialect]);

  // Load progress and sound configuration on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress(parsed);
        if (parsed.theme) {
          setSelectedTheme(parsed.theme);
        }
        if (parsed.lowEndMode !== undefined) {
          setLowEndMode(parsed.lowEndMode);
        }
        if (parsed.dialect) {
          setSelectedDialect(parsed.dialect);
        }
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    } else {
      // First time user: open name modal automatically
      setNameModalOpen(true);
    }

    const savedSound = localStorage.getItem(SOUND_KEY);
    if (savedSound !== null) {
      setSoundEnabled(savedSound === 'true');
    }
  }, []);

  // Smooth scroll to selected category detail panel when opened
  useEffect(() => {
    if (selectedCategoryId) {
      const timer = setTimeout(() => {
        const element = document.getElementById('selected-category-detail-panel');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedCategoryId]);

  // Smooth scroll to the top of the viewport when a story or game starts
  useEffect(() => {
    if (activeStory || activeGame) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeStory, activeGame]);

  // Save progress changes
  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  // Save sound setting
  const handleSetSoundEnabled = (val: boolean) => {
    setSoundEnabled(val);
    localStorage.setItem(SOUND_KEY, val.toString());
  };

  const handleSaveProfile = () => {
    playSuccessSound();
    const finalName = typedName.trim() || 'بَطَل';
    const updated = {
      ...progress,
      name: finalName,
      avatar: selectedAvatar,
      theme: selectedTheme,
      lowEndMode: lowEndMode,
      dialect: selectedDialect
    };
    saveProgress(updated);
    setNameModalOpen(false);

    if (soundEnabled) {
      speakArabicText(`أهلاً بك يا ${finalName}! لقد اخترت رمزك المفضل ${selectedAvatar}. دعنا نتعلم معاً!`);
    }
  };

  const selectCategory = (catId: CategoryId) => {
    setSelectedCategoryId(catId);
    playPopSound();

    if (soundEnabled) {
      const cat = CATEGORIES.find(c => c.id === catId);
      if (cat) {
        speakArabicText(`لقد اخترت ${cat.title}. هل تريد قراءة القصة أم لعب اللعبة التفاعلية؟`);
      }
    }
  };

  const handleStartStory = (catId: CategoryId) => {
    playPopSound();
    const story = STORIES.find(s => s.categoryId === catId);
    if (story) {
      setActiveStory(story);
    }
  };

  const handleStartGame = (catId: CategoryId) => {
    playPopSound();
    const game = GAMES.find(g => g.categoryId === catId);
    if (game) {
      setActiveGame(game);
    }
  };

  const handleStoryComplete = () => {
    if (!activeStory) return;
    const catId = activeStory.categoryId;
    
    // Grant stars and check badge unlocks
    const isNew = !progress.completedStories.includes(catId);
    const updatedCompletedStories = isNew 
      ? [...progress.completedStories, catId] 
      : progress.completedStories;

    let updatedUnlockedRewards = progress.unlockedRewards;
    let awardTriggered = false;

    // A reward unlocks when BOTH story and game for that category are completed
    if (progress.completedGames.includes(catId) && !progress.unlockedRewards.includes(catId)) {
      updatedUnlockedRewards = [...progress.unlockedRewards, catId];
      awardTriggered = true;
    }

    const updated = {
      ...progress,
      completedStories: updatedCompletedStories,
      unlockedRewards: updatedUnlockedRewards,
      stars: progress.stars + (isNew ? 10 : 2) // +10 for first complete, +2 for repeats
    };

    saveProgress(updated);
    setActiveStory(null);

    if (awardTriggered) {
      setCelebrationActive(true);
      if (soundEnabled) {
        speakArabicText(`يا للهول! رائع جداً! لقد فزت بوسام جديد لأنك أكملت آداب القراءة واللعب بالكامل! أحسنت يا بطل!`);
      }
    } else {
      playSuccessSound();
      if (soundEnabled) {
        speakArabicText(`أحسنت! لقد أكملت القصة الرائعة بنجاح! الآن العب اللعبة لتفوز بالوسام المذهب!`);
      }
    }
  };

  const handleGameComplete = () => {
    if (!activeGame) return;
    const catId = activeGame.categoryId;

    const isNew = !progress.completedGames.includes(catId);
    const updatedCompletedGames = isNew
      ? [...progress.completedGames, catId]
      : progress.completedGames;

    let updatedUnlockedRewards = progress.unlockedRewards;
    let awardTriggered = false;

    // Reward unlocks if story is also completed
    if (progress.completedStories.includes(catId) && !progress.unlockedRewards.includes(catId)) {
      updatedUnlockedRewards = [...progress.unlockedRewards, catId];
      awardTriggered = true;
    }

    const updated = {
      ...progress,
      completedGames: updatedCompletedGames,
      unlockedRewards: updatedUnlockedRewards,
      stars: progress.stars + (isNew ? 20 : 5) // +20 for first game complete, +5 for repeats
    };

    saveProgress(updated);
    setActiveGame(null);

    if (awardTriggered) {
      setCelebrationActive(true);
      if (soundEnabled) {
        speakArabicText(`مبارك لك! أنت بطل حقيقي! لقد حصلت على وسام الأدب المذهب لتعلمك آداب السلوك!`);
      }
    } else {
      playSuccessSound();
      if (soundEnabled) {
        speakArabicText(`أنت مبهر! لقد أنهيت اللعبة بنجاح كامل! اقرأ القصة أيضاً لتحصل على الوسام المذهب!`);
      }
    }
  };

  const handleQuickPlay = (type: 'story' | 'game', catId: CategoryId) => {
    setSelectedCategoryId(catId);
    if (type === 'story') {
      handleStartStory(catId);
    } else {
      handleStartGame(catId);
    }
  };

  const themeClasses: Record<'default' | 'forest' | 'space' | 'sea', string> = {
    default: 'bg-[#fcf9f2] doodle-bg text-slate-800',
    forest: 'bg-[#f2faf4] forest-bg text-slate-800',
    space: 'bg-[#0d1224] space-bg text-indigo-100',
    sea: 'bg-[#f0f9ff] sea-bg text-slate-800'
  };

  const activeTheme = progress.theme || 'default';
  const activeThemeClass = themeClasses[activeTheme] || themeClasses.default;
  const isDarkTheme = activeTheme === 'space';

  return (
    <div className={`min-h-screen w-full flex flex-col selection:bg-orange-200 pb-32 pt-6 px-4 md:px-8 transition-colors duration-500 ${activeThemeClass}`} id="main-viewport-container">
      
      {/* Dynamic particles explosion */}
      <ParticleCelebration active={celebrationActive} onFinished={() => setCelebrationActive(false)} lowEndMode={lowEndMode} />

      {/* Main Responsive Fluid Container that spans naturally on both mobile and wide screens */}
      <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col relative" id="responsive-layout-wrapper">
        
        {/* Content Box */}
        <main className="flex-1 flex flex-col gap-6 relative z-10" id="app-main-content">
          
          {/* Render Active View Layer Overlays (Stories & Games) */}
          {activeStory ? (
            <StoryViewer
              story={activeStory}
              category={CATEGORIES.find(c => c.id === activeStory.categoryId)!}
              soundEnabled={soundEnabled}
              onComplete={handleStoryComplete}
              onClose={() => {
                stopSpeaking();
                setActiveStory(null);
              }}
              lowEndMode={lowEndMode}
              dialect={selectedDialect}
            />
          ) : activeGame ? (
            <GameViewer
              game={activeGame}
              category={CATEGORIES.find(c => c.id === activeGame.categoryId)!}
              soundEnabled={soundEnabled}
              onComplete={handleGameComplete}
              onClose={() => {
                stopSpeaking();
                setActiveGame(null);
              }}
              lowEndMode={lowEndMode}
              dialect={selectedDialect}
            />
          ) : (
            // Standard Tab Pages
            <AnimatePresence mode="wait">
              {activeTab === 'home' && (
                <motion.div
                  key="home-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-6"
                >
                  {/* Top Dashboard Header */}
                  <Header
                    userName={progress.name}
                    stars={progress.stars}
                    streak={progress.dailyStreak}
                    soundEnabled={soundEnabled}
                    setSoundEnabled={handleSetSoundEnabled}
                    onOpenNameModal={() => {
                      setTypedName(progress.name);
                      setSelectedAvatar(progress.avatar);
                      setSelectedTheme(progress.theme || 'default');
                      setLowEndMode(progress.lowEndMode || false);
                      setSelectedDialect(progress.dialect || 'standard');
                      setNameModalOpen(true);
                    }}
                  />

                  {/* Daily Featured Carousel */}
                  <DailyEtiquette soundEnabled={soundEnabled} />

                  {/* Main Category Interactive Grid Selection */}
                  <div className="flex flex-col gap-3.5">
                    <h3 className={`text-md font-extrabold text-right pr-1 transition-colors duration-500 ${isDarkTheme ? 'text-indigo-200' : 'text-slate-800'}`}>تَعَلَّمِ الآدَابَ يَوْمِيًّا ⭐</h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {CATEGORIES.map((cat) => {
                        const isCompleted = progress.unlockedRewards.includes(cat.id);
                        return (
                          <CategoryCard
                            key={cat.id}
                            category={cat}
                            completed={isCompleted}
                            onSelect={() => selectCategory(cat.id)}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Detailed Selected Category Action Panel Sheet */}
                  {selectedCategoryId && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-3xl p-5 border-4 border-amber-300 flex flex-col gap-4 shadow-lg text-center relative mt-2"
                      id="selected-category-detail-panel"
                    >
                      <button
                        onClick={() => {
                          playPopSound();
                          setSelectedCategoryId(null);
                        }}
                        className="absolute top-3 left-3 w-8 h-8 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-sm cursor-pointer border border-slate-200 active:scale-95"
                        id="btn-close-category-panel"
                      >
                        ✖️
                      </button>

                      {/* Title of selected category */}
                      {(() => {
                        const cat = CATEGORIES.find(c => c.id === selectedCategoryId)!;
                        const isStoryDone = progress.completedStories.includes(selectedCategoryId);
                        const isGameDone = progress.completedGames.includes(selectedCategoryId);
                        return (
                          <>
                            <div className="flex flex-col items-center mt-2">
                              <span className="text-4xl select-none">{cat.icon}</span>
                              <h4 className="text-xl font-black text-slate-800 mt-1 font-sans">{cat.title}</h4>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">{cat.englishTitle}</p>
                            </div>

                            <p className="text-sm font-bold text-slate-500 leading-relaxed px-2">
                              اقْرَأْ عَنْ هَذَا الأَدَبِ الجَمِيلِ ثُمَّ الْعَبْ اللُّعْبَةَ التَّفَاعُلِيَّةَ لِتَفُوزَ بِالوِسَامِ المُرَصَّعِ!
                            </p>

                            {/* Option selections */}
                            <div className="grid grid-cols-2 gap-3 mt-1">
                              {/* Read Story */}
                              <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleStartStory(selectedCategoryId)}
                                className={`rounded-2xl py-3 px-4 border-2 flex flex-col items-center gap-1 cursor-pointer transition-all shadow-sm ${
                                  isStoryDone
                                    ? 'bg-amber-50 border-amber-300 text-amber-700'
                                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                                }`}
                                id="btn-start-story-action"
                              >
                                <span className="text-3xl">📖</span>
                                <span className="font-extrabold text-xs">قِرَاءَةُ القِصَّةِ</span>
                                {isStoryDone && <span className="text-[10px] font-bold text-emerald-600">✓ مَكْتَمِلَة</span>}
                              </motion.button>

                              {/* Play Game */}
                              <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleStartGame(selectedCategoryId)}
                                className={`rounded-2xl py-3 px-4 border-2 flex flex-col items-center gap-1 cursor-pointer transition-all shadow-sm ${
                                  isGameDone
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                                }`}
                                id="btn-start-game-action"
                              >
                                <span className="text-3xl">🎮</span>
                                <span className="font-extrabold text-xs">لَعِبُ اللُّعْبَةِ</span>
                                {isGameDone && <span className="text-[10px] font-bold text-emerald-600">✓ مَكْتَمِلَة</span>}
                              </motion.button>
                            </div>
                          </>
                        );
                      })()}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Stories Tab View directly */}
              {activeTab === 'stories' && (
                <motion.div
                  key="stories-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-right">
                    <h2 className={`text-xl font-black transition-colors duration-500 ${isDarkTheme ? 'text-indigo-100' : 'text-slate-800'}`}>مَكْتَبَةُ القِصَصِ المُشَوِّقَةِ 📖</h2>
                    <p className={`text-xs font-bold mt-0.5 transition-colors duration-500 ${isDarkTheme ? 'text-indigo-300' : 'text-slate-400'}`}>اقرأ واستمع لأجمل مغامرات الأدب الصالح</p>
                  </div>

                  <div className="flex flex-col gap-3.5 mt-2">
                    {STORIES.map((story) => {
                      const cat = CATEGORIES.find(c => c.id === story.categoryId)!;
                      const isCompleted = progress.completedStories.includes(story.categoryId);
                      return (
                        <div
                          key={story.categoryId}
                          className="bg-white border-2 border-slate-200/80 p-4 rounded-3xl flex items-center justify-between shadow-sm"
                          id={`story-item-card-${story.categoryId}`}
                        >
                          <span className="text-4xl bg-slate-50 w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center select-none">
                            {cat.icon.slice(0, 2)}
                          </span>

                          <div className="flex-1 text-right pr-4">
                            <h4 className="font-extrabold text-md text-slate-800 leading-tight">{story.title}</h4>
                            <span className="text-[10px] font-bold text-slate-400 block mt-0.5">{cat.title}</span>
                          </div>

                          <button
                            onClick={() => handleQuickPlay('story', story.categoryId)}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold cursor-pointer border-2 transition-all active:scale-95 ${
                              isCompleted
                                ? 'bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100'
                                : 'bg-amber-400 border-amber-500 text-white hover:bg-amber-500 shadow-sm'
                            }`}
                            id={`btn-quick-story-${story.categoryId}`}
                          >
                            {isCompleted ? 'قِرَاءَة مَرَّةً أُخْرَى 🔁' : 'اقْرَأْ الآنَ 📖'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Games Tab View directly */}
              {activeTab === 'games' && (
                <motion.div
                  key="games-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-right">
                    <h2 className={`text-xl font-black transition-colors duration-500 ${isDarkTheme ? 'text-indigo-100' : 'text-slate-800'}`}>أَلْعَابُ التَّحَدِّي البَطَلِيَّة 🎮</h2>
                    <p className={`text-xs font-bold mt-0.5 font-sans transition-colors duration-500 ${isDarkTheme ? 'text-indigo-300' : 'text-slate-400'}`}>افرز التصرفات لتربح النجوم المذهبة ومكافآتك الصالحة</p>
                  </div>

                  <div className="flex flex-col gap-3.5 mt-2">
                    {GAMES.map((game) => {
                      const cat = CATEGORIES.find(c => c.id === game.categoryId)!;
                      const isCompleted = progress.completedGames.includes(game.categoryId);
                      return (
                        <div
                          key={game.categoryId}
                          className="bg-white border-2 border-slate-200/80 p-4 rounded-3xl flex items-center justify-between shadow-sm"
                          id={`game-item-card-${game.categoryId}`}
                        >
                          <span className="text-4xl bg-slate-50 w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center select-none">
                            🧩
                          </span>

                          <div className="flex-1 text-right pr-4">
                            <h4 className="font-extrabold text-md text-slate-800 leading-tight">{game.title}</h4>
                            <span className="text-[10px] font-bold text-slate-400 block mt-0.5">{cat.title}</span>
                          </div>

                          <button
                            onClick={() => handleQuickPlay('game', game.categoryId)}
                            className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold cursor-pointer border-2 transition-all active:scale-95 ${
                              isCompleted
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                                : 'bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600 shadow-sm'
                            }`}
                            id={`btn-quick-game-${game.categoryId}`}
                          >
                            {isCompleted ? 'الْعَبْ مَرَّةً أُخْرَى 🔁' : 'الْعَبْ الآنَ 🎮'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Cabinet / Badge shelf direct portal */}
              {activeTab === 'cabinet' && (
                <motion.div
                  key="cabinet-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-right">
                    <h2 className={`text-xl font-black transition-colors duration-500 ${isDarkTheme ? 'text-indigo-100' : 'text-slate-800'}`}>جَوَائِزِي المَكْتَسَبَة 🏆</h2>
                    <p className={`text-xs font-bold mt-0.5 transition-colors duration-500 ${isDarkTheme ? 'text-indigo-300' : 'text-slate-400'}`}>شاهد أوسمتك البطلة التي فزت بها</p>
                  </div>

                  <BadgeCabinet progress={progress} soundEnabled={soundEnabled} />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </main>

        {/* Global Bottom Navigation Bar aligned with the custom circular layout design */}
        <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-md bg-white/95 backdrop-blur-md border-2 border-orange-100 py-3 px-5 rounded-[28px] shadow-xl flex items-center justify-around z-30" id="global-bottom-navbar">
          
          {/* Main Home Button */}
          <button
            onClick={() => {
              playPopSound();
              setActiveTab('home');
              setSelectedCategoryId(null);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
              activeTab === 'home' ? 'text-amber-500 scale-110' : 'text-slate-400 hover:text-slate-500'
            }`}
            id="nav-btn-home"
          >
            <span className="text-2xl">🏡</span>
            <span className="text-[10px] font-black font-sans leading-none">الرَّئِيسِيَّة</span>
          </button>

          {/* Games Button */}
          <button
            onClick={() => {
              playPopSound();
              setActiveTab('games');
              setSelectedCategoryId(null);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
              activeTab === 'games' ? 'text-emerald-500 scale-110' : 'text-slate-400 hover:text-slate-500'
            }`}
            id="nav-btn-games"
          >
            <span className="text-2xl">🎮</span>
            <span className="text-[10px] font-black font-sans leading-none">الأَلْعَاب</span>
          </button>

          {/* Stories Button */}
          <button
            onClick={() => {
              playPopSound();
              setActiveTab('stories');
              setSelectedCategoryId(null);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
              activeTab === 'stories' ? 'text-sky-500 scale-110' : 'text-slate-400 hover:text-slate-500'
            }`}
            id="nav-btn-stories"
          >
            <span className="text-2xl">📖</span>
            <span className="text-[10px] font-black font-sans leading-none">القِصَص</span>
          </button>

          {/* Cabinet / Shelf Button */}
          <button
            onClick={() => {
              playPopSound();
              setActiveTab('cabinet');
              setSelectedCategoryId(null);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
              activeTab === 'cabinet' ? 'text-rose-500 scale-110' : 'text-slate-400 hover:text-slate-500'
            }`}
            id="nav-btn-rewards"
          >
            <span className="text-2xl">🏆</span>
            <span className="text-[10px] font-black font-sans leading-none">جَوَائِزِي</span>
          </button>
        </nav>

        {/* PROFILE EDITOR & ONBOARDING NAME REGISTRATION MODAL */}
        <AnimatePresence>
          {nameModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              id="onboarding-profile-modal"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[32px] border-4 border-amber-300 p-6 w-full max-w-sm flex flex-col gap-5 text-center shadow-2xl relative"
              >
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-4xl animate-bounce">🦁🌟</span>
                  <h3 className="text-lg font-black text-slate-800 font-sans mt-1">سَجِّلْ اسْمَكَ يَا بَطَلُ!</h3>
                  <p className="text-xs font-semibold text-slate-400">اختر رمزك الصالح لتبدأ معنا رحلة الآداب الجميلة</p>
                </div>

                {/* Avatar select grid */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-600 text-right pr-1">اخْتَرْ رَمْزَكَ الكَرْتُونِيَّ:</span>
                  <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    {AVATARS.map((av) => (
                      <button
                        key={av}
                        onClick={() => {
                          playPopSound();
                          setSelectedAvatar(av);
                        }}
                        className={`text-3xl p-1 rounded-xl transition-all active:scale-90 cursor-pointer ${
                          selectedAvatar === av ? 'bg-amber-100 border-2 border-amber-400 shadow-inner' : 'hover:bg-slate-100 border-2 border-transparent'
                        }`}
                        id={`btn-select-avatar-${av}`}
                      >
                        {av}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Typed Name Input */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-600 text-right pr-1">اكْتُبِ اسْمَكَ هُنَا:</span>
                  <input
                    type="text"
                    value={typedName}
                    onChange={(e) => setTypedName(e.target.value)}
                    placeholder="مَثَلًا: أَحْمَد أَوْ سَارَة"
                    className="w-full border-2 border-slate-200 focus:border-amber-400 rounded-2xl px-4 py-3 text-right text-sm font-bold bg-slate-50 focus:outline-none focus:bg-white"
                    maxLength={15}
                    id="input-user-name"
                  />
                </div>

                {/* Popular Arabic Names shortcuts for kids to tap easily! */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-500 text-right pr-1">أَوْ اضْغَطْ عَلَى اسْمٍ جَاهِزٍ:</span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {POPULAR_NAMES.map((name) => (
                      <button
                        key={name}
                        onClick={() => {
                          playPopSound();
                          setTypedName(name);
                        }}
                        className="bg-orange-50 hover:bg-orange-100/70 text-orange-700 border border-orange-200/50 rounded-xl px-2.5 py-1 text-[11px] font-extrabold cursor-pointer active:scale-95"
                        id={`btn-shortcut-name-${name}`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Pattern / Theme Selection */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-600 text-right pr-1">اخْتَرْ نَمَطَ الخَلْفِيَّةِ 🎨:</span>
                  <div className="grid grid-cols-4 gap-1.5 bg-slate-50 p-2 rounded-2xl border border-slate-200">
                    {[
                      { id: 'default', label: 'دَافِئ ☀️', icon: '🏡' },
                      { id: 'forest', label: 'غَابَة 🌳', icon: '🌲' },
                      { id: 'space', label: 'فَضَاء 🚀', icon: '🌌' },
                      { id: 'sea', label: 'بَحْر 🌊', icon: '🐳' }
                    ].map((themeItem) => (
                      <button
                        key={themeItem.id}
                        type="button"
                        onClick={() => {
                          playPopSound();
                          setSelectedTheme(themeItem.id as any);
                        }}
                        className={`p-1.5 rounded-xl border flex flex-col items-center gap-1 transition-all active:scale-90 cursor-pointer ${
                          selectedTheme === themeItem.id
                            ? 'border-amber-400 bg-amber-50/50 text-amber-700 font-extrabold shadow-sm scale-105'
                            : 'opacity-75 border-slate-200 bg-white hover:opacity-100 text-slate-600'
                        }`}
                        id={`btn-select-theme-${themeItem.id}`}
                      >
                        <span className="text-xl leading-none">{themeItem.icon}</span>
                        <span className="text-[10px] font-black">{themeItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dialect / Speech Accent Selection */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-600 text-right pr-1">اخْتَرْ لَهْجَةَ الرَّاوِي وَالقِصَصِ 🗣️🇸🇩:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        playPopSound();
                        setSelectedDialect('standard');
                      }}
                      className={`py-2.5 px-3 rounded-2xl border flex flex-col items-center gap-1 transition-all active:scale-95 cursor-pointer text-center ${
                        selectedDialect === 'standard'
                          ? 'border-emerald-400 bg-emerald-50 text-emerald-800 font-extrabold'
                          : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                      }`}
                      id="btn-select-dialect-standard"
                    >
                      <span className="text-xs font-black">🕋 الفُصْحَى المُبَسَّطَة</span>
                      <span className="text-[9px] font-bold text-slate-400">اللُّغَةُ العَرَبِيَّةُ العَامَّة</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        playPopSound();
                        setSelectedDialect('sudanese');
                      }}
                      className={`py-2.5 px-3 rounded-2xl border flex flex-col items-center gap-1 transition-all active:scale-95 cursor-pointer text-center ${
                        selectedDialect === 'sudanese'
                          ? 'border-amber-400 bg-amber-50 text-amber-800 font-extrabold shadow-sm'
                          : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                      }`}
                      id="btn-select-dialect-sudanese"
                    >
                      <span className="text-xs font-black">🇸🇩 اللَّهْجَةُ السُّودَانِيَّةُ</span>
                      <span className="text-[9px] font-bold text-slate-400">بِدَارِجِيِّ الطُّفُولَةِ المَحْبُوب</span>
                    </button>
                  </div>
                </div>

                {/* Low Spec Device / Performance Optimization Mode */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-slate-600 text-right pr-1">تَسْرِيعُ الأَلْعَابِ (لِلْأَجْهِزَةِ الضَّعِيفَةِ) ⚡:</span>
                  <button
                    type="button"
                    onClick={() => {
                      playPopSound();
                      setLowEndMode(!lowEndMode);
                    }}
                    className={`w-full py-2 px-3 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                      lowEndMode 
                        ? 'border-amber-400 bg-amber-50 text-amber-800 font-extrabold' 
                        : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                    }`}
                    id="btn-toggle-low-end-mode"
                  >
                    <span className="text-xs font-black text-right">
                      {lowEndMode ? '✅ سَرِيعٌ جِدًّا (مُمَكَّنٌ)' : '❌ مُعَطَّلٌ (الوَضْعُ العَادِيُّ)'}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">لِلْهَوَاتِفِ القَدِيمَةِ</span>
                  </button>
                </div>

                {/* Save button */}
                <button
                  onClick={handleSaveProfile}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-2xl border-b-4 border-emerald-700 shadow-md active:translate-y-1 active:border-b-0 transition-all mt-1 cursor-pointer"
                  id="btn-save-onboarding-profile"
                >
                  انْطَلِقْ يَا بَطَلُ! 🚀
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
