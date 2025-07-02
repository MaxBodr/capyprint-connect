
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-capyprint-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center mb-8 text-capyprint-primary hover:text-capyprint-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl font-bold text-capyprint-black mb-8">
            О компании CapyPrint
          </h1>

          <div className="glass-card p-8 rounded-2xl space-y-6 text-capyprint-black/80">
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Наша миссия</h2>
              <p>
                CapyPrint создает инновационные решения для автоматизации печати в образовательных учреждениях и коворкингах. Мы стремимся сделать процесс печати максимально простым, удобным и доступным для всех пользователей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Что мы делаем</h2>
              <p>
                Наше решение позволяет пользователям отправлять документы на печать через Telegram-бот, не покидая своего рабочего места. Система автоматически обрабатывает заказы, рассчитывает стоимость и обеспечивает безопасную печать документов.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Наши преимущества</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Простота использования - никаких сложных настроек</li>
                <li>Безопасность данных - все документы защищены</li>
                <li>Автоматизация процессов - минимум ручной работы</li>
                <li>Детальная аналитика - полный контроль над операциями</li>
                <li>Поддержка различных форматов документов</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Кто мы</h2>
              <p>
                CapyPrint - это команда профессионалов, объединенная общей целью сделать технологии печати доступными и удобными. Мы работаем с университетами, школами, коворкингами и другими организациями по всей России.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Контактная информация</h2>
              <div className="space-y-2">
                <p><strong>Компания:</strong> ООО "Принтинг Солюшнс"</p>
                <p><strong>ИНН:</strong> 7810966420</p>
                <p><strong>Email:</strong> hello@capyprint.ru</p>
                <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                <p><strong>Telegram:</strong> @capy_print_bot</p>
                <p><strong>Адрес:</strong> г. Санкт-Петербург</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
