'use client';

import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: '[Имя Клиента 1]',
    position: 'CEO',
    company: '[Название Компании]',
    text: 'Иван сделал нам интернет-магазин за 4 недели. В первый месяц — 120 заказов. Всё работает без сбоев. Рекомендую!',
    rating: 5,
    project: 'E-commerce платформа'
  },
  {
    id: 2,
    name: '[Имя Клиента 2]',
    position: 'Founder',
    company: '[Название Стартапа]',
    text: 'Нужен был AI-бот для поддержки. Получили решение, которое закрывает 70% вопросов автоматически. Команда разгрузилась, клиенты довольны.',
    rating: 5,
    project: 'AI-ассистент'
  },
  {
    id: 3,
    name: '[Имя Клиента 3]',
    position: 'Product Manager',
    company: '[Название Компании]',
    text: 'Работали с несколькими разработчиками до этого. [ИМЯ] — первый, кто не только сделал, но и предложил улучшения. Профессионал своего дела.',
    rating: 5,
    project: 'Веб-приложение'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Реальные отзывы о совместной работе
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 md:p-12 rounded-2xl relative"
          >
            <Quote size={48} className="text-[var(--accent-primary)] opacity-20 absolute top-8 left-8" />

            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-[var(--accent-primary)] text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-[var(--text-primary)] leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                  </div>
                  <div className="text-xs text-[var(--accent-primary)] mt-1">
                    Проект: {testimonials[currentIndex].project}
                  </div>
                </div>

                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-20"></div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 glass rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[var(--accent-primary)]'
                      : 'bg-[var(--text-tertiary)]'
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 glass rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
