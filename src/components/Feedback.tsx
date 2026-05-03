import { useState } from "react";
import { z } from "zod";
import { Send, MessageSquareHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const feedbackSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100, "Name must be under 100 characters"),
  address: z.string().trim().min(2, "Please share your city").max(150, "Address must be under 150 characters"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  message: z.string().trim().min(10, "Feedback must be at least 10 characters").max(1000, "Feedback must be under 1000 characters"),
});

const Feedback = () => {
  const [form, setForm] = useState({ name: "", address: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = feedbackSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Thank you for your feedback! 💛",
        description: "Your kind words inspire us to do more.",
      });
      setForm({ name: "", address: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="feedback" className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">Share Your Voice</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground mb-6">
              We'd love to hear from you.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're a donor, volunteer, or beneficiary — your feedback shapes how Helping Hand Foundation grows. Tell us what touched you, what we can improve, or simply leave a note of encouragement.
            </p>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/60 border border-border">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-gold shrink-0">
                <MessageSquareHeart className="w-6 h-6 text-primary" />
              </span>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Every voice counts</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We read every message personally and respond within 48 hours.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fb-name">Your Name</Label>
                <Input id="fb-name" value={form.name} onChange={handleChange("name")} placeholder="Jane Doe" maxLength={100} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="fb-address">City / Address</Label>
                <Input id="fb-address" value={form.address} onChange={handleChange("address")} placeholder="Mumbai, India" maxLength={150} />
                {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fb-email">Email</Label>
              <Input id="fb-email" type="email" value={form.email} onChange={handleChange("email")} placeholder="you@example.com" maxLength={255} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="fb-message">Your Feedback</Label>
              <Textarea
                id="fb-message"
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Share your experience, suggestions, or kind words..."
                rows={5}
                maxLength={1000}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                {errors.message ? <span className="text-destructive">{errors.message}</span> : <span>Min 10 characters</span>}
                <span>{form.message.length}/1000</span>
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
              <Send className="w-4 h-4 mr-2" />
              {submitting ? "Sending..." : "Submit Feedback"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
