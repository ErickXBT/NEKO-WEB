import React from "react";

const PHASES = [
  { phase: "PHASE 1", title: "THE FOUNDATION", items: ["Wallet Launch", "Multi-chain support (50+)", "QR payments"] },
  { phase: "PHASE 2", title: "THE ECOSYSTEM", items: ["Built-in Swap", "Fiat On/Off Ramp", "Affiliate System"] },
  { phase: "PHASE 3", title: "THE EXPANSION", items: ["Polymarket Integration", "Market Analysis Hub", "Hardware Wallet Support"] },
  { phase: "PHASE 4", title: "THE FUTURE", items: ["AI Token Recommendations", "Advanced Trading Features", "Global Expansion"] },
];

export default function Roadmap() {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white border-y border-neutral-800">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-['Bebas_Neue']">THE ROAD AHEAD</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 transform md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {PHASES.map((p, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
                  
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 md:mt-0 z-10 ring-4 ring-[#0a0a0a]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <div className="text-primary font-bold tracking-widest text-sm mb-2">{p.phase}</div>
                    <h3 className="text-3xl font-['Bebas_Neue'] tracking-wide mb-4">{p.title}</h3>
                    <ul className={`space-y-2 text-neutral-400 font-medium ${isEven ? '' : 'md:flex md:flex-col md:items-end'}`}>
                      {p.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          {isEven ? <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full" /> : null}
                          {item}
                          {!isEven ? <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full" /> : null}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
