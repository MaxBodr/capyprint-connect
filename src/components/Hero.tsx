
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
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-capyprint-primary bg-capyprint-primary/10 rounded-full">
            Инновационное решение для печати
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-capyprint-black mb-4">
            CapyPrint – Умный сервис печати через Telegram
          </h1>
          <p className="text-lg md:text-xl mb-8 text-capyprint-black/80 max-w-xl mx-auto md:mx-0">
            Автоматизируйте процессы печати в коворкингах, профкомах, университетах и школах. Без сложных настроек – просто, удобно, быстро!
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
          <div className="relative max-w-sm w-full">
            <img 
              src="/lovable-uploads/02dede0b-f726-4e84-86ba-40eef7bc0d2c.png" 
              alt="CapyPrint Bot Interface" 
              className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-capyprint-primary/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-capyprint-secondary/15 rounded-full blur-md"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
