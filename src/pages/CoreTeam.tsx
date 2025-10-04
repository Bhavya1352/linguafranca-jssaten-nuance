import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const coreMembers = [
  { name: "Member Name 1", position: "President", instagram: "@member1" },
  { name: "Member Name 2", position: "Vice President", instagram: "@member2" },
  { name: "Member Name 3", position: "Secretary", instagram: "@member3" },
  { name: "Member Name 4", position: "Treasurer", instagram: "@member4" },
  { name: "Member Name 5", position: "Event Coordinator", instagram: "@member5" },
  { name: "Member Name 6", position: "Creative Head", instagram: "@member6" },
  { name: "Member Name 7", position: "Technical Lead", instagram: "@member7" },
  { name: "Member Name 8", position: "Public Relations", instagram: "@member8" },
  { name: "Member Name 9", position: "Content Writer", instagram: "@member9" },
  { name: "Member Name 10", position: "Social Media Manager", instagram: "@member10" },
  { name: "Member Name 11", position: "Workshop Coordinator", instagram: "@member11" },
  { name: "Member Name 12", position: "Alumni Relations", instagram: "@member12" }
];

const CoreTeam = () => {
  return (
    <div 
      className="min-h-screen pt-20"
      style={{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-xl border border-gray-200">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Core Team
            </h1>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the dedicated members who lead Lingua Franca with passion and commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/container">
            {coreMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group/card hover:scale-105 group-hover/container:blur-sm hover:!blur-none transition-all duration-300"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-primary/40 transition-all duration-300 hover:shadow-xl rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-bold text-gray-900 mb-3">
                      {member.name}
                    </h3>
                    <p className="font-poppins text-primary font-semibold mb-4">
                      {member.position}
                    </p>
                    <img src="/insta.jpg" alt="Instagram" className="w-6 h-6 mx-auto cursor-pointer hover:scale-110 transition-transform" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;