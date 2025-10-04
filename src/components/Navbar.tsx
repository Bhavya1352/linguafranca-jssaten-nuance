import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src="/logo1.jpg" alt="Lingua Franca" className="h-10 w-10 rounded-full" />
            <span className="font-cormorant text-xl font-bold text-gray-900">Lingua Franca</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('departments')} className="text-gray-700 hover:text-primary transition-colors">Departments</button>
            <button onClick={() => scrollToSection('why-join')} className="text-gray-700 hover:text-primary transition-colors">Why Join</button>
            <button onClick={() => scrollToSection('poetry')} className="text-gray-700 hover:text-primary transition-colors">Poetry</button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-primary transition-colors">Events</button>
            <Button onClick={() => scrollToSection('join-form')} size="sm">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Home</button>
              <button onClick={() => scrollToSection('departments')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Departments</button>
              <button onClick={() => scrollToSection('why-join')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Why Join</button>
              <button onClick={() => scrollToSection('poetry')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Poetry</button>
              <button onClick={() => scrollToSection('events')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Events</button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('join-form')} size="sm" className="w-full">Join Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;