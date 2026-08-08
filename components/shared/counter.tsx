"use client";

import * as React from "react";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ target, duration = 1200, suffix = "", className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion: show final value
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = null;
            let startTime: number | null = null;

            const frame = (ts: number) => {
              if (startTime === null) startTime = ts;
              const p = Math.min((ts - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
