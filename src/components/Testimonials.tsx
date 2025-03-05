
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      position: "Директор коворкинга 'WorkHub'",
      text: "CapyPrint значительно упростил процесс печати для наших резидентов. Теперь им не нужно ждать администратора или устанавливать драйвера – просто отправить файл боту и получить готовый документ.",
      rating: 5
    },
    {
      name: "Мария Иванова",
      position: "Председатель студенческого совета",
      text: "С CapyPrint наш профком наконец решил проблему очередей на печать документов. Студенты самостоятельно печатают материалы через Telegram, а мы можем сосредоточиться на других задачах.",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      position: "Руководитель школы подготовки к ЕГЭ",
      text: "Внедрение CapyPrint позволило нам сэкономить время преподавателей на раздаточных материалах. Система проста в использовании и не требует дополнительного обучения персонала.",
      rating: 4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-capyprint-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Отзывы клиентов</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Что говорят наши клиенты о работе с CapyPrint
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card p-8"
              variants={itemVariants}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="mb-6 text-capyprint-black/80 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-capyprint-black">{testimonial.name}</h4>
                <p className="text-sm text-capyprint-black/70">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
