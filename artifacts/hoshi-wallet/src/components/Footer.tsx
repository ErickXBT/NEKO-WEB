import hoshiLogoPath from "@assets/hoshi-logo.png";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src={hoshiLogoPath} alt="HOSHI Wallet" className="h-8 w-auto brightness-0 invert" />
              <span className="font-['Bebas_Neue'] text-2xl tracking-wider">HOSHI WALLET</span>
            </Link>
            <p className="text-neutral-400 font-medium text-sm leading-relaxed max-w-xs">
              One Wallet. Every Chain. Everything DeFi.
            </p>
          </div>

          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">PRODUCT</h4>
            <ul className="space-y-4 text-neutral-400 font-medium text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Wallet</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Swap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prediction Market</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">RESOURCES</h4>
            <ul className="space-y-4 text-neutral-400 font-medium text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Bebas_Neue'] text-xl mb-6 tracking-wide">COMMUNITY</h4>
            <ul className="space-y-4 text-neutral-400 font-medium text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm font-medium">
          <p>© 2026 HOSHI Wallet. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
