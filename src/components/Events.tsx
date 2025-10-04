import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, MapPin, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const events = [
  {
    title: "Poetry Slam",
    description: "Unleash your inner poet in our open mic poetry competition",
    date: "15th November 2024",
    location: "College Auditorium",
    participants: "50+ participants",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
  },
  {
    title: "Literary Fest",
    description: "Annual celebration of literature with workshops, debates, and performances",
    date: "20-22nd December 2024",
    location: "Main Campus",
    participants: "200+ attendees",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
  },
  {
    title: "Creative Writing Workshop",
    description: "Master the art of storytelling with professional authors",
    date: "5th January 2025",
    location: "Seminar Hall",
    participants: "30 seats",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop",
  },
  {
    title: "Book Club Meet",
    description: "Monthly gathering to discuss contemporary literature",
    date: "Every 1st Saturday",
    location: "Library Reading Room",
    participants: "Open to all",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
  },
  {
    title: "Debate Competition",
    description: "Sharpen your argumentative skills in thought-provoking debates",
    date: "28th January 2025",
    location: "Conference Hall",
    participants: "16 teams",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
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
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="font-playfair text-2xl text-foreground">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="font-poppins text-sm text-muted-foreground">
                          {event.description}
                        </p>
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-poppins">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-poppins">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="font-poppins">{event.participants}</span>
                          </div>
                        </div>
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
