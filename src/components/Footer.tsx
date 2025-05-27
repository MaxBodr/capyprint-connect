
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-capyprint-gray py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-white mb-4">CapyPrint</div>
            <p className="text-white/80 mb-6 max-w-md">
              Инновационное решение для автоматизации печати в коворкингах, профкомах, 
              университетах и школах. Без сложных настроек – просто, удобно, быстро!
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@capyprint.ru</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Telegram: @capyprint_bot</li>
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
            <a 
              href="#" 
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
                "hover:bg-capyprint-orange transition-colors"
              )}
              aria-label="Telegram"
            >
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 0.5L1.5 6.5L6.5 8.5L10.5 13.5L16.5 0.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="#" 
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
                "hover:bg-capyprint-orange transition-colors"
              )}
              aria-label="VK"
            >
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.9 0.8C20.0333 0.4 19.9 0 19.3 0H17.1C16.6 0 16.4 0.333333 16.2667 0.633333C16.2667 0.633333 15.1333 3.53333 13.5333 5.43333C13.0667 5.9 12.8667 6.03333 12.6 6.03333C12.4667 6.03333 12.2667 5.9 12.2667 5.5V0.8C12.2667 0.3 12.1333 0 11.7333 0H8.06667C7.8 0 7.6 0.3 7.6 0.566667C7.6 1.03333 8.4 1.16667 8.46667 2.7V6.1C8.46667 6.76667 8.36667 6.9 8.1 6.9C7.36667 6.9 5.46667 3.96667 4.36667 0.866667C4.13334 0.3 3.96667 0 3.46667 0H1.26667C0.7 0 0.6 0.333333 0.6 0.633333C0.6 1.16667 1.33333 4.06667 4.16667 8C6.03333 10.7 8.7 12 11.1333 12C12.6 12 12.7333 11.6333 12.7333 11.1333V9.1C12.7333 8.53333 12.8333 8.43333 13.2333 8.43333C13.5333 8.43333 14.0667 8.56667 15.3667 9.8C16.8333 11.2667 17.0333 12 17.8333 12H20.0333C20.6 12 20.9667 11.6333 20.8 11.0667C20.6222 10.501 19.9889 9.70445 19.1667 8.8C18.7 8.2 17.9667 7.53333 17.7667 7.26667C17.4667 6.86667 17.5333 6.7 17.7667 6.33333C17.7667 6.33333 20.6333 2.36667 19.9 0.8Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
