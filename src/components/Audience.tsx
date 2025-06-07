
import React from 'react';
import { motion } from 'framer-motion';
import { Building, GraduationCap, School } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: <Building className="h-12 w-12 text-capyprint-orange" />,
      title: "Коворкинги",
      description: "Удобный сервис печати для резидентов, который не требует установки дополнительного ПО и постоянного контроля со стороны администраторов."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-capyprint-orange" />,
      title: "Профкомы и студенческие организации",
      description: "Автоматизированное решение для печати документов студентами, что снижает нагрузку на сотрудников и оптимизирует процесс."
    },
    {
      icon: <School className="h-12 w-12 text-capyprint-orange" />,
      title: "Школы ЕГЭ и образовательные центры",
      description: "Удобное решение для массовой печати учебных материалов, тестов и заданий без затрат на администрирование."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="audience" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Кому подойдет CapyPrint</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Наше решение создано для организаций, стремящихся упростить процесс печати документов
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index} 
              className="feature-card p-8 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="mb-6">
                {audience.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-capyprint-black">{audience.title}</h3>
              <p className="text-capyprint-black/70">{audience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Audience;
