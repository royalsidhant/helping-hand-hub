import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hands.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm -z-10" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-7 animate-float-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Trusted Non-Profit · Since 2018
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-700 leading-[1.02] text-balance">
            Together, we lift a <em className="not-italic text-transparent bg-clip-text bg-gradient-gold">helping hand</em> to those in need.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Helping Hand Foundation connects generous donors with underprivileged families through fast, secure UPI &amp; QR donations — funding food, education, medical care, clothing and emergency relief.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild variant="hero" size="lg">
              <a href="#donate">Donate Now <ArrowRight className="ml-1 w-4 h-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#causes">See Our Causes</a>
            </Button>
          </div>
          <div className="flex items-center gap-3 pt-4 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>100% transparent · Secure UPI payments · Tax-exempt receipts</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-glow border border-accent/20">
            <img
              src={heroImg}
              alt="Diverse hands joined together in unity at sunset"
              width={1600}
              height={1100}
              className="w-full h-[460px] lg:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-5 border border-border max-w-[240px]">
            <div className="text-3xl font-display font-bold text-primary">12,400+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Lives touched this year</div>
          </div>
          <div className="hidden md:block absolute -top-6 -right-6 bg-gradient-gold rounded-2xl shadow-glow p-5 max-w-[200px] text-primary">
            <div className="text-2xl font-display font-bold">₹ 1.8 Cr</div>
            <div className="text-xs uppercase tracking-wider mt-1 opacity-80">Distributed in aid</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
