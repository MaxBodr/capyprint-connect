
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Calculator, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-capyprint-orange" />,
      title: "Простое подключение",
      description: "Подключение к любому принтеру без сложных настроек и специальных знаний."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-capyprint-orange" />,
      title: "Управление через Telegram",
      description: "Не нужно устанавливать дополнительные приложения или программы."
    },
    {
      icon: <Calculator className="h-10 w-10 text-capyprint-orange" />,
      title: "Автоматический расчёт",
      description: "Автоматизированный расчет стоимости и поддержка различных платежных методов."
    },
    {
      icon: <Clock className="h-10 w-10 text-capyprint-orange" />,
      title: "Экономия времени",
      description: "Значительная экономия времени и ресурсов для каворкингов и учебных заведений."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Преимущества CapyPrint</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Наш сервис максимально упрощает организацию печати, экономя ваше время и ресурсы
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-capyprint-black">{benefit.title}</h3>
                  <p className="text-capyprint-black/70">{benefit.description}</p>
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
