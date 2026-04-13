import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="menu" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-saffron tracking-[0.3em] uppercase text-sm">Culinary Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold text-cream mt-3 font-[Playfair_Display]">
            Our Menu
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Explore our diverse range of dishes, each crafted with love and tradition
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="glass rounded-2xl p-4 lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-cream mb-4 font-[Playfair_Display]">Categories</h3>
              <div className="space-y-2">
                {menuCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-saffron text-charcoal'
                        : 'text-cream/70 hover:bg-charcoal-light hover:text-cream'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {menuItems[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl overflow-hidden group"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                      
                      <div className="absolute top-3 right-3 flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < item.spiceLevel ? 'text-red-500' : 'text-cream/30'}`}
                          >
                            🌶
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-cream font-[Playfair_Display] group-hover:text-saffron transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-saffron font-bold">₹{item.price}</span>
                      </div>
                      <p className="text-cream/60 text-sm mb-4">{item.description}</p>

                      <AnimatePresence>
                        {hoveredItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-charcoal-light/50 rounded-lg p-3 mb-3">
                              <p className="text-cream/70 text-sm italic">
                                {item.origin}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
