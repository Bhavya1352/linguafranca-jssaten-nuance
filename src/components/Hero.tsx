import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Only */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero section bg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: "sepia(80%) brightness(0.4) contrast(1.1)",
          }}
        />
      </div>


      {/* ══════════════════════════════════════
          THE LITERARY CARD — smaller & refined
      ══════════════════════════════════════ */}
      <div className="w-full flex justify-center items-center relative z-10 px-4 py-24">
        <motion.div
          style={{ width: "100%", maxWidth: "850px" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div
            className="relative text-center md:!p-16"
            style={{
              background: "hsl(38 42% 92%)",
              border: "2px solid hsl(42 52% 52% / 0.6)",
              borderRadius: "3px",
              padding: "2.5rem 1.5rem",
              boxShadow:
                "0 0 0 6px hsl(220 52% 13%), 0 0 0 8px hsl(42 48% 42% / 0.22), 0 28px 80px hsl(220 65% 4% / 0.7)",
            }}
          >
            {/* Inner double-rule border */}
            <div style={{
              position: "absolute", inset: "8px",
              border: "1px solid hsl(42 42% 52% / 0.3)",
              borderRadius: "2px", pointerEvents: "none",
            }} />

            {/* Corner diamonds */}
            {["top-2.5 left-2.5", "top-2.5 right-2.5", "bottom-2.5 left-2.5", "bottom-2.5 right-2.5"].map((pos) => (
              <span key={pos} className={`absolute ${pos} font-serif text-lg leading-none select-none`}
                style={{ color: "hsl(42 52% 42% / 0.7)" }}>✦</span>
            ))}

            {/* ── Logo + Heading on same row ── */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <motion.img
                src="/logo1.jpg"
                alt="Lingua Franca Logo"
                className="rounded-full flex-shrink-0 w-20 h-20 md:w-[100px] md:h-[100px]"
                style={{
                  objectFit: "cover",
                  boxShadow:
                    "0 0 0 2.5px hsl(42 62% 46%), 0 0 0 5px hsl(42 48% 42% / 0.2), 0 6px 18px hsl(220 60% 8% / 0.3)",
                }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: "spring", stiffness: 280 }}
              />
              <motion.h1
                className="font-playfair font-bold text-center md:text-left leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 10vw, 4.8rem)",
                  color: "hsl(220 55% 16%)",
                  letterSpacing: "-0.01em",
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.28 }}
              >
                Lingua{" "}
                <span className="block md:inline" style={{ color: "hsl(42 60% 36%)" }}>Franca</span>
              </motion.h1>
            </motion.div>

            {/* Ornamental divider */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-4 relative z-10"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-px flex-1"
                style={{ background: "linear-gradient(to right, transparent, hsl(42 55% 42%))" }} />
              <span style={{ color: "hsl(42 50% 42%)", fontSize: "0.85rem" }}>❧</span>
              <span style={{ color: "hsl(42 56% 40%)", fontSize: "1rem" }}>✦</span>
              <span style={{ color: "hsl(42 50% 42%)", fontSize: "0.85rem", display: "inline-block", transform: "scaleX(-1)" }}>❧</span>
              <div className="h-px flex-1"
                style={{ background: "linear-gradient(to left, transparent, hsl(42 55% 42%))" }} />
            </motion.div>

            {/* Official label */}
            <motion.p
              className="font-poppins uppercase tracking-[0.22em] text-xs mb-1.5 relative z-10"
              style={{ color: "hsl(220 28% 44%)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48, duration: 0.6 }}
            >
              Official Literary Society
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="font-playfair italic text-base md:text-lg mb-5 relative z-10"
              style={{ color: "hsl(220 22% 30%)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              "Where words weave magic and stories come alive"
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
            >
              <motion.button
                onClick={() => {
                  document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-2.5 font-playfair font-semibold text-sm rounded"
                style={{
                  background: "hsl(220 55% 18%)",
                  color: "hsl(38 50% 90%)",
                  border: "1px solid hsl(220 40% 28%)",
                  boxShadow: "0 3px 14px hsl(220 55% 8% / 0.45)",
                  letterSpacing: "0.05em",
                }}
                whileHover={{ scale: 1.04, y: -2, background: "hsl(220 55% 22%)" }}
                whileTap={{ scale: 0.97 }}
              >
                Register Now
                <ArrowRight size={14} />
              </motion.button>

              <motion.button
                onClick={() => navigate("/zealicon-events")}
                className="flex items-center gap-2 px-6 py-2.5 font-playfair font-semibold text-sm rounded"
                style={{
                  background: "transparent",
                  color: "hsl(42 56% 36%)",
                  border: "1.5px solid hsl(42 50% 42%)",
                  letterSpacing: "0.05em",
                }}
                whileHover={{
                  scale: 1.04,
                  background: "hsl(42 60% 43%)",
                  color: "hsl(220 50% 10%)",
                  borderColor: "hsl(42 52% 36%)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <BookOpen size={14} />
                Explore Events
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>


    </section >
  );
};

export default Hero;
