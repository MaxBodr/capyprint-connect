
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            Политика конфиденциальности
          </h1>

          <div className="glass-card p-8 rounded-2xl space-y-6 text-capyprint-black/80">
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации, 
                которую сервис CapyPrint может получить о пользователе во время использования им любых сайтов, 
                сервисов, служб, программ и продуктов CapyPrint.
              </p>
              <p>
                Использование сервисов CapyPrint означает безоговорочное согласие пользователя с настоящей 
                Политикой и указанными в ней условиями обработки его персональной информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">2. Сбор и использование персональной информации</h2>
              <p className="mb-4">
                Персональная информация пользователя — это информация, которая определяет пользователя как 
                конкретное физическое лицо.
              </p>
              <p className="mb-4">CapyPrint собирает и использует следующую персональную информацию:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона (при указании)</li>
                <li>Информация об организации (при указании)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">3. Цели сбора и обработки персональной информации</h2>
              <p className="mb-4">CapyPrint собирает и использует персональную информацию пользователей в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связь с пользователем для предоставления информации о сервисе</li>
                <li>Техническая поддержка и консультации</li>
                <li>Улучшение качества сервиса</li>
                <li>Информирование о новых возможностях сервиса</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">4. Защита персональной информации</h2>
              <p className="mb-4">
                CapyPrint принимает необходимые и достаточные организационные и технические меры для 
                защиты персональной информации пользователя от неправомерного или случайного доступа, 
                уничтожения, изменения, блокирования, копирования, распространения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">5. Предоставление информации третьим лицам</h2>
              <p className="mb-4">
                CapyPrint не продает, не обменивает и не передает персональную информацию пользователей 
                третьим лицам, за исключением случаев, предусмотренных российским законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">6. Изменение персональной информации</h2>
              <p className="mb-4">
                Пользователь может в любой момент изменить или удалить предоставленную им персональную 
                информацию, обратившись к нам по электронной почте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">7. Изменения в Политике конфиденциальности</h2>
              <p className="mb-4">
                CapyPrint оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. 
                При внесении изменений в актуальной редакции указывается дата последнего обновления.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">8. Контактная информация</h2>
              <p>
                По всем вопросам, касающимся обработки персональных данных, вы можете обращаться к нам 
                через форму обратной связи на сайте.
              </p>
            </section>

            <div className="pt-6 border-t border-capyprint-muted">
              <p className="text-sm text-capyprint-black/60">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
