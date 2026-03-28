import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&h=1080&fit=crop',
    title: 'Experience the Royal Feast',
    subtitle: 'Where every meal is a celebration',
  },
  {
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1920&h=1080&fit=crop',
    title: 'The Art of Biryani',
    subtitle: 'Aromatic grains, royal heritage',
  },
  {
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1920&h=1080&fit=crop',
    title: 'Flavors of India',
    subtitle: 'Traditional recipes, modern presentation',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
        loop
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-4xl px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-saffron text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
          >
            Welcome to Dawat
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 font-[Playfair_Display]"
          >
            Where Every Dish
            <br />
            <span className="text-gradient">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Experience the finest Indian cuisine crafted with centuries-old recipes and the freshest ingredients
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#reservations"
              className="inline-flex items-center justify-center bg-saffron text-charcoal px-8 py-4 rounded-full text-lg font-semibold glow-saffron"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.a>
            <motion.a
              href="#menu"
              className="inline-flex items-center justify-center glass-light text-cream px-8 py-4 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 253, 208, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-saffron rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
