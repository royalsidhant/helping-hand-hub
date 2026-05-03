const stats = [
  { value: "12,400+", label: "Lives Touched" },
  { value: "₹1.8 Cr", label: "Aid Distributed" },
  { value: "320", label: "Volunteers" },
  { value: "47", label: "Communities Served" },
];

const Impact = () => (
  <section id="impact" className="py-24 lg:py-32">
    <div className="container">
      <div className="rounded-[2.5rem] bg-gradient-hero p-10 md:p-16 lg:p-20 text-primary-foreground shadow-glow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">Our Impact</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl text-balance mb-12">
            Every donation creates a ripple of hope.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent pl-5">
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Impact;
