
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const features = [
    "Доступ к панели администратора",
    "Тех. поддержка",
    "Установка и внедрение"
  ];

  const plans = [
    {
      period: "в месяц",
      price: "2 800 ₽",
      isPopular: false
    },
    {
      period: "в квартал",
      price: "8 000 ₽",
      isPopular: false
    },
    {
      period: "в полгода",
      price: "15 000 ₽",
      isPopular: true
    },
    {
      period: "в год",
      price: "28 000 ₽",
      isPopular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Тарифы</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl mb-12"
          >
            <h3 className="text-xl font-semibold text-capyprint-black mb-6 text-center">Что входит?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Check className="h-5 w-5 text-capyprint-primary" />
                  <span className="text-capyprint-black">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing cards */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`feature-card p-6 text-center relative ${
                  plan.isPopular ? 'ring-2 ring-capyprint-primary' : ''
                }`}
                variants={itemVariants}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-capyprint-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                <div className="text-3xl font-bold text-capyprint-black mb-2">{plan.price}</div>
                <div className="text-capyprint-black/70 mb-6">{plan.period}</div>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full transition-all duration-300 ${
                    plan.isPopular 
                      ? 'cta-button hover:bg-capyprint-primary/90 hover:shadow-lg' 
                      : 'bg-capyprint-muted hover:bg-capyprint-primary hover:text-white text-capyprint-black'
                  }`}
                >
                  Выбрать
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Calculator note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-capyprint-black/70">
              📈 Пример расчёта выручки на 1 принтер смотрите в калькуляторе ниже
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
