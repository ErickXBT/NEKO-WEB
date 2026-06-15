import hoshiLogo from "@assets/LOGO_1781531503433.jpg";

/* ─────────────────────────────────────────────
   Shared micro-components
───────────────────────────────────────────── */

/** A single row in a token list */
function TokenRow({
  symbol, name, price, change, color = "#E1F311", showBar = false, pct = 0,
}: {
  symbol: string; name: string; price: string; change: string;
  color?: string; showBar?: boolean; pct?: number;
}) {
  const pos = !change.startsWith("-");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: color, display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontSize: 10, fontWeight: 800, color: "#fff",
      }}>{symbol.slice(0, 2)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{symbol}</span>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{price}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>{name}</span>
          <span style={{ color: pos ? "#22C55E" : "#EF4444", fontSize: 10, fontWeight: 700 }}>{change}</span>
        </div>
        {showBar && (
          <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 2, marginTop: 4 }}>
            <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 2 }} />
          </div>
        )}
      </div>
    </div>
  );
}

function ScreenHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{title}</span>
        <img src={hoshiLogo} alt="H" style={{ width: 20, height: 20, filter: "brightness(0) invert(1)", opacity: 0.7 }} />
      </div>
      {sub && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginTop: 2 }}>{sub}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 1: SWAP
───────────────────────────────────────────── */
function ScreenSwap() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Swap" sub="Best rate across all DEXes" />

      {/* From */}
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", marginBottom: 6 }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 6 }}>FROM</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#627EEA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#fff" }}>ET</div>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>ETH</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>▼</span>
          </div>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>0.5</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, textAlign: "right", marginTop: 3 }}>≈ $1,427.50</div>
      </div>

      {/* Swap icon */}
      <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#E1F311", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff" }}>⇅</div>
      </div>

      {/* To */}
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", marginBottom: 12 }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginBottom: 6 }}>TO</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2775CA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#fff" }}>US</div>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>USDC</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>▼</span>
          </div>
          <span style={{ color: "#22C55E", fontSize: 18, fontWeight: 700 }}>2,855</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, textAlign: "right", marginTop: 3 }}>Rate: 1 ETH = 2,855 USDC</div>
      </div>

      {/* Route */}
      <div style={{ background: "rgba(225,243,17,0.12)", border: "1px solid rgba(225,243,17,0.2)", borderRadius: 8, padding: "8px 10px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 9 }}>BEST ROUTE</span>
        <span style={{ color: "#E1F311", fontSize: 9, fontWeight: 700 }}>Uniswap → HOSHI DEX</span>
      </div>

      {/* Button */}
      <div style={{ background: "#E1F311", borderRadius: 10, padding: "11px", textAlign: "center", color: "#fff", fontWeight: 800, fontSize: 13 }}>
        SWAP NOW
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 2: TOKENS LIST
───────────────────────────────────────────── */
function ScreenTokens() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Portfolio" sub="$48,291.33 total balance" />

      {/* Balance */}
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div style={{ color: "#fff", fontSize: 22, fontWeight: 800 }}>$48,291</div>
        <div style={{ color: "#22C55E", fontSize: 11, fontWeight: 700 }}>↑ +$1,240 (2.6%) today</div>
      </div>

      <div style={{ marginBottom: 8, color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.1em" }}>YOUR ASSETS</div>
      <TokenRow symbol="BTC" name="Bitcoin" price="$67,420" change="+1.8%" color="#F7931A" showBar pct={78} />
      <TokenRow symbol="ETH" name="Ethereum" price="$2,855" change="+3.2%" color="#627EEA" showBar pct={62} />
      <TokenRow symbol="SOL" name="Solana" price="$142.4" change="-0.9%" color="#9945FF" showBar pct={45} />
      <TokenRow symbol="BNB" name="BNB Chain" price="$398.1" change="+0.5%" color="#F0B90B" showBar pct={30} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 3: TRANSFER / SEND
───────────────────────────────────────────── */
function ScreenTransfer() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Send Crypto" sub="Instant · 50+ chains" />

      {/* Amount */}
      <div style={{ textAlign: "center", margin: "10px 0 14px" }}>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 4 }}>AMOUNT</div>
        <div style={{ color: "#fff", fontSize: 32, fontWeight: 800 }}>0.25 <span style={{ fontSize: 16, color: "rgba(255,255,255,0.5)" }}>ETH</span></div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>≈ $713.75</div>
      </div>

      {/* To address */}
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, marginBottom: 4 }}>TO ADDRESS</div>
        <div style={{ color: "#fff", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.05em" }}>0x742d35Cc…ab3f</div>
        <div style={{ color: "#22C55E", fontSize: 9, marginTop: 2 }}>✓ Valid Ethereum address</div>
      </div>

      {/* Network */}
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        {["Ethereum", "Solana", "BNB"].map((n, i) => (
          <div key={n} style={{
            flex: 1, textAlign: "center", padding: "6px 4px",
            background: i === 0 ? "#E1F311" : "rgba(255,255,255,0.06)",
            borderRadius: 8, color: i === 0 ? "#fff" : "rgba(255,255,255,0.4)",
            fontSize: 9, fontWeight: 700,
          }}>{n}</div>
        ))}
      </div>

      {/* Fee */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 10 }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>Network Fee</span>
        <span style={{ color: "#fff", fontSize: 10 }}>~$1.20</span>
      </div>

      <div style={{ background: "#E1F311", borderRadius: 10, padding: "11px", textAlign: "center", color: "#fff", fontWeight: 800, fontSize: 13 }}>
        SEND NOW
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 4: PREDICTION
───────────────────────────────────────────── */
function ScreenPredict() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Predict" sub="Real-world events · Live odds" />

      {[
        { event: "US ELECTIONS 2025", optA: "Harris", pctA: 52, optB: "Trump", pctB: 48, pool: "$2.4M", tag: "POLITICS" },
        { event: "BITCOIN > $100K", optA: "YES", pctA: 67, optB: "NO", pctB: 33, pool: "$890K", tag: "CRYPTO" },
        { event: "WORLD CUP WINNER", optA: "Brazil", pctA: 30, optB: "France", pctB: 28, pool: "$1.1M", tag: "SPORTS" },
      ].map((item, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 11px", marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: "#E1F311", fontSize: 8, fontWeight: 800, letterSpacing: "0.15em" }}>{item.tag}</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 8 }}>Pool: {item.pool}</span>
          </div>
          <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, marginBottom: 7 }}>{item.event}</div>
          <div style={{ display: "flex", gap: 5 }}>
            {[
              { label: item.optA, pct: item.pctA, color: "#22C55E" },
              { label: item.optB, pct: item.pctB, color: "#EF4444" },
            ].map((opt) => (
              <div key={opt.label} style={{ flex: 1, background: `${opt.color}18`, border: `1px solid ${opt.color}40`, borderRadius: 6, padding: "5px 7px", textAlign: "center" }}>
                <div style={{ color: opt.color, fontSize: 11, fontWeight: 800 }}>{opt.pct}%</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 9 }}>{opt.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 5: NEWS & ANALYSIS
───────────────────────────────────────────── */
function ScreenNews() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Market Intel" sub="Updated 2 mins ago" />

      {/* Fear & Greed */}
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, marginBottom: 3 }}>FEAR & GREED INDEX</div>
            <div style={{ color: "#22C55E", fontSize: 22, fontWeight: 800 }}>74</div>
            <div style={{ color: "#22C55E", fontSize: 10, fontWeight: 700 }}>GREED</div>
          </div>
          <div style={{ width: 60, height: 60 }}>
            <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" /><circle cx="30" cy="30" r="25" fill="none" stroke="#22C55E" strokeWidth="8" strokeDasharray={`${74 * 1.57} 157`} strokeLinecap="round" transform="rotate(-90 30 30)" /></svg>
          </div>
        </div>
      </div>

      {/* News items */}
      {[
        { headline: "Bitcoin ETF inflows hit $1.2B in single day", time: "2m ago", tag: "BULLISH" },
        { headline: "Ethereum upgrade reduces gas fees by 40%", time: "18m ago", tag: "UPDATE" },
        { headline: "SEC approves new crypto custody rules", time: "1h ago", tag: "REGULATORY" },
      ].map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 8, marginBottom: 8 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
            <span style={{ background: i === 0 ? "rgba(34,197,94,0.2)" : "rgba(225,243,17,0.15)", color: i === 0 ? "#22C55E" : "#E1F311", fontSize: 7, fontWeight: 800, padding: "2px 5px", borderRadius: 3 }}>{item.tag}</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 8 }}>{item.time}</span>
          </div>
          <div style={{ color: "#fff", fontSize: 10, lineHeight: 1.4 }}>{item.headline}</div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 6: ADD TOKEN
───────────────────────────────────────────── */
function ScreenAddToken() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Add Token" sub="Search or paste contract" />

      {/* Search */}
      <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "9px 12px", display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>⌕</span>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>Search name or paste address…</span>
      </div>

      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, letterSpacing: "0.1em", marginBottom: 8 }}>POPULAR TOKENS</div>
      <TokenRow symbol="PEPE" name="Pepe Token" price="$0.0000142" change="+12.4%" color="#22C55E" />
      <TokenRow symbol="ARB" name="Arbitrum" price="$1.24" change="-2.1%" color="#2D9CDB" />
      <TokenRow symbol="OP" name="Optimism" price="$2.87" change="+5.7%" color="#FF0420" />
      <TokenRow symbol="INJ" name="Injective" price="$24.8" change="+8.3%" color="#00B2FF" />

      <div style={{ marginTop: 6, background: "rgba(225,243,17,0.08)", border: "1px dashed rgba(225,243,17,0.3)", borderRadius: 8, padding: "8px 10px", textAlign: "center" }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, marginBottom: 2 }}>OR PASTE CONTRACT ADDRESS</div>
        <div style={{ color: "#E1F311", fontSize: 9, fontFamily: "monospace" }}>0x…</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 7: PORTFOLIO (multi-wallet)
───────────────────────────────────────────── */
function ScreenPortfolio() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="All Wallets" sub="3 wallets · 12 chains" />

      {/* Total */}
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, marginBottom: 3 }}>TOTAL NET WORTH</div>
        <div style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}>$128,450</div>
        <div style={{ color: "#22C55E", fontSize: 10, fontWeight: 700 }}>↑ +$3,210 today</div>
      </div>

      {/* Wallets */}
      {[
        { name: "Main Wallet", addr: "0x742d…ab3f", balance: "$98,200", chains: 8, color: "#E1F311" },
        { name: "DeFi Wallet", addr: "0x9f31…c77a", balance: "$24,050", chains: 5, color: "#627EEA" },
        { name: "Trading Wallet", addr: "0x1a4c…de82", balance: "$6,200",  chains: 3, color: "#22C55E" },
      ].map((w) => (
        <div key={w.name} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "9px 11px", marginBottom: 7, display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: w.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 800 }}>
            {w.name[0]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{w.name}</span>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>{w.balance}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, fontFamily: "monospace" }}>{w.addr}</span>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9 }}>{w.chains} chains</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screen 8: DISCOVERY
───────────────────────────────────────────── */
function ScreenDiscovery() {
  return (
    <div style={{ padding: "16px 14px" }}>
      <ScreenHeader title="Discover" sub="Filtered by real market data" />

      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, letterSpacing: "0.1em", marginBottom: 8 }}>TRENDING NOW</div>

      {[
        { symbol: "HYPE", name: "Hyperliquid",   price: "$8.42",   change: "+48%",  score: 94, color: "#8B5CF6" },
        { symbol: "WIF",  name: "dogwifhat",     price: "$2.18",   change: "+31%",  score: 88, color: "#F59E0B" },
        { symbol: "BOME", name: "Book of Meme",  price: "$0.0082", change: "+24%",  score: 81, color: "#EC4899" },
        { symbol: "JUP",  name: "Jupiter",       price: "$1.05",   change: "+19%",  score: 76, color: "#06B6D4" },
      ].map((token) => (
        <div key={token.symbol} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "9px 11px", marginBottom: 7 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: token.color, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#fff" }}>
              {token.symbol.slice(0, 2)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{token.symbol}</span>
                <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 800 }}>{token.change}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9 }}>{token.name}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 9 }}>{token.price}</span>
              </div>
            </div>
            {/* HOSHI score */}
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ color: token.color, fontSize: 13, fontWeight: 800 }}>{token.score}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 7 }}>SCORE</div>
            </div>
          </div>

          {/* Mini bar */}
          <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginTop: 7 }}>
            <div style={{ height: "100%", width: `${token.score}%`, background: token.color, borderRadius: 2 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Phone frame + screen router
───────────────────────────────────────────── */
const SCREENS = [
  ScreenSwap, ScreenTokens, ScreenTransfer, ScreenPredict,
  ScreenNews, ScreenAddToken, ScreenPortfolio, ScreenDiscovery,
];

interface PhoneMockupProps {
  screenIndex: number;
  /** height of the phone in px */
  height?: number;
  scheme?: "light" | "dark";
}

export default function PhoneMockup({ screenIndex, height = 520, scheme = "light" }: PhoneMockupProps) {
  const w = Math.round(height / 2.03);
  const Screen = SCREENS[screenIndex] ?? ScreenSwap;

  /* Subtle shadow color differs by parent scheme */
  const shadowColor = scheme === "light"
    ? "rgba(0,0,0,0.2)"
    : "rgba(0,0,0,0.5)";

  return (
    <div style={{
      width: w,
      height,
      borderRadius: Math.round(height * 0.082),
      background: "#0d0d0d",
      border: "2px solid rgba(255,255,255,0.12)",
      position: "relative",
      overflow: "hidden",
      boxShadow: `
        0 ${Math.round(height * 0.05)}px ${Math.round(height * 0.15)}px ${shadowColor},
        0 0 0 1px rgba(255,255,255,0.04) inset
      `,
      flexShrink: 0,
    }}>
      {/* Status bar */}
      <div style={{
        height: 32,
        background: "#0d0d0d",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        flexShrink: 0,
      }}>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, fontWeight: 700 }}>9:41</span>
        {/* Dynamic island */}
        <div style={{
          width: 60, height: 16, borderRadius: 12,
          background: "#000",
        }} />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 8 }}>▲▲▲</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 9 }}>🔋</span>
        </div>
      </div>

      {/* Screen content */}
      <div style={{
        flex: 1,
        overflowY: "hidden",
        background: "#111111",
        height: `calc(100% - 32px - 24px)`,
      }}>
        <Screen />
      </div>

      {/* Home indicator */}
      <div style={{
        height: 24, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0d0d0d",
      }}>
        <div style={{ width: 48, height: 4, borderRadius: 4, background: "rgba(255,255,255,0.2)" }} />
      </div>
    </div>
  );
}
