
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
        <div className="absolute top-20 right-0 w-96 h-96 bg-capyprint-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-capyprint-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-4">
            CapyPrint – Умный сервис печати через Telegram
          </h1>
          <p className="text-lg md:text-xl mb-8 text-capyprint-black/80 max-w-xl mx-auto md:mx-0">
            Если хочешь зарабатывать на принтере - тебе к нам.
          </p>
          <Button onClick={scrollToContact} className="cta-button text-lg mb-4">
            Попробовать
          </Button>
          <div className="inline-block px-4 py-1.5 text-sm font-medium text-capyprint-primary bg-capyprint-primary/10 rounded-full">
            🚀 демо доступ на 2 недели
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center relative" 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* iPhone 16 Mockup */}
          <div className="relative z-10">
            <div className="w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-gray-100 rounded-[2.5rem] flex items-center justify-center border">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm">Telegram Bot Interface</p>
                  <p className="text-xs">Место для скриншота</p>
                </div>
              </div>
              {/* iPhone notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
            </div>
          </div>
          
          {/* MacOS Window Mockup */}
          <div className="absolute top-8 -right-8 z-0 opacity-80">
            <div className="w-80 h-52 bg-white rounded-lg shadow-xl border overflow-hidden">
              {/* MacOS title bar */}
              <div className="h-8 bg-gray-100 flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-600">Admin Panel</div>
              </div>
              {/* Window content */}
              <div className="p-4 bg-gray-50 h-full flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded mx-auto mb-2"></div>
                  <p className="text-xs">Админ-панель</p>
                  <p className="text-xs">Место для скриншота</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
