import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Monitor } from 'lucide-react';

const AdminPanel = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-capyprint-primary" />,
      title: "Видеть пользователей и их активность"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-capyprint-primary" />,
      title: "Контролировать лимиты и стоимость печати"
    },
    {
      icon: <Monitor className="h-8 w-8 text-capyprint-primary" />,
      title: "Мониторить статус печатных устройств"
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
    <section id="admin-panel" className="py-20 bg-gradient-to-b from-white to-capyprint-primary/5">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Панель администратора: все под контролем</h2>
        </motion.div>

        {/* Контент по центру, но выравнивание влево */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <div className="max-w-[700px] space-y-6 text-left mx-auto px-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <span className="text-lg text-capyprint-black leading-snug">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPanel;
