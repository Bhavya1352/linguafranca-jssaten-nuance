import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/bg2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6 backdrop-blur-md bg-white/95 rounded-xl p-8 border border-gray-200 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img 
              src="/logo1.jpg" 
              alt="Lingua Franca Logo" 
              className="h-28 md:h-36 lg:h-44 w-auto rounded-full shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.h1 
              className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-wide whitespace-nowrap"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lingua Franca
            </motion.h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p 
            className="font-literary text-xl md:text-2xl text-gray-700 font-normal tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Official Literary Society of JSSATEN NOIDA
          </motion.p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 py-3">
            <div className="h-px w-20 bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary animate-float" />
            <div className="h-px w-20 bg-primary/30" />
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="group font-poppins text-base px-8 backdrop-blur-sm bg-primary/90 hover:bg-primary"
                onClick={() => {
                  const joinForm = document.getElementById('join-form');
                  joinForm?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="elegant" 
                size="lg"
                className="font-poppins text-base px-8 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20"
                onClick={() => navigate('/zealicon-events')}
              >
                Explore Events
              </Button>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="font-playfair text-lg md:text-xl italic text-muted-foreground/80">
              "Where words weave magic and stories come alive"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
