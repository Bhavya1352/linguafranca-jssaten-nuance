import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    description: "Where young minds debate, lead, and shape the spirit of democracy",
    image: "/placeholder.svg",
  },
  {
    title: "Chemprakriti",
    description: "Chemistry is a part of nature and this is your chance to come forth and express your opinions!",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop",
  },
  {
    title: "Corporate Competence",
    description: "Mock interviews and Aptitude tests to prepare you for everything that's to come!",
    image: "/placeholder.svg",
  },
];

const Events = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
            Our Events
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Immersive experiences that celebrate the written and spoken word
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)]">
                      <div className="relative h-48 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="text-4xl mb-2">🎯</div>
                            <div className="text-sm font-medium text-foreground">{event.title}</div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="font-playfair text-2xl text-foreground">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Events;
