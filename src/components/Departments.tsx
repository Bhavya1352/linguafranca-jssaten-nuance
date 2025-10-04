import { Pen, Mic, BookOpen, Camera, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const departments = [
  {
    icon: Pen,
    name: "Creative Writing",
    description: "Crafting stories and poetry",
    color: "hsl(var(--primary))",
  },
  {
    icon: Mic,
    name: "Public Speaking",
    description: "Voice your thoughts confidently",
    color: "hsl(var(--accent))",
  },
  {
    icon: BookOpen,
    name: "Literary Analysis",
    description: "Diving deep into literature",
    color: "hsl(var(--primary))",
  },
  {
    icon: Camera,
    name: "Visual Storytelling",
    description: "Narratives through imagery",
    color: "hsl(var(--accent))",
  },
  {
    icon: Users,
    name: "Event Management",
    description: "Organizing literary events",
    color: "hsl(var(--primary))",
  },
  {
    icon: Sparkles,
    name: "Publication",
    description: "Bringing ideas to print",
    color: "hsl(var(--accent))",
  },
];

const Departments = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground">
            Our Departments
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Diverse wings united by the love of literature
          </p>
        </div>

        {/* Flowchart Structure */}
        <div className="max-w-6xl mx-auto">
          {/* Top Level - Main Hub */}
          <div className="flex justify-center mb-12 animate-slide-in-left">
            <Card className="w-72 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-[0_4px_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_8px_30px_hsl(var(--primary)/0.25)] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Lingua Franca
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  Core Literary Society
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-primary/30" />
              <div className="flex gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-px w-32 bg-primary/30" />
                ))}
              </div>
            </div>
          </div>

          {/* Department Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={dept.name}
                  className="group hover:scale-105 transition-all duration-300 bg-card border-2 border-border hover:border-primary/40 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.2)]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div 
                      className="h-14 w-14 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:rotate-12"
                      style={{
                        backgroundColor: `${dept.color}20`,
                      }}
                    >
                      <Icon 
                        className="h-7 w-7" 
                        style={{ color: dept.color }}
                      />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {dept.name}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {dept.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
