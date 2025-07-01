import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const features = [
    "Доступ к панели администратора",
    "Тех. поддержка",
    "Установка и внедрение"
  ];

  const plans = [
    { period: "в месяц",   price: "2 800 ₽",  isPopular: false },
    { period: "в квартал", price: "8 000 ₽",  isPopular: false },
    { period: "в полгода", price: "15 000 ₽", isPopular: true  },
    { period: "в год",     price: "28 000 ₽", isPopular: false },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Тарифы</h2>
        </motion.div>

        {/* Расширенный контейнер для ПК */}
        <div className="mx-auto max-w-full md:max-w-6xl" ref={ref}>
          {/* Карточки тарифов */}
          <motion.div
            className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, ease: 'easeOut' } },
            }}
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`feature-card p-6 text-center relative ${plan.isPopular ? 'ring-2 ring-capyprint-primary' : ''}`}
                initial={false}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
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

          {/* Что входит? – белый фон только у этого контейнера */}
          <motion.div
            initial={false}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card p-8 rounded-2xl mb-12 bg-white"
          >
            <h3 className="text-xl font-semibold text-capyprint-black mb-6 text-center">
              Что входит?
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.1 }}
                >
                  <Check className="h-5 w-5 text-capyprint-primary" />
                  <span className="text-capyprint-black font-medium whitespace-nowrap">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Примечание к калькулятору */}
          <motion.div
            initial={false}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
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
