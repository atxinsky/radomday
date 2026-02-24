'use client';

import { useState, useEffect, useCallback } from 'react';
import { Mood, Tone, DailyBox } from '@/lib/types';
import { generateBox, getTodayString } from '@/lib/algorithm';
import { getDayState, saveDayState, saveToHistory, getHistory } from '@/lib/storage';
import { watchPool } from '@/data/watch';
import { listenPool } from '@/data/listen';
import { playPool } from '@/data/play';
import { eatPool } from '@/data/eat';
import { wearPool } from '@/data/wear';
import { destinyLines } from '@/data/copywriting';
import { Header } from '@/components/Header';
import { DiceHero, DiceCubeMini } from '@/components/DiceHero';
import { ResultView } from '@/components/ResultView';
import { ShareCard } from '@/components/ShareCard';
import { useLang } from '@/contexts/LangContext';

const MAX_REROLLS = 2;

export default function Home() {
  const { tr } = useLang();
  const [mood, setMood] = useState<Mood | null>(null);
  const [tone, setTone] = useState<Tone>('warm');
  const [box, setBox] = useState<DailyBox | null>(null);
  const [opened, setOpened] = useState(false);
  const [rerollsUsed, setRerollsUsed] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const today = getTodayString();
    const state = getDayState(today);
    if (state.opened && state.box) {
      setBox(state.box);
      setOpened(true);
      setRerollsUsed(state.rerollsUsed);
      setMood(state.box.mood);
      setTone(state.box.tone);
    }
  }, []);

  const doGenerate = useCallback((rerollCount: number) => {
    const today = getTodayString();
    const history = getHistory();
    const recentHistory = history.filter((h) => h.date !== today);

    return generateBox({
      date: today,
      mood,
      tone,
      rerollCount,
      watchPool: watchPool as DailyBox['watch'][],
      listenPool: listenPool as DailyBox['listen'][],
      playPool: playPool as DailyBox['play'][],
      eatPool: eatPool as DailyBox['eat'][],
      wearPool: wearPool as DailyBox['wear'][],
      destinyLines,
      recentHistory,
    });
  }, [mood, tone]);

  const handleRoll = useCallback(() => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      const newBox = doGenerate(0);
      setBox(newBox);
      setOpened(true);
      setRerollsUsed(0);
      const today = getTodayString();
      saveToHistory(newBox);
      saveDayState(today, { opened: true, rerollsUsed: 0, box: newBox });
      setIsRolling(false);
    }, 1200);
  }, [isRolling, doGenerate]);

  const handleReroll = useCallback(() => {
    if (isRolling || rerollsUsed >= MAX_REROLLS) return;
    setIsRolling(true);

    const newRerollCount = rerollsUsed + 1;

    setTimeout(() => {
      const newBox = doGenerate(newRerollCount);
      setBox(newBox);
      setRerollsUsed(newRerollCount);
      const today = getTodayString();
      saveToHistory(newBox);
      saveDayState(today, { opened: true, rerollsUsed: newRerollCount, box: newBox });
      setIsRolling(false);
    }, 1200);
  }, [isRolling, rerollsUsed, doGenerate]);

  // Mood pills
  const moods: { value: Mood; label: string }[] = [
    { value: 'chill', label: tr.moods.chill },
    { value: 'hyped', label: tr.moods.hyped },
    { value: 'sad', label: tr.moods.sad },
    { value: 'romantic', label: tr.moods.romantic },
    { value: 'adventurous', label: tr.moods.adventurous },
    { value: 'spooky', label: tr.moods.spooky },
  ];

  const tones: { value: Tone; label: string }[] = [
    { value: 'warm', label: tr.tones.warm },
    { value: 'savage', label: tr.tones.savage },
    { value: 'chaotic', label: tr.tones.chaotic },
  ];

  if (!mounted) {
    return (
      <>
        <Header />
        <main className="max-w-2xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="w-40 h-40 rounded-3xl bg-sand-100 animate-pulse" />
            <div className="w-48 h-5 rounded-full bg-sand-100 animate-pulse" />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-8 pb-24">
        {!opened ? (
          <div className="animate-fade-in">
            {/* Hero section */}
            <div className="text-center mb-16 mt-8 sm:mt-12">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink mb-4 leading-tight">
                {tr.tagline}
              </h1>
              <p className="text-base sm:text-lg text-ink-light max-w-md mx-auto leading-relaxed">
                {tr.subtitle}
              </p>
            </div>

            {/* Mood selector */}
            <div className="mb-8">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-3 text-center">
                {tr.moodQuestion}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setMood(null)}
                  className={`px-4 py-2 rounded-full text-sm transition-all border ${
                    mood === null
                      ? 'bg-sand-900 text-sand-50 border-sand-900'
                      : 'border-sand-200 text-ink-light hover:border-sand-400'
                  }`}
                >
                  {tr.skipMood}
                </button>
                {moods.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMood(m.value)}
                    className={`px-4 py-2 rounded-full text-sm transition-all border ${
                      mood === m.value
                        ? 'bg-sand-900 text-sand-50 border-sand-900'
                        : 'border-sand-200 text-ink-light hover:border-sand-400'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone selector */}
            <div className="mb-16">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-3 text-center">
                {tr.toneQuestion}
              </div>
              <div className="flex justify-center gap-2">
                {tones.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTone(t.value)}
                    className={`px-5 py-2 rounded-full text-sm transition-all border ${
                      tone === t.value
                        ? 'bg-sand-900 text-sand-50 border-sand-900'
                        : 'border-sand-200 text-ink-light hover:border-sand-400'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dice */}
            <DiceHero
              onRoll={handleRoll}
              disabled={false}
              isRolling={isRolling}
              label={tr.rollDice}
            />
          </div>
        ) : (
          <div className="space-y-10">
            {isRolling ? (
              <DiceCubeMini />
            ) : (
              box && (
                <>
                  {/* Date badge */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-sand-200 text-xs font-mono text-ink-muted">
                      {box.date}
                    </span>
                  </div>

                  {/* Results */}
                  <ResultView box={box} />

                  {/* Reroll */}
                  <div className="text-center space-y-2">
                    <button
                      onClick={handleReroll}
                      disabled={rerollsUsed >= MAX_REROLLS || isRolling}
                      className={`
                        px-8 py-3 rounded-full text-sm font-medium tracking-wide
                        border transition-all
                        ${rerollsUsed >= MAX_REROLLS
                          ? 'border-sand-200 text-ink-muted cursor-not-allowed'
                          : 'border-sand-800 text-sand-900 hover:bg-sand-900 hover:text-sand-50'
                        }
                      `}
                    >
                      {tr.reroll}
                    </button>
                    <div className="text-xs text-ink-muted">
                      {rerollsUsed >= MAX_REROLLS
                        ? tr.noRerolls
                        : tr.rerollsLeft(MAX_REROLLS - rerollsUsed)}
                    </div>
                  </div>

                  {/* Share */}
                  <ShareCard box={box} />
                </>
              )
            )}
          </div>
        )}
      </main>
    </>
  );
}
