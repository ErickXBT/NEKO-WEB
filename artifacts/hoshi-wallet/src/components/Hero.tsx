import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import nekoLogoPath from "@assets/LOGO_1781531503433.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-left > *", { x: -60, opacity: 0, duration: 0.9, stagger: 0.12 })
      .from(".hero-logo", { x: 80, opacity: 0, scale: 0.85, duration: 1.1 }, "-=0.7")
      .from(".hero-stats", { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      id="home"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl w-full pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT — text */}
          <div className="hero-left flex flex-col items-start gap-6 lg:max-w-[55%]">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              ONE WALLET. EVERY CHAIN. EVERYTHING DEFI.
            </span>

            {/* Headline */}
            <h1
              className="font-['Bebas_Neue'] text-foreground leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
            >
              THE ULTIMATE<br />
              MULTI-CHAIN<br />
              <span className="text-primary">CRYPTO WALLET</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground font-medium text-base md:text-lg max-w-lg leading-relaxed">
              Manage assets across 50+ blockchains, swap instantly, participate in prediction markets,
              earn rewards, and stay ahead with market intelligence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                data-testid="btn-google-play"
                className="px-6 py-3 rounded-full border-2 border-foreground font-bold text-sm hover:bg-foreground hover:text-white transition-colors"
              >
                GOOGLE PLAY
              </button>
              <button
                data-testid="btn-app-store"
                className="px-6 py-3 rounded-full border-2 border-foreground font-bold text-sm hover:bg-foreground hover:text-white transition-colors"
              >
                APP STORE
              </button>
              <button
                data-testid="btn-chrome-ext"
                className="px-6 py-3 rounded-full bg-primary border-2 border-primary text-foreground font-bold text-sm hover:bg-[#c8d90f] transition-colors"
              >
                CHROME EXT
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-4 hero-stats">
              {[
                { label: "Chains Supported", value: "50+" },
                { label: "Built-in Swap", value: "Yes" },
                { label: "Non-Custodial", value: "100%" },
                { label: "Prediction Market", value: "Live" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-['Bebas_Neue'] text-3xl text-foreground leading-none">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-semibold tracking-wide mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — large logo */}
          <div className="hero-logo flex-shrink-0 flex items-center justify-center lg:max-w-[40%] w-full">
            <div className="relative">
              {/* Glow ring behind logo */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-110 pointer-events-none" />
              <img
                src={nekoLogoPath}
                alt="NEKO Wallet Logo"
                className="relative w-96 h-96 md:w-[480px] md:h-[480px] lg:w-[630px] lg:h-[630px] object-contain drop-shadow-2xl select-none"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
