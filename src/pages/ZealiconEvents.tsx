import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const zealiconEvents = [
  {
    title: "तस्वीर-इ-शेरो शायरी",
    description: "How well you can nail the pictures through your words can change the game too!",
    image: "/tasveer.jpg.png",
  },
  {
    title: "Comic Oodle",
    description: "We've all discussed fan theories and the twists and turns our favourite media takes. So, let's talk about what ifs, shall we?",
    image: "/comic.jpg.png",
  },
  {
    title: "Word Snipping",
    description: "A wordy dart game awaits you..!",
    image: "/word.jpg.png",
  },
  {
    title: "Graffiti",
    description: "Turn on your creative pulse - experience the fun and pride of wearing your own self-designed fit!",
    image: "/grafi.jpg.png",
  },
  {
    title: "Turn Coat",
    description: "Nothing more contradictory than fighting yourself. In this event, you get to do exactly that!",
    image: "/corporate.jpg",
  },
];

const ZealiconEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Header */}
      <div className="container px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        {/* Main Layout with Heading and Flowchart */}
        <div className="flex items-center">
          {/* Left Side - Heading */}
          <motion.div
            className="flex-shrink-0 w-80 -mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 backdrop-blur-sm w-full">
              <h1 className="font-playfair text-2xl md:text-4xl font-bold text-foreground mb-4 whitespace-nowrap">
                Zealicon Events
              </h1>
              <p className="font-poppins text-lg text-muted-foreground">
                Literary competitions that challenge creativity and expression
              </p>
            </Card>
          </motion.div>

          {/* Right Side - Circular Layout */}
          <div className="flex-1 -ml-8">
            <div className="relative w-full h-[550px] flex items-center justify-center">
            {/* Central Hub */}
            <motion.div 
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Card className="w-64 h-64 bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary/50 shadow-2xl backdrop-blur-md rounded-full flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <motion.span 
                      className="text-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      🏆
                    </motion.span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Zealicon 2025
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Literary Festival
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Events in Circle */}
            {zealiconEvents.map((event, index) => {
              const angle = (index * 72) - 90;
              const radius = 250;
              const finalX = Math.cos((angle * Math.PI) / 180) * radius;
              const finalY = Math.sin((angle * Math.PI) / 180) * radius;
              
              // Random messy positions
              const messyX = (Math.random() - 0.5) * 800;
              const messyY = (Math.random() - 0.5) * 600;
              const messyRotate = Math.random() * 720 - 360;
              
              return (
                <motion.div
                  key={event.title}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    opacity: 0,
                    scale: 0.3,
                    x: messyX,
                    y: messyY,
                    rotate: messyRotate
                  }}
                  animate={[
                    {
                      opacity: 1,
                      scale: 0.8,
                      x: messyX * 0.7,
                      y: messyY * 0.7,
                      rotate: messyRotate * 0.5,
                      transition: { duration: 0.5, delay: index * 0.1 }
                    },
                    {
                      scale: 1,
                      x: finalX,
                      y: finalY,
                      rotate: 0,
                      transition: { 
                        duration: 1.2, 
                        delay: 1 + index * 0.15,
                        type: "spring",
                        stiffness: 80,
                        damping: 12
                      }
                    }
                  ]}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    zIndex: 20
                  }}
                >
                  <Card className="w-56 group hover:shadow-2xl transition-all duration-500 bg-card/90 backdrop-blur-sm border-2 hover:border-primary/60 overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-playfair text-lg font-bold text-foreground leading-tight text-center">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-poppins text-xs text-muted-foreground leading-relaxed text-center">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            {zealiconEvents.map((_, index) => {
              const angle = (index * 72) - 90;
              
              return (
                <div
                  key={`line-${index}`}
                  className="absolute w-0.5 h-40 bg-gradient-to-r from-primary/50 to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: 'center bottom'
                  }}
                />
              );
            })}

            {/* Decorative Circles */}
            <div className="absolute left-1/2 top-1/2 w-80 h-80 border border-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 w-[550px] h-[550px] border border-accent/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZealiconEvents;