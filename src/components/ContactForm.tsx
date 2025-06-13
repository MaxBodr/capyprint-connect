import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { SendIcon, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const { company, name, contact } = formData;
  
    const message = `
  📬 <b>Новая заявка на CapyPrint</b>\n
  🏢 <b>Компания:</b> ${company}
  👤 <b>Имя:</b> ${name}
  📞 <b>Контакт:</b> ${contact}
    `;
  
    try {
      await axios.post(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      });
  
      toast.success("Заявка успешно отправлена", {
        description: "Мы свяжемся с вами в ближайшее время"
      });
  
      setSubmitted(true);
      setFormData({ company: '', name: '', contact: '' });
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      toast.error("Ошибка при отправке заявки");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-0">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }} className="text-center mb-8">
          <h2 className="section-title">Запустить печать просто</h2>
        </motion.div>

        <motion.div className="max-w-md mx-auto" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          <div className="glass-card p-6 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Введите название компании" required className="bg-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Введите ваше имя" required className="bg-white" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact">Email / Telegram</Label>
                  <Input id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Введите email или Telegram" required className="bg-white" />
                </div>
                
                <Button type="submit" className="cta-button w-full" disabled={isSubmitting || submitted}>
                  {isSubmitting ? <span className="flex items-center">
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-50 border-t-transparent rounded-full"></span>
                      Отправка...
                    </span> : submitted ? <span className="flex items-center justify-center">
                      <Check className="mr-2 h-4 w-4" />
                      Отправлено
                    </span> : <span className="flex items-center justify-center">
                      <SendIcon className="mr-2 h-4 w-4" />
                      Оставить заявку
                    </span>}
                </Button>
                
                <p className="text-xs text-center text-capyprint-black/60">
                  Нажимая кнопку "Оставить заявку", вы соглашаетесь с нашей{' '}
                  <Link to="/privacy" className="text-capyprint-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ContactForm;
