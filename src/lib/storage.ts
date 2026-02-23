import { DailyBox, DayState } from './types';

const STORAGE_KEY = 'radomday_history';
const STATE_KEY = 'radomday_state';

export function getHistory(): DailyBox[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as DailyBox[];
  } catch {
    return [];
  }
}

export function saveToHistory(box: DailyBox): void {
  if (typeof window === 'undefined') return;
  const history = getHistory();
  // Replace if same date exists
  const idx = history.findIndex((h) => h.date === box.date);
  if (idx >= 0) {
    history[idx] = box;
  } else {
    history.unshift(box);
  }
  // Keep only last 7 days
  const trimmed = history.slice(0, 7);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
}

export function getRecentBoxes(days: number = 7): DailyBox[] {
  return getHistory().slice(0, days);
}

export function getDayState(date: string): DayState {
  if (typeof window === 'undefined') return { opened: false, rerollsUsed: 0, box: null };
  try {
    const raw = localStorage.getItem(`${STATE_KEY}_${date}`);
    if (!raw) return { opened: false, rerollsUsed: 0, box: null };
    return JSON.parse(raw) as DayState;
  } catch {
    return { opened: false, rerollsUsed: 0, box: null };
  }
}

export function saveDayState(date: string, state: DayState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${STATE_KEY}_${date}`, JSON.stringify(state));
}
