import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-capyprint-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-capyprint-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center pb-7">
        {/* Заголовок и кнопки */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-6">
            Умный сервис печати
            <span className="block">через Telegram</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-capyprint-black/80 max-w-2xl mx-auto">
            Если хочешь зарабатывать на печати — тебе к нам
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button onClick={scrollToContact} className="cta-button">
              Попробовать
            </Button>

            <p className="text-sm text-capyprint-black/60 mt-1">
              🚀 Демо-доступ на 2 недели без оплаты
            </p>
          </div>
        </motion.div>

        {/* Единый png-мокап */}
        <div className="relative flex items-center justify-center -mt-8 sm:-mt-37">
          <img
            src="/lovable-uploads/combined-mockup.png"
            alt="Мокап CapyPrint"
            className="w-full max-w-[720px] sm:max-w-[900px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
