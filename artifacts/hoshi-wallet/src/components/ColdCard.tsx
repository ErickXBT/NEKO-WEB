import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import card1 from "@assets/image_1780589253701.png";
import card2 from "@assets/image_1780589270772.png";

gsap.registerPlugin(ScrollTrigger);

export default function ColdCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".cc-title", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8
    });

    gsap.from(".cc-cards img", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center">
        
        <div className="cc-title mb-16">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">
            IN DEVELOPMENT
          </span>
          <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] text-foreground leading-none">
            HOSHI WALLET <br/> <span className="text-primary">/</span> COLDCARD
          </h2>
        </div>

        <div className="cc-cards relative w-full max-w-4xl mx-auto h-[400px] flex justify-center items-center mt-10 perspective-1000">
          {/* Left */}
          <div className="absolute left-[10%] transform -rotate-12 w-64 md:w-80 shadow-2xl rounded-2xl overflow-hidden transition-transform hover:-translate-y-4 hover:rotate-0 duration-500 z-10">
            <img src={card1} alt="ColdCard Anime Edition" className="w-full h-auto" />
            <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1">ANIME EDITION</div>
          </div>
          
          {/* Center */}
          <div className="absolute z-30 transform -rotate-3 w-72 md:w-96 shadow-2xl rounded-2xl overflow-hidden bg-[#0a0a0a] p-1 border border-neutral-800 transition-transform hover:-translate-y-4 duration-500">
            <div className="w-full h-48 bg-gradient-to-br from-neutral-900 to-black rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-['Bebas_Neue'] text-white text-2xl">HOSHI</span>
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">NFC</span>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <span className="text-neutral-500 font-mono text-xs">•••• •••• •••• 0x4B</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 shadow-lg">IN DEV</div>
          </div>

          {/* Right */}
          <div className="absolute right-[10%] transform rotate-12 w-64 md:w-80 shadow-2xl rounded-2xl overflow-hidden transition-transform hover:-translate-y-4 hover:rotate-0 duration-500 z-10">
            <img src={card2} alt="ColdCard Meme Edition" className="w-full h-auto" />
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-2 py-1">MEME EDITION</div>
          </div>
        </div>

        <p className="mt-16 text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
          Store your keys offline on a single card — tap to sign with NFC, protected by a secure chip, supporting 50+ blockchains with collectible limited-edition designs.
        </p>

      </div>
    </section>
  );
}
