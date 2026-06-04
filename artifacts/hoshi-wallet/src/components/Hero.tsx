import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import imgCenter from "@assets/image_1780589377839.png";
import imgLeft from "@assets/image_1780589462620.png";
import imgRight from "@assets/image_1780589409230.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, stagger: 0.1 })
      .from(".hero-phone-center", { y: 200, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-phone-left", { x: 100, y: 150, opacity: 0, rotation: 0, duration: 1 }, "-=0.8")
      .from(".hero-phone-right", { x: -100, y: 150, opacity: 0, rotation: 0, duration: 1 }, "-=0.8")
      .from(".hero-fade", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 }, "-=0.5");
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative pt-32 pb-20 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      id="home"
    >
      {/* Decorative Red Square */}
      <div className="absolute top-40 left-10 w-4 h-4 bg-primary hero-fade"></div>
      
      {/* Phones Container */}
      <div className="relative w-full max-w-5xl h-[50vh] md:h-[60vh] flex justify-center items-end mt-10 perspective-1000">
        
        {/* Left Phone */}
        <div className="absolute left-[15%] bottom-0 w-[28%] max-w-[280px] z-10 hero-phone-left transform -rotate-[15deg] origin-bottom-right">
          <img src={imgLeft} alt="Portfolio View" className="w-full h-auto drop-shadow-2xl rounded-[3rem]" />
        </div>
        
        {/* Right Phone */}
        <div className="absolute right-[15%] bottom-0 w-[28%] max-w-[280px] z-10 hero-phone-right transform rotate-[15deg] origin-bottom-left">
          <img src={imgRight} alt="Transfer View" className="w-full h-auto drop-shadow-2xl rounded-[3rem]" />
        </div>

        {/* Center Phone */}
        <div className="relative w-[35%] max-w-[320px] z-20 hero-phone-center mb-8">
          <img src={imgCenter} alt="Swap View" className="w-full h-auto drop-shadow-2xl rounded-[3rem]" />
        </div>

      </div>

      <div className="container mx-auto px-4 text-center mt-12 z-30">
        <h1 className="text-[12vw] leading-none font-['Bebas_Neue'] text-foreground tracking-tight hero-title">
          HOSHI WALLET
        </h1>
        <p className="text-xl md:text-2xl font-bold tracking-widest text-muted-foreground mt-2 hero-title">
          ALL-IN-ONE WALLET FOR 50+ BLOCKCHAINS
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16 text-left max-w-6xl mx-auto hero-fade">
          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-0">
            <button className="px-6 py-3 rounded-full border-2 border-foreground font-bold hover:bg-foreground hover:text-white transition-colors">
              GOOGLE PLAY
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-foreground font-bold hover:bg-foreground hover:text-white transition-colors">
              APP STORE
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-foreground font-bold hover:bg-foreground hover:text-white transition-colors">
              CHROME EXT
            </button>
          </div>

          <div className="max-w-sm text-right text-muted-foreground font-medium">
            <p>Swap, earn, predict, track portfolio — everything in one app. 50+ blockchains, self-custody, keys only on your device.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
