import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import WhyJoinUs from "@/components/WhyJoinUs";
import Poetry from "@/components/Poetry";
import Events from "@/components/Events";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Departments />
      <WhyJoinUs />
      <Poetry />
      <Events />
      <JoinForm />
      <Footer />
    </div>
  );
};

export default Index;
