
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Mockups from '@/components/Mockups';

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
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mockups />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
