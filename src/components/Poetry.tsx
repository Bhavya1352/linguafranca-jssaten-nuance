import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const poems = [
  {
    quote: "To be or not to be, that is the question.",
    author: "William Shakespeare",
    poem: "Hamlet"
  },
  {
    quote: "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
    poem: "The Road Not Taken"
  },
  {
    quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    author: "Martin Luther King Jr.",
    poem: "I Have a Dream"
  },
  {
    quote: "Ask not what your country can do for you – ask what you can do for your country.",
    author: "John F. Kennedy",
    poem: "Inaugural Address"
  }
];

const Poetry = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            Literary Classics
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Timeless verses that have shaped literature and inspired generations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {poems.map((poem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
                    <blockquote className="font-playfair text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                      {poem.quote}
                    </blockquote>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <p className="font-poppins font-semibold text-primary text-lg">
                      — {poem.author}
                    </p>
                    <p className="font-poppins text-sm text-muted-foreground mt-1">
                      {poem.poem}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="text-2xl">📖</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Poetry;