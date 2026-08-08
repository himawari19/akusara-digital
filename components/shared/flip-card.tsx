"use client";

import * as React from "react";

interface FlipCardProps {
  frontLabel: string;
  frontEmojis: string;
  backLabel: string;
  backEmojis: string;
}

export function FlipCard({
  frontLabel,
  frontEmojis,
  backLabel,
  backEmojis,
}: FlipCardProps) {
  return (
    <div
      className="flip-card mb-6"
      tabIndex={0}
      role="button"
      aria-label={`${frontLabel}: ${frontEmojis}. ${backLabel}: ${backEmojis}`}
    >
      <div className="flip-inner">
        <div className="flip-face bg-brand text-ivory">
          <span className="font-extrabold text-xl tracking-[0.04em]">
            {frontLabel}
          </span>
          <span className="text-[42px] tracking-[0.15em]">{frontEmojis}</span>
        </div>
        <div className="flip-face flip-back bg-white">
          <span className="font-extrabold text-xl tracking-[0.04em]">
            {backLabel}
          </span>
          <span className="text-[42px] tracking-[0.15em]">{backEmojis}</span>
        </div>
      </div>
    </div>
  );
}
