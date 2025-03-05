
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
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-capyprint-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-capyprint-orange/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-capyprint-orange bg-capyprint-orange/10 rounded-full">
            Инновационное решение для печати
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-4">
            CapyPrint – Умный сервис печати через Telegram
          </h1>
          <p className="text-lg md:text-xl mb-8 text-capyprint-black/80 max-w-xl mx-auto md:mx-0">
            Автоматизируйте процессы печати в каворкингах, профкомах, университетах и школах. Без сложных настроек – просто, удобно, быстро!
          </p>
          <Button onClick={scrollToContact} className="cta-button text-lg">
            Попробовать
          </Button>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-full max-w-md">
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 border border-white/40">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-sm text-gray-500">CapyPrint Bot</div>
                </div>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Добро пожаловать в CapyPrint! Что бы вы хотели распечатать сегодня?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-capyprint-orange/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Мне нужно распечатать документ PDF</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Отлично! Загрузите ваш PDF-файл, и я рассчитаю стоимость печати.</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-capyprint-orange/10 rounded-lg p-3 max-w-xs animate-pulse-subtle">
                      <p className="text-sm">*загружает файл...*</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-capyprint-orange/20 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.div>
            <motion.div 
              className="absolute -top-6 -left-6 w-16 h-16 bg-capyprint-orange/10 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
