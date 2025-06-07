
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, Bell, Settings, BarChart3, Eye } from 'lucide-react';

const HowItWorks = () => {
  const userSteps = [
    {
      icon: <Smartphone className="h-6 w-6 text-capyprint-primary" />,
      title: "Загружает файл"
    },
    {
      icon: <Eye className="h-6 w-6 text-capyprint-primary" />,
      title: "Получает финальный вид и цену"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-capyprint-primary" />,
      title: "Оплачивает"
    },
    {
      icon: <Bell className="h-6 w-6 text-capyprint-primary" />,
      title: "Получает уведомление"
    },
    {
      icon: <Package className="h-6 w-6 text-capyprint-primary" />,
      title: "Забирает документ"
    }
  ];

  const ownerSteps = [
    {
      icon: <Settings className="h-6 w-6 text-capyprint-secondary" />,
      title: "Подключаемся к вашему принтеру"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-capyprint-secondary" />,
      title: "Устанавливаете лимиты"
    },
    {
      icon: <Eye className="h-6 w-6 text-capyprint-secondary" />,
      title: "Видит статистику по пользователям"
    },
    {
      icon: <Settings className="h-6 w-6 text-capyprint-secondary" />,
      title: "Следит за статусом устройств"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-capyprint-secondary" />,
      title: "Получаете прибыль с печати"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Печать в один клик. Контроль в один взгляд.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Для пользователя */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="feature-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-capyprint-black flex items-center">
              <span className="mr-2">🔹</span>
              Для пользователя (в Telegram)
            </h3>
            <div className="space-y-4">
              {userSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-capyprint-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-capyprint-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex items-center">
                    {step.icon}
                    <span className="ml-2 text-capyprint-black/80">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Для владельца */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="feature-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-capyprint-black flex items-center">
              <span className="mr-2">🔹</span>
              Для владельца точки (в админке)
            </h3>
            <div className="space-y-4">
              {ownerSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-capyprint-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-capyprint-secondary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex items-center">
                    {step.icon}
                    <span className="ml-2 text-capyprint-black/80">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
