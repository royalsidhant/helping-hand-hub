import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Causes from "@/components/Causes";
import Impact from "@/components/Impact";
import Donate from "@/components/Donate";
import Donors from "@/components/Donors";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Causes />
      <Impact />
      <Donors />
      <Donate />
      <Feedback />
      <Footer />
    </main>
  );
};

export default Index;
