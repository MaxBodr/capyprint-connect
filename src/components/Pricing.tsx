
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Доступ к панели администратора",
    "Тех. поддержка",
    "Установка и внедрение"
  ];

  const plans = [
    {
      period: "в год",
      price: "28 000 ₽",
      popular: true
    },
    {
      period: "в полгода",
      price: "15 000 ₽",
      popular: false
    },
    {
      period: "в квартал",
      price: "8 000 ₽",
      popular: false
    },
    {
      period: "в месяц",
      price: "2 800 ₽",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-capyprint-background/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Тарифы</h2>
        </motion.div>

        {/* Что входит */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-capyprint-black">Что входит?</h3>
          <div className="glass-card p-6 rounded-2xl">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-capyprint-primary mr-3" />
                  <span className="text-capyprint-black/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Тарифные планы */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`feature-card p-6 text-center relative ${plan.popular ? 'ring-2 ring-capyprint-primary' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-capyprint-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Популярный
                </div>
              )}
              <div className="text-2xl font-bold text-capyprint-black mb-2">{plan.price}</div>
              <div className="text-capyprint-black/70">{plan.period}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Пример расчёта */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-capyprint-primary/10 rounded-lg">
            <span className="mr-2">📈</span>
            <span className="text-capyprint-black/80">Пример расчёта выручки на 1 принтер</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
