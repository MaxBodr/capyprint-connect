import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, CreditCard, FileText, Settings } from 'lucide-react';

const HowItWorks = () => {
  const ownerSteps = [
    { icon: <Settings size={28} />, title: "Подключение к вашему принтеру", number: "1" },
    { icon: <Upload size={28} />, title: "Настройка стоимости и лимитов печати", number: "2" },
    { icon: <FileText size={28} />, title: "Контроль метрик и доходов", number: "3" },
    { icon: <CreditCard size={28} />, title: "Получение прибыли с печати", number: "4" },
  ];

  const userSteps = [
    { icon: <Upload size={28} />, title: "Загрузка файла", number: "1" },
    { icon: <Settings size={28} />, title: "Настройка печати и копий", number: "2" },
    { icon: <CreditCard size={28} />, title: "Оплата печати", number: "3" },
    { icon: <FileText size={28} />, title: "Получение документов", number: "4" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="section-title">
            Печать в один клик. Контроль в одном месте
          </h2>
        </motion.div>

        {/* Контейнер колонок */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
          }}
          className="flex flex-col md:flex-row justify-center items-start gap-y-8 md:gap-x-16"
        >
          {/* Для владельца точки */}
          <div className="w-full md:w-auto">
            <motion.div variants={{ hidden: {}, visible: {} }} className="text-left">
              <h3 className="text-xl font-semibold text-capyprint-black mb-4">
                Для владельца точки:
              </h3>
              <div className="space-y-4">
                {ownerSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: i * 0.05 },
                      },
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Цифра всегда */}
                      <div className="w-10 h-10 rounded-full bg-capyprint-primary/10 
                                      flex items-center justify-center text-capyprint-primary 
                                      font-bold text-sm">
                        {step.number}
                      </div>
                      {/* Иконка скрывается на мобильных (< md) */}
                      <div className="hidden md:flex">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-capyprint-black text-base font-medium leading-snug whitespace-nowrap">
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Для пользователя */}
          <div className="w-full md:w-auto">
            <motion.div variants={{ hidden: {}, visible: {} }} className="text-left">
              <h3 className="text-xl font-semibold text-capyprint-black mb-4">
                Для пользователя:
              </h3>
              <div className="space-y-4">
                {userSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: i * 0.05 },
                      },
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-capyprint-primary/10 
                                      flex items-center justify-center text-capyprint-primary 
                                      font-bold text-sm">
                        {step.number}
                      </div>
                      <div className="hidden md:flex">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-capyprint-black text-base font-medium leading-snug whitespace-nowrap">
                      {step.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
