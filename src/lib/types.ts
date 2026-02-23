export type Mood = 'chill' | 'hyped' | 'sad' | 'romantic' | 'adventurous' | 'spooky';
export type Tone = 'savage' | 'warm' | 'chaotic';
export type Lang = 'en' | 'cn';
export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'cold' | 'hot';
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'latenight';
export type Energy = 'low' | 'medium' | 'high';
export type Budget = 'free' | 'cheap' | 'moderate' | 'expensive';

export interface WatchItem {
  id: string;
  title: string;
  titleCN: string;
  year: number;
  type: 'movie' | 'series';
  genre: string;
  mood: Mood[];
  tone: Tone[];
  vibe: string;
  vibeCN: string;
}

export interface ListenItem {
  id: string;
  title: string;
  titleCN: string;
  artist: string;
  genre: string;
  mood: Mood[];
  tone: Tone[];
  vibe: string;
  vibeCN: string;
}

export interface PlayItem {
  id: string;
  title: string;
  titleCN: string;
  platform: string;
  genre: string;
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
