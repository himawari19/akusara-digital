import type { ProductVisual } from "@/lib/data/products";

interface ProductVisualProps {
  visual: ProductVisual;
  className?: string;
}

export function ProductVisual({ visual, className }: ProductVisualProps) {
  return (
    <div className={className}>
      <div className="pv-browser">
        <div className="flex">
          <span className="pv-dots" />
          <span className="pv-dots" />
          <span className="pv-dots" />
        </div>
        <div className="pv-screen">
          <div className="pv-logo">{visual.logo}</div>
          <div className="pv-bars">
            {visual.bars.map((w, i) => (
              <i key={i} style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="pv-bars pv-row">
            {visual.row.map((w, i) => (
              <i key={i} style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="pv-btn" />
        </div>
      </div>
    </div>
  );
}
