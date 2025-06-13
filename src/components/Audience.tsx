import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building, GraduationCap, Package, Users, Briefcase } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: <Building className="h-12 w-12 text-capyprint-orange" />,
      title: "Коворкинги"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-capyprint-orange" />,
      title: "Университеты и общежития"
    },
    {
      icon: <Package className="h-12 w-12 text-capyprint-orange" />,
      title: "Пункты выдачи заказов"
    },
    {
      icon: <Users className="h-12 w-12 text-capyprint-orange" />,
      title: "Конференц-площадки"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-capyprint-orange" />,
      title: "Частные бизнесы с МФУ"
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
    <section id="audience" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Подходит для любых пространств, где есть печать</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, ease: 'easeOut' }
            }
          }}
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="feature-card p-6 flex flex-col items-center text-center"
              initial={false}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className="mb-4">
                {audience.icon}
              </div>
              <h3 className="text-sm font-semibold text-capyprint-black">{audience.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={false}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-capyprint-black/80 max-w-2xl mx-auto">
            CapyPrint помогает зарабатывать, упрощает доступ к печати и экономит время.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
