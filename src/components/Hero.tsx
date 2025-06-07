
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
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-capyprint-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-capyprint-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-6">
              CapyPrint – Умный сервис печати через Telegram
            </h1>
            <p className="text-lg md:text-xl mb-8 text-capyprint-black/80">
              Если хочешь зарабатывать на принтере - тебе к нам.
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
          
          {/* Right Mockups */}
          <motion.div 
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Light gray background */}
            <div className="relative bg-gray-100 rounded-2xl p-8 shadow-lg w-full max-w-2xl">
              <div className="flex items-center justify-center space-x-8">
                {/* Smartphone Mockup */}
                <div className="relative">
                  <div className="w-32 h-64 bg-white rounded-[2rem] shadow-lg border border-gray-200 relative">
                    {/* Screen area */}
                    <div className="absolute inset-3 bg-gray-50 rounded-[1.5rem] flex items-center justify-center">
                      <div className="text-gray-400 text-xs text-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
                        <p className="text-xs">Telegram Bot</p>
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                
                {/* Browser Window Mockup */}
                <div className="relative flex-1 max-w-md">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    {/* Browser header */}
                    <div className="h-8 bg-gray-100 flex items-center px-4 border-b border-gray-200">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center text-xs text-gray-500">Admin Panel</div>
                    </div>
                    {/* Content area */}
                    <div className="h-48 bg-gray-50 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="w-12 h-12 bg-gray-300 rounded mx-auto mb-3"></div>
                        <p className="text-sm font-medium">Админ-панель</p>
                        <p className="text-xs">Управление печатью</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
