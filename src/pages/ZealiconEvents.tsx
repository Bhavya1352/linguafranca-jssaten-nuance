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

        {/* Main Layout with Heading and Flowchart/Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          {/* Left Side - Heading */}
          <motion.div
            className="w-full lg:w-80 lg:-mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 md:p-8 bg-card border-2 border-border w-full">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Zealicon Events
              </h1>
              <p className="font-poppins text-lg text-muted-foreground">
                Literary competitions that challenge creativity and expression
              </p>
            </Card>
          </motion.div>

          {/* Right Side - Circular Layout (Desktop) / Grid (Mobile) */}
          <div className="w-full flex-1 lg:-ml-8">
            {/* Mobile/Tablet Grid View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
              {zealiconEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 bg-card border-2 hover:border-primary overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-playfair text-xl font-bold text-foreground leading-tight text-center">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-poppins text-sm text-muted-foreground leading-relaxed text-center">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Desktop Circular Layout */}
            <div className="hidden lg:flex relative w-full h-[600px] items-center justify-center">
              {/* Central Hub */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Card className="w-64 h-64 bg-card border-4 border-border shadow-2xl rounded-full flex items-center justify-center">
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

                return (
                  <motion.div
                    key={event.title}
                    className="zealicon__event-position absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: finalX,
                      y: finalY,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 20 }}
                  >
                    <Card className="w-56 group hover:shadow-2xl transition-all duration-500 bg-card border-2 hover:border-primary overflow-hidden">
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="font-playfair text-lg font-bold text-foreground text-center">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="font-poppins text-xs text-muted-foreground text-center">
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