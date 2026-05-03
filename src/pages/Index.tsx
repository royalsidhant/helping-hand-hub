import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Causes from "@/components/Causes";
import Impact from "@/components/Impact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Causes />
      <Impact />
      <Donate />
      <Footer />
    </main>
  );
};

export default Index;
