import { SiX, SiTelegram } from "react-icons/si";
import nekoLogoPath from "@assets/LOGO_1781531503433.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={nekoLogoPath} alt="NEKO Wallet" className="h-10 w-auto" />
              <span className="font-['Bebas_Neue'] text-2xl tracking-wider">NEKO WALLET</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              The non-custodial multi-chain crypto wallet built for the next generation of DeFi users.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">PRODUCT</h4>
            <ul className="space-y-4 text-neutral-400 text-sm font-medium">
              <li><a href="#features" className="hover:text-primary transition-colors">Swap Tokens</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Markets</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">NEKO Card</a></li>
              <li><a href="#roadmap" className="hover:text-primary transition-colors">$NEKO Roadmap</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">LEGAL</h4>
            <ul className="space-y-4 text-neutral-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Big wordmark + social */}
      <div className="relative overflow-hidden border-t border-neutral-800">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-end justify-between py-6">
          <h2
            className="font-['Bebas_Neue'] text-white leading-none select-none whitespace-nowrap"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            // NEKO WALLET
          </h2>

          <div className="flex flex-col items-end gap-4 pb-2 flex-shrink-0 ml-8">
            <div>
              <p className="text-neutral-500 text-xs font-bold tracking-widest mb-3 text-right">FOLLOW US</p>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors">
                  <SiX className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Telegram" className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors">
                  <SiTelegram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="text-neutral-600 text-xs text-right">
              © 2026 NEKO Wallet. Powered by Web3.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
