'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Сайты, которые продают',
    description: 'Создаю продающие лендинги и корпоративные сайты с фокусом на конверсию. Современный дизайн, быстрая загрузка, адаптация под все устройства.',
    benefits: [
      'Адаптивный дизайн для всех устройств',
      'Быстрая загрузка (< 2 секунд)',
      'SEO-оптимизация и интеграция с CRM'
    ],
    price: 'от 80 000₽',
    duration: '2-3 недели'
  },
  {
    icon: Smartphone,
    title: 'Приложения, которые упрощают бизнес',
    description: 'Разрабатываю кастомные веб-приложения для автоматизации ваших процессов. CRM, админ-панели, платформы для онлайн-курсов, SaaS-продукты.',
    benefits: [
      'Готовый MVP за 30-45 дней',
      'Чистый код с документацией',
      'Масштабируемая архитектура'
    ],
    price: 'от 300 000₽',
    duration: '6-12 недель'
  },
  {
    icon: Bot,
    title: 'Умные помощники для вашего бизнеса',
    description: 'Создаю AI-ассистентов для автоматизации общения с клиентами, обработки заявок, поддержки пользователей. Ваши сотрудники освободятся от рутины.',
    benefits: [
      'AI-бот для Telegram, сайта, WhatsApp',
      'Обучение на вашей базе знаний',
      'Аналитика и постоянное улучшение'
    ],
    price: 'от 150 000₽',
    duration: '3-4 недели'
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Что я <span className="gradient-text">делаю</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Три направления, которые помогут вашему бизнесу расти
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl card-hover"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-opacity-10">
                  <service.icon size={32} className="text-[var(--accent-primary)]" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-[var(--text-secondary)] mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-[var(--text-tertiary)]">
                  Что получите:
                </h4>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-[var(--accent-primary)] mt-0.5 text-lg">✓</span>
                      <span className="text-[var(--text-secondary)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-[var(--text-tertiary)]">Стоимость</div>
                  <div className="text-lg font-bold gradient-text">{service.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[var(--text-tertiary)]">Срок</div>
                  <div className="text-sm font-semibold">{service.duration}</div>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full btn btn-primary group"
              >
                <span>Заказать</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
