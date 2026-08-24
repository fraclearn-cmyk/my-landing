'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-8 rounded-2xl">
              <div className="aspect-square bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl opacity-20 flex items-center justify-center">
                <Code2 size={120} className="text-[var(--text-primary)] opacity-30" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Обо <span className="gradient-text">мне</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                Привет! Я <strong>[ИМЯ]</strong> — fullstack-разработчик и специалист по ИИ-решениям.
              </p>

              <p>
                Начал кодить в <strong>[ГОД]</strong>, когда понял, что технологии могут реально 
                упростить жизнь людям. С тех пор создал <strong>[ЧИСЛО]+</strong> проектов — 
                от простых лендингов до сложных веб-платформ с AI.
              </p>

              <p>
                <strong>Моя философия:</strong> Технологии должны решать реальные проблемы, 
                а не усложнять жизнь. Поэтому я работаю не просто как разработчик, 
                а как технический партнёр — помогаю найти оптимальное решение для вашей задачи.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="glass p-6 rounded-xl">
                <Rocket className="text-[var(--accent-primary)] mb-3" size={32} />
                <h3 className="font-bold mb-2">Быстро и качественно</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Соблюдаю сроки и делаю код, которым не стыдно
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <Heart className="text-[var(--accent-primary)] mb-3" size={32} />
                <h3 className="font-bold mb-2">Честность</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Никаких скрытых платежей, всё прозрачно
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <Target className="text-[var(--accent-primary)] mb-3" size={32} />
                <h3 className="font-bold mb-2">Результат</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Не просто сделать, а чтобы работало
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <Code2 className="text-[var(--accent-primary)] mb-3" size={32} />
                <h3 className="font-bold mb-2">Современный стек</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Использую актуальные технологии 2026 года
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 glass rounded-xl">
              <p className="text-sm text-[var(--text-tertiary)] mb-2">
                <strong>Когда не кодю:</strong>
              </p>
              <p className="text-[var(--text-secondary)]">
                [ХОББИ — например, играю на гитаре, читаю sci-fi, путешествую]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
