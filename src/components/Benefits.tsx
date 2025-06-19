import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Laptop, Zap, Shield, MapPin, CalendarClock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Briefcase className="h-10 w-10 text-capyprint-orange" />,
      title: "Подходит для бизнеса любого размера"
    },
    {
      icon: <Laptop className="h-10 w-10 text-capyprint-orange" />,
      title: "Не требует нового оборудования — подключаемся к вашему"
    },
    {
      icon: <Zap className="h-10 w-10 text-capyprint-orange" />,
      title: "Мгновенное развёртывание"
    },
    {
      icon: <Shield className="h-10 w-10 text-capyprint-orange" />,
      title: "Защищённая передача файлов"
    },
    {
      icon: <MapPin className="h-10 w-10 text-capyprint-orange" />,
      title: "Уже работает в 3 точках СПб"
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-capyprint-orange" />,
      title: "Пробный период в 2 недели"
    }
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
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Почему выбирают нас</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, ease: 'easeOut' }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={false}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-capyprint-black">{benefit.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
