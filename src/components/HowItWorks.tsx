
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, CreditCard, Bell, FileText, Settings } from 'lucide-react';

const HowItWorks = () => {
  const userSteps = [
    {
      icon: <Upload size={32} className="text-capyprint-orange" />,
      title: "Загружает файл",
      number: "1"
    },
    {
      icon: <Settings size={32} className="text-capyprint-orange" />,
      title: "Настраивает печать и количество копий",
      number: "2"
    },
    {
      icon: <CreditCard size={32} className="text-capyprint-orange" />,
      title: "Оплачивает печать",
      number: "3"
    },
    {
      icon: <FileText size={32} className="text-capyprint-orange" />,
      title: "Забирает документ",
      number: "4"
    }
  ];

  const ownerSteps = [
    {
      icon: <Settings size={32} className="text-capyprint-primary" />,
      title: "Подключаемся к вашему принтеру",
      number: "1"
    },
    {
      icon: <Settings size={32} className="text-capyprint-primary" />,
      title: "Настройка стоимости и доступности печати",
      number: "2"
    },
    {
      icon: <FileText size={32} className="text-capyprint-primary" />,
      title: "Отслеживание статистики в админ панели",
      number: "3"
    },
    {
      icon: <CreditCard size={32} className="text-capyprint-primary" />,
      title: "Получение прибыли с печати",
      number: "4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Печать в один клик. Контроль в одном месте.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Для пользователя */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-capyprint-black mb-2">Для пользователя:</h3>
            </div>
            <div className="space-y-6">
              {userSteps.map((step, index) => (
                <motion.div key={index} className="flex items-center space-x-4" variants={itemVariants}>
                  <div className="flex-shrink-0 w-12 h-12 bg-capyprint-orange/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-capyprint-orange">{step.number}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {step.icon}
                    <span className="text-capyprint-black">{step.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Для владельца */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-capyprint-black mb-2">Для владельца точки:</h3>
            </div>
            <div className="space-y-6">
              {ownerSteps.map((step, index) => (
                <motion.div key={index} className="flex items-center space-x-4" variants={itemVariants}>
                  <div className="flex-shrink-0 w-12 h-12 bg-capyprint-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-capyprint-primary">{step.number}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {step.icon}
                    <span className="text-capyprint-black">{step.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
