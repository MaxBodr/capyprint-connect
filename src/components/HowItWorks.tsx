import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, CreditCard, FileText, Settings } from 'lucide-react';

const HowItWorks = () => {
  const userSteps = [
    { icon: <Upload size={28} />, title: "Загружает файл", number: "1" },
    { icon: <Settings size={28} />, title: "Настраивает печать и количество копий", number: "2" },
    { icon: <CreditCard size={28} />, title: "Оплачивает печать", number: "3" },
    { icon: <FileText size={28} />, title: "Забирает документ", number: "4" },
  ];

  const ownerSteps = [
    { icon: <Settings size={28} />, title: "Подключаемся к вашему принтеру", number: "1" },
    { icon: <Settings size={28} />, title: "Настройка стоимости и доступности печати", number: "2" },
    { icon: <FileText size={28} />, title: "Отслеживание статистики в админ панели", number: "3" },
    { icon: <CreditCard size={28} />, title: "Получение прибыли с печати", number: "4" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="section-title">Печать в один клик. Контроль в одном месте</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 md:gap-10"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, ease: 'easeOut' },
            },
          }}
        >
          {/* Для пользователя */}
          <motion.div
            variants={{ hidden: {}, visible: {} }}
            className="md:translate-x-[15%]"
          >
            <h3 className="text-xl font-semibold text-capyprint-black mb-4 text-left">
              Для пользователя:
            </h3>
            <div className="space-y-4">
              {userSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.05 },
                    },
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-capyprint-primary/10 text-capyprint-primary font-bold text-sm">
                      {step.number}
                    </div>
                    {step.icon}
                  </div>
                  <span className="text-capyprint-black text-base font-medium leading-snug">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Для владельца */}
          <motion.div
            variants={{ hidden: {}, visible: {} }}
            className="md:-translate-x-[15%]"
          >
            <h3 className="text-xl font-semibold text-capyprint-black mb-4 text-left">
              Для владельца точки:
            </h3>
            <div className="space-y-4">
              {ownerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.05 },
                    },
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-capyprint-primary/10 text-capyprint-primary font-bold text-sm">
                      {step.number}
                    </div>
                    {step.icon}
                  </div>
                  <span className="text-capyprint-black text-base font-medium leading-snug">
                    {step.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
