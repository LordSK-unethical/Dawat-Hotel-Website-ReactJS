import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { chefSpecials } from '../data/menuData';

export default function ChefsSpecials() {
  return (
    <section id="specials" className="py-20 bg-charcoal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron tracking-[0.3em] uppercase text-sm">Handcrafted Excellence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-cream mt-3 font-[Playfair_Display]">
            Chef's Specials
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Signature dishes prepared by our master chefs using time-honored recipes and the finest ingredients
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {chefSpecials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden glass">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-saffron text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-cream font-[Playfair_Display] group-hover:text-saffron transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-cream/60 text-sm mt-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-saffron text-xl font-bold">₹{item.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
