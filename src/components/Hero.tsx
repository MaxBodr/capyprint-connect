
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
    <div className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Смартфон слева */}
      <motion.div 
        className="
          absolute
          left-[10%] md:left-[15%]
          top-1/2
          transform -translate-y-1/2
          w-[20vw] h-[36vw]
          max-w-[260px] max-h-[460px]
          min-w-[200px] min-h-[360px]
          bg-white rounded-[2rem] shadow-xl
          z-20
          p-2
        "
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Экран телефона */}
        <div className="w-full h-full bg-gray-100 rounded-[1.5rem] overflow-hidden">
          <img
            src="/screenshots/bot-mobile.png"
            alt="Mobile Bot Screenshot"
            className="w-full h-full object-cover rounded-[1.5rem]"
            onError={(e) => {
              // Fallback если изображение не найдено
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `
                <div class="w-full h-full bg-gray-200 rounded-[1.5rem] flex items-center justify-center">
                  <div class="text-gray-500 text-center">
                    <div class="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-3"></div>
                    <p class="text-sm">Telegram Bot</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
      </motion.div>

      {/* Десктоп-браузер позади справа */}
      <motion.div 
        className="
          absolute
          top-1/2
          transform -translate-y-1/2
          w-[60vw] h-[45vw]
          max-w-[800px] max-h-[600px]
          min-w-[400px] min-h-[300px]
          bg-white rounded-lg shadow-lg
          z-10
        "
        style={{ left: 'calc(10% + 10vw + 50px)' }} // Начинается от середины телефона
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Браузерная панель */}
        <div className="h-10 bg-gray-100 rounded-t-lg flex items-center px-4 border-b border-gray-200">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 text-center text-xs text-gray-500">Admin Panel</div>
        </div>
        {/* Контент браузера */}
        <div className="h-[calc(100%-2.5rem)] bg-gray-50 rounded-b-lg overflow-hidden">
          <img
            src="/screenshots/site-desktop.png"
            alt="Desktop Site Screenshot"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback если изображение не найдено
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `
                <div class="w-full h-full bg-gray-50 flex items-center justify-center">
                  <div class="text-gray-400 text-center">
                    <div class="w-16 h-16 bg-gray-300 rounded mx-auto mb-4"></div>
                    <p class="text-lg font-medium">Админ-панель</p>
                    <p class="text-sm">Управление печатью</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>
      </motion.div>

      {/* Текстовый контент по центру */}
      <motion.div 
        className="
          relative z-30
          text-center
          px-4
          max-w-2xl
          mx-auto
          md:mx-0
          md:absolute
          md:left-1/2
          md:top-1/2
          md:transform
          md:-translate-x-1/2
          md:-translate-y-1/2
          mt-8
          md:mt-0
        "
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#222222' }}>
          CapyPrint – Умный сервис печати через Telegram
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#555555' }}>
          Если хочешь зарабатывать на принтере - тебе к нам.
        </p>
        
        <Button 
          onClick={scrollToContact} 
          className="
            bg-white 
            text-gray-800 
            border 
            border-gray-300 
            hover:bg-gray-50 
            transition-colors 
            px-8 
            py-3 
            text-lg 
            font-medium 
            rounded-lg
            shadow-sm
          "
        >
          Оставить заявку
        </Button>
      </motion.div>

      {/* Мобильная адаптивность - на маленьких экранах прячем макеты и показываем только текст */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
