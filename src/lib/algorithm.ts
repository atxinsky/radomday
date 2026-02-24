import { WatchItem, ListenItem, PlayItem, EatItem, WearItem, CopyLine, Mood, Tone, DailyBox, TimelineSlot } from './types';

// Seeded PRNG (mulberry32)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dateSeed(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function scoreItem<T extends { mood: Mood[]; tone: Tone[] }>(
  item: T,
  mood: Mood | null,
  tone: Tone
): number {
  let score = 1;
  if (mood && item.mood.includes(mood)) score += 3;
  if (item.tone.includes(tone)) score += 2;
  return score;
}

function weightedPick<T extends { id: string; mood: Mood[]; tone: Tone[] }>(
  pool: T[],
  mood: Mood | null,
  tone: Tone,
  rng: () => number,
  excludeIds: Set<string>
): T {
  const available = pool.filter((item) => !excludeIds.has(item.id));
  if (available.length === 0) {
    const weights = pool.map((item) => scoreItem(item, mood, tone));
    return weightedSelect(pool, weights, rng);
  }
  const weights = available.map((item) => scoreItem(item, mood, tone));
  return weightedSelect(available, weights, rng);
}

function weightedSelect<T>(items: T[], weights: number[], rng: () => number): T {
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let r = rng() * totalWeight;
  for (let i = 0; i < items.length; i++) {
    r -= weights[i];
    if (r <= 0) return items[i];
  }
  return items[items.length - 1];
}

function pickCopyLine(lines: CopyLine[], tone: Tone, rng: () => number): CopyLine {
  const matching = lines.filter((l) => l.tone.includes(tone));
  const pool = matching.length > 0 ? matching : lines;
  return pool[Math.floor(rng() * pool.length)];
}

export function getRecentIds(history: DailyBox[]): Set<string> {
  const ids = new Set<string>();
  for (const box of history) {
    ids.add(box.watch.id);
    ids.add(box.listen.id);
    ids.add(box.play.id);
    ids.add(box.eat.id);
    ids.add(box.wear.id);
  }
  return ids;
}

function generateTimeline(
  watch: WatchItem,
  listen: ListenItem,
  play: PlayItem,
  eat: EatItem,
  wear: WearItem,
  rng: () => number,
): TimelineSlot[] {
  const slots: TimelineSlot[] = [];

  slots.push({
    time: 'morning',
    activity: `Step out in ${wear.style} style`,
    activityCN: `穿上${wear.styleCN}风格出门`,
    category: 'wear',
  });
  slots.push({
    time: 'morning',
    activity: `Start the day with ${eat.dish}`,
    activityCN: `来一份${eat.dishCN}开启新的一天`,
    category: 'eat',
  });

  slots.push({
    time: 'afternoon',
    activity: `Listen to "${listen.trackTitle}" by ${listen.artist}`,
    activityCN: `听${listen.trackTitleCn} — ${listen.artist}`,
    category: 'listen',
  });

  const playAfternoon = rng() > 0.5;
  if (playAfternoon) {
    slots.push({
      time: 'afternoon',
      activity: `Play ${play.gameTitle}`,
      activityCN: `玩${play.gameTitleCn}`,
      category: 'play',
    });
  }

  slots.push({
    time: 'evening',
    activity: `Enjoy ${eat.dish} for dinner`,
    activityCN: `享用${eat.dishCN}`,
    category: 'eat',
  });
  slots.push({
    time: 'evening',
    activity: `Watch ${watch.titleEn} (${watch.year})`,
    activityCN: `看${watch.titleCn}（${watch.year}）`,
    category: 'watch',
  });

  if (!playAfternoon) {
    slots.push({
      time: 'latenight',
      activity: `Late-night session of ${play.gameTitle}`,
      activityCN: `来一局${play.gameTitleCn}`,
      category: 'play',
    });
  } else {
    slots.push({
      time: 'latenight',
      activity: `Wind down with "${listen.trackTitle}"`,
      activityCN: `睡前听${listen.trackTitleCn}`,
      category: 'listen',
    });
  }

  return slots;
}

export interface GenerateBoxParams {
  date: string;
  mood: Mood | null;
  tone: Tone;
  rerollCount: number;
  watchPool: WatchItem[];
  listenPool: ListenItem[];
  playPool: PlayItem[];
  eatPool: EatItem[];
  wearPool: WearItem[];
  destinyLines: CopyLine[];
  recentHistory: DailyBox[];
}

export function generateBox(params: GenerateBoxParams): DailyBox {
  const {
    date, mood, tone, rerollCount,
    watchPool, listenPool, playPool, eatPool, wearPool,
    destinyLines, recentHistory,
  } = params;

  const baseSeed = dateSeed(date);
  const seed = baseSeed + rerollCount * 7919;
  const rng = mulberry32(seed);

  const chaosRoll = rng();
  const effectiveMood = chaosRoll < 0.15 ? null : mood;

  const excludeIds = getRecentIds(recentHistory);

  const watch = weightedPick(watchPool, effectiveMood, tone, rng, excludeIds);
  const watchBackup = weightedPick(
    watchPool.filter(w => w.id !== watch.id), effectiveMood, tone, rng, excludeIds
  );
  const listen = weightedPick(listenPool, effectiveMood, tone, rng, excludeIds);
  const listenBackup = weightedPick(
    listenPool.filter(l => l.id !== listen.id), effectiveMood, tone, rng, excludeIds
  );
  const play = weightedPick(playPool, effectiveMood, tone, rng, excludeIds);
  const playBackup = weightedPick(
    playPool.filter(p => p.id !== play.id), effectiveMood, tone, rng, excludeIds
  );
  const eat = weightedPick(eatPool, effectiveMood, tone, rng, excludeIds);
  const wear = weightedPick(wearPool, effectiveMood, tone, rng, excludeIds);
  const destinyLine = pickCopyLine(destinyLines, tone, rng);

  const timeline = generateTimeline(watch, listen, play, eat, wear, rng);

  return {
    date, watch, watchBackup, listen, listenBackup, play, playBackup,
    eat, wear, timeline, destinyLine, mood, tone, rerollCount, seed,
  };
}

export function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
