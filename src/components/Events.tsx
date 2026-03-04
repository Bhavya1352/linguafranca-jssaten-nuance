import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const events = [
  {
    title: "Youth Parliament",
    description: "Where young minds debate, lead, and shape the spirit of democracy through powerful oratory.",
    emoji: "🏛",
    tag: "Debate",
    color: "#6B21A8",
  },
  {
    title: "Chemprakriti",
    description: "Chemistry meets creativity — come forth and express your opinions where science and literature collide!",
    emoji: "⚗",
    tag: "Science & Lit",
    color: "#0E7490",
  },
  {
    title: "Corporate Competence",
    description: "Mock interviews and aptitude tests to sharpen your professional edge for everything that's to come.",
    emoji: "💼",
    tag: "Professional",
    color: "#065F46",
  },
  {
    title: "Nuance",
    description: "Our flagship technical symposium — a celebration of intellect, creativity, and interdisciplinary thought.",
    emoji: "📚",
    tag: "Flagship",
    color: "#B45309",
  },
  {
    title: "Open Mic Night",
    description: "Unfiltered voices, raw poetry, and stories from the heart. Take the stage and let your words soar.",
    emoji: "🎙",
    tag: "Poetry & Prose",
    color: "#9F1239",
  },
];

const Events = () => {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(38 40% 93%) 0%, hsl(38 35% 90%) 100%)" }}
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(220 40% 30% / 0.15), transparent)" }} />

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
            style={{ color: "hsl(42 55% 42%)" }}
          >
            Chapters of Experience
          </p>
          <h2
            className="font-playfair text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "hsl(220 50% 16%)" }}
          >
            Our Events
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
            Immersive experiences that celebrate the written and spoken word
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <motion.div
                      className="group relative rounded-lg overflow-hidden cursor-default"
                      style={{
                        background: "hsl(38 50% 98%)",
                        border: `1px solid ${event.color}22`,
                        boxShadow: "0 2px 16px hsl(220 30% 15% / 0.07), inset 0 1px 0 hsl(38 60% 100%)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        boxShadow: `0 16px 40px ${event.color}18`,
                        borderColor: `${event.color}44`,
                      }}
                    >
                      {/* Card top color block */}
                      <div
                        className="h-36 flex flex-col items-center justify-center relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${event.color}18, ${event.color}08)` }}
                      >
                        {/* Parchment lines */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="absolute w-full h-px" style={{ top: `${(i + 1) * 15}%`, background: `${event.color}0a` }} />
                        ))}
                        <span className="text-5xl mb-2 relative z-10">{event.emoji}</span>
                        {/* Tag badge */}
                        <span
                          className="font-poppins text-xs uppercase tracking-wider px-3 py-0.5 rounded-full relative z-10"
                          style={{
                            background: `${event.color}18`,
                            color: event.color,
                            border: `1px solid ${event.color}30`,
                          }}
                        >
                          {event.tag}
                        </span>
                        {/* Bottom line accent on hover */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          style={{ background: `linear-gradient(to right, transparent, ${event.color}, transparent)` }}
                        />
                      </div>

                      {/* Card body */}
                      <div className="p-6">
                        <h3
                          className="font-playfair text-2xl font-bold mb-2"
                          style={{ color: "hsl(220 45% 15%)" }}
                        >
                          {event.title}
                        </h3>
                        <div className="h-px mb-3" style={{ background: `linear-gradient(to right, ${event.color}50, transparent)` }} />
                        <p
                          className="font-poppins text-sm leading-relaxed"
                          style={{ color: "hsl(220 15% 42%)" }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="hidden md:flex"
              style={{
                background: "hsl(220 50% 16%)",
                border: "1px solid hsl(42 50% 40% / 0.4)",
                color: "hsl(42 65% 60%)",
              }}
            />
            <CarouselNext
              className="hidden md:flex"
              style={{
                background: "hsl(220 50% 16%)",
                border: "1px solid hsl(42 50% 40% / 0.4)",
                color: "hsl(42 65% 60%)",
              }}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Events;
