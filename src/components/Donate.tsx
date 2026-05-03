import { useState } from "react";
import { Copy, Check, Smartphone, QrCode, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrImg from "@/assets/donation-qr.png";

const UPI_ID = "helpinghand@upi";
const amounts = [101, 501, 1100, 2500, 5000];

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<number>(501);

  const copy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Make a Donation</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
            Donate in seconds. Change a life forever.
          </h2>
          <p className="mt-5 text-muted-foreground">Scan the QR with any UPI app or pay directly to our verified UPI ID.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* QR Card */}
          <div className="rounded-3xl bg-card border border-border shadow-card p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              <QrCode className="w-4 h-4" /> Scan to Pay
            </div>
            <div className="relative mx-auto w-64 h-64 p-4 bg-background rounded-2xl border-2 border-accent/40 shadow-glow">
              <img src={qrImg} alt="UPI donation QR code" width={768} height={768} className="w-full h-full object-contain" />
              <div className="absolute -top-3 -right-3 bg-gradient-gold text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-soft">
                Verified
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Works with GPay, PhonePe, Paytm, BHIM &amp; all UPI apps</p>
          </div>

          {/* UPI Card */}
          <div className="rounded-3xl bg-card border border-border shadow-card p-8 md:p-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              <Smartphone className="w-4 h-4" /> UPI ID
            </div>

            <button
              onClick={copy}
              className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl bg-secondary border-2 border-dashed border-accent/50 hover:border-accent transition-smooth group"
            >
              <span className="font-mono text-lg md:text-xl font-semibold text-primary">{UPI_ID}</span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-accent-foreground">
                {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
              </span>
            </button>

            <div className="mt-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Suggested Amount</p>
              <div className="flex flex-wrap gap-2">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => setSelected(a)}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-smooth ${
                      selected === a
                        ? "bg-primary text-primary-foreground border-primary shadow-soft"
                        : "bg-background border-border hover:border-primary/60"
                    }`}
                  >
                    ₹ {a.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full mt-7 animate-pulse-glow">
              <a href={`upi://pay?pa=${UPI_ID}&pn=Helping%20Hand%20Foundation&am=${selected}&cu=INR`}>
                Pay ₹{selected.toLocaleString("en-IN")} via UPI
              </a>
            </Button>

            <div className="flex items-center gap-2 mt-5 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Secure · Encrypted · 80G tax exemption available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
