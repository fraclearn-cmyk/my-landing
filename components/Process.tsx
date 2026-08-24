'use client';

import { motion } from 'framer-motion';
import { MessageSquare, FileText, Palette, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Знакомство и бриф',
    description: 'Обсуждаем вашу задачу, цели, аудиторию. Я задаю вопросы, чтобы понять суть проблемы.',
    duration: '1-2 дня',
    deliverables: ['Первичное понимание задачи', 'План дальнейших действий']
  },
  {
    icon: FileText,
    number: '02',
    title: 'Техническое задание',
    description: 'Составляю детальное ТЗ с описанием функционала, сроками и стоимостью.',
    duration: '3-5 дней',
    deliverables: ['Документ ТЗ', 'Оценка сроков и бюджета', 'Договор']
  },
  {
    icon: Palette,
    number: '03',
    title: 'Дизайн и согласование',
    description: 'Создаю макеты ключевых экранов. Вносим правки до полного совпадения с вашим видением.',
    duration: '1-2 недели',
    deliverables: ['Макеты в Figma', '2-3 итерации правок', 'Финальное согласование']
  },
  {
    icon: Code2,
    number: '04',
    title: 'Разработка',
    description: 'Пишу код, создаю функционал. Регулярно показываю прогресс и собираю обратную связь.',
    duration: '2-4 недели',
    deliverables: ['Рабочий прототип', 'Еженедельные демо', 'Доступ к тестовой версии']
  },
  {
    icon: TestTube,
    number: '05',
    title: 'Тестирование',
    description: 'Проверяю работу на разных устройствах и браузерах. Исправляю найденные баги.',
    duration: '3-5 дней',
    deliverables: ['Список тестов', 'Исправленные баги', 'Документация']
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Запуск и поддержка',
    description: 'Запускаем проект. Обучаю работе с админкой. Поддержка включена в стоимость.',
    duration: '1-3 месяца',
    deliverables: ['Запущенный проект', 'Обучение', 'Техподдержка', 'Исходный код']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Как мы будем <span className="gradient-text">работать</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Прозрачный процесс от первой встречи до запуска
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 glass p-8 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                        <step.icon size={32} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-[var(--accent-primary)] font-mono mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-[var(--text-secondary)] mb-4">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-6 mb-4">
                        <div>
                          <div className="text-xs text-[var(--text-tertiary)]">Срок</div>
                          <div className="text-sm font-semibold">{step.duration}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-[var(--text-tertiary)] mb-2">
                          Что получите:
                        </div>
                        <ul className="space-y-1">
                          {step.deliverables.map((item) => (
                            <li key={item} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                              <span className="text-[var(--accent-primary)]">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number indicator for large screens */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
