export type Mood = 'chill' | 'hyped' | 'sad' | 'romantic' | 'adventurous' | 'spooky';
export type Tone = 'savage' | 'warm' | 'chaotic';
export type Lang = 'en' | 'cn';
export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'cold' | 'hot';
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'latenight';
export type Energy = 'low' | 'medium' | 'high';
export type Budget = 'free' | 'cheap' | 'moderate' | 'expensive';

export interface WatchItem {
  id: string;
  titleEn: string;
  titleCn: string;
  year: number;
  type: 'movie' | 'series';
  genre: string;
  director: string;
  cast: string[];
  imdbUrl: string;
  doubanUrl: string;
  mood: Mood[];
  tone: Tone[];
  vibe: string;
  vibeCN: string;
}

export interface ListenItem {
  id: string;
  trackTitle: string;
  trackTitleCn: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeMusicUrl?: string;
  mood: Mood[];
  tone: Tone[];
  vibe: string;
  vibeCN: string;
}

export interface PlayItem {
  id: string;
  gameTitle: string;
  gameTitleCn: string;
  year: number;
  genre: string;
  platforms: string[];
  developer: string;
  publisher: string;
  metacriticUrl?: string;
  steamUrl?: string;
  ignUrl?: string;
  mood: Mood[];
  tone: Tone[];
  vibe: string;
  vibeCN: string;
}

export interface EatItem {
  id: string;
  dish: string;
  dishCN: string;
  cuisine: string;
  cuisineCN: string;
  mood: Mood[];
  tone: Tone[];
  weather: Weather[];
  time: TimeSlot[];
  energy: Energy;
  budget: Budget;
  vibe: string;
  vibeCN: string;
  backup: string;
  backupCN: string;
}

export interface WearItem {
  id: string;
  top: string;
  topCN: string;
  bottom: string;
  bottomCN: string;
  shoes: string;
  shoesCN: string;
  accessory: string;
  accessoryCN: string;
  style: string;
  styleCN: string;
  mood: Mood[];
  tone: Tone[];
  weather: Weather[];
  time: TimeSlot[];
  energy: Energy;
  budget: Budget;
  vibe: string;
  vibeCN: string;
  backup: string;
  backupCN: string;
}

export interface CopyLine {
  en: string;
  cn: string;
  tone: Tone[];
}

export interface TimelineSlot {
  time: TimeSlot;
  activity: string;
  activityCN: string;
  category: 'watch' | 'listen' | 'play' | 'eat' | 'wear';
}

export interface DailyBox {
  date: string;
  watch: WatchItem;
  watchBackup: WatchItem;
  listen: ListenItem;
  listenBackup: ListenItem;
  play: PlayItem;
  playBackup: PlayItem;
  eat: EatItem;
  wear: WearItem;
  timeline: TimelineSlot[];
  destinyLine: CopyLine;
  mood: Mood | null;
  tone: Tone;
  rerollCount: number;
  seed: number;
}

export interface DayState {
  opened: boolean;
  rerollsUsed: number;
  box: DailyBox | null;
}
