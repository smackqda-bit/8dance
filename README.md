# 8 Dance Studio

Сайт студии современного танца в Пскове. Next.js 15 (App Router) + Tailwind CSS 4.

## Запуск

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Где что менять

- `src/lib/data.ts` — контакты, расписание, педагоги, цены, отзывы.
- `src/app/globals.css` — цвета и шрифты (блок `@theme`). Акцент: `--color-accent`.
- `src/components/PhotoSlot.tsx` — заглушки фото. Положите снимки в `public/` и замените `PhotoSlot` на `next/image`.
- `src/components/TrialForm.tsx` — форма записи; сейчас открывает WhatsApp студии с готовым сообщением.

## Деплой

Подключите репозиторий в Vercel — настройки по умолчанию подходят.
