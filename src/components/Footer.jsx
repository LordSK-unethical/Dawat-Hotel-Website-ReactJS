import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-[Playfair_Display] mb-4">
              <span className="text-gradient">Dawat</span>
              <span className="text-cream"> Hotel</span>
            </h3>
            <p className="text-cream/60 mb-4">
              Where every dish tells a story. Experience the finest Indian cuisine with a modern heritage touch.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiTwitter />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-cream mb-4 font-[Playfair_Display]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', "Chef's Specials", 'Menu', 'Gallery', 'Our Story', 'Reservations'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}`} className="text-cream/60 hover:text-saffron transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-cream mb-4 font-[Playfair_Display]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-cream/60">
                <FiMapPin className="text-saffron mt-1 flex-shrink-0" />
                <span>123 Heritage Lane, Culinary District, Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60">
                <FiPhone className="text-saffron flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-cream/60">
                <FiMail className="text-saffron flex-shrink-0" />
                <span>info@dawathotel.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-cream mb-4 font-[Playfair_Display]">Hours</h4>
            <ul className="space-y-2 text-cream/60">
              <li className="flex items-center gap-3">
                <FiClock className="text-saffron" />
                <span>Mon - Thu: 12:00 PM - 10:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="text-saffron" />
                <span>Fri - Sun: 12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron ml-6">•</span>
                <span>Lunch: 12:00 PM - 3:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron ml-6">•</span>
                <span>Dinner: 6:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/40">
            © {new Date().getFullYear()} Dawat Hotel. All rights reserved. Made with passion for Indian cuisine.
          </p>
        </div>
      </div>
    </footer>
  );
}
