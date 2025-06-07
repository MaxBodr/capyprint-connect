
import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Users, BarChart3, Activity, DollarSign } from 'lucide-react';

const AdminPanel = () => {
  const features = [
    {
      icon: <Printer className="h-6 w-6 text-capyprint-primary" />,
      title: "Подключать любое количество принтеров"
    },
    {
      icon: <Users className="h-6 w-6 text-capyprint-primary" />,
      title: "Видеть пользователей и их активность"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-capyprint-primary" />,
      title: "Контролировать лимиты и количество страниц"
    },
    {
      icon: <Activity className="h-6 w-6 text-capyprint-primary" />,
      title: "Мониторить статус печатных устройств"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-capyprint-primary" />,
      title: "Отслеживать выручку и эффективность"
    }
  ];

  return (
    <section id="admin-panel" className="py-20 bg-gradient-to-b from-white to-capyprint-background/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Админка: всё под контролем</h2>
          <p className="text-lg text-capyprint-black/70 max-w-3xl mx-auto">
            Интерфейс для бизнеса — простая админ-панель с возможностью:
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card p-6 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-capyprint-primary/10 rounded-lg flex items-center justify-center mr-4">
                {feature.icon}
              </div>
              <div>
                <span className="text-capyprint-primary font-bold mr-2">🔧</span>
                <span className="text-capyprint-black/80">{feature.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPanel;
