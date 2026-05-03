import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-18 py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-gold shadow-glow transition-smooth group-hover:scale-105">
            <Heart className="w-5 h-5 text-primary" fill="currentColor" />
          </span>
          <span className="font-display font-bold text-lg leading-tight tracking-tight">
            Helping Hand<br className="hidden sm:block" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Foundation</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#mission" className="text-foreground/80 hover:text-primary transition-smooth">Mission</a>
          <a href="#causes" className="text-foreground/80 hover:text-primary transition-smooth">Causes</a>
          <a href="#impact" className="text-foreground/80 hover:text-primary transition-smooth">Impact</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-smooth">Contact</a>
        </nav>
        <Button asChild variant="hero" size="sm">
          <a href="#donate">Donate Now</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
