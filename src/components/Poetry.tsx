import { motion } from "framer-motion";

const poems = [
  {
    quote: "Two roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    author: "Robert Frost",
    work: "The Road Not Taken",
  },
  {
    quote: "To be, or not to be, that is the question:\nWhether 'tis nobler in the mind to suffer\nThe slings and arrows of outrageous fortune…",
    author: "William Shakespeare",
    work: "Hamlet",
  },
  {
    quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    author: "Martin Luther King Jr.",
    work: "I Have a Dream",
  },
  {
    quote: "Ask not what your country can do for you—ask what you can do for your country.",
    author: "John F. Kennedy",
    work: "Inaugural Address, 1961",
  },
];

const Poetry = () => {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "hsl(220 50% 14%)" }}
    >
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 50% / 0.5), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 50% / 0.5), transparent)" }} />

      {/* Faint open-book icon watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.025]" aria-hidden="true">
        <span className="text-amber-200" style={{ fontSize: "28rem" }}>📖</span>
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-poppins text-xs uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(42 55% 55%)" }}
          >
            Words that Endure
          </p>
          <h2
            className="font-playfair text-4xl md:text-6xl font-bold mb-5"
            style={{ color: "hsl(38 50% 90%)" }}
          >
            Literary Classics
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(42 60% 50%))" }} />
            <span style={{ color: "hsl(42 60% 55%)" }}>✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(42 60% 50%))" }} />
          </div>
          <p className="font-poppins text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "hsl(38 20% 65%)" }}>
            Timeless verses that have shaped literature and inspired generations
          </p>
        </motion.div>

        {/* Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {poems.map((poem, index) => (
            <motion.div
              key={index}
              className="group relative rounded-lg p-8 overflow-hidden cursor-default"
              style={{
                background: "hsl(220 42% 18%)",
                border: "1px solid hsl(42 40% 40% / 0.2)",
                boxShadow: "0 4px 24px hsl(220 60% 5% / 0.4)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                borderColor: "hsl(42 55% 50% / 0.45)",
                boxShadow: "0 8px 36px hsl(220 60% 5% / 0.6)",
              }}
            >
              {/* Decorative ruled lines */}
              <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="absolute w-full h-px" style={{ top: `${(i + 1) * 7.5}%`, background: "hsl(38 30% 70% / 0.04)" }} />
                ))}
              </div>

              {/* Large opening quote mark */}
              <div
                className="absolute top-3 left-5 font-playfair opacity-20 select-none transition-opacity duration-300 group-hover:opacity-35"
                style={{ fontSize: "5rem", lineHeight: 1, color: "hsl(42 65% 55%)" }}
              >
                "
              </div>

              {/* Quote text */}
              <blockquote
                className="font-playfair italic text-lg md:text-xl leading-relaxed mb-6 pt-6 relative z-10 whitespace-pre-line"
                style={{ color: "hsl(38 40% 83%)" }}
              >
                {poem.quote}
              </blockquote>

              {/* Divider */}
              <div
                className="h-px w-1/3 mb-4 transition-all duration-500 group-hover:w-1/2"
                style={{ background: "linear-gradient(to right, hsl(42 60% 50% / 0.6), transparent)" }}
              />

              {/* Author */}
              <div>
                <p className="font-playfair font-semibold text-base" style={{ color: "hsl(42 65% 60%)" }}>
                  — {poem.author}
                </p>
                <p className="font-poppins text-xs mt-0.5 italic" style={{ color: "hsl(38 15% 55%)" }}>
                  {poem.work}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, hsl(42 50% 45% / 0.4))" }} />
          <span style={{ color: "hsl(42 50% 50% / 0.6)", fontSize: "1.5rem" }}>❧</span>
          <span style={{ color: "hsl(42 50% 50% / 0.9)", fontSize: "1.8rem" }}>📖</span>
          <span style={{ color: "hsl(42 50% 50% / 0.6)", fontSize: "1.5rem", transform: "scaleX(-1)", display: "inline-block" }}>❧</span>
          <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, hsl(42 50% 45% / 0.4))" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Poetry;