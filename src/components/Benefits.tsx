
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Monitor, Zap, Shield, MapPin } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Building2 className="h-10 w-10 text-capyprint-primary" />,
      title: "Подходит для бизнеса любого размера",
      description: "От небольших коворкингов до крупных университетских кампусов"
    },
    {
      icon: <Monitor className="h-10 w-10 text-capyprint-primary" />,
      title: "Не требует нового оборудования",
      description: "Подключаемся к вашему существующему принтеру"
    },
    {
      icon: <Zap className="h-10 w-10 text-capyprint-primary" />,
      title: "Мгновенное развёртывание",
      description: "Запуск системы за один день без сложных настроек"
    },
    {
      icon: <Shield className="h-10 w-10 text-capyprint-primary" />,
      title: "Защищённая передача файлов",
      description: "Все документы передаются в зашифрованном виде"
    },
    {
      icon: <MapPin className="h-10 w-10 text-capyprint-primary" />,
      title: "Уже работает в 3 точках СПб",
      description: "Проверенное решение с реальными результатами"
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
          <h2 className="section-title">Почему выбирают нас</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="feature-card p-6"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-2xl mr-2">💼</span>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-capyprint-black">{benefit.title}</h3>
                  <p className="text-capyprint-black/70 text-sm">{benefit.description}</p>
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
