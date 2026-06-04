import { Shield, Smartphone, Coins, TrendingUp, Users, RefreshCw, BarChart2, Zap, KeyRound, QrCode } from "lucide-react";

const GRID_ITEMS = [
  { icon: Shield, title: "Non-Custodial", desc: "Users always control their private keys" },
  { icon: Smartphone, title: "Multi-Chain Support (50+)", desc: "Ethereum, BNB, Solana, Polygon, Arbitrum, Base & more" },
  { icon: RefreshCw, title: "Built-in Swap", desc: "Instant token swaps directly inside wallet" },
  { icon: Zap, title: "AI Recommendations", desc: "AI-powered token discovery" },
  { icon: TrendingUp, title: "Prediction Market", desc: "Powered by Polymarket integration" },
  { icon: Users, title: "Affiliate Program", desc: "Referral rewards for community growth" },
  { icon: Coins, title: "Buy/Sell with Fiat", desc: "On-ramp and off-ramp support" },
  { icon: BarChart2, title: "Market Analysis & News", desc: "Crypto news and market insights" },
  { icon: KeyRound, title: "Cold Card Hardware", desc: "Hardware wallet integration" },
  { icon: QrCode, title: "QR Payments", desc: "Send and receive crypto instantly via QR" },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-['Bebas_Neue'] text-center mb-16 text-foreground">
          EVERYTHING YOU NEED IN ONE WALLET
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GRID_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:border-primary/50 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-foreground group-hover:text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
