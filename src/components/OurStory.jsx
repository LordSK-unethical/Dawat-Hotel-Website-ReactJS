import { motion } from 'framer-motion';
import { timelineEvents, philosophyQuotes } from '../data/timelineData';

export default function OurStory() {
  return (
    <section id="story" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-saffron tracking-[0.3em] uppercase text-sm">Legacy in Every Bite</span>
          <h2 className="text-3xl md:text-5xl font-bold text-cream mt-3 font-[Playfair_Display]">
            Our Story
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Four decades of culinary excellence, rooted in tradition and driven by passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {philosophyQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient font-[Playfair_Display] mb-2">
                "{quote.text}"
              </p>
              {quote.translation && (
                <p className="text-saffron text-sm mb-4">{quote.translation}</p>
              )}
              <p className="text-cream/70">{quote.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-saffron to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-saffron text-4xl font-bold font-[Playfair_Display]">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-cream mt-2 font-[Playfair_Display]">
                      {event.title}
                    </h3>
                    <p className="text-cream/60 mt-2">{event.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-saffron glow-saffron-sm"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                <div className="flex-1">
                  <motion.div
                    className="rounded-2xl overflow-hidden h-48 md:h-56"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
