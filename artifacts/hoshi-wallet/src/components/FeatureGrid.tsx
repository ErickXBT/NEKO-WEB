const FEATURES = [
  "Multi-Chain Support (50+)",
  "Built-in Swap",
  "Token Recommendations",
  "Prediction Market",
  "Affiliate Program",
  "Buy/Sell with Fiat",
  "Market Analysis & News",
  "Cold Card Hardware",
  "Non-Custodial",
  "QR Payments",
];

const WALLETS = [
  { name: "NEKO WALLET", cols: [true, true, true, true, true, true, true, true, true, true] },
  { name: "Trust Wallet", cols: [true, true, false, false, false, true, false, false, true, true] },
  { name: "Best Wallet", cols: [false, false, false, false, true, true, false, false, true, false] },
  { name: "Coinbase Wallet", cols: [true, false, false, false, false, true, false, false, true, true] },
];

function Dot({ active, primary }: { active: boolean; primary?: boolean }) {
  if (!active) {
    return <span className="inline-block w-3 h-3 rounded-full bg-neutral-200" />;
  }
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${primary ? "bg-primary" : "bg-primary/70"}`}
    />
  );
}

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-['Bebas_Neue'] text-center mb-14 text-foreground">
          STANDOUT FEATURES
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-neutral-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-4 px-6 font-semibold text-neutral-500 w-1/3">Features</th>
                {WALLETS.map((w, i) => (
                  <th key={i} className={`py-4 px-4 text-center font-bold ${i === 0 ? "text-foreground" : "text-neutral-400"}`}>
                    {w.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feature, fi) => (
                <tr
                  key={fi}
                  className="border-b border-neutral-800 last:border-0 hover:bg-neutral-900 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-neutral-300">{feature}</td>
                  {WALLETS.map((w, wi) => (
                    <td key={wi} className="py-4 px-4 text-center">
                      <Dot active={w.cols[fi]} primary={wi === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
