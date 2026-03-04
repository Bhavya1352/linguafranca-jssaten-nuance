import { Trophy, Users, Lightbulb, Star } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Trophy,
    title: "Win Prizes & Recognition",
    description: "Certificates, cash prizes, and college recognition for your literary talents",
    color: "#B45309",
    bg: "hsl(38 60% 96%)",
  },
  {
    icon: Users,
    title: "Build Your Network",
    description: "Connect with like-minded peers, authors, and industry professionals",
    color: "#6B21A8",
    bg: "hsl(270 60% 97%)",
  },
  {
    icon: Lightbulb,
    title: "Develop Skills",
    description: "Public speaking, creative writing, leadership, and editorial craft",
    color: "#065F46",
    bg: "hsl(160 60% 96%)",
  },
  {
    icon: Star,
    title: "Boost Your Résumé",
    description: "Stand out in placements with society participation & core leadership roles",
    color: "#0E7490",
    bg: "hsl(195 60% 96%)",
  },
];

const WhyJoinUs = () => {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(38 45% 95%) 0%, hsl(38 35% 91%) 100%)" }}
    >
      {/* Corner flourishes */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(220 40% 30% / 0.2), transparent)" }} />

      {/* Decorative side elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-700/10 font-serif select-none hidden lg:block" style={{ fontSize: "8rem", writingMode: "vertical-rl" }}>
        ❦
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-amber-700/10 font-serif select-none hidden lg:block" style={{ fontSize: "8rem", writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}>
        ❦
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-poppins text-xs uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(42 55% 42%)" }}
          >
            Your Journey Begins Here
          </p>
          <h2
            className="font-playfair text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "hsl(220 50% 16%)" }}
          >
            Why Join Lingua Franca?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 45%))" }} />
            <span style={{ color: "hsl(42 55% 45%)" }}>✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(42 60% 45%))" }} />
          </div>
          <p
            className="font-poppins text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "hsl(220 20% 42%)" }}
          >
            Transform your college experience and unlock your creative potential
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group relative rounded-lg p-7 text-center overflow-hidden cursor-default"
                style={{
                  background: benefit.bg,
                  border: `1px solid ${benefit.color}22`,
                  boxShadow: "0 2px 16px hsl(220 30% 15% / 0.06), inset 0 1px 0 hsl(38 60% 99%)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  y: -4,
                  boxShadow: `0 12px 40px ${benefit.color}22`,
                  borderColor: `${benefit.color}44`,
                }}
              >
                {/* Parchment ruled lines faint */}
                <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden opacity-30">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="absolute w-full h-px" style={{ top: `${(i + 1) * 9}%`, background: `${benefit.color}1a` }} />
                  ))}
                </div>

                {/* Icon circle */}
                <div
                  className="h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10"
                  style={{ background: `${benefit.color}14`, border: `2px solid ${benefit.color}30` }}
                >
                  <Icon className="h-8 w-8" style={{ color: benefit.color }} />
                </div>

                <h3
                  className="font-playfair text-xl font-bold mb-2 relative z-10"
                  style={{ color: "hsl(220 45% 15%)" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="font-poppins text-sm leading-relaxed relative z-10"
                  style={{ color: "hsl(220 20% 42%)" }}
                >
                  {benefit.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded transition-all duration-500 group-hover:w-3/4"
                  style={{ background: `linear-gradient(to right, transparent, ${benefit.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="text-center mt-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p
            className="font-playfair italic text-xl md:text-2xl max-w-2xl mx-auto"
            style={{ color: "hsl(220 30% 40%)" }}
          >
            "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          </p>
          <p className="font-poppins text-sm mt-2" style={{ color: "hsl(42 50% 45%)" }}>
            — George R.R. Martin
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUs;