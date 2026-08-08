"use client";

import * as React from "react";

interface ParallaxLayer {
  className: string;
  depth: number;
}

const layers: ParallaxLayer[] = [
  { className: "hero-orb orb-red", depth: 0.35 },
  { className: "hero-orb orb-ivory", depth: 0.55 },
  { className: "hero-square sq-1", depth: 0.45 },
  { className: "hero-square sq-2", depth: 0.25 },
  { className: "hero-ring", depth: 0.3 },
  { className: "hero-grid", depth: 0.1 },
];

export function ParallaxHeroBg() {
  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const layerRefs = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    // Respect reduced motion: no parallax
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ticking = { current: false };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.5) return; // hero off-screen: stop
        layerRefs.current.forEach((el, i) => {
          if (!el) return;
          const depth = layers[i].depth;
          const ty = y * depth * -0.6;
          el.style.transform = `translate3d(0, ${ty}px, 0)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={bgRef} className="hero-bg" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          className={layer.className}
        />
      ))}
    </div>
  );
}
