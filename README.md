# RadomDay - Tonight's Blind Box

One tap to decide tonight's entertainment. Movies, music, games -- all in one daily blind box.

## Features

- **Daily Blind Box**: Get a curated Watch + Listen + Play recommendation every day
- **Mood & Tone Selection**: Optional mood (Chill/Hyped/Sad/Romantic/Adventurous/Spooky) and tone (Savage/Warm/Chaotic) selectors
- **Destiny & Taboo Lines**: Fun fortune-cookie-style lines with each box
- **Smart Randomness**: Weighted picks based on mood/tone, deterministic daily seed, anti-repeat for last 7 days
- **1 Free Open + 2 Rerolls/Day**: Persisted in localStorage by date
- **Share Card**: Download a shareable image card for social posting
- **7-Day History**: Browse your past boxes
- **Bilingual**: English/Chinese toggle
- **Dark Neon UI**: Mobile-first, stunning dark theme with neon accents

## Content

- 115 Watch items (movies + TV series)
- 120 Listen items (songs + playlists)
- 120 Play items (games + activities)
- 68 Destiny lines
- 67 Taboo lines

## Tech Stack

- Next.js 16 + TypeScript
- Tailwind CSS 4
- html2canvas-pro (share card generation)
- localStorage for state persistence
- No backend required -- fully static

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

```bash
npx vercel --yes --prod
```

## Project Structure

```
src/
  app/           # Next.js app router pages
    page.tsx     # Home (mood/tone selector + open box)
    history/     # 7-day history page
  components/    # UI components
  contexts/      # Language context
  data/          # Seed data (watch, listen, play, copywriting)
  lib/           # Core logic (algorithm, storage, types, i18n)
```
