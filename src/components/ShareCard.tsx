'use client';

import { useRef, useCallback } from 'react';
import { DailyBox } from '@/lib/types';
import { useLang } from '@/contexts/LangContext';

interface Props {
  box: DailyBox;
}

export function ShareCard({ box }: Props) {
  const { lang, tr } = useLang();
  const cardRef = useRef<HTMLDivElement>(null);
  const cn = lang === 'cn';

  const handleDownload = useCallback(async () => {
    const card = cardRef.current;
    if (!card) return;

    try {
      const { default: html2canvas } = await import('html2canvas-pro');
      const canvas = await html2canvas(card, {
        backgroundColor: '#FAFAF7',
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `radomday-${box.date}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch {
      const text = [
        `${tr.shareTitle} ${box.date}`,
        '',
        `${tr.watch}: ${cn ? box.watch.titleCn : box.watch.titleEn} (${box.watch.year})`,
        `  ${tr.director}: ${box.watch.director} | ${tr.cast}: ${box.watch.cast.slice(0, 2).join(', ')}`,
        '',
        `${tr.listen}: ${cn ? box.listen.trackTitleCn : box.listen.trackTitle} — ${box.listen.artist}`,
        `  ${tr.album}: ${box.listen.album} (${box.listen.year})`,
        '',
        `${tr.play}: ${cn ? box.play.gameTitleCn : box.play.gameTitle} (${box.play.year})`,
        `  ${tr.developer}: ${box.play.developer} | ${tr.platforms}: ${box.play.platforms.join(', ')}`,
        '',
        `${tr.eat}: ${cn ? box.eat.dishCN : box.eat.dish}`,
        `${tr.wear}: ${cn ? box.wear.styleCN : box.wear.style}`,
        '',
        `"${cn ? box.destinyLine.cn : box.destinyLine.en}"`,
      ].join('\n');
      await navigator.clipboard.writeText(text);
      alert(cn ? '已复制到剪贴板' : 'Copied to clipboard!');
    }
  }, [box, tr, cn]);

  const items = [
    {
      label: tr.watch,
      value: cn ? box.watch.titleCn : box.watch.titleEn,
      meta: `${box.watch.director} · ${box.watch.year}`,
    },
    {
      label: tr.listen,
      value: `${cn ? box.listen.trackTitleCn : box.listen.trackTitle} — ${box.listen.artist}`,
      meta: `${box.listen.album} · ${box.listen.year}`,
    },
    {
      label: tr.play,
      value: cn ? box.play.gameTitleCn : box.play.gameTitle,
      meta: `${box.play.developer} · ${box.play.year}`,
    },
    {
      label: tr.eat,
      value: cn ? box.eat.dishCN : box.eat.dish,
      meta: cn ? box.eat.cuisineCN : box.eat.cuisine,
    },
    {
      label: tr.wear,
      value: cn ? box.wear.styleCN : box.wear.style,
      meta: cn ? `${box.wear.topCN} + ${box.wear.bottomCN}` : `${box.wear.top} + ${box.wear.bottom}`,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Card preview */}
      <div
        ref={cardRef}
        className="share-card-bg rounded-2xl p-6 sm:p-8 space-y-6 border border-sand-200"
      >
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="text-xl font-semibold tracking-tight text-ink">
            RadomDay
          </div>
          <div className="text-xs text-ink-muted font-mono">{box.date}</div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.label} className="py-2 border-b border-sand-200/60 last:border-0">
              <div className="flex items-center gap-3">
                <div className="text-[10px] uppercase tracking-[0.15em] text-ink-muted w-12 shrink-0">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-ink truncate">
                  {item.value}
                </div>
              </div>
              <div className="pl-12 mt-0.5">
                <div className="text-[11px] text-ink-muted truncate">
                  {item.meta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fortune */}
        <div className="text-center pt-3 border-t border-sand-200/60">
          <div className="text-sm text-ink-light italic">
            &ldquo;{cn ? box.destinyLine.cn : box.destinyLine.en}&rdquo;
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[10px] text-ink-muted tracking-wider">
          radomday.vercel.app
        </div>
      </div>

      {/* Download */}
      <button
        onClick={handleDownload}
        className="w-full py-3 rounded-full border border-sand-800 text-sand-900 text-sm font-medium tracking-wide hover:bg-sand-900 hover:text-sand-50 transition-all"
      >
        {tr.download}
      </button>
    </div>
  );
}
