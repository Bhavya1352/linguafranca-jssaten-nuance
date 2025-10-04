import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
            Lingua Franca
          </h1>
          
          {/* Subtitle */}
          <p className="font-poppins text-xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Official Literary Society of JSSATEN NOIDA
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-px w-20 bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary animate-float" />
            <div className="h-px w-20 bg-primary/30" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group font-poppins text-base px-8"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              className="font-poppins text-base px-8"
            >
              Explore Events
            </Button>
          </div>

          {/* Quote */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="font-playfair text-lg md:text-xl italic text-muted-foreground/80">
              "Where words weave magic and stories come alive"
            </p>
          </div>
        </div>
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
