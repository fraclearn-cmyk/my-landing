'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Сколько стоит разработка?',
    answer: 'Зависит от сложности проекта. Ориентировочные диапазоны: Лендинг — от 80 000₽, Корпоративный сайт — от 150 000₽, Веб-приложение — от 300 000₽, ИИ-агент — от 150 000₽. Точную стоимость рассчитаю после брифа (бесплатно).'
  },
  {
    id: 2,
    question: 'Сколько времени займёт разработка?',
    answer: 'Лендинг — 2-3 недели, Сайт — 4-6 недель, Веб-приложение — 6-12 недель, ИИ-агент — 3-4 недели. Конкретные сроки обсудим на этапе ТЗ.'
  },
  {
    id: 3,
    question: 'Что входит в стоимость?',
    answer: 'Разработка и дизайн, адаптивная вёрстка, базовая SEO-оптимизация, тестирование, обучение работе с админкой, поддержка (1-3 месяца в зависимости от проекта).'
  },
  {
    id: 4,
    question: 'Как проходит оплата?',
    answer: 'Работаю по этапам: 30% аванс, 40% после дизайна, 30% после запуска. Возможна оплата по факту выполненных работ (почасовая). Заключаем договор с фиксацией сроков.'
  },
  {
    id: 5,
    question: 'Какие гарантии?',
    answer: 'Первая правка после запуска — бесплатно. Поддержка включена в стоимость. Исходный код полностью передаётся вам. Заключаем договор с фиксацией сроков.'
  },
  {
    id: 6,
    question: 'Что если результат не понравится?',
    answer: 'На каждом этапе делаю согласования. Если что-то не так — дорабатываю бесплатно. Крупные изменения требований — обсуждаем отдельно.'
  },
  {
    id: 7,
    question: 'Делаете ли поддержку после запуска?',
    answer: 'Да. Поддержка на 1-3 месяца включена. Дальше можем работать по абонементу или разовым задачам.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Часто задаваемые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Ответы на популярные вопросы о работе
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full glass p-6 rounded-xl text-left hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={24} className="text-[var(--accent-primary)]" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openId === faq.id ? 'auto' : 0,
                    opacity: openId === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center glass p-8 rounded-2xl"
        >
          <p className="text-lg mb-4">Не нашли ответ на свой вопрос?</p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-primary"
          >
            Задать вопрос
          </button>
        </motion.div>
      </div>
    </section>
  );
}
