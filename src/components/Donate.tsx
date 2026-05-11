import { useState } from "react";
import { Copy, Check, Smartphone, QrCode, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import qrImg from "@/assets/donation-qr.png";

const UPI_ID = "helpinghand@upi";
const amounts = [101, 501, 1100, 2500, 5000];

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<number>(501);
  const [donor, setDonor] = useState({ name: "", email: "", txn: "" });
  const [saving, setSaving] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const recordDonation = async () => {
    if (donor.name.trim().length < 2) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("donations").insert({
      donor_name: donor.name.trim(),
      donor_email: donor.email.trim() || null,
      amount: selected,
      transaction_ref: donor.txn.trim() || null,
    });
    setSaving(false);
    if (error) {
      toast({ title: "Couldn't record donation", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Thank you for your generosity! 💛", description: "Your contribution has been recorded." });
    setDonor({ name: "", email: "", txn: "" });
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

        {/* Record donation form */}
        <div className="max-w-5xl mx-auto mt-10 rounded-3xl bg-card border border-border shadow-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-gold">
              <HeartHandshake className="w-5 h-5 text-primary" />
            </span>
            <h3 className="font-display text-2xl font-bold">Confirm your donation</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Already paid? Share your details so we can issue a receipt and add you to our donor wall.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="d-name">Full name</Label>
              <Input id="d-name" value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} placeholder="Jane Doe" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="d-email">Email (optional)</Label>
              <Input id="d-email" type="email" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} placeholder="you@example.com" maxLength={255} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="d-txn">UPI transaction ID (optional)</Label>
              <Input id="d-txn" value={donor.txn} onChange={(e) => setDonor({ ...donor, txn: e.target.value })} placeholder="e.g. 4567890123" maxLength={100} />
            </div>
          </div>
          <Button onClick={recordDonation} variant="hero" size="lg" className="mt-6" disabled={saving}>
            {saving ? "Recording..." : `Record ₹${selected.toLocaleString("en-IN")} donation`}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donate;
