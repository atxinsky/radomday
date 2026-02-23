'use client';

import { useLang } from '@/contexts/LangContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const { lang, toggleLang, tr } = useLang();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-sand-50/80 border-b border-sand-200/60">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-semibold tracking-tight text-ink">
            {tr.appName}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex gap-1">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                pathname === '/'
                  ? 'bg-sand-900 text-sand-50'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tr.home}
            </Link>
            <Link
              href="/history"
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                pathname === '/history'
                  ? 'bg-sand-900 text-sand-50'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tr.history}
            </Link>
          </nav>

          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-sand-200 text-ink-light hover:border-sand-400 transition-all"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
}
