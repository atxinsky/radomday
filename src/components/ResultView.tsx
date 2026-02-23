'use client';

import { DailyBox } from '@/lib/types';
import { useLang } from '@/contexts/LangContext';

interface Props {
  box: DailyBox;
}

const categoryMeta = {
  watch: { icon: 'W', label: 'Watch', labelCN: '看' },
  listen: { icon: 'L', label: 'Listen', labelCN: '听' },
  play: { icon: 'P', label: 'Play', labelCN: '玩' },
  eat: { icon: 'E', label: 'Eat', labelCN: '吃' },
  wear: { icon: 'O', label: 'Wear', labelCN: '穿' },
};

export function ResultView({ box }: Props) {
  const { lang, tr } = useLang();
  const cn = lang === 'cn';

  const cards = [
    {
      key: 'watch',
      label: tr.watch,
      title: cn ? box.watch.titleCN : box.watch.title,
      subtitle: `${box.watch.genre} · ${box.watch.year}`,
      vibe: cn ? box.watch.vibeCN : box.watch.vibe,
      backup: cn ? box.watchBackup.titleCN : box.watchBackup.title,
    },
    {
      key: 'listen',
      label: tr.listen,
      title: cn ? box.listen.titleCN : box.listen.title,
      subtitle: `${box.listen.artist} · ${box.listen.genre}`,
      vibe: cn ? box.listen.vibeCN : box.listen.vibe,
      backup: cn ? box.listenBackup.titleCN : box.listenBackup.title,
    },
    {
      key: 'play',
      label: tr.play,
      title: cn ? box.play.titleCN : box.play.title,
      subtitle: `${box.play.genre} · ${box.play.platform}`,
      vibe: cn ? box.play.vibeCN : box.play.vibe,
      backup: cn ? box.playBackup.titleCN : box.playBackup.title,
    },
    {
      key: 'eat',
      label: tr.eat,
      title: cn ? box.eat.dishCN : box.eat.dish,
      subtitle: cn ? box.eat.cuisineCN : box.eat.cuisine,
      vibe: cn ? box.eat.vibeCN : box.eat.vibe,
      backup: cn ? box.eat.backupCN : box.eat.backup,
    },
    {
      key: 'wear',
      label: tr.wear,
      title: cn ? box.wear.styleCN : box.wear.style,
      subtitle: cn ? `${box.wear.topCN} · ${box.wear.bottomCN}` : `${box.wear.top} · ${box.wear.bottom}`,
      vibe: cn ? box.wear.vibeCN : box.wear.vibe,
      backup: cn ? box.wear.backupCN : box.wear.backup,
    },
  ];

  const timeSlots = [
    { key: 'morning' as const, label: tr.morning },
    { key: 'afternoon' as const, label: tr.afternoon },
    { key: 'evening' as const, label: tr.evening },
    { key: 'latenight' as const, label: tr.latenight },
  ];

  return (
    <div className="space-y-12 animate-fade-up">
      {/* Category Cards */}
      <section className="space-y-4 stagger">
        {cards.map((card) => (
          <div
            key={card.key}
            className="card p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              {/* Category indicator */}
              <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                  {categoryMeta[card.key as keyof typeof categoryMeta]?.icon}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                {/* Label */}
                <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                  {card.label}
                </div>
                {/* Title */}
                <div className="text-lg font-semibold text-ink leading-tight">
                  {card.title}
                </div>
                {/* Subtitle */}
                <div className="text-sm text-ink-light mt-0.5">
                  {card.subtitle}
                </div>
                {/* Vibe / Reason */}
                <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                  &ldquo;{card.vibe}&rdquo;
                </div>
                {/* Backup */}
                <div className="mt-2 text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{card.backup}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-6 text-center">
          {tr.timeline}
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-sand-200" />

          <div className="space-y-6 stagger">
            {timeSlots.map((slot) => {
              const activities = box.timeline.filter(t => t.time === slot.key);
              if (activities.length === 0) return null;
              return (
                <div key={slot.key} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-[15px] top-1 w-[9px] h-[9px] rounded-full bg-sand-400 border-2 border-sand-50" />
                  {/* Time label */}
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    {slot.label}
                  </div>
                  {/* Activities */}
                  <div className="space-y-1">
                    {activities.map((act, i) => (
                      <div key={i} className="text-sm text-ink leading-relaxed">
                        {cn ? act.activityCN : act.activity}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destiny / Fortune */}
      <section className="text-center py-6 border-t border-sand-200">
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted mb-3">
          {tr.destiny}
        </div>
        <div className="text-base text-ink italic leading-relaxed max-w-md mx-auto">
          &ldquo;{cn ? box.destinyLine.cn : box.destinyLine.en}&rdquo;
        </div>
      </section>
    </div>
  );
}
