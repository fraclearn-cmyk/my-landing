'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-commerce платформа',
    client: 'Интернет-магазин одежды',
    description: 'Полнофункциональный интернет-магазин с корзиной, платежами и админ-панелью',
    problem: 'Клиент терял 60% потенциальных покупателей из-за устаревшего сайта',
    solution: 'Создал современный магазин с быстрой загрузкой и удобным UX',
    result: '+45% конверсия, +120% мобильный трафик за 3 месяца',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/placeholder-project-1.jpg',
    liveUrl: '#',
    caseUrl: '#'
  },
  {
    id: 2,
    title: 'AI-ассистент для поддержки',
    client: 'SaaS-стартап',
    description: 'Умный чат-бот для автоматизации ответов на частые вопросы клиентов',
    problem: 'Команда поддержки тратила 40+ часов в неделю на повторяющиеся вопросы',
    solution: 'Разработал AI-ассистента с обучением на базе знаний компании',
    result: '-70% нагрузка на поддержку, 24/7 доступность',
    technologies: ['OpenAI API', 'Python', 'FastAPI', 'React'],
    image: '/placeholder-project-2.jpg',
    liveUrl: '#',
    caseUrl: '#'
  },
  {
    id: 3,
    title: 'Платформа онлайн-обучения',
    client: 'Образовательная компания',
    description: 'LMS с видеокурсами, тестами, прогрессом студентов и системой оплаты',
    problem: 'Использовали конструкторы, которые не подходили под их бизнес-модель',
    solution: 'Кастомная платформа с видео-хостингом и аналитикой',
    result: '500+ активных студентов, 85% завершение курсов',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
    image: '/placeholder-project-3.jpg',
    liveUrl: '#',
    caseUrl: '#'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Избранные <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Реальные кейсы с измеримыми результатами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={64} className="text-[var(--text-primary)] opacity-30" />
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-[var(--accent-primary)] font-semibold mb-2">
                  {project.client}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs text-[var(--text-tertiary)] mb-2">Результат:</div>
                  <div className="text-sm font-semibold text-[var(--accent-primary)]">
                    {project.result}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 btn glass hover:bg-[var(--bg-secondary)] text-sm"
                  >
                    Подробнее
                  </button>
                  <a
                    href={project.liveUrl}
                    className="flex items-center justify-center p-3 glass rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
                    aria-label="Открыть проект"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-4xl w-full rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            >
              {projects.find((p) => p.id === selectedProject) && (
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[var(--accent-primary)]">
                        Проблема
                      </h4>
                      <p className="text-[var(--text-secondary)]">
                        {projects.find((p) => p.id === selectedProject)?.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[var(--accent-primary)]">
                        Решение
                      </h4>
                      <p className="text-[var(--text-secondary)]">
                        {projects.find((p) => p.id === selectedProject)?.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-[var(--accent-primary)]">
                        Результат
                      </h4>
                      <p className="text-[var(--text-secondary)] font-semibold">
                        {projects.find((p) => p.id === selectedProject)?.result}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">Технологии</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects.find((p) => p.id === selectedProject)?.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-[var(--bg-tertiary)] text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="mt-8 btn btn-primary"
                  >
                    Закрыть
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
