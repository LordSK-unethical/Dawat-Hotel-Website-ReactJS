import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addDays, isSameDay } from 'date-fns';
import { FiCheck, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';

const timeSlots = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

const tableTypes = [
  { id: 'window', name: 'Window Seat', icon: '🪟', description: 'City view with natural light', capacity: 2 },
  { id: 'booth', name: 'Booth', icon: '🛋️', description: 'Private and cozy corner', capacity: 4 },
  { id: 'patio', name: 'Patio', icon: '🌿', description: 'Open-air dining experience', capacity: 6 },
  { id: 'family', name: 'Family Table', icon: '👨‍👩‍👧‍👦', description: 'Large group seating', capacity: 8 },
];

export default function Reservations() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedTable, setSelectedTable] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const next14Days = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedTime('');
      setSelectedTable('');
      setGuests(2);
    }, 5000);
  };

  return (
    <section id="reservations" className="py-20 bg-charcoal-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-saffron rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-saffron tracking-[0.3em] uppercase text-sm">Reserve Your Spot</span>
          <h2 className="text-3xl md:text-5xl font-bold text-cream mt-3 font-[Playfair_Display]">
            Book a Table
          </h2>
          <p className="text-cream/60 mt-4 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-md mx-auto glass rounded-3xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-20 h-20 bg-saffron rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <FiCheck className="text-charcoal text-4xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-cream mb-2 font-[Playfair_Display]">
                Reservation Confirmed!
              </h3>
              <p className="text-cream/70">
                We look forward to serving you. A confirmation has been sent to your email.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                    <FiCalendar className="text-saffron" /> Select Date
                  </h3>
                  <div className="grid grid-cols-7 gap-2">
                    {next14Days.map((date, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-xl text-center transition-all ${
                          isSameDay(date, selectedDate)
                            ? 'bg-saffron text-charcoal'
                            : 'bg-charcoal-light text-cream/70 hover:text-cream'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-xs">{format(date, 'EEE')}</div>
                        <div className="text-lg font-bold">{format(date, 'd')}</div>
                        <div className="text-xs">{format(date, 'MMM')}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                    <FiUsers className="text-saffron" /> Guests & Time
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-cream/60 text-sm mb-2 block">Number of Guests</label>
                      <div className="flex items-center gap-3">
                        <motion.button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-10 h-10 rounded-full bg-charcoal-light text-cream"
                          whileTap={{ scale: 0.9 }}
                        >
                          -
                        </motion.button>
                        <span className="text-cream text-xl font-semibold w-12 text-center">{guests}</span>
                        <motion.button
                          type="button"
                          onClick={() => setGuests(Math.min(12, guests + 1))}
                          className="w-10 h-10 rounded-full bg-charcoal-light text-cream"
                          whileTap={{ scale: 0.9 }}
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                    <div>
                      <label className="text-cream/60 text-sm mb-2 block">Select Time</label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-lg text-sm transition-all ${
                              selectedTime === time
                                ? 'bg-saffron text-charcoal'
                                : 'bg-charcoal-light text-cream/70 hover:text-cream'
                            }`}
                            whileTap={{ scale: 0.95 }}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-6 mt-8"
              >
                <h3 className="text-lg font-semibold text-cream mb-4 flex items-center gap-2">
                  <FiMapPin className="text-saffron" /> Choose Your Seating
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tableTypes.map((table) => (
                    <motion.button
                      key={table.id}
                      type="button"
                      onClick={() => setSelectedTable(table.id)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        selectedTable === table.id
                          ? 'bg-saffron/20 border-2 border-saffron'
                          : 'bg-charcoal-light border-2 border-transparent hover:border-saffron/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl mb-2">{table.icon}</div>
                      <div className="text-cream font-semibold">{table.name}</div>
                      <div className="text-cream/50 text-xs mt-1">{table.description}</div>
                      <div className="text-saffron text-xs mt-1">Up to {table.capacity} guests</div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-charcoal-light/50 rounded-xl">
                  <div className="text-center text-cream/60 text-sm mb-4">
                    2D Table Layout Preview
                  </div>
                  <div className="grid grid-cols-6 gap-2 max-w-md mx-auto">
                    {[
                      { type: 'window', row: 0, col: 0 },
                      { type: 'window', row: 0, col: 1 },
                      { type: 'booth', row: 0, col: 2 },
                      { type: 'booth', row: 0, col: 3 },
                      { type: 'window', row: 0, col: 4 },
                      { type: 'window', row: 0, col: 5 },
                      { type: 'empty', row: 1 },
                      { type: 'empty', row: 1 },
                      { type: 'empty', row: 1 },
                      { type: 'empty', row: 1 },
                      { type: 'empty', row: 1 },
                      { type: 'empty', row: 1 },
                      { type: 'patio', row: 2, col: 1 },
                      { type: 'patio', row: 2, col: 2 },
                      { type: 'patio', row: 2, col: 3 },
                      { type: 'patio', row: 2, col: 4 },
                      { type: 'family', row: 3, col: 2 },
                      { type: 'family', row: 3, col: 3 },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xs ${
                          item.type === 'empty'
                            ? 'bg-charcoal/30'
                            : selectedTable === item.type
                            ? 'bg-saffron text-charcoal'
                            : 'bg-charcoal-light text-cream/50'
                        }`}
                      >
                        {item.type === 'empty' ? '' : item.type === 'window' ? '🪟' : item.type === 'booth' ? '🛋️' : item.type === 'patio' ? '🌿' : '👨‍👩‍👧‍👦'}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={!selectedTime || !selectedTable}
                className="w-full mt-8 bg-saffron text-charcoal py-4 rounded-2xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed glow-saffron"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm Reservation
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
