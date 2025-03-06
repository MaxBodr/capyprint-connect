
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import ProfitCalculator from '@/components/ProfitCalculator';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const smoothScroll = (e: Event, elem: HTMLAnchorElement) => {
      e.preventDefault();
      const href = elem.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => smoothScroll(e, anchor as HTMLAnchorElement));
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', (e) => smoothScroll(e, anchor as HTMLAnchorElement));
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <HowItWorks />
          <Benefits />
          <ProfitCalculator />
          <ContactForm />
        </motion.main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
