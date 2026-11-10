"use client";

import { FormEvent } from "react";
import { contacts } from "@/lib/data";

const field =
  "h-[52px] border-0 border-b border-ink bg-transparent font-sans text-[17px] normal-case tracking-normal text-ink outline-none placeholder:text-[#7a7a7a] focus:border-b-2";
const label = "flex flex-col gap-2.5 text-xs uppercase tracking-[0.18em] text-dim";

/** Sends the request to the studio's WhatsApp with a prefilled message. */
export function TrialForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "Здравствуйте! Хочу записаться на пробное занятие.",
      `Имя: ${data.get("name")}`,
      `Телефон: ${data.get("phone")}`,
      `Возраст танцора: ${data.get("age")}`,
    ].join("\n");
    window.open(`https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="flex min-w-0 flex-[1_1_420px] flex-col gap-7 pt-2">
      <label className={label}>
        Имя
        <input required type="text" name="name" autoComplete="name" placeholder="Как к вам обращаться" className={field} />
      </label>
      <label className={label}>
        Телефон
        <input required type="tel" name="phone" autoComplete="tel" placeholder="+7" className={field} />
      </label>
      <label className={label}>
        Возраст танцора
        <input required type="text" name="age" placeholder="Например, 7 лет" className={field} />
      </label>
      <button
        type="submit"
        className="mt-3 min-h-[60px] cursor-pointer bg-ink text-[13px] font-semibold uppercase tracking-[0.18em] text-paper transition-opacity hover:opacity-85"
      >
        Записаться на пробное
      </button>
      <p className="text-[13px] text-dim">
        Заявка откроется в WhatsApp. Или запишитесь{" "}
        <a href={contacts.trial} className="underline underline-offset-4">
          через ВКонтакте
        </a>
        .
      </p>
    </form>
  );
}
