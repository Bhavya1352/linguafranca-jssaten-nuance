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
    <section className="py-20 bg-amber-50">
      <div className="container px-4">
        <div className="bg-amber-100/80 rounded-xl p-8 shadow-xl border border-amber-200">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-amber-900 mb-4">
              Literary Classics
            </h2>
            <p className="font-poppins text-lg text-amber-900 max-w-2xl mx-auto">
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
              <Card className="h-full bg-amber-100/90 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <div className="text-6xl text-amber-600/40 font-serif mb-4">"</div>
                    <blockquote className="font-playfair text-lg md:text-xl text-amber-900 leading-relaxed italic mb-6">
                      {poem.quote}
                    </blockquote>
                  </div>
                  
                  <div className="border-t border-amber-300 pt-4">
                    <p className="font-poppins font-semibold text-amber-900 text-lg">
                      — {poem.author}
                    </p>
                    <p className="font-poppins text-sm text-gray-800 mt-1">
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
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400/30" />
            <div className="text-2xl">📖</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400/30" />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poetry;