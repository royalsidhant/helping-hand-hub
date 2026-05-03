import { Sparkles, ShieldCheck, Users } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Kindness in Action", text: "Every contribution becomes a meal, a book, or a moment of dignity for someone who needs it most." },
  { icon: ShieldCheck, title: "Radical Transparency", text: "Track where every rupee goes — public reports, verified beneficiaries, and clear impact metrics." },
  { icon: Users, title: "Community First", text: "We work hand-in-hand with local volunteers and partners to reach families fastest." },
];

const Mission = () => (
  <section id="mission" className="py-24 lg:py-32">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">Our Mission</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
          Connecting generous hearts to lives that need them.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group p-8 rounded-3xl bg-card border border-border shadow-card transition-smooth hover:shadow-soft hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center mb-5 transition-smooth group-hover:scale-110">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
