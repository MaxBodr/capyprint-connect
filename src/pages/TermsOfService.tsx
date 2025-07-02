
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
            Условия использования
          </h1>

          <div className="glass-card p-8 rounded-2xl space-y-6 text-capyprint-black/80">
            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">1. Общие положения</h2>
              <p>
                1.1. Настоящие Условия использования (далее — «Условия») регулируют порядок использования сервиса CapyPrint, предоставляемого ООО «Принтинг Солюшнс» (далее — «Компания»).
              </p>
              <p>
                1.2. Использование сервиса означает полное согласие пользователя с настоящими Условиями.
              </p>
              <p>
                1.3. Компания оставляет за собой право изменять настоящие Условия в любое время без предварительного уведомления пользователей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">2. Описание сервиса</h2>
              <p>
                2.1. CapyPrint — это автоматизированная система печати, позволяющая пользователям отправлять документы на печать через Telegram-бот и получать готовые распечатки в указанных точках.
              </p>
              <p>
                2.2. Сервис предоставляет возможность печати документов различных форматов с автоматическим расчетом стоимости и обработкой платежей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">3. Права и обязанности пользователя</h2>
              <p><strong>3.1. Пользователь имеет право:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Использовать сервис для печати документов в соответствии с настоящими Условиями</li>
                <li>Получать техническую поддержку по вопросам использования сервиса</li>
                <li>Требовать обеспечения конфиденциальности своих персональных данных</li>
              </ul>
              
              <p><strong>3.2. Пользователь обязуется:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию при регистрации</li>
                <li>Не использовать сервис для печати материалов, нарушающих законодательство РФ</li>
                <li>Не передавать третьим лицам доступ к своему аккаунту</li>
                <li>Своевременно производить оплату услуг печати</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">4. Права и обязанности Компании</h2>
              <p><strong>4.1. Компания имеет право:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Изменять функциональность сервиса</li>
                <li>Приостанавливать работу сервиса для проведения технических работ</li>
                <li>Блокировать доступ пользователей, нарушающих настоящие Условия</li>
              </ul>
              
              <p><strong>4.2. Компания обязуется:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Обеспечивать функционирование сервиса</li>
                <li>Обеспечивать конфиденциальность персональных данных пользователей</li>
                <li>Предоставлять техническую поддержку пользователям</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">5. Оплата услуг</h2>
              <p>
                5.1. Стоимость печати рассчитывается автоматически в зависимости от параметров документа (количество страниц, цветность, формат бумаги).
              </p>
              <p>
                5.2. Оплата производится через доступные в сервисе платежные системы.
              </p>
              <p>
                5.3. В случае технического сбоя, повлекшего списание средств без предоставления услуги, Компания обязуется вернуть денежные средства или предоставить услугу бесплатно.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">6. Конфиденциальность</h2>
              <p>
                6.1. Компания обязуется не разглашать персональные данные пользователей третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ.
              </p>
              <p>
                6.2. Документы пользователей автоматически удаляются из системы после печати.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">7. Ответственность</h2>
              <p>
                7.1. Компания не несет ответственности за содержание документов, отправляемых пользователями на печать.
              </p>
              <p>
                7.2. Пользователь несет полную ответственность за соблюдение авторских прав при печати документов.
              </p>
              <p>
                7.3. Компания не несет ответственности за ущерб, возникший вследствие неправомерного использования сервиса пользователем.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-capyprint-black mb-4">8. Заключительные положения</h2>
              <p>
                8.1. Настоящие Условия регулируются законодательством Российской Федерации.
              </p>
              <p>
                8.2. Все споры разрешаются путем переговоров, а при невозможности достижения соглашения — в судебном порядке.
              </p>
              <p>
                8.3. По всем вопросам, связанным с использованием сервиса, пользователи могут обращаться по адресу: hello@capyprint.ru
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

export default TermsOfService;
