import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Логотип */}
          <img
            src="/lovable-uploads/logo-capyprint.png"
            alt="Логотип CapyPrint"
            className="h-10 md:h-12 mr-3 transition-transform duration-300 hover:scale-105"
          />

          {/* Название */}
          
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('how-it-works')} className="text-capyprint-black hover:text-capyprint-orange transition-colors">
            Как это работает
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-capyprint-black hover:text-capyprint-orange transition-colors">
            Преимущества
          </button>
          <button onClick={() => scrollToSection('audience')} className="text-capyprint-black hover:text-capyprint-orange transition-colors">
            Для кого
          </button>
          <button onClick={() => scrollToSection('calculator')} className="text-capyprint-black hover:text-capyprint-orange transition-colors">
            Калькулятор
          </button>
          <Button onClick={() => scrollToSection('contact')} className="cta-button">
            Оставить заявку
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-capyprint-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('how-it-works')} className="text-capyprint-black py-2 hover:text-capyprint-orange transition-colors text-left">
              Как это работает
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-capyprint-black py-2 hover:text-capyprint-orange transition-colors text-left">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('audience')} className="text-capyprint-black py-2 hover:text-capyprint-orange transition-colors text-left">
              Для кого
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-capyprint-black py-2 hover:text-capyprint-orange transition-colors text-left">
              Калькулятор
            </button>
            <Button onClick={() => scrollToSection('contact')} className="cta-button w-full">
              Оставить заявку
            </Button>
          </div>
        </div>}
    </header>;
};
export default Header;
