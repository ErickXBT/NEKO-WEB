import React from "react";

const PARTNERS = [
  "TECHBULLION", "COINGECKO", "DEXSCREENER", "RAYDIUM", "ORCA", 
  "PUMP", "GECKOTERMINAL", "CRYPTO.NEWS", "BLOCKONOMI", "BRAVENEWCOIN", "INVESTING.COM"
];

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-[#0a0a0a] py-6 overflow-hidden flex flex-col gap-4 border-y border-neutral-800">
      
      {/* Row 1 - Left */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center text-white font-['Bebas_Neue'] text-5xl md:text-7xl opacity-80 tracking-widest">
              {PARTNERS.map((p, j) => (
                <React.Fragment key={j}>
                  <span className="mx-6">{p}</span>
                  <span className="text-primary">/</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 - Right */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center text-white font-['Bebas_Neue'] text-5xl md:text-7xl opacity-80 tracking-widest">
              {PARTNERS.reverse().map((p, j) => (
                <React.Fragment key={j}>
                  <span className="mx-6">{p}</span>
                  <span className="text-primary">/</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
