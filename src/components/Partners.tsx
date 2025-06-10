
import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  // Placeholder для логотипов партнеров
  const partners = [
    { name: 'Партнер 1', logo: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=120&h=60&fit=crop&crop=center' },
    { name: 'Партнер 2', logo: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=120&h=60&fit=crop&crop=center' },
    { name: 'Партнер 3', logo: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=120&h=60&fit=crop&crop=center' },
    { name: 'Партнер 4', logo: 'https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=120&h=60&fit=crop&crop=center' },
    { name: 'Партнер 5', logo: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=120&h=60&fit=crop&crop=center' },
    { name: 'Партнер 6', logo: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=120&h=60&fit=crop&crop=center' },
  ];

  return (
    <section className="py-12 bg-capyprint-background border-t border-capyprint-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-capyprint-black mb-4">
            Нам доверяют
          </h2>
          <p className="text-capyprint-black/70 max-w-2xl mx-auto">
            Более 100+ партнеров уже используют CapyPrint для развития своего бизнеса
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-capyprint-black/60">
            И еще сотни довольных клиентов по всей России
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
