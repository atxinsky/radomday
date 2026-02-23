'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Lang } from '@/lib/types';
import { t, Translations } from '@/lib/i18n';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  tr: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggleLang: () => {},
  tr: t('en'),
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'cn' : 'en'));
  }, []);

  return (
    <LangContext.Provider value={{ lang, toggleLang, tr: t(lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
