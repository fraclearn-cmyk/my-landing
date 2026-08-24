import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Портфолио Цифрового Мастера | Сайты, Веб-приложения, ИИ-решения",
  description: "Создаю сайты и ИИ-решения, которые работают на ваш бизнес. Веб-приложения, лендинги и умные AI-агенты для автоматизации продаж.",
  keywords: "разработка сайтов, веб-приложения, AI-агенты, fullstack разработчик, Next.js, React",
  authors: [{ name: "[ИМЯ]" }],
  openGraph: {
    type: "website",
    title: "Портфолио Цифрового Мастера",
    description: "Создаю сайты и ИИ-решения, которые работают на ваш бизнес",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
