import { motion } from "framer-motion";
import { BookOpen, Pen, Mic, Feather } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: BookOpen, x: "10%", y: "20%", delay: 0 },
    { Icon: Pen, x: "85%", y: "15%", delay: 0.5 },
    { Icon: Mic, x: "15%", y: "70%", delay: 1 },
    { Icon: Feather, x: "80%", y: "75%", delay: 1.5 },
    { Icon: BookOpen, x: "50%", y: "10%", delay: 2 },
    { Icon: Pen, x: "5%", y: "50%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const { Icon, x, y, delay } = element;
        return (
          <motion.div
            key={index}
            className="absolute text-primary/20"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={32} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;