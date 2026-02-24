'use client';

import { DailyBox, WatchItem, ListenItem, PlayItem } from '@/lib/types';
import { useLang } from '@/contexts/LangContext';

interface Props {
  box: DailyBox;
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-sand-300 text-sand-700 hover:bg-sand-800 hover:text-sand-50 hover:border-sand-800 transition-all"
    >
      {label}
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 text-sm">
      <span className="text-ink-muted shrink-0">{label}</span>
      <span className="text-ink-light">{value}</span>
    </div>
  );
}

function WatchLinks({ item }: { item: WatchItem }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {item.imdbUrl && <ExternalLink href={item.imdbUrl} label="IMDb" />}
      {item.doubanUrl && <ExternalLink href={item.doubanUrl} label="Douban" />}
    </div>
  );
}

function ListenLinks({ item }: { item: ListenItem }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {item.spotifyUrl && <ExternalLink href={item.spotifyUrl} label="Spotify" />}
      {item.appleMusicUrl && <ExternalLink href={item.appleMusicUrl} label="Apple Music" />}
      {item.youtubeMusicUrl && <ExternalLink href={item.youtubeMusicUrl} label="YouTube Music" />}
    </div>
  );
}

function PlayLinks({ item }: { item: PlayItem }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {item.steamUrl && <ExternalLink href={item.steamUrl} label="Steam" />}
      {item.metacriticUrl && <ExternalLink href={item.metacriticUrl} label="Metacritic" />}
      {item.ignUrl && <ExternalLink href={item.ignUrl} label="IGN" />}
    </div>
  );
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
        {/* WATCH Card */}
        <div className="card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                {categoryMeta.watch.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                {tr.watch}
              </div>
              <div className="text-lg font-semibold text-ink leading-tight">
                {cn ? box.watch.titleCn : box.watch.titleEn}
              </div>
              <div className="text-sm text-ink-light mt-0.5">
                {box.watch.genre} · {box.watch.year}
              </div>
              <div className="mt-2.5 space-y-1">
                <MetaRow label={tr.director} value={box.watch.director} />
                <MetaRow label={tr.cast} value={box.watch.cast.slice(0, 3).join(', ')} />
              </div>
              <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                &ldquo;{cn ? box.watch.vibeCN : box.watch.vibe}&rdquo;
              </div>
              <WatchLinks item={box.watch} />
              <div className="mt-3 pt-3 border-t border-sand-100">
                <div className="text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{cn ? box.watchBackup.titleCn : box.watchBackup.titleEn}</span>
                  <span className="text-ink-muted/60"> ({box.watchBackup.director}, {box.watchBackup.year})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LISTEN Card */}
        <div className="card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                {categoryMeta.listen.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                {tr.listen}
              </div>
              <div className="text-lg font-semibold text-ink leading-tight">
                {cn ? box.listen.trackTitleCn : box.listen.trackTitle}
              </div>
              <div className="text-sm text-ink-light mt-0.5">
                {box.listen.artist} · {box.listen.genre}
              </div>
              <div className="mt-2.5 space-y-1">
                <MetaRow label={tr.album} value={box.listen.album} />
                <MetaRow label={tr.year} value={String(box.listen.year)} />
              </div>
              <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                &ldquo;{cn ? box.listen.vibeCN : box.listen.vibe}&rdquo;
              </div>
              <ListenLinks item={box.listen} />
              <div className="mt-3 pt-3 border-t border-sand-100">
                <div className="text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{cn ? box.listenBackup.trackTitleCn : box.listenBackup.trackTitle}</span>
                  <span className="text-ink-muted/60"> ({box.listenBackup.artist}, {box.listenBackup.year})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PLAY Card */}
        <div className="card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                {categoryMeta.play.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                {tr.play}
              </div>
              <div className="text-lg font-semibold text-ink leading-tight">
                {cn ? box.play.gameTitleCn : box.play.gameTitle}
              </div>
              <div className="text-sm text-ink-light mt-0.5">
                {box.play.genre} · {box.play.year}
              </div>
              <div className="mt-2.5 space-y-1">
                <MetaRow label={tr.developer} value={box.play.developer} />
                <MetaRow label={tr.platforms} value={box.play.platforms.join(', ')} />
              </div>
              <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                &ldquo;{cn ? box.play.vibeCN : box.play.vibe}&rdquo;
              </div>
              <PlayLinks item={box.play} />
              <div className="mt-3 pt-3 border-t border-sand-100">
                <div className="text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{cn ? box.playBackup.gameTitleCn : box.playBackup.gameTitle}</span>
                  <span className="text-ink-muted/60"> ({box.playBackup.developer}, {box.playBackup.year})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EAT Card */}
        <div className="card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                {categoryMeta.eat.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                {tr.eat}
              </div>
              <div className="text-lg font-semibold text-ink leading-tight">
                {cn ? box.eat.dishCN : box.eat.dish}
              </div>
              <div className="text-sm text-ink-light mt-0.5">
                {cn ? box.eat.cuisineCN : box.eat.cuisine}
              </div>
              <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                &ldquo;{cn ? box.eat.vibeCN : box.eat.vibe}&rdquo;
              </div>
              <div className="mt-3 pt-3 border-t border-sand-100">
                <div className="text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{cn ? box.eat.backupCN : box.eat.backup}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WEAR Card */}
        <div className="card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sand-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-sand-600 uppercase tracking-wider">
                {categoryMeta.wear.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1">
                {tr.wear}
              </div>
              <div className="text-lg font-semibold text-ink leading-tight">
                {cn ? box.wear.styleCN : box.wear.style}
              </div>
              <div className="text-sm text-ink-light mt-0.5">
                {cn ? `${box.wear.topCN} · ${box.wear.bottomCN}` : `${box.wear.top} · ${box.wear.bottom}`}
              </div>
              <div className="text-sm text-ink-muted mt-2.5 italic leading-relaxed">
                &ldquo;{cn ? box.wear.vibeCN : box.wear.vibe}&rdquo;
              </div>
              <div className="mt-3 pt-3 border-t border-sand-100">
                <div className="text-xs text-ink-muted">
                  {tr.backup}: <span className="text-ink-light">{cn ? box.wear.backupCN : box.wear.backup}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-6 text-center">
          {tr.timeline}
        </h3>
        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-sand-200" />
          <div className="space-y-6 stagger">
            {timeSlots.map((slot) => {
              const activities = box.timeline.filter(t => t.time === slot.key);
              if (activities.length === 0) return null;
              return (
                <div key={slot.key} className="relative pl-12">
                  <div className="absolute left-[15px] top-1 w-[9px] h-[9px] rounded-full bg-sand-400 border-2 border-sand-50" />
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted mb-1.5">
                    {slot.label}
                  </div>
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
