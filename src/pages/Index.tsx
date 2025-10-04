import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Departments />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
