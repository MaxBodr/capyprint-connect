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

      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-6">
            CapyPrint – Умный сервис печати через Telegram
          </h1>
          <p className="text-lg md:text-xl mb-8 text-capyprint-black/80 max-w-2xl mx-auto">
            Если хочешь зарабатывать на принтере — тебе к нам.
          </p>

          <Button onClick={scrollToContact} className="cta-button text-lg mb-4">
            Попробовать
          </Button>

          <div className="block">
            <div className="inline-block px-4 py-1.5 text-sm font-medium text-capyprint-primary bg-capyprint-primary/10 rounded-full">
              🚀 демо доступ на 2 недели
            </div>
          </div>
        </motion.div>

        {/* Mockups */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 overflow-visible px-4 sm:px-0">
          {/* Laptop */}
          <div className="w-full max-w-[700px] sm:w-[700px] relative">
            <div className="w-full aspect-[16/10] bg-gray-800 rounded-t-lg shadow-2xl">
              <div className="w-full h-full bg-white rounded-t-lg border-2 border-gray-300 overflow-hidden">
                <div className="h-8 bg-gray-100 flex items-center px-4 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-600">Admin Panel</div>
                </div>
                <img
                  src="/lovable-uploads/admin-panel-screenshot.png"
                  alt="Скриншот админки"
                  className="w-full aspect-[48/31] object-contain object-top"
                />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] relative z-10">
            <div className="w-full h-full bg-black rounded-[2.5rem] p-2 shadow-xl">
              <div className="w-full h-full bg-gray-100 rounded-[2rem] relative overflow-hidden">
                <img
                  src="/lovable-uploads/telegram-screenshot.png"
                  alt="Интерфейс Telegram бота"
                  className="w-full h-full object-cover object-top rounded-[2rem]"
                />
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
