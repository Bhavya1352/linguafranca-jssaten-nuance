import { Edit3, Palette, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const departments = [
  {
    icon: Edit3,
    name: "Editorial",
    description: "Content creation and curation",
    color: "#8B5CF6",
  },
  {
    icon: Palette,
    name: "Designing",
    description: "Visual aesthetics and graphics",
    color: "#06B6D4",
  },
  {
    icon: Users,
    name: "Management",
    description: "Operations and coordination",
    color: "#F59E0B",
  },
  {
    icon: Code,
    name: "Technical",
    description: "Digital solutions and tech support",
    color: "#10B981",
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
        <div className="max-w-5xl mx-auto">
          {/* Main Hub */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <Card className="w-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">LF</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                    Lingua Franca
                  </h3>
                  <p className="font-poppins text-muted-foreground">
                    Literary Society Hub
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              {/* Vertical line from center */}
              <div className="absolute left-1/2 top-0 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent transform -translate-x-0.5"></div>
              
              {/* Horizontal connecting line */}
              <div className="absolute left-1/4 right-1/4 top-8 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
              
              {/* Vertical lines to departments */}
              <div className="absolute left-1/4 top-8 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent transform -translate-x-0.5"></div>
              <div className="absolute left-2/4 top-8 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-0.5"></div>
              <div className="absolute right-1/4 top-8 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent transform translate-x-0.5"></div>
            </div>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={dept.name}
                  className="group hover:scale-105 transition-all duration-500 bg-card border-2 hover:shadow-2xl"
                  style={{
                    borderColor: `${dept.color}40`,
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div 
                      className="h-16 w-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                      style={{
                        backgroundColor: `${dept.color}15`,
                        border: `2px solid ${dept.color}30`,
                      }}
                    >
                      <Icon 
                        className="h-8 w-8" 
                        style={{ color: dept.color }}
                      />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      {dept.name}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
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
