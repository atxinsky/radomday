'use client';

import { useState, useEffect } from 'react';
import { DailyBox } from '@/lib/types';
import { getRecentBoxes } from '@/lib/storage';
import { Header } from '@/components/Header';
import { useLang } from '@/contexts/LangContext';
import Link from 'next/link';

export default function HistoryPage() {
  const { lang, tr } = useLang();
  const cn = lang === 'cn';
  const [history, setHistory] = useState<DailyBox[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setHistory(getRecentBoxes(7));
  }, []);

  if (!mounted) {
    return (
      <>
        <Header />
        <main className="max-w-2xl mx-auto px-6 py-12">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 rounded-2xl bg-sand-100 animate-pulse" />
            ))}
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-8 pb-24">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-10 mt-4">
            <h1 className="text-3xl font-semibold tracking-tight text-ink mb-2">
              {tr.last7Days}
            </h1>
            <p className="text-sm text-ink-muted">{tr.history}</p>
          </div>

          {history.length === 0 ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-sand-100 mx-auto flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10 opacity-30">
                  <circle cx="50" cy="50" r="8" fill="#1A1816" />
                  <circle cx="25" cy="25" r="6" fill="#1A1816" />
                  <circle cx="75" cy="75" r="6" fill="#1A1816" />
                </svg>
              </div>
              <p className="text-ink-muted">{tr.noHistory}</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-full border border-sand-800 text-sand-900 text-sm font-medium hover:bg-sand-900 hover:text-sand-50 transition-all"
              >
                {tr.rollDice}
              </Link>
            </div>
          ) : (
            <div className="space-y-4 stagger">
              {history.map((box) => (
                <div
                  key={box.date}
                  className="card p-5 space-y-4"
                >
                  {/* Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-ink-muted">
                      {box.date}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-sand-100 text-ink-muted">
                        {tr.tones[box.tone]}
                      </span>
                      {box.mood && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-sand-100 text-ink-muted">
                          {tr.moods[box.mood]}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Detailed picks */}
                  <div className="space-y-3">
                    {/* Watch */}
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-sand-50">
                      <div className="text-[10px] uppercase tracking-wider text-ink-muted mt-0.5 w-8 shrink-0">
                        {tr.watch}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-ink truncate">
                          {cn ? box.watch.titleCn : box.watch.titleEn}
                        </div>
                        <div className="text-[11px] text-ink-muted truncate">
                          {box.watch.director} · {box.watch.genre} · {box.watch.year}
                        </div>
                      </div>
                    </div>

                    {/* Listen */}
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-sand-50">
                      <div className="text-[10px] uppercase tracking-wider text-ink-muted mt-0.5 w-8 shrink-0">
                        {tr.listen}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-ink truncate">
                          {cn ? box.listen.trackTitleCn : box.listen.trackTitle}
                        </div>
                        <div className="text-[11px] text-ink-muted truncate">
                          {box.listen.artist} · {box.listen.album} · {box.listen.year}
                        </div>
                      </div>
                    </div>

                    {/* Play */}
                    <div className="flex items-start gap-3 p-2.5 rounded-xl bg-sand-50">
                      <div className="text-[10px] uppercase tracking-wider text-ink-muted mt-0.5 w-8 shrink-0">
                        {tr.play}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-ink truncate">
                          {cn ? box.play.gameTitleCn : box.play.gameTitle}
                        </div>
                        <div className="text-[11px] text-ink-muted truncate">
                          {box.play.developer} · {box.play.platforms.join(', ')} · {box.play.year}
                        </div>
                      </div>
                    </div>

                    {/* Eat + Wear in a row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-start gap-2 p-2.5 rounded-xl bg-sand-50">
                        <div className="text-[10px] uppercase tracking-wider text-ink-muted mt-0.5 shrink-0">
                          {tr.eat}
                        </div>
                        <div className="text-xs font-medium text-ink truncate">
                          {cn ? box.eat.dishCN : box.eat.dish}
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-2.5 rounded-xl bg-sand-50">
                        <div className="text-[10px] uppercase tracking-wider text-ink-muted mt-0.5 shrink-0">
                          {tr.wear}
                        </div>
                        <div className="text-xs font-medium text-ink truncate">
                          {cn ? box.wear.styleCN : box.wear.style}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fortune */}
                  <div className="text-xs text-ink-muted italic text-center">
                    &ldquo;{cn ? box.destinyLine.cn : box.destinyLine.en}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
