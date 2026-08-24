'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

export default function Hero() {
  const projectsCount = useCountUp(50, 2000);
  const yearsCount = useCountUp(5, 2000);
  const satisfactionCount = useCountUp(100, 2000);
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] rounded-full filter blur-[128px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles size={16} className="text-[var(--accent-primary)]" />
              <span className="text-sm font-medium">Доступен для новых проектов</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-[var(--text-primary)]">Создаю{' '}</span>
              <span className="gradient-text-animated">сайты и ИИ-решения</span>
              <span className="text-[var(--text-primary)]">, которые работают на ваш бизнес</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl"
            >
              Веб-приложения, лендинги и умные AI-агенты для автоматизации продаж. 
              Ваш проект — от идеи до запуска за 4-6 недель.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={scrollToContact} className="btn btn-primary btn-enhanced text-lg">
                Обсудить проект
              </button>
              <button
                onClick={scrollToServices}
                className="btn glass hover:bg-[var(--bg-secondary)] btn-enhanced text-lg"
              >
                Посмотреть услуги
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div ref={projectsCount.ref}>
                <div className="text-3xl font-bold gradient-text">{projectsCount.count}+</div>
                <div className="text-sm text-[var(--text-tertiary)] mt-1">Проектов</div>
              </div>
              <div ref={yearsCount.ref}>
                <div className="text-3xl font-bold gradient-text">{yearsCount.count}+</div>
                <div className="text-sm text-[var(--text-tertiary)] mt-1">Лет опыта</div>
              </div>
              <div ref={satisfactionCount.ref}>
                <div className="text-3xl font-bold gradient-text">{satisfactionCount.count}%</div>
                <div className="text-sm text-[var(--text-tertiary)] mt-1">Доволен клиентов</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass p-8 rounded-2xl">
              <div className="aspect-square bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl opacity-20"></div>
              <div className="mt-4 space-y-3">
                <div className="h-4 bg-[var(--bg-secondary)] rounded w-3/4"></div>
                <div className="h-4 bg-[var(--bg-secondary)] rounded w-1/2"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Прокрутить вниз"
        >
          <span className="text-sm">Прокрутите вниз</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
