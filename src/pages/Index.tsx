import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import WhyJoinUs from "@/components/WhyJoinUs";
import Poetry from "@/components/Poetry";
import Events from "@/components/Events";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="departments"><Departments /></div>
      <div id="why-join"><WhyJoinUs /></div>
      <div id="poetry"><Poetry /></div>
      <div id="events"><Events /></div>
      <div id="join-form"><JoinForm /></div>
      <Footer />
    </div>
  );
};

export default Index;
