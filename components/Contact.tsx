'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    website: '' // honeypot field
  });
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    // Validate name
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    
    // Validate contact (email or telegram)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telegramRegex = /^@[a-zA-Z0-9_]{5,}$/;
    const contactValue = formData.contact.trim();
    
    if (!emailRegex.test(contactValue) && !telegramRegex.test(contactValue)) {
      newErrors.contact = 'Введите корректный email или Telegram (@username)';
    }
    
    // Validate message
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check (spam protection)
    if (formData.website) {
      console.log('Spam detected');
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Симуляция отправки
    setTimeout(() => {
      console.log('Form data:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', contact: '', message: '', website: '' });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Обсудим ваш <span className="gradient-text">проект</span>?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Отвечаю в течение 24 часов. Бесплатная консультация — 30 минут.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] bg-[var(--bg-secondary)] ${
                    errors.name ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="Иван Иванов"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2">
                  Email или Telegram
                </label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] bg-[var(--bg-secondary)] ${
                    errors.contact ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="email@example.com или @username"
                  aria-invalid={errors.contact ? 'true' : 'false'}
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                />
                {errors.contact && (
                  <p id="contact-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Опишите ваш проект
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] bg-[var(--bg-secondary)] resize-none ${
                    errors.message ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="Расскажите о вашей задаче, сроках и бюджете..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isSubmitting}
                className="w-full btn btn-primary btn-enhanced group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span className="ml-2">Отправка...</span>
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle size={18} className="mr-2" />
                    Отправлено!
                  </span>
                ) : (
                  <>
                    <span>Отправить заявку</span>
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-[var(--text-tertiary)] text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Другие способы связи</h3>
              
              <div className="space-y-4">
                <a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <MessageCircle size={24} className="text-[var(--accent-primary)]" />
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-sm text-[var(--text-tertiary)]">@username</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <Mail size={24} className="text-[var(--accent-primary)]" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-[var(--text-tertiary)]">contact@example.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Записаться на встречу</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Забронируйте удобное время для онлайн-встречи в моем календаре
              </p>
              <a
                href="https://calendly.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="btn glass hover:bg-[var(--bg-secondary)] w-full"
              >
                Открыть календарь
              </a>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">График работы</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Пн-Пт: 10:00 - 19:00 (МСК)</li>
                <li>Сб-Вс: По договорённости</li>
                <li>Ответ на сообщения: до 24 часов</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 300 
              }}
              className="relative glass p-8 rounded-3xl max-w-md mx-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.05, 
                  type: "spring", 
                  damping: 15, 
                  stiffness: 200 
                }}
                className="relative mx-auto w-24 h-24 mb-6"
              >
                {/* Outer Ring */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.05, 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full border-4 border-[var(--accent-primary)]"
                />
                
                {/* Checkmark */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg 
                    width="48" 
                    height="48" 
                    viewBox="0 0 48 48" 
                    fill="none"
                    className="text-[var(--accent-primary)]"
                  >
                    <motion.path
                      d="M10 24L18 32L38 12"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ 
                        delay: 0.25, 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.5, 1.8]
                  }}
                  transition={{ 
                    delay: 0.15,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full bg-[var(--accent-primary)] blur-xl"
                />
              </motion.div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-3">
                  Заявка <span className="gradient-text">отправлена!</span>
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Спасибо за обращение! Я свяжусь с вами в течение 24 часов.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary btn-enhanced"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Отлично
                </motion.button>
              </motion.div>

              {/* Confetti Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 0
                  }}
                  animate={{ 
                    opacity: 0,
                    x: Math.cos((i / 12) * Math.PI * 2) * 150,
                    y: Math.sin((i / 12) * Math.PI * 2) * 150,
                    scale: 1
                  }}
                  transition={{ 
                    delay: 0.2 + i * 0.02,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 
                      ? 'var(--accent-primary)' 
                      : 'var(--accent-secondary)'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
