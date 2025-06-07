
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { SendIcon, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Заявка успешно отправлена", {
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Оставьте заявку</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Готовы подключить CapyPrint? Заполните форму, и мы свяжемся с вами для обсуждения деталей
          </p>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите ваш email"
                    required
                    className="bg-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="cta-button w-full"
                  disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-opacity-50 border-t-transparent rounded-full"></span>
                      Отправка...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center justify-center">
                      <Check className="mr-2 h-4 w-4" />
                      Отправлено
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <SendIcon className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-center text-capyprint-black/60">
                  Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей{' '}
                  <Link to="/privacy" className="text-capyprint-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
