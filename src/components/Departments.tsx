import { Edit3, Palette, Users, Code, Feather } from "lucide-react";
import { motion } from "framer-motion";

const departments = [
  {
    icon: Edit3,
    name: "Editorial",
    description: "Content creation, curation, and the art of the written word",
    color: "hsl(42 60% 65%)",
    symbol: "✒",
  },
  {
    icon: Palette,
    name: "Designing",
    description: "Visual aesthetics, graphics, and the canvas of imagination",
    color: "hsl(25 70% 65%)",
    symbol: "🎨",
  },
  {
    icon: Users,
    name: "Management",
    description: "Operations, coordination, and the backbone of every event",
    color: "hsl(190 60% 65%)",
    symbol: "⚜",
  },
  {
    icon: Code,
    name: "Technical",
    description: "Digital solutions, web presence, and tech-driven storytelling",
    color: "hsl(150 60% 60%)",
    symbol: "⌨",
  },
];

const Departments = () => {
  return (
    <section
      id="departments"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "hsl(220 52% 12%)" }}
    >
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-hsl(42 40% 40%) to-transparent opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-hsl(42 40% 40%) to-transparent opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: "hsl(42 60% 40% / 0.1)", border: "1px solid hsl(42 60% 40% / 0.3)" }}>
            <Feather size={12} className="text-amber-500" />
            <span className="font-poppins text-[10px] uppercase tracking-[0.3em] text-amber-500/80">Our Wings</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-white">
            Our Departments
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 50%))" }} />
            <span style={{ color: "hsl(42 60% 55%)" }} className="text-xl">✦</span>
            <div className="h-px w-20" style={{ background: "linear-gradient(to left, transparent, hsl(42 60% 50%))" }} />
          </div>
          <p className="font-poppins text-lg text-slate-400 max-w-2xl mx-auto italic">
            "Diverse wings united by the love of literature"
          </p>
        </motion.div>

        {/* ── Center Hub ── */}
        <div className="relative flex justify-center mb-16 px-4">
          <motion.div
            className="relative z-20 text-center p-6 md:p-10 rounded-2xl max-w-[280px] md:max-w-sm w-full"
            style={{
              background: "hsl(220 50% 16%)",
              border: "1px solid hsl(42 60% 50% / 0.4)",
              boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5), 0 0 30px hsl(42 60% 50% / 0.1)",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl flex items-center justify-center mx-auto mb-5 rotate-45 group relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(42 70% 45%), hsl(38 65% 55%))", border: "4px solid hsl(220 50% 16%)" }}>
              <span className="font-playfair font-black text-xl md:text-2xl -rotate-45" style={{ color: "hsl(220 60% 10%)" }}>LF</span>
            </div>
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-1">Lingua Franca</h3>
            <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-amber-500/60 font-medium">Literary Society Hub</p>


          </motion.div>

          {/* Symmetrical Connector Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent blur-sm hidden lg:block" />
        </div>

        {/* ── Department Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Decorative Wing Effect on Hover */}
                <div className="absolute -inset-2 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div
                  className="relative h-full flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 border h-full"
                  style={{
                    background: "hsl(220 50% 15%)",
                    borderColor: "hsl(220 40% 25%)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Floating Number/Label */}
                  <div className="absolute top-6 left-6 font-playfair italic text-3xl text-amber-500/5 select-none transition-all duration-500 group-hover:text-amber-500/10 group-hover:-translate-y-1">
                    0{index + 1}
                  </div>

                  {/* Icon Block */}
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative"
                    style={{ background: "hsl(220 45% 20%)", border: "1px solid hsl(220 40% 28%)" }}>
                    {/* Active Glow */}
                    <div className="absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300 opacity-0 group-hover:opacity-40"
                      style={{ background: dept.color }} />
                    <Icon size={30} style={{ color: dept.color }} className="relative z-10" />
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="font-poppins text-sm leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors mb-6">
                    {dept.description}
                  </p>

                  {/* Aesthetic Divider */}
                  <div className="mt-auto w-12 h-0.5 rounded-full bg-slate-800 group-hover:w-20 group-hover:bg-amber-500/50 transition-all duration-500" />

                  {/* Symbol at bottom corner */}
                  <div className="absolute bottom-4 right-6 text-xl opacity-10 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0">
                    {dept.symbol}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Section Dividers ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
    </section>
  );
};

export default Departments;
