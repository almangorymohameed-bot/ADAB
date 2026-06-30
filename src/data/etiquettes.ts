/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Story, Game, Reward } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'eating',
    title: 'أَدَبُ الأَكْلِ',
    englishTitle: 'Eating Etiquette',
    shape: 'cloud',
    color: 'bg-sky-50 text-sky-600',
    borderColor: 'border-sky-300',
    icon: '🍪🥛'
  },
  {
    id: 'prayer',
    title: 'أَدَبُ الصَّلَاةِ',
    englishTitle: 'Prayer Etiquette',
    shape: 'star',
    color: 'bg-purple-50 text-purple-600',
    borderColor: 'border-purple-300',
    icon: '🕌⭐'
  },
  {
    id: 'friends',
    title: 'أَدَبُ الأَصْدِقَاءِ',
    englishTitle: 'Friends Etiquette',
    shape: 'heart',
    color: 'bg-rose-50 text-rose-600',
    borderColor: 'border-rose-300',
    icon: '🤝💖'
  },
  {
    id: 'home',
    title: 'أَدَبُ البَيْتِ',
    englishTitle: 'Home Etiquette',
    shape: 'house',
    color: 'bg-amber-50 text-amber-600',
    borderColor: 'border-amber-300',
    icon: '🏡🚪'
  },
  {
    id: 'cleanliness',
    title: 'أَدَبُ النَّظَافَةِ',
    englishTitle: 'Cleanliness',
    shape: 'flower',
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-emerald-300',
    icon: '🧼🐱'
  },
  {
    id: 'toilet',
    title: 'أَدَبُ دُخُولِ الخَلَاءِ',
    englishTitle: 'Toilet Etiquette',
    shape: 'toilet',
    color: 'bg-cyan-50 text-cyan-600',
    borderColor: 'border-cyan-300',
    icon: '🧼🚽'
  },
  {
    id: 'respect',
    title: 'أَدَبُ الِاحْتِرَامِ',
    englishTitle: 'Respecting Others',
    shape: 'respect',
    color: 'bg-teal-50 text-teal-600',
    borderColor: 'border-teal-300',
    icon: '👴👶'
  },
  {
    id: 'talking',
    title: 'أَدَبُ التَّحَدُّثِ',
    englishTitle: 'Talking Etiquette',
    shape: 'talking',
    color: 'bg-orange-50 text-orange-600',
    borderColor: 'border-orange-300',
    icon: '🗣️✨'
  },
  {
    id: 'greeting',
    title: 'إِلْقَاءُ السَّلَامِ',
    englishTitle: 'Islamic Greeting',
    shape: 'greeting',
    color: 'bg-indigo-50 text-indigo-600',
    borderColor: 'border-indigo-300',
    icon: '🤝✨'
  }
];

export const STORIES: Story[] = [
  {
    categoryId: 'eating',
    title: 'بَطُّوطُ وَآدَابُ الطَّعَامِ 🦆',
    badgeName: 'وِسَامُ الأَكْلِ النَّظِيفِ',
    badgeIcon: '🌟🥄',
    slides: [
      {
        text: 'يَجْلِسُ بَطُّوطُ الصَّغِيرُ لِيَأْكُلَ طَعَامًا شَهِيًّا، لَكِنَّ يَدَيْهِ كَانَتَا مُتَّسِخَتَيْنِ مِنَ اللَّعِبِ!',
        illustration: 'dirty_hands_duck',
        highlightWord: 'مُتَّسِخَتَيْنِ'
      },
      {
        text: 'قَالَتْ لَهُ أُمُّهُ الطَّيِّبَةُ: يَا بَطُّوطُ، نَغْسِلُ يَدَيْنَا أَوَّلًا بِالمَاءِ وَالصَّابُونِ، ثُمَّ نَقُولُ: بِسْمِ اللهِ قَبْلَ أَنْ نَبْدَأَ!',
        illustration: 'washing_hands_duck',
        highlightWord: 'بِسْمِ اللهِ'
      },
      {
        text: 'أَكَلَ بَطُّوطُ بِيَدِهِ اليُمْنَى الجَمِيلَةِ، وَمِنَ الطَّعَامِ الَّذِي أَمَامَهُ، وَفِي النِّهَايَةِ قَالَ بِصَوْتٍ عَالٍ: الحَمْدُ للهِ!',
        illustration: 'eating_duck',
        highlightWord: 'الحَمْدُ للهِ'
      }
    ]
  },
  {
    categoryId: 'prayer',
    title: 'خَالِدٌ وَالصَّلَاةُ الأُولَى 🕌',
    badgeName: 'وِسَامُ البَطَلِ المُصَلِّي',
    badgeIcon: '🕌✨',
    slides: [
      {
        text: 'سَمِعَ خَالِدٌ صَوْتَ الأَذَانِ الجَمِيلَ يَرْتَفِعُ: اللهُ أَكْبَرُ، اللهُ أَكْبَرُ! فَتَوَقَّفَ عَنِ اللَّعِبِ فَوْرًا.',
        illustration: 'hearing_adhan',
        highlightWord: 'اللهُ أَكْبَرُ'
      },
      {
        text: 'تَوَجَّهَ خَالِدٌ لِلوُضُوءِ بِنَشَاطٍ، غَسَلَ وَجْهَهُ وَيَدَيْهِ وَقَدَمَيْهِ بِالهُدُوءِ وَمِنْ دُونِ إِسْرَافٍ فِي المَاءِ.',
        illustration: 'making_wudu',
        highlightWord: 'الوُضُوءِ'
      },
      {
        text: 'وَقَفَ خَالِدٌ مَعَ أَبِيهِ عَلَى السَّجَّادَةِ يُصَلِّي بِخُشُوعٍ وَأَدَبٍ، يَنْظُرُ إِلَى مَوْضِعِ سُجُودِهِ وَيَدْعُو اللهَ.',
        illustration: 'praying_boy',
        highlightWord: 'بِخُشُوعٍ'
      }
    ]
  },
  {
    categoryId: 'friends',
    title: 'لُعْبَةُ فَرِيدَةَ وَسَمِيرٍ 🤝',
    badgeName: 'وِسَامُ الصَّدِيقِ الطَّيِّبِ',
    badgeIcon: '🤝💖',
    slides: [
      {
        text: 'كَانَ سَمِيرٌ يَلْعَبُ بِالسَّيَّارَةِ الحَمْرَاءِ الجَمِيلَةِ وَحْدَهُ، وَفِي نَفْسِ الوَقْتِ كَانَتْ صَدِيقَتُهُ فَرِيدَةُ تَنْظُرُ إِلَيْهِ بِحُزْنٍ تُرِيدُ أَنْ تَلْعَبَ.',
        illustration: 'sad_lonely_play',
        highlightWord: 'بِحُزْنٍ'
      },
      {
        text: 'ذَهَبَتْ فَرِيدَةُ إِلَيْهِ وَابْتَسَمَتْ وَقَالَتْ بِلُطْفٍ: هَلْ نَلْعَبُ مَعًا يَا سَمِيرُ؟ فَقَالَ سَمِيرٌ بِفَرَحٍ: نَعَمْ بِالتَّأْكِيدِ! تَفَضَّلِي اللُّعْبَةَ!',
        illustration: 'sharing_toys',
        highlightWord: 'بِلُطْفٍ'
      },
      {
        text: 'تَشَارَكَ الاثْنَانِ اللَّعِبَ مَعًا، وَقَضَيَا وَقْتًا رَائِعًا. كَمْ هِيَ جَمِيلَةٌ المُشَارَكَةُ وَالكَلِمَةُ الطَّيِّبَةُ بَيْنَ الأَصْدِقَاءِ!',
        illustration: 'happy_friends',
        highlightWord: 'المُشَارَكَةُ'
      }
    ]
  },
  {
    categoryId: 'home',
    title: 'بَطَلُ غُرْفَتِهِ المُنَظَّمَةِ 🏡',
    badgeName: 'وِسَامُ مُرَتِّبِ البَيْتِ',
    badgeIcon: '🏡⭐',
    slides: [
      {
        text: 'بَعْدَ يَوْمٍ طَوِيلٍ مِنَ المَرِحِ، كَانَتْ أَلْعَابُ مَازِنٍ مَبْعُثَرَةً فِي كُلِّ مَكَانٍ عَلَى أَرْضِ الغُرْفَةِ.',
        illustration: 'messy_room',
        highlightWord: 'مَبْعُثَرَةً'
      },
      {
        text: 'قَالَ مَازِنٌ بِنَشَاطٍ: سَأُعِيدُ كُلَّ لُعْبَةٍ إِلَى صُنْدُوقِهَا المَخْصُوصِ، لِكَيْ يَبْقَى بَيْتِي نَظِيفًا وَمُرَتَّبًا كَمَا يُحِبُّ اللهُ.',
        illustration: 'cleaning_room',
        highlightWord: 'نَظِيفًا'
      },
      {
        text: 'دَخَلَتْ أُمُّهُ وَرَأَتِ الغُرْفَةَ تَلْمَعُ! قَبَّلَتْهُ وَقَالَتْ: جَزَاكَ اللهُ خَيْرًا يَا بَطَلِي الحَبِيبَ! أَنْتَ رَائِعٌ!',
        illustration: 'happy_mother_clean',
        highlightWord: 'جَزَاكَ اللهُ خَيْرًا'
      }
    ]
  },
  {
    categoryId: 'cleanliness',
    title: 'المُرْشِدُ مِشْمِشُ وَنَظَافَتُهُ 🧼',
    badgeName: 'وِسَامُ النَّظَافَةِ الجَمِيلَةِ',
    badgeIcon: '🧼🐱',
    slides: [
      {
        text: 'يُحِبُّ القِطُّ مِشْمِشٌ الجَرْيَ وَاللَّعِبَ فِي الحَدِيقَةِ، لَكِنَّهُ لَا يُحِبُّ غَسْلَ يَدَيْهِ وَلَا تَنْظِيفَ أَسْنَانِهِ بِالفُرْشَاةِ!',
        illustration: 'dirty_kitten',
        highlightWord: 'لَا يُحِبُّ'
      },
      {
        text: 'جَاءَ صَدِيقُهُ الأَرْنَبُ نَصُوحٌ النَّظِيفُ، وَأَرَاهُ كَيْفَ تُصْبِحُ الأَسْنَانُ مَرِيضَةً إِذَا تَرَكْنَاهَا دُونَ تَنْظِيفٍ بَعْدَ الطَّعَامِ.',
        illustration: 'rabbit_advice',
        highlightWord: 'تَنْظِيفٍ'
      },
      {
        text: 'أَسْرَعَ مِشْمِشٌ وَغَسَلَ أَسْنَانَهُ بِالفُرْشَاةِ وَالمَعْجُونِ، وَاسْتَحَمَّ فَقَالَ: النَّظَافَةُ مِنَ الإِيمَانِ، وَرَائِحَتِي الآنَ رَائِعَةٌ!',
        illustration: 'clean_kitten',
        highlightWord: 'النَّظَافَةُ مِنَ الإِيمَانِ'
      }
    ]
  },
  {
    categoryId: 'toilet',
    title: 'أَنَسٌ وَدُخُولُ الخَلَاءِ 🧼',
    badgeName: 'وِسَامُ دُخُولِ الخَلَاءِ البَطَلِيِّ',
    badgeIcon: '🧼🚽',
    slides: [
      {
        text: 'عِنْدَمَا يَشْعُرُ أَنَسٌ بِالحَاجَةِ لِدُخُولِ الخَلَاءِ، يَذْهَبُ بِهُدُوءٍ وَلَا يَنْتَظِرُ طَوِيلًا لِيُحَافِظَ عَلَى صِحَّتِهِ.',
        illustration: 'entering_toilet',
        highlightWord: 'بِهُدُوءٍ'
      },
      {
        text: 'يَدْخُلُ بِرِجْلِهِ اليُسْرَى وَيَقُولُ الدُّعَاءَ: (بِسْمِ اللهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الخُبُثِ وَالخَبَائِثِ).',
        illustration: 'toilet_dua',
        highlightWord: 'اليُسْرَى'
      },
      {
        text: 'بَعْدَ الِانْتِهَاءِ، يُنَظِّفُ نَفْسَهُ جَيِّدًا بِالمَاءِ، ثُمَّ يَغسِلُ يَدَيْهِ بِالصَّابُونِ وَيَخْرُجُ بِالرِّجْلِ اليُمْنَى قَائِلًا: (غُفْرَانَكَ).',
        illustration: 'washing_hands_toilet',
        highlightWord: 'غُفْرَانَكَ'
      }
    ]
  },
  {
    categoryId: 'respect',
    title: 'سَعِيدٌ وَأَدَبُ الِاحْتِرَامِ 👴👶',
    badgeName: 'وِسَامُ البَطَلِ المُحْتَرِمِ',
    badgeIcon: '👴👶',
    slides: [
      {
        text: 'يُحِبُّ سَعِيدٌ مُسَاعَدَةَ جَارِهِ العَجُوزِ أَبِي أَحْمَدَ، فَيَحْمِلُ عَنْهُ أَكْيَاسَ الخُضَارِ الثَّقِيلَةَ وَيُقَبِّلُ رَأْسَهُ.',
        illustration: 'helping_elder',
        highlightWord: 'مُسَاعَدَةَ'
      },
      {
        text: 'قَالَ النَّبِيُّ ﷺ: (لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيَعْرِفْ شَرَفَ كَبِيرِنَا). لِذَا، يُقَبِّلُ سَعِيدٌ أَخَاهُ الصَّغِيرَ وَيَعْطِفُ عَلَيْهِ.',
        illustration: 'loving_younger',
        highlightWord: 'يَرْحَمْ'
      },
      {
        text: 'يَسْتَمِعُ سَعِيدٌ لِكَلَامِ وَالِدَيْهِ وَمُعَلِّمِهِ بِأَدَبٍ شَدِيدٍ، وَيَتَحَدَّثُ مَعَهُمْ بِصَوْتٍ هَادِئٍ وَجَمِيلٍ.',
        illustration: 'listening_parents',
        highlightWord: 'بِأَدَبٍ'
      }
    ]
  },
  {
    categoryId: 'talking',
    title: 'سَارَةُ وَالكَلِمَةُ الطَّيِّبَةُ 🗣️',
    badgeName: 'وِسَامُ التَّحَدُّثِ اللَّطِيفِ',
    badgeIcon: '🗣️✨',
    slides: [
      {
        text: 'تَتَحَدَّثُ سَارَةُ مَعَ أَصْدِقَائِهَا وَعَائِلَتِهَا دَائِمًا بِصَوْتٍ هَادِئٍ وَمُنْخَفِضٍ، وَلَا تَصْرُخُ أَبَدًا.',
        illustration: 'quiet_talking',
        highlightWord: 'بِصَوْتٍ هَادِئٍ'
      },
      {
        text: 'تَنْتَظِرُ سَارَةُ حَتَّى يُكْمِلَ الآخَرُونَ كَلَامَهُمْ، ثُمَّ تَسْتَأْذِنُ بِأَدَبٍ قَائِلَةً: (هَلْ يُمْكِنُنِي أَنْ أَقُولَ شَيْئًا؟).',
        illustration: 'waiting_turn',
        highlightWord: 'تَسْتَأْذِنُ'
      },
      {
        text: 'تَقُولُ الصِّدْقَ دَائِمًا فِي حَدِيثِهَا وَتَتَجَنَّبُ الكَذِبَ، لِأَنَّ (الكَلِمَةَ الطَّيِّبَةَ صَدَقَةٌ) كَمَا عَلَّمَنَا رَسُولُنَا الكَرِيمُ.',
        illustration: 'honest_girl',
        highlightWord: 'الكَلِمَةَ الطَّيِّبَةَ'
      }
    ]
  },
  {
    categoryId: 'greeting',
    title: 'عُمَرُ وَتَحِيَّةُ الإِسْلَامِ 🤝',
    badgeName: 'وِسَامُ بَطَلِ السَّلَامِ',
    badgeIcon: '🤝✨',
    slides: [
      {
        text: 'عِنْدَمَا يَدْخُلُ عُمَرُ الصَّفَّ أَوِ البَيْتَ، يَبْتَسِمُ وَيَقُولُ بِصَوْتٍ وَاضِحٍ: (السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ).',
        illustration: 'greeting_friends',
        highlightWord: 'السَّلَامُ عَلَيْكُمْ'
      },
      {
        text: 'يُصَافِحُ عُمَرُ أَصْدِقَاءَهُ بِيَدِهِ اليُمْنَى بِحُبٍّ، وَإِذَا أَلْقَى عَلَيْهِ أَحَدٌ السَّلَامَ، يَرُدُّ فَوْرًا: (وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ).',
        illustration: 'handshaking',
        highlightWord: 'وَعَلَيْكُمُ السَّلَامُ'
      },
      {
        text: 'عَلَّمَنَا نَبِيُّنَا ﷺ أَنَّ إِفْشَاءَ السَّلَامِ يَنْشُرُ المَحَبَّةَ بَيْنَ النَّاسِ، فَصَارَ عُمَرُ حَرِيصًا عَلَى نَشْرِ السَّلَامِ فِي كُلِّ مَكَانٍ.',
        illustration: 'spreading_peace',
        highlightWord: 'المَحَبَّةَ'
      }
    ]
  }
];

export const GAMES: Game[] = [
  {
    categoryId: 'eating',
    title: 'لُعْبَةُ الطَّعَامِ الطَّيِّبِ 🍎',
    type: 'sorting',
    sortingItems: [
      { id: 'eat1', text: 'أَقُولُ (بِسْمِ اللهِ) قَبْلَ البَدْءِ', isGood: true, icon: '🤲' },
      { id: 'eat2', text: 'آكُلُ بِيَدِي اليُمْنَى', isGood: true, icon: '🤚' },
      { id: 'eat3', text: 'أَنْفُخُ فِي الطَّعَامِ السَّاخِنِ', isGood: false, icon: '💨' },
      { id: 'eat4', text: 'أَتَكَلَّمُ وَفَمِي مَلِيءٌ بِالأَكْلِ', isGood: false, icon: '🗣️' },
      { id: 'eat5', text: 'أَغْسِلُ يَدَيَّ قَبْلَ وَبَعْدَ الأَكْلِ', isGood: true, icon: '🧼' },
      { id: 'eat6', text: 'آكُلُ بِيَدِي اليُسْرَى', isGood: false, icon: '🖐️' }
    ]
  },
  {
    categoryId: 'prayer',
    title: 'لُعْبَةُ البَطَلِ المُصَلِّي 🕌',
    type: 'sorting',
    sortingItems: [
      { id: 'pry1', text: 'أَقِفُ هَادِئًا وَخَاشِعًا فِي الصَّلَاةِ', isGood: true, icon: '🙇' },
      { id: 'pry2', text: 'أَلْتَفِتُ يَمِينًا وَيَسَارًا وَأَضْحَكُ', isGood: false, icon: '😜' },
      { id: 'pry3', text: 'أَتَوَضَّأُ بِهُدُوءٍ وَلَا أُسْرِفُ فِي المَاءِ', isGood: true, icon: '💧' },
      { id: 'pry4', text: 'أَجْرِي وَأَلْعَبُ أَثْنَاءَ الصَّلَاةِ', isGood: false, icon: '🏃' },
      { id: 'pry5', text: 'أَسْتَمِعُ لِلأَذَانِ وَأُرَدِّدُ مَعَهُ', isGood: true, icon: '👂' }
    ]
  },
  {
    categoryId: 'friends',
    title: 'لُعْبَةُ الأَصْدِقَاءِ الأَوْفِيَاءِ 🤝',
    type: 'sorting',
    sortingItems: [
      { id: 'frd1', text: 'أَتَشَارَكُ أَلْعَابِي المَرِحَةَ مَعَ أَصْدِقَائِي', isGood: true, icon: '🧸' },
      { id: 'frd2', text: 'أَخْطَفُ اللُّعْبَةَ بِقُوَّةٍ مِنْ يَدِ صَدِيقِي', isGood: false, icon: '😠' },
      { id: 'frd3', text: 'أَقُولُ كَلِمَةً طَيِّبَةً وَأَبْتَسِمُ', isGood: true, icon: '😊' },
      { id: 'frd4', text: 'أَدْفَعُ صَدِيقِي عَلَى الأَرْضِ', isGood: false, icon: '👎' },
      { id: 'frd5', text: 'أُسَاعِدُ صَدِيقِي إِذَا كَانَ حَزِينًا', isGood: true, icon: '❤️' }
    ]
  },
  {
    categoryId: 'home',
    title: 'لُعْبَةُ مُرَتِّبِ البَيْتِ البَطَلِ 🏡',
    type: 'sorting',
    sortingItems: [
      { id: 'hom1', text: 'أُعِيدُ أَلْعَابِي إِلَى صُنْدُوقِهَا بَعْدَ اللَّعِبِ', isGood: true, icon: '📦' },
      { id: 'hom2', text: 'أَكْتُبُ وَأَرْسُمُ عَلَى جُدْرَانِ الغُرْفَةِ', isGood: false, icon: '🖍️' },
      { id: 'hom3', text: 'أُقَبِّلُ يَدَ وَالِدَيَّ عِنْدَ الصَّبَاحِ', isGood: true, icon: '😘' },
      { id: 'hom4', text: 'أَصْرُخُ وَأُحْدِثُ ضَوْضَاءً عَالِيَةً', isGood: false, icon: '🗣️' },
      { id: 'hom5', text: 'أَسْتَأْذِنُ قَبْلَ دُخُولِ غُرْفَةِ أَبَوَيَّ', isGood: true, icon: '🚪' }
    ]
  },
  {
    categoryId: 'cleanliness',
    title: 'لُعْبَةُ جُنُودِ النَّظَافَةِ 🧼',
    type: 'sorting',
    sortingItems: [
      { id: 'cln1', text: 'أَرْمِي الأَوْرَاقَ فِي سَلَّةِ المُهْمَلَاتِ', isGood: true, icon: '🗑️' },
      { id: 'cln2', text: 'أَتْرُكُ المَاءَ مَفْتُوحًا دُونَ حَاجَةٍ', isGood: false, icon: '🚰' },
      { id: 'cln3', text: 'أَغْسِلُ أَسْنَانِي بَعْدَ كُلِّ وَجْبَةٍ', isGood: true, icon: '🪥' },
      { id: 'cln4', text: 'آكُلُ الحَلْوَى بِيَدَيْنِ مُتَّسِخَتَيْنِ طِينًا', isGood: false, icon: '🖐️' },
      { id: 'cln5', text: 'أَقُصُّ أَظَافِرِي لِكَيْ تَبْقَى نَظِيفَةً', isGood: true, icon: '✂️' }
    ]
  },
  {
    categoryId: 'toilet',
    title: 'لُعْبَةُ أَبْطَالِ دُخُولِ الخَلَاءِ 🚽',
    type: 'sorting',
    sortingItems: [
      { id: 'toi1', text: 'أَدْخُلُ بِرِجْلِي اليُسْرَى وَأَقُولُ الدُّعَاءَ', isGood: true, icon: '🚶' },
      { id: 'toi2', text: 'أَخْرُجُ بِرِجْلِي اليُمْنَى وَأَقُولُ (غُفْرَانَكَ)', isGood: true, icon: '🚪' },
      { id: 'toi3', text: 'أَتَكَلَّمُ أَوِ اللَّعِبُ دَاخِلَ الخَلَاءِ', isGood: false, icon: '🗣️' },
      { id: 'toi4', text: 'أَغْسِلُ يَدَيَّ جَيِّدًا بِالمَاءِ وَالصَّابُونِ بَعْدَ الخُرُوجِ', isGood: true, icon: '🧼' },
      { id: 'toi5', text: 'أَتْرُكُ المَاءَ مَفْتُوحًا دُونَ حَاجَةٍ', isGood: false, icon: '🚰' },
      { id: 'toi6', text: 'أَدْخُلُ بِالحِذَاءِ وَأُغْلِقُ البَابَ بِهُدُوءٍ', isGood: true, icon: '👟' }
    ]
  },
  {
    categoryId: 'respect',
    title: 'لُعْبَةُ جُنُودِ الِاحْتِرَامِ 🤝',
    type: 'sorting',
    sortingItems: [
      { id: 'res1', text: 'أُسَاعِدُ الكَبِيرَ وَأُفْسِحُ لَهُ المَجْلِسَ', isGood: true, icon: '👴' },
      { id: 'res2', text: 'أَرْحَمُ الصَّغِيرَ وَأُعَامِلُهُ بِحَنَانٍ وَلُطْفٍ', isGood: true, icon: '👶' },
      { id: 'res3', text: 'أُقَاطِعُ الكَبِيرَ أَثْنَاءَ كَلَامِهِ بَعَصَبِيَّةٍ', isGood: false, icon: '🗣️' },
      { id: 'res4', text: 'أَسْتَمِعُ لِنَصَائِحِ جَدِّي وَأَبَوَيَّ بِمَحَبَّةٍ', isGood: true, icon: '💖' },
      { id: 'res5', text: 'أَسْخَرُ مِنَ الآخَرِينَ أَوْ أَسْتَهْزِئُ بِهِمْ', isGood: false, icon: '😜' }
    ]
  },
  {
    categoryId: 'talking',
    title: 'لُعْبَةُ الكَلِمَةِ الطَّيِّبَةِ 🗣️',
    type: 'sorting',
    sortingItems: [
      { id: 'tlk1', text: 'أَتَحَدَّثُ بِصَوْتٍ هَادِئٍ وَمُنْخَفِضٍ دُونَ صُرَاخٍ', isGood: true, icon: '🤫' },
      { id: 'tlk2', text: 'أُقَاطِعُ صَدِيقِي أَثْنَاءَ حَدِيثِهِ فَوْرًا', isGood: false, icon: '❌' },
      { id: 'tlk3', text: 'أَقُولُ الصِّدْقَ دَائِمًا وَلَا أَكْذِبُ', isGood: true, icon: '🌸' },
      { id: 'tlk4', text: 'أَسْتَخْدِمُ كَلِمَاتٍ جَمِيلَةً مِثْلَ (شُكْرًا) وَ(مِنْ فَضْلِكَ)', isGood: true, icon: '💖' },
      { id: 'tlk5', text: 'أَسْخَرُ مِنْ شَكْلِ أَوْ كَلَامِ غَيْرِي', isGood: false, icon: '👎' }
    ]
  },
  {
    categoryId: 'greeting',
    title: 'لُعْبَةُ بَطَلِ السَّلَامِ 🤝',
    type: 'sorting',
    sortingItems: [
      { id: 'grt1', text: 'أَقُولُ (السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ) عِنْدَ اللِّقَاءِ', isGood: true, icon: '👋' },
      { id: 'grt2', text: 'أَدْخُلُ البَيْتَ دُونَ أَنْ أُسَلِّمَ عَلَى أَحَدٍ', isGood: false, icon: '🚶' },
      { id: 'grt3', text: 'أَرُدُّ السَّلَامَ كَامِلًا بِأَدَبٍ وَابْتِسَامَةٍ', isGood: true, icon: '😊' },
      { id: 'grt4', text: 'أُصَافِحُ أَصْدِقَائِي بِيَدِي اليُمْنَى', isGood: true, icon: '🤝' },
      { id: 'grt5', text: 'أَتَجَاهَلُ تَحِيَّةَ مَنْ يُسَلِّمُ عَلَيَّ', isGood: false, icon: '😒' }
    ]
  }
];

export const REWARDS: Reward[] = [
  {
    id: 'eating',
    title: 'وِسَامُ الأَكْلِ النَّظِيفِ',
    icon: '🥄🌟',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يَغْسِلُ يَدَيْهِ وَيَقُولُ بِسْمِ اللهِ قَبْلَ طَعَامِهِ.',
    color: 'from-sky-400 to-blue-500'
  },
  {
    id: 'prayer',
    title: 'وِسَامُ البَطَلِ المُصَلِّي',
    icon: '🕌✨',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يَسْتَمِعُ لِلأَذَانِ وَيُصَلِّي مَعَ عَائِلَتِهِ بِخُشُوعٍ.',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    id: 'friends',
    title: 'وِسَامُ الصَّدِيقِ الطَّيِّبِ',
    icon: '🤝💖',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يُشَارِكُ أَلْعَابَهُ وَيُعَامِلُ أَصْدِقَاءَهُ بِحُبٍّ وَابْتِسَامَةٍ.',
    color: 'from-rose-400 to-pink-500'
  },
  {
    id: 'home',
    title: 'وِسَامُ مُرَتِّبِ البَيْتِ',
    icon: '🏡⭐',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يُسَاعِدُ فِي تَرْتِيبِ غُرْفَتِهِ وَيَسْتَمِعُ لِكَلَامِ وَالِدَيْهِ.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 'cleanliness',
    title: 'وِسَامُ النَّظَافَةِ الجَمِيلَةِ',
    icon: '🧼🐱',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يُحَافِظُ عَلَى نَظَافَتِهِ وَيَرْمِي الأَوْرَاقَ فِي مَكَانِهَا.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'toilet',
    title: 'وِسَامُ دُخُولِ الخَلَاءِ البَطَلِيِّ',
    icon: '🧼🚽',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يَدْخُلُ بِاليُسْرَى وَيَقُولُ الدُّعَاءَ وَيَغْسِلُ يَدَيْهِ بَعْدَ الخُرُوجِ.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'respect',
    title: 'وِسَامُ البَطَلِ المُحْتَرِمِ',
    icon: '👴👶',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يُحْتَرِمُ الكَبِيرَ وَيَعْطِفُ عَلَى الصَّغِيرِ كَمَا أَوْصَانَا نَبِيُّنَا ﷺ.',
    color: 'from-teal-400 to-emerald-600'
  },
  {
    id: 'talking',
    title: 'وِسَامُ التَّحَدُّثِ اللَّطِيفِ',
    icon: '🗣️✨',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يَتَحَدَّثُ بِصَوْتٍ هَادِئٍ، وَيَقُولُ الصِّدْقَ وَيَنْتَظِرُ دَوْرَهُ فِي الكَلَامِ.',
    color: 'from-orange-400 to-amber-500'
  },
  {
    id: 'greeting',
    title: 'وِسَامُ بَطَلِ السَّلَامِ',
    icon: '🤝✨',
    description: 'يُعْطَى لِلْبَطَلِ الَّذِي يُلْقِي وَيَرُدُّ تَحِيَّةَ الإِسْلَامِ الكَامِلَةَ بِمَحَبَّةٍ وَابْتِسَامَةٍ.',
    color: 'from-indigo-400 to-purple-600'
  }
];

export const DAILY_ETIQUETTES = [
  {
    id: 'daily1',
    title: 'كَلِمَةُ أَهْلًا!',
    description: 'أَقُولُ (أَهْلًا وَسَهْلًا) لِأَصْدِقَائِي بِابْتِسَامَةٍ جَمِيلَةٍ!',
    illustration: 'say_hello_daily'
  },
  {
    id: 'daily2',
    title: 'قَوْلُ بِسْمِ اللهِ',
    description: 'أَبْدَأُ كُلَّ أَعْمَالِي وَطَعَامِي بِقَوْلِ (بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ)',
    illustration: 'say_bismillah_daily'
  },
  {
    id: 'daily3',
    title: 'مُسَاعَدَةُ الآخَرِينَ',
    description: 'أَمُدُّ يَدِي الجَمِيلَةَ لِمُسَاعَدَةِ أُمِّي وَأَبِي فِي البَيْتِ',
    illustration: 'helping_parents_daily'
  },
  {
    id: 'daily4',
    title: 'إِلْقَاءُ السَّلَامِ الكَامِلِ',
    description: 'أَقُولُ دَائِمًا (السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ) عِنْدَمَا أُحَيِّي غَيْرِي!',
    illustration: 'say_assalamu_alaykum'
  }
];
