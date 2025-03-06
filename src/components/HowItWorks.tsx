
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Upload, Printer } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Cpu size={36} className="text-capyprint-orange" />,
      title: "Подключите Orange Pi",
      description: "Маленький компьютер легко подключается к любому принтеру через USB-порт",
      delay: 0
    },
    {
      icon: <Upload size={36} className="text-capyprint-orange" />,
      title: "Загрузите файл в TelegramBot",
      description: "Бот автоматически проверит формат и рассчитает стоимость печати",
      delay: 0.1
    },
    {
      icon: <Printer size={36} className="text-capyprint-orange" />,
      title: "Оплатите и печатайте",
      description: "Мгновенная передача документа на печать без лишних действий",
      delay: 0.2
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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Как это работает</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Всего три простых шага для начала использования умного сервиса печати CapyPrint
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="feature-card flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-capyprint-black">{step.title}</h3>
              <p className="text-capyprint-black/70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-1 w-24 bg-capyprint-orange/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
