const PHASES = [
  {
    phase: "PHASE 1",
    title: "THE FOUNDATION",
    status: "LIVE",
    items: ["Wallet Launch", "Multi-chain support (50+)", "QR payments"],
  },
  {
    phase: "PHASE 2",
    title: "THE ECOSYSTEM",
    status: "IN PROGRESS",
    items: ["Built-in Swap", "Fiat On/Off Ramp", "Affiliate System"],
  },
  {
    phase: "PHASE 3",
    title: "THE EXPANSION",
    status: "COMING SOON",
    items: ["Polymarket Integration", "Market Analysis Hub", "Hardware Wallet Support"],
  },
  {
    phase: "PHASE 4",
    title: "THE FUTURE",
    status: "PLANNED",
    items: ["AI Token Recommendations", "Advanced Trading Features", "Global Expansion"],
  },
];

const STATUS_COLORS: Record<string, string> = {
  LIVE: "text-green-400 border-green-400/30 bg-green-400/10",
  "IN PROGRESS": "text-primary border-primary/30 bg-primary/10",
  "COMING SOON": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  PLANNED: "text-neutral-400 border-neutral-600 bg-neutral-800",
};

export default function Roadmap() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden" id="roadmap">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-['Bebas_Neue']">THE ROAD AHEAD</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Horizontal scrollable glass cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}>
          {PHASES.map((p, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-72 md:w-80 rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Red glow for active */}
              {i === 1 && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20 pointer-events-none" />
              )}

              {/* Phase label */}
              <div className="text-neutral-500 font-bold tracking-widest text-xs mb-3">{p.phase}</div>

              {/* Status badge */}
              <span className={`inline-block text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border mb-5 ${STATUS_COLORS[p.status]}`}>
                {p.status}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-['Bebas_Neue'] tracking-wide mb-6 leading-tight">{p.title}</h3>

              {/* Divider */}
              <div className="w-12 h-px bg-neutral-700 mb-6" />

              {/* Items */}
              <ul className="space-y-3">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-neutral-400 font-medium text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Big number watermark */}
              <div className="absolute bottom-4 right-6 font-['Bebas_Neue'] text-8xl text-white/5 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-center text-neutral-600 text-xs mt-6 tracking-widest">SCROLL TO EXPLORE →</p>
      </div>
    </section>
  );
}
