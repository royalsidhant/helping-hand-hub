import food from "@/assets/cause-food.jpg";
import education from "@/assets/cause-education.jpg";
import medical from "@/assets/cause-medical.jpg";
import clothing from "@/assets/cause-clothing.jpg";

const causes = [
  { img: food, tag: "Food", title: "Daily Meals for Families", text: "Hot, nutritious meals delivered to slum communities, shelters and elderly homes every single day." },
  { img: education, tag: "Education", title: "Books, Fees & Future", text: "School supplies, tuition fees and scholarships that keep children in classrooms — not on streets." },
  { img: medical, tag: "Medical", title: "Free Health Camps", text: "Doctor visits, medicines and emergency surgeries for those who can't afford basic healthcare." },
  { img: clothing, tag: "Relief", title: "Clothing & Emergency Aid", text: "Warm clothes, blankets and rapid disaster response when families need help most urgently." },
];

const Causes = () => (
  <section id="causes" className="py-24 lg:py-32 bg-secondary/40 border-y border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/70 mb-4">What We Fund</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-2xl text-balance">
            Real causes. Real people. Real change.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Your donation is allocated across five focused programs — each measured, audited and reported every quarter.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {causes.map((c) => (
          <article key={c.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card transition-smooth hover:shadow-glow hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.title} loading="lazy" width={900} height={700}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground bg-accent/20 px-2.5 py-1 rounded-full mb-3">
                {c.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Causes;
