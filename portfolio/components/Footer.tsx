'use client';

import { Globe, Briefcase, MessageCircle, Mail } from 'lucide-react';

const navigation = [
  { name: 'Главная', href: '#hero' },
  { name: 'Услуги', href: '#services' },
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Процесс', href: '#process' },
  { name: 'Отзывы', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Контакты', href: '#contact' },
];

const socials = [
  { name: 'GitHub', icon: Globe, href: 'https://github.com/username' },
  { name: 'LinkedIn', icon: Briefcase, href: 'https://linkedin.com/in/username' },
  { name: 'Twitter', icon: MessageCircle, href: 'https://twitter.com/username' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-tertiary)] border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">{'<DM />'}</div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Создаю сайты и ИИ-решения, которые работают на ваш бизнес
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>Email: contact@example.com</p>
              <p>Telegram: @username</p>
              <p>Пн-Пт: 10:00 - 19:00 (МСК)</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--text-tertiary)]">
          <p>© {currentYear} [ИМЯ]. Все права защищены.</p>
          <div className="flex gap-6">
            <button className="hover:text-[var(--text-primary)] transition-colors">
              Политика конфиденциальности
            </button>
            <button className="hover:text-[var(--text-primary)] transition-colors">
              Условия использования
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
