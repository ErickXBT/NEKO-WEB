const PHASES = [
  {
    phase: "PHASE 1",
    title: "BUILD THE BASE",
    status: "LIVE",
    items: ["Build Social Community", "Community Growth & Engagement", "Token Launch ($NEKO)", "Wallet Launch"],
  },
  {
    phase: "PHASE 2",
    title: "GROW THE PRODUCT",
    status: "IN PROGRESS",
    items: ["Built-in Swap (Jupiter)", "DexScreener Integration", "NEKO Card Launch", "Fiat On/Off Ramp"],
  },
  {
    phase: "PHASE 3",
    title: "EXPAND THE ECOSYSTEM",
    status: "COMING SOON",
    items: ["Prediction Markets", "Crypto News Feed", "Market Analysis Hub", "Hardware Wallet Support"],
  },
  {
    phase: "PHASE 4",
    title: "THE FUTURE",
    status: "PLANNED",
    items: ["AI Token Recommendations", "Advanced Trading Features", "Community Governance", "Global Expansion"],
  },
];

const STATUS_COLORS: Record<string, string> = {
  LIVE: "text-green-400 border-green-400/40 bg-green-400/10",
  "IN PROGRESS": "text-primary border-primary/40 bg-primary/10",
  "COMING SOON": "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  PLANNED: "text-neutral-400 border-neutral-600 bg-neutral-800",
};

export default function Roadmap() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white" id="roadmap">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-['Bebas_Neue']">THE ROAD AHEAD</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PHASES.map((p, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-7 overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {i === 1 && (
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary rounded-full blur-3xl opacity-20 pointer-events-none" />
              )}

              <div className="text-neutral-500 font-bold tracking-widest text-xs mb-3">{p.phase}</div>

              <span className={`self-start inline-block text-[10px] font-bold tracking-widest px-3 py-1 rounded-full border mb-5 ${STATUS_COLORS[p.status]}`}>
                {p.status}
              </span>

              <h3 className="text-2xl lg:text-3xl font-['Bebas_Neue'] tracking-wide mb-5 leading-tight">
                {p.title}
              </h3>

              <div className="w-10 h-px bg-neutral-700 mb-5" />

              <ul className="space-y-3 flex-1">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-neutral-400 font-medium text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-3 right-5 font-['Bebas_Neue'] text-7xl text-white/[0.04] leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
