
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Package, Users, Briefcase } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: <Building2 className="h-12 w-12 text-capyprint-primary" />,
      title: "Коворкинги"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-capyprint-primary" />,
      title: "Университеты и общежития"
    },
    {
      icon: <Package className="h-12 w-12 text-capyprint-primary" />,
      title: "Пункты выдачи заказов"
    },
    {
      icon: <Users className="h-12 w-12 text-capyprint-primary" />,
      title: "Конференц-площадки"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-capyprint-primary" />,
      title: "Частные бизнесы с МФУ"
    }
  ];

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
    <section id="audience" className="py-20 bg-gradient-to-b from-white to-capyprint-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Подходит для любых пространств, где есть печать</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index}
              className="feature-card flex flex-col items-center text-center p-6"
              variants={itemVariants}
            >
              <div className="mb-4">
                {audience.icon}
              </div>
              <h3 className="text-sm md:text-base font-medium text-capyprint-black">{audience.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            CapyPrint помогает зарабатывать, упрощает доступ к печати и экономит время.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
