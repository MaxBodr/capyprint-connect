import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-capyprint-gray py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-white mb-4">CapyPrint</div>
            <p className="text-white/80 mb-6 max-w-md">
              Инновационное решение для автоматизации печати в коворкингах, 
              университетах и школах. Без сложных настроек – просто, удобно, быстро!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: hello@capyprint.ru</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Telegram: @capy_print_bot</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} CapyPrint. Все права защищены.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className={cn("w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", "hover:bg-capyprint-orange transition-colors")} aria-label="Telegram">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 0.5L1.5 6.5L6.5 8.5L10.5 13.5L16.5 0.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;