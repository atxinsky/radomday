'use client';

import { LangProvider } from '@/contexts/LangContext';
import { ReactNode } from 'react';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
