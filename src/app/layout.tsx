import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8 Dance Studio — студия современного танца в Пскове",
  description:
    "Контемпорари, хип-хоп, акробатика, растяжка и актёрское мастерство. Группы для детей с 3 лет, подростков и взрослых. Первое занятие бесплатно.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
