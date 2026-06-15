import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Is NEKO Wallet non-custodial?",
    a: "Yes, users maintain full control over their private keys. We never have access to your funds or seed phrase."
  },
  {
    q: "Which chains are supported?",
    a: "NEKO Wallet supports 50+ major blockchains including Ethereum, Solana, BNB Chain, Polygon, Arbitrum, Base, and many more."
  },
  {
    q: "How does the Prediction Market work?",
    a: "Our prediction market feature is powered by a direct Polymarket integration, allowing you to participate in real-world event predictions straight from your wallet."
  },
  {
    q: "Can I buy crypto with fiat?",
    a: "Yes, NEKO Wallet includes built-in on-ramp and off-ramp support so you can purchase crypto directly with a credit card or bank transfer."
  },
  {
    q: "Is hardware wallet support available?",
    a: "Yes, via our upcoming Cold Card integration, which will allow you to store keys offline and sign transactions contactlessly via NFC."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-['Bebas_Neue'] text-center mb-12 text-foreground">
          FREQUENTLY ASKED
        </h2>
        
        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border p-2">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-0 px-4">
              <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary py-6 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-medium text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
