import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const coreMembers = [
  { name: "Shivesh Srivastava", position: "President", instagram: "https://www.instagram.com/shivesh._17/" },
  { name: "Ruhani Singh", position: "Vice President", instagram: "https://www.instagram.com/ruhanii_singh01/" },
  { name: "Vageesh Choudhary", position: "CTC", instagram: "http://instagram.com/vageessh/" },
  { name: "Mantavya Misra", position: "Co-CTC", instagram: "https://www.instagram.com/misra_mantav/" },
  { name: "Vishal Aditya", position: "Co-Secretary", instagram: "https://www.instagram.com/adityaafrrr/" },
  { name: "Anant Jain", position: "YP Coordinator", instagram: "https://www.instagram.com/anant.1006/" },
  { name: "Vaibhav Yadav", position: "Management Head", instagram: "https://www.instagram.com/vaibhavyadavv07/" },
  { name: "Aditya Mehrotra", position: "Editorial Head", instagram: "https://www.instagram.com/aditya.mehrotra.737/" },
  { name: "Raghav Raturi", position: "Technical Head", instagram: "https://www.instagram.com/p/DNqqFDAy_Lp/" },
  { name: "Tarushi Sharma", position: "Creative Head", instagram: "https://www.instagram.com/_tarushii/" },
  { name: "Harsh Nayyar", position: "Marketing Head", instagram: "https://www.instagram.com/harsh_nayyar13/" },
  { name: "Sayyam Verma", position: "Designing Head", instagram: "https://www.instagram.com/p/DNqpnILyyQL/" }
];

const CoreTeam = () => {
  return (
    <div className="min-h-screen pt-20 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-amber-100/80 rounded-xl p-8 shadow-xl border border-amber-200">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-amber-900 mb-4">
              Core Team
            </h1>
            <p className="font-poppins text-lg text-amber-900 max-w-2xl mx-auto">
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
                <Card className="h-full bg-amber-100/90 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-bold text-amber-900 mb-3">
                      {member.name}
                    </h3>
                    <p className="font-poppins text-amber-900 font-semibold mb-4">
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