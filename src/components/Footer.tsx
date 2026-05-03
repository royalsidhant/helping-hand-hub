import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-10 mb-14">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-gold">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </span>
            <div className="font-display font-bold text-xl">Helping Hand Foundation</div>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            A registered non-profit creating positive social impact through kindness, transparency and community support.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#mission" className="hover:text-accent transition-smooth">Our Mission</a></li>
            <li><a href="#causes" className="hover:text-accent transition-smooth">Causes</a></li>
            <li><a href="#impact" className="hover:text-accent transition-smooth">Impact</a></li>
            <li><a href="#donate" className="hover:text-accent transition-smooth">Donate</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-accent" /> care@helpinghand.org</li>
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-accent" /> +91 98765 43210</li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-accent mt-0.5" /> Hyderabad, India</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Helping Hand Foundation. All rights reserved.</p>
        <p>Made with <Heart className="inline w-3 h-3 text-accent" fill="currentColor" /> for those who need it most.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
