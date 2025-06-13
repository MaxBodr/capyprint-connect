import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'ИТМО', logo: '/lovable-uploads/ITMO.png' },
    { name: 'Ясная Поляна', logo: '/lovable-uploads/yasnya-polyana.png' },
    { name: 'ГУАП', logo: '/lovable-uploads/guap.png' },
    { name: 'Invelis', logo: '/lovable-uploads/Invelis.png' },
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
            Партнёры, с которыми мы уже запустили CapyPrint
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center"
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
                className={
                  "max-w-full max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 " +
                  (partner.name === "Invelis" ? "border border-gray-300 rounded" : "")
                }
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
            Мы открыты к новым партнёрствам по всей России
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
