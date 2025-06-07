
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, BarChart3, Monitor, DollarSign } from 'lucide-react';

const AdminPanel = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8 text-capyprint-orange" />,
      title: "🔧 Подключать любое количество принтеров"
    },
    {
      icon: <Users className="h-8 w-8 text-capyprint-orange" />,
      title: "👥 Видеть пользователей и их активность"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-capyprint-orange" />,
      title: "📊 Контролировать лимиты и количество страниц"
    },
    {
      icon: <Monitor className="h-8 w-8 text-capyprint-orange" />,
      title: "🔄 Мониторить статус печатных устройств"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-capyprint-orange" />,
      title: "💰 Отслеживать выручку и эффективность"
    }
  ];

  const mockups = [
    {
      title: "Дашборд",
      description: "График печати/нагрузки"
    },
    {
      title: "Пользователи",
      description: "Пользователи + лимиты"
    },
    {
      title: "Статус принтера",
      description: "Онлайн/оффлайн"
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
    <section id="admin-panel" className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Админка: всё под контролем</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Интерфейс для бизнеса — простая админ-панель с возможностью:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4"
                variants={itemVariants}
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-lg text-capyprint-black">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Mockups */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {mockups.map((mockup, index) => (
              <motion.div 
                key={index}
                className="feature-card p-6"
                variants={itemVariants}
              >
                <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Место для скриншота</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-capyprint-black mb-2">{mockup.title}</h3>
                <p className="text-capyprint-black/70">{mockup.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
