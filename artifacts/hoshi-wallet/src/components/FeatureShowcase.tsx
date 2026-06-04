import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "@assets/image_1780589377839.png";
import img2 from "@assets/image_1780589392895.png";
import img3 from "@assets/image_1780589409230.png";
import img4 from "@assets/image_1780589420005.png";
import img5 from "@assets/image_1780589437631.png";
import img6 from "@assets/image_1780589449046.png";
import img7 from "@assets/image_1780589462620.png";
import img8 from "@assets/image_1780589474166.png";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  { img: img1, title: "SWAP TOKENS DIRECTLY IN THE APP", desc: "Thousands of tokens, dozens of chains. HOSHI Wallet finds the best rate for you — no need to open a DEX or browser.", bg: "white" },
  { img: img2, title: "1000+ TOKENS & COINS", desc: "Bitcoin, Ethereum, Solana, and thousands more tokens across 50+ blockchains. All in one wallet.", bg: "red" },
  { img: img3, title: "TRANSFER CRYPTO INSTANTLY", desc: "Send and receive tokens across 50+ blockchains. Paste address or scan QR — it takes seconds, not minutes.", bg: "white" },
  { img: img4, title: "PREDICT REAL-WORLD EVENTS", desc: "Elections, sports, culture — place predictions directly from the app. Live odds, fast payouts. A feature no other wallet has.", bg: "red" },
  { img: img5, title: "NEWS & SECTOR ANALYSIS BUILT-IN", desc: "Real-time crypto news, sector money flow, fear & greed index — all the data you need to make smarter moves, right inside the app.", bg: "white" },
  { img: img6, title: "ADD ANY TOKEN YOU WANT", desc: "Search from thousands of tokens or add custom ones by contract address. Your wallet, your tokens — no restrictions.", bg: "red" },
  { img: img7, title: "ALL WALLETS, ONE SCREEN", desc: "Every chain, every wallet, every token — visible in one place. Live balance updates. Share your portfolio with friends.", bg: "white" },
  { img: img8, title: "DISCOVER TOKENS BEFORE THEY TREND", desc: "Our recommendation engine filters tokens using real market data — not just hype. One tap and it goes straight to your wallet.", bg: "red" }
];

export default function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.feat-panel');
    
    panels.forEach((panel: any) => {
      gsap.from(panel.querySelectorAll('.feat-content'), {
        scrollTrigger: {
          trigger: panel,
          start: "top 60%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(panel.querySelector('.feat-img'), {
        scrollTrigger: {
          trigger: panel,
          start: "top 60%",
        },
        y: 150,
        opacity: 0,
        rotation: 5,
        duration: 1.2,
        ease: "back.out(1.2)"
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="w-full">
      {PANELS.map((p, i) => {
        const isRed = p.bg === 'red';
        const isEven = i % 2 === 0;

        return (
          <div 
            key={i} 
            className={`feat-panel relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24
              ${isRed ? 'bg-primary text-white' : 'bg-white text-foreground'}`}
          >
            {/* Ghost Background Text */}
            <div className={`absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap font-['Bebas_Neue'] text-[15vw] leading-none pointer-events-none select-none z-0
              ${isRed ? 'text-black/10' : 'text-neutral-100'}`}
            >
              WHY JUGGLE MULTIPLE APPS WHEN ONE IS ENOUGH
            </div>

            <div className="container mx-auto px-4 z-10 relative">
              <div className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <div className={`w-full md:w-1/2 feat-content ${isEven ? 'text-right' : 'text-left'}`}>
                  <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] leading-[0.9] mb-6">
                    {p.title}
                  </h2>
                  <p className={`text-xl md:text-2xl font-medium max-w-lg ${isEven ? 'ml-auto' : ''} ${isRed ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {p.desc}
                  </p>
                </div>

                {/* Phone Image */}
                <div className="w-full md:w-1/2 flex justify-center feat-img">
                  <div className="relative w-[300px] md:w-[350px]">
                    <img src={p.img} alt={p.title} className="w-full h-auto drop-shadow-2xl rounded-[3rem]" />
                    {/* Floating Number */}
                    <div className={`absolute ${isEven ? '-left-20' : '-right-20'} top-20 font-['Bebas_Neue'] text-8xl md:text-9xl
                      ${isRed ? 'text-black/20' : 'text-neutral-200'}`}>
                      /0{i + 1}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
