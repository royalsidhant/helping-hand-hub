import { Quote, MapPin } from "lucide-react";

const donors = [
  {
    name: "Ananya Sharma",
    address: "Bengaluru, Karnataka",
    feedback:
      "Donating through Helping Hand was seamless. I love how transparent they are about where every rupee goes — I can see the impact on real families.",
    initials: "AS",
  },
  {
    name: "Rahul Verma",
    address: "Pune, Maharashtra",
    feedback:
      "Quick UPI payment, instant receipt, and a heartfelt thank-you message. It feels good to be part of a community that truly cares.",
    initials: "RV",
  },
  {
    name: "Priya Iyer",
    address: "Chennai, Tamil Nadu",
    feedback:
      "I sponsor a child's education every month. The updates and photos I receive remind me why kindness matters. Highly recommended.",
    initials: "PI",
  },
  {
    name: "Mohammed Imran",
    address: "Hyderabad, Telangana",
    feedback:
      "During the floods last year, my contribution reached affected families within days. Trustworthy and fast — exactly what relief work needs.",
    initials: "MI",
  },
  {
    name: "Sneha Kapoor",
    address: "New Delhi",
    feedback:
      "What I appreciate most is the honesty. Detailed reports, real stories, and zero pressure. A foundation built on integrity.",
    initials: "SK",
  },
  {
    name: "Arjun Reddy",
    address: "Visakhapatnam, Andhra Pradesh",
    feedback:
      "From medical aid to food drives, every initiative is well-organised. Proud to be a recurring donor with Helping Hand.",
    initials: "AR",
  },
];

const Donors = () => (
  <section id="donors" className="py-24 lg:py-32 bg-secondary/40">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">Voices of Kindness</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
          Stories from our generous donors.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Real people. Real contributions. Real change. Hear what our donor community has to say about giving with Helping Hand Foundation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donors.map((d) => (
          <article
            key={d.name}
            className="group relative bg-card border border-border rounded-3xl p-7 shadow-sm hover:shadow-glow transition-smooth flex flex-col"
          >
            <Quote className="w-8 h-8 text-accent/70 mb-4" />
            <p className="text-foreground/85 leading-relaxed mb-6 flex-1">"{d.feedback}"</p>
            <div className="flex items-center gap-3 pt-5 border-t border-border">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-gold font-display font-bold text-primary text-sm shrink-0">
                {d.initials}
              </span>
              <div className="min-w-0">
                <div className="font-display font-semibold text-foreground truncate">{d.name}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground truncate">
                  <MapPin className="w-3 h-3 text-accent shrink-0" /> {d.address}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Donors;
