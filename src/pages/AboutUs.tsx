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
          <Link
            to="/"
            className="inline-flex items-center mb-8 text-capyprint-primary hover:text-capyprint-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl font-bold text-capyprint-black mb-8">
            О компании CapyPrint
          </h1>

          <div className="glass-card p-8 rounded-2xl space-y-8 text-capyprint-black/80">
            {/* Характеристики программы */}
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">
                Характеристики программы
              </h2>
              <ul className="list-none space-y-6">
                <li>
                  <strong>Загрузка и обработка файлов</strong><br />
                  Возможность загрузки различных типов файлов (например, PDF, DOCX) через интерфейс Telegram-бота. Автоматическая конвертация загруженных файлов в формат, подходящий для печати.
                </li>
                <li>
                  <strong>Автоматический расчёт стоимости печати</strong><br />
                  Автоматический расчёт стоимости печати на основе количества страниц, типа документа, а также выбранных пользователем параметров (например, количество копий). Поддержка настроек для разных типов документов, чтобы точно учитывать дополнительные параметры.
                </li>
                <li>
                  <strong>Интеграция с платёжными системами</strong><br />
                  Интеграция с платёжным сервисом Юкасса для принятия онлайн-оплаты.
                </li>
                <li>
                  <strong>Управление печатью</strong><br />
                  Интеграция с принтерами и возможность отправки заданий на печать через сервер. Подключение к существующим МФУ.
                </li>
                <li>
                  <strong>Управление лимитами и бесплатными листами</strong><br />
                  Настройка лимита на количество бесплатных страниц, которое каждый пользователь может напечатать. Возможность для пользователей оплачивать печать сверх бесплатного лимита. Логика обработки для расчёта и информирования пользователей о превышении лимита.
                </li>
                <li>
                  <strong>Мониторинг и отчётность</strong><br />
                  Встроенные отчёты для анализа объёмов печати. Возможность для администраторов просматривать историю операций, мониторить активность пользователей и вести учёт расходов.
                </li>
              </ul>
            </section>

            {/* Стек */}
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">Стек</h2>
              <p>
                Разработка программного обеспечения ООО «Принтинг Солюшнс» осуществляется с использованием современных веб-технологий, основанных на языках программирования Java, Kotlin и Angular. Для взаимодействия с Telegram используется TelegramBotsAPI. Эти технологии позволяют обрабатывать документы, загружаемые пользователем, отправлять их на принтер, контролировать статус выполнения задачи и отслеживать балансы у пользователей.
              </p>
            </section>

            {/* Установка и эксплуатация */}
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">
                Установка и эксплуатация
              </h2>
              <p>
                Всю необходимую информацию об установке и эксплуатации можно получить после подписания лицензионного соглашения.
              </p>
            </section>

            {/* Контакты */}
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">
                Контакты
              </h2>
              <div className="space-y-2">
                <p><strong>Телефон:</strong> +7 953 340 00 68</p>
                <p><strong>Почта:</strong> hello@capyprint.ru</p>
                <p><strong>Юридический адрес:</strong><br />
                  196135, Россия, г. Санкт-Петербург,<br />
                  пр-кт Юрия Гагарина, д. 21, лит. А, кв. 1
                </p>
                <p><strong>Реквизиты:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ООО «Принтинг Солюшнс»</li>
                  <li>ИНН 7810966420</li>
                  <li>КПП 781001001</li>
                  <li>ОГРН 1247800103902</li>
                  <li>Банк АО «ТБанк»</li>
                </ul>
                <p><strong>Генеральный директор:</strong> Коняхин Иван Михайлович</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
