import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Departments", id: "departments" },
  { label: "Why Join", id: "why-join" },
  { label: "Poetry", id: "poetry" },
  { label: "Events", id: "events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActive] = useState("hero");
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: "hsl(220 55% 16%)",
        borderBottom: "1px solid hsl(42 60% 50% / 0.25)",
        boxShadow: "0 2px 20px hsl(220 60% 6% / 0.5)",
      }}
    >
      {/* Top golden rule line */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(to right, transparent, hsl(42 70% 50%), transparent)",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo1.jpg"
              alt="Lingua Franca"
              className="h-9 w-9 rounded-full transition-all duration-300 group-hover:scale-110"
              style={{ boxShadow: "0 0 0 2px hsl(42 70% 50% / 0.6)" }}
            />
            <div className="flex flex-col leading-tight">
              <span
                className="font-playfair font-bold tracking-wide"
                style={{ fontSize: "1.1rem", color: "hsl(42 70% 60%)" }}
              >
                Lingua Franca
              </span>
              <span
                className="font-poppins uppercase"
                style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "hsl(38 25% 60%)" }}
              >
                Literary Society · JSSATEN
              </span>
            </div>
          </div>

          {/* ── Desktop View ── */}
          <div className="hidden lg:flex flex-1 items-center justify-between ml-10">
            {/* Center Links (Absolute centering for perfect alignment) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative px-4 py-2 font-poppins text-sm font-medium tracking-wide transition-all duration-200 group whitespace-nowrap"
                  style={{
                    color: activeSection === id ? "hsl(42 70% 62%)" : "hsl(38 25% 70%)",
                  }}
                >
                  {label}
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded transition-all duration-300 group-hover:w-[55%]"
                    style={{
                      width: activeSection === id ? "55%" : "0%",
                      background: "linear-gradient(to right, hsl(42 70% 50%), hsl(38 65% 60%))",
                    }}
                  />
                </button>
              ))}

              {/* Core Team */}
              <button
                onClick={() => navigate("/core-team")}
                className="relative px-4 py-2 font-poppins text-sm font-medium tracking-wide transition-colors duration-200 group whitespace-nowrap"
                style={{ color: "hsl(38 25% 70%)" }}
              >
                Core Team
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded transition-all duration-300 group-hover:w-[55%]"
                  style={{ background: "linear-gradient(to right, hsl(42 70% 50%), hsl(38 65% 60%))" }}
                />
              </button>
            </div>

            {/* Right Group (Join Now - pushed to the right) */}
            <div className="flex items-center ml-auto">
              <button
                onClick={() => scrollTo("join-form")}
                className="flex items-center gap-2 px-5 py-2 font-playfair font-semibold text-sm rounded transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, hsl(42 70% 44%), hsl(38 65% 54%))",
                  color: "hsl(220 50% 10%)",
                  border: "1px solid hsl(42 60% 40%)",
                  boxShadow: "0 2px 10px hsl(42 70% 50% / 0.3)",
                  letterSpacing: "0.04em",
                }}
              >
                <BookOpen size={14} />
                Join Now
              </button>
            </div>
          </div>

          {/* ── Mobile/Tablet Hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded transition-colors duration-200"
            style={{ color: "hsl(38 40% 75%)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[600px]" : "max-h-0"}`}
        style={{
          background: "hsl(220 55% 13% / 0.98)",
          backdropFilter: "blur(12px)",
          borderTop: isOpen ? "1px solid hsl(42 40% 35% / 0.3)" : "none",
        }}
      >
        <div className="px-6 py-6 space-y-2">
          {NAV_LINKS.map(({ label, id }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center w-full text-left py-4 px-4 rounded-lg font-poppins text-sm tracking-wide transition-all duration-200 active:bg-white/5 active:scale-95"
              style={{ color: "hsl(38 30% 72%)" }}
              initial={false}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full mr-4 flex-shrink-0"
                style={{ background: "hsl(42 60% 50%)", boxShadow: "0 0 8px hsl(42 70% 50% / 0.4)" }} />
              {label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => {
              navigate("/core-team");
              setIsOpen(false);
            }}
            className="flex items-center w-full text-left py-4 px-4 rounded-lg font-poppins text-sm tracking-wide transition-all duration-200 active:bg-white/5 active:scale-95"
            style={{ color: "hsl(38 30% 72%)" }}
            initial={false}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full mr-4" style={{ background: "hsl(42 60% 50%)", boxShadow: "0 0 8px hsl(42 70% 50% / 0.4)" }} />
            Core Team
          </motion.button>
          <div className="pt-4 px-2">
            <motion.button
              onClick={() => scrollTo("join-form")}
              className="w-full py-4 font-playfair font-bold text-base rounded-xl tracking-wide shadow-lg active:scale-95 transition-transform"
              style={{
                background: "linear-gradient(135deg, hsl(42 70% 44%), hsl(38 65% 54%))",
                color: "hsl(220 50% 10%)",
                boxShadow: "0 10px 20px -5px hsl(42 70% 50% / 0.3)",
              }}
              initial={false}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              📜 Join Lingua Franca
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;