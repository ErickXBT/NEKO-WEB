import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import walletImg from "@assets/Gemini_Generated_Image_16vtp616vtp616vt-Photoroom_1781552629878.png";
import cardImg from "@assets/Gemini_Generated_Image_c6h62qc6h62qc6h6-Photoroom_1781552629878.png";
import connectImg from "@assets/Gemini_Generated_Image_15w19215w19215w1-Photoroom_1781535843570.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-center > *", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 })
      .from(".hero-phone-left", { x: -80, opacity: 0, duration: 1, rotate: -20 }, "-=0.6")
      .from(".hero-phone-right", { x: 80, opacity: 0, duration: 1, rotate: 20 }, "-=0.9")
      .from(".hero-phone-bottom", { y: 100, opacity: 0, duration: 1 }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      id="home"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* LEFT phone */}
      <img
        src={walletImg}
        alt="NEKO Wallet balance screen"
        className="hero-phone-left hidden lg:block absolute left-[3%] xl:left-[7%] top-1/2 -translate-y-1/2 w-[230px] xl:w-[280px] rotate-[-12deg] drop-shadow-2xl select-none pointer-events-none z-0"
        draggable={false}
      />

      {/* RIGHT phone */}
      <img
        src={cardImg}
        alt="NEKO crypto Mastercard"
        className="hero-phone-right hidden lg:block absolute right-[3%] xl:right-[7%] top-1/2 -translate-y-1/2 w-[230px] xl:w-[280px] rotate-[12deg] drop-shadow-2xl select-none pointer-events-none z-0"
        draggable={false}
      />

      {/* BOTTOM-CENTER phone */}
      <img
        src={connectImg}
        alt="NEKO Wallet connect screen"
        className="hero-phone-bottom hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[-26%] w-[250px] xl:w-[300px] rotate-[-3deg] drop-shadow-2xl select-none pointer-events-none z-0"
        draggable={false}
      />

      {/* CENTER content */}
      <div className="hero-center relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-2xl mx-auto pt-24 pb-12">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          ONE WALLET. EVERY CHAIN. EVERYTHING DEFI.
        </span>

        {/* Headline */}
        <h1
          className="font-['Bebas_Neue'] text-foreground leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
        >
          YOUR CRYPTO.<br />
          YOUR KEYS.<br />
          <span className="text-primary">YOUR RULES.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-muted-foreground font-medium text-base md:text-lg max-w-md leading-relaxed">
          Swap, trade, and manage assets across 50+ blockchains — all in one non-custodial wallet built for serious DeFi users.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="https://nekoapp.fun/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="btn-create-wallet"
            className="px-8 py-4 rounded-full bg-primary text-[#0a0a0a] font-bold text-base hover:bg-[#c8d90f] transition-colors"
          >
            CREATE WALLET
          </a>
        </div>

        {/* Phones on mobile (stacked below) */}
        <div className="flex lg:hidden items-end justify-center gap-2 mt-8 w-full">
          <img src={walletImg} alt="" className="w-1/2 max-w-[180px] rotate-[-8deg] drop-shadow-2xl select-none" draggable={false} />
          <img src={cardImg} alt="" className="w-1/2 max-w-[180px] rotate-[8deg] drop-shadow-2xl select-none" draggable={false} />
        </div>
      </div>
    </section>
  );
}
