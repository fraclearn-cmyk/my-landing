# Digital Master Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Собрать адаптивный русскоязычный лендинг-портфолио для продажи услуг веб-разработки и AI-автоматизации.

**Architecture:** Next.js App Router с одним page-компоновщиком и небольшими client-компонентами для интерактивных частей. Контент хранится в типизированных массивах рядом с UI, а стили строятся на CSS-переменных и Tailwind utility-классах.

**Tech Stack:** Next.js 15+, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, Zod.

## Global Constraints

- Интерфейс и текст: русский язык.
- Тема: dark-tech с cyan/magenta акцентами, выразительный `Space Grotesk`, технический `JetBrains Mono`.
- Использовать семантические HTML-элементы, WCAG AA contrast, keyboard focus и reduced-motion.
- Персональные данные: только `[ИМЯ]`, `[ГОД]`, `[ЧИСЛО]+`, `[ХОББИ]` и нейтральные контактные заглушки.
- Форма демонстрационная: клиентская валидация и success-state, без backend API.
- Целевые показатели: Lighthouse > 90, FCP < 1.5 сек, LCP < 2.5 сек, CLS < 0.1.

---

### Task 1: Scaffold and Design Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `components/ui/Container.tsx`, `components/ui/SectionHeading.tsx`

**Interfaces:**
- `Container({ children, className? }: { children: React.ReactNode; className?: string }): JSX.Element`
- `SectionHeading({ eyebrow, title, description? }: { eyebrow: string; title: string; description?: string }): JSX.Element`

- [ ] **Step 1: Add the package and framework configuration** with Next 15+, React, TypeScript, Tailwind, Framer Motion, Lucide, React Hook Form and Zod, plus scripts `dev`, `build`, `start`, `lint`.
- [ ] **Step 2: Add global tokens and responsive primitives** for background layers, text colors, cyan/magenta accents, grid texture, focus ring, reduced motion, container widths and stable section spacing.
- [ ] **Step 3: Add semantic root layout** with metadata, `lang="ru"`, font loading and the page shell.
- [ ] **Step 4: Run `npm install` and `npm run build`**; expected result is a successful minimal Next build.
- [ ] **Step 5: Commit** with `git add package.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.ts app components && git commit -m "chore: scaffold portfolio landing"`.

### Task 2: Hero, Navigation, Theme, and Services

**Files:**
- Create: `components/site/Header.tsx`, `components/site/Hero.tsx`, `components/site/Services.tsx`
- Create: `components/site/ThemeToggle.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- `Header(): JSX.Element`
- `Hero(): JSX.Element`
- `Services(): JSX.Element`
- `ThemeToggle(): JSX.Element`

- [ ] **Step 1: Render the fixed header** with anchor links, primary CTA, mobile menu button, and theme toggle; all controls use labels and focus states.
- [ ] **Step 2: Render the hero** using the exact approved headline/subheadline and a CSS-built project status panel with stable dimensions, status chips, and a scroll indicator.
- [ ] **Step 3: Render three service cards** with the approved copy, benefits, timelines, technologies, icons and CTA anchors.
- [ ] **Step 4: Add viewport reveal and hover motion** using Framer Motion while honoring `prefers-reduced-motion`.
- [ ] **Step 5: Run `npm run build` and check anchor targets in the browser**; expected result is no TypeScript/build error and every header CTA reaches a section.
- [ ] **Step 6: Commit** with `git add app components && git commit -m "feat: add hero navigation and services"`.

### Task 3: Portfolio and About

**Files:**
- Create: `components/site/Portfolio.tsx`, `components/site/ProjectLightbox.tsx`, `components/site/About.tsx`
- Create: `lib/portfolio-data.ts`
- Modify: `app/page.tsx`

**Interfaces:**
- `Project` type with `title`, `category`, `description`, `problem`, `solution`, `result`, `metrics`, `technologies`, `image`, `demoUrl`.
- `ProjectLightbox({ project, onClose }: { project: Project; onClose: () => void }): JSX.Element`

- [ ] **Step 1: Define three clearly labeled demonstration projects** in `lib/portfolio-data.ts`, each with problem, solution, numeric result, technology labels and local visual treatment.
- [ ] **Step 2: Render the portfolio grid** with lazy media, result metrics, technology tags and live-demo links that do not claim real client ownership.
- [ ] **Step 3: Add accessible lightbox behavior** with backdrop close, Escape close, dialog semantics, focusable close button and image alt text.
- [ ] **Step 4: Render About** with `[ИМЯ]`, `[ГОД]`, `[ЧИСЛО]+`, `[ХОББИ]`, philosophy and three values from the approved content.
- [ ] **Step 5: Run `npm run build` and manually test lightbox open/close plus keyboard Escape**; expected result is correct focusable interaction and no horizontal overflow.
- [ ] **Step 6: Commit** with `git add app components lib && git commit -m "feat: add portfolio cases and about section"`.

### Task 4: Process, Testimonials, FAQ, and Contact

**Files:**
- Create: `components/site/Process.tsx`, `components/site/Testimonials.tsx`, `components/site/Faq.tsx`, `components/site/Contact.tsx`
- Create: `lib/site-data.ts`
- Modify: `app/page.tsx`

**Interfaces:**
- `Faq(): JSX.Element` with question/answer data from `lib/site-data.ts`.
- `Testimonials(): JSX.Element` with controlled active testimonial state.
- `Contact(): JSX.Element` with schema `{ name: string; contact: string; project: string }`.

- [ ] **Step 1: Define six process stages** with titles and exact durations from the specification.
- [ ] **Step 2: Add three demonstration testimonials** with explicit placeholder/demo labeling and carousel previous/next controls.
- [ ] **Step 3: Add all seven FAQ entries** from `TZ.md` as native buttons with `aria-expanded` and answer regions.
- [ ] **Step 4: Build the contact form** with React Hook Form and Zod validation for name, contact and project description; show inline errors and a success message after valid submit.
- [ ] **Step 5: Add Calendly and neutral Telegram/WhatsApp/email links** with visible labels and no fabricated personal identifiers.
- [ ] **Step 6: Run `npm run build` and manually test invalid submit, valid submit, carousel buttons and FAQ keyboard access**; expected result is deterministic UI state without network dependency.
- [ ] **Step 7: Commit** with `git add app components lib && git commit -m "feat: add process proof faq and contact"`.

### Task 5: Footer, Responsive Polish, and Verification

**Files:**
- Create: `components/site/Footer.tsx`
- Modify: `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Add footer navigation, social placeholders and copyright** while preserving the same anchor map as the header.
- [ ] **Step 2: Check desktop and mobile layouts** at 1440px, 1024px and 390px widths; fix overflow, text wrapping, button sizing and stable media dimensions.
- [ ] **Step 3: Check accessibility behavior** for focus visibility, semantic headings, alt text, reduced motion and sufficient color contrast.
- [ ] **Step 4: Run `npm run lint` and `npm run build`**; expected result is both commands passing.
- [ ] **Step 5: Run the production server with `npm run start` and perform a final browser smoke-check** for hero, services, portfolio lightbox, theme toggle, process, testimonials, FAQ, form and footer.
- [ ] **Step 6: Commit** with `git add app components lib && git commit -m "polish: make portfolio landing responsive and accessible"`.

## Self-Review Checklist

- Spec coverage: all nine page areas, motion, lightbox, accordion, carousel, form, theme toggle, anchors, responsive behavior and performance/accessibility targets are assigned to tasks.
- Placeholder scan: no незаполненных маркеров или vague implementation instruction appears in the plan.
- Type consistency: `Project` and contact schema are defined before their consuming components.
- Scope: no real analytics, email, Telegram Bot API, Calendly backend or CMS is added because the approved MVP explicitly keeps integrations demonstrational.