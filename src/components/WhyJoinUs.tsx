import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Lightbulb, Star } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Win Prizes & Recognition",
    description: "Certificates, cash prizes, and college recognition for your talents",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Build Network",
    description: "Connect with like-minded peers and industry professionals",
    color: "#8B5CF6",
  },
  {
    icon: Lightbulb,
    title: "Develop Skills",
    description: "Public speaking, writing, leadership, and creative abilities",
    color: "#10B981",
  },
  {
    icon: Star,
    title: "Boost Your Resume",
    description: "Stand out in placements with society participation & leadership roles",
    color: "#06B6D4",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
            Why Join Lingua Franca?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your college experience and unlock your potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="group hover:scale-105 transition-all duration-300 border-2 hover:shadow-xl backdrop-blur-sm bg-white/10 border-white/20"
                style={{
                  borderColor: `${benefit.color}30`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:rotate-12"
                    style={{
                      backgroundColor: `${benefit.color}15`,
                    }}
                  >
                    <Icon
                      className="h-8 w-8"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;