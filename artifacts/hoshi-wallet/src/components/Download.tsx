import { Apple, Play } from "lucide-react";
import { SiGooglechrome } from "react-icons/si";

export default function Download() {
  return (
    <section className="py-32 bg-primary text-[#0a0a0a] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1F311] rounded-full blur-[100px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl md:text-8xl font-['Bebas_Neue'] mb-6">GET STARTED WITH NEKO WALLET</h2>
        <p className="text-xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
          The ultimate self-custodial wallet for serious DeFi users. Download now and take control of your assets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Android — Coming Soon */}
          <div className="relative w-full sm:w-auto">
            <button
              disabled
              className="flex items-center gap-3 bg-black/50 text-white/50 px-8 py-4 rounded-full font-bold w-full sm:w-auto justify-center cursor-not-allowed"
              data-testid="btn-android"
            >
              <Play className="w-5 h-5" /> ANDROID
            </button>
            <span className="absolute -top-2.5 -right-2 bg-[#0a0a0a] text-primary text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-primary/40">
              SOON
            </span>
          </div>

          {/* iOS — Coming Soon */}
          <div className="relative w-full sm:w-auto">
            <button
              disabled
              className="flex items-center gap-3 bg-black/50 text-white/50 px-8 py-4 rounded-full font-bold w-full sm:w-auto justify-center cursor-not-allowed"
              data-testid="btn-ios"
            >
              <Apple className="w-5 h-5" /> IOS APP
            </button>
            <span className="absolute -top-2.5 -right-2 bg-[#0a0a0a] text-primary text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-primary/40">
              SOON
            </span>
          </div>

          {/* Chrome Extension — Coming Soon */}
          <div className="relative w-full sm:w-auto">
            <button
              disabled
              className="flex items-center gap-3 bg-black/50 text-white/50 px-8 py-4 rounded-full font-bold w-full sm:w-auto justify-center cursor-not-allowed"
              data-testid="btn-chrome"
            >
              <SiGooglechrome className="w-5 h-5" /> CHROME EXTENSION
            </button>
            <span className="absolute -top-2.5 -right-2 bg-[#0a0a0a] text-primary text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full border border-primary/40">
              SOON
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
