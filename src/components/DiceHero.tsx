'use client';

import { useState, useCallback } from 'react';

interface Props {
  onRoll: () => void;
  disabled: boolean;
  isRolling: boolean;
  label: string;
}

export function DiceHero({ onRoll, disabled, isRolling, label }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    if (disabled || isRolling) return;
    onRoll();
  }, [disabled, isRolling, onRoll]);

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Dice */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={disabled || isRolling}
        className="relative group focus:outline-none"
        aria-label="Roll dice"
      >
        <div
          className={`
            w-40 h-40 sm:w-48 sm:h-48 rounded-3xl
            bg-white border border-sand-200
            flex items-center justify-center
            cursor-pointer select-none
            transition-all duration-300
            ${isRolling ? 'dice-rolling' : 'dice-idle'}
            ${hovered && !isRolling ? 'scale-105' : ''}
            ${disabled && !isRolling ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          style={{ perspective: '600px', transformStyle: 'preserve-3d' }}
        >
          {/* Dice face - dots pattern */}
          <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
            {/* Center dot */}
            <circle cx="50" cy="50" r="8" fill="#1A1816" opacity="0.8" />
            {/* Corner dots */}
            <circle cx="25" cy="25" r="6" fill="#1A1816" opacity="0.6" />
            <circle cx="75" cy="25" r="6" fill="#1A1816" opacity="0.6" />
            <circle cx="25" cy="75" r="6" fill="#1A1816" opacity="0.6" />
            <circle cx="75" cy="75" r="6" fill="#1A1816" opacity="0.6" />
          </svg>
        </div>

        {/* Subtle glow ring on hover */}
        <div
          className={`
            absolute inset-0 rounded-3xl
            transition-opacity duration-500
            pointer-events-none
            ${hovered && !isRolling ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ boxShadow: '0 0 0 2px rgba(204, 187, 156, 0.4), 0 20px 60px rgba(204, 187, 156, 0.2)' }}
        />
      </button>

      {/* CTA text */}
      <button
        onClick={handleClick}
        disabled={disabled || isRolling}
        className={`
          text-sm tracking-[0.2em] uppercase font-medium
          px-8 py-3 rounded-full
          border border-sand-800 text-sand-900
          transition-all duration-300
          ${disabled && !isRolling ? 'opacity-40 cursor-not-allowed' : 'hover:bg-sand-900 hover:text-sand-50'}
        `}
      >
        {isRolling ? '...' : label}
      </button>
    </div>
  );
}
