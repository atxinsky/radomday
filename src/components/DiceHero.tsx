'use client';

import { useState, useCallback, useRef, useEffect, useId } from 'react';

interface Props {
  onRoll: () => void;
  disabled: boolean;
  isRolling: boolean;
  label: string;
}

/* Pip positions for each die face 1–6 */
const PIPS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[30, 30], [70, 70]],
  3: [[30, 30], [50, 50], [70, 70]],
  4: [[30, 30], [70, 30], [30, 70], [70, 70]],
  5: [[30, 30], [70, 30], [50, 50], [30, 70], [70, 70]],
  6: [[30, 26], [70, 26], [30, 50], [70, 50], [30, 74], [70, 74]],
};

function Face({ n, side }: { n: number; side: string }) {
  const uid = useId();
  return (
    <div className={`dice3d-face ${side}`}>
      <svg viewBox="0 0 100 100" className="w-3/5 h-3/5" aria-hidden="true">
        <defs>
          <radialGradient id={uid} cx="38%" cy="38%" r="52%">
            <stop offset="0%" stopColor="#5C5548" />
            <stop offset="100%" stopColor="#3D3830" />
          </radialGradient>
        </defs>
        {PIPS[n].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={8} fill={`url(#${uid})`} />
        ))}
      </svg>
    </div>
  );
}

function CubeFaces() {
  return (
    <>
      <Face n={5} side="dice3d-front" />
      <Face n={2} side="dice3d-back" />
      <Face n={3} side="dice3d-right" />
      <Face n={4} side="dice3d-left" />
      <Face n={1} side="dice3d-top" />
      <Face n={6} side="dice3d-bottom" />
    </>
  );
}

export function DiceHero({ onRoll, disabled, isRolling, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const baseX = -18;
  const baseY = 28;
  const [hov, setHov] = useState(false);
  const raf = useRef(0);

  const roll = useCallback(() => {
    if (!disabled && !isRolling) onRoll();
  }, [disabled, isRolling, onRoll]);

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        roll();
      }
    },
    [roll],
  );

  /* Pointer-based parallax tilt */
  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (isRolling || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setTx(dy * -14);
        setTy(dx * 14);
      });
    },
    [isRolling],
  );

  const onEnter = useCallback(() => {
    if (!isRolling) setHov(true);
  }, [isRolling]);

  const onLeave = useCallback(() => {
    setHov(false);
    cancelAnimationFrame(raf.current);
    setTx(0);
    setTy(0);
  }, []);

  /* Mobile touch tilt (softer multiplier) */
  const onTouch = useCallback(
    (e: React.TouchEvent) => {
      if (isRolling || !ref.current) return;
      const t = e.touches[0];
      const r = ref.current.getBoundingClientRect();
      const dx = (t.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (t.clientY - r.top - r.height / 2) / (r.height / 2);
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setTx(dy * -8);
        setTy(dx * 8);
      });
    },
    [isRolling],
  );

  const resetTilt = useCallback(() => {
    cancelAnimationFrame(raf.current);
    setTx(0);
    setTy(0);
  }, []);

  useEffect(() => {
    if (isRolling) {
      setHov(false);
      resetTilt();
    }
  }, [isRolling, resetTilt]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <div className="flex flex-col items-center gap-10">
      {/* 3-D dice */}
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label="Roll dice"
        aria-disabled={disabled || isRolling || undefined}
        onClick={roll}
        onKeyDown={onKey}
        onPointerMove={onMove}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        onTouchMove={onTouch}
        onTouchEnd={resetTilt}
        className={`dice3d-scene relative outline-none select-none rounded-2xl
          focus-visible:ring-2 focus-visible:ring-sand-400 focus-visible:ring-offset-4
          ${disabled && !isRolling ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
        style={{ perspective: '900px' }}
      >
        {/* Ground shadow */}
        <div
          className={`dice3d-shadow ${isRolling ? 'dice3d-shadow-roll' : 'dice3d-shadow-idle'}`}
          aria-hidden="true"
        />

        {/* Hover glow */}
        <div
          className="absolute inset-[-8px] rounded-3xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: hov && !isRolling ? 1 : 0,
            boxShadow: '0 0 40px rgba(204,187,156,0.2), 0 0 80px rgba(204,187,156,0.08)',
          }}
          aria-hidden="true"
        />

        {/* Float wrapper (CSS translate property — no conflict with transform tilt) */}
        <div className={`dice3d-3d ${isRolling ? '' : 'dice3d-float'}`}>
          {/* Tilt wrapper */}
          <div
            className="dice3d-3d"
            style={{
              transform: isRolling
                ? 'none'
                : `rotateX(${baseX + tx}deg) rotateY(${baseY + ty}deg)`,
              transition: isRolling
                ? 'none'
                : hov
                  ? 'transform 80ms linear'
                  : 'transform 600ms cubic-bezier(.22,1,.36,1)',
              willChange: hov ? 'transform' : undefined,
            }}
          >
            {/* Cube */}
            <div className={`dice3d-cube ${isRolling ? 'dice3d-roll' : ''}`}>
              <CubeFaces />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={roll}
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

/** Compact rolling cube shown during reroll loading */
export function DiceCubeMini() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="dice3d-scene-sm" style={{ perspective: '600px' }}>
        <div className="dice3d-cube dice3d-roll-loop">
          <CubeFaces />
        </div>
      </div>
    </div>
  );
}
