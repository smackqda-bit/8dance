import { Header } from "@/components/Header";
import { PhotoSlot } from "@/components/PhotoSlot";
import { TrialForm } from "@/components/TrialForm";
import { contacts, directions, events, prices, reviews, schedule, stages, stats, team } from "@/lib/data";

function SectionHead({
  n,
  label,
  title,
  aside,
  light = false,
}: {
  n: string;
  label: string;
  title: React.ReactNode;
  aside?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-14">
      <div>
        <p className={`eyebrow ${light ? "text-dim" : "text-mute"}`}>
          {n} — {label}
        </p>
        <h2 className="h-display mt-5">{title}</h2>
      </div>
      {aside && <p className={`max-w-[380px] text-[15px] ${light ? "text-body-light" : "text-[#9a9a9a]"}`}>{aside}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="top" className="container-x flex flex-wrap items-stretch gap-14 pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,7vw,104px)]">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col justify-between gap-12">
            <p className="eyebrow flex items-center gap-3.5 text-[#9a9a9a]">
              <span className="size-2 rounded-full bg-accent" />
              Набор в группы · сезон 2026–2027
            </p>
            <div>
              <h1 className="font-display text-[clamp(34px,4.7vw,76px)] leading-[1.04] font-extralight tracking-[0.02em] uppercase">
                Студия
                <br />
                современного
                <br />
                танца
              </h1>
              <p className="mt-9 max-w-[520px] text-lg leading-[1.65] text-soft">
                Контемпорари, хип-хоп, акробатика, растяжка и актёрское мастерство. Группы для детей с&nbsp;3&nbsp;лет,
                подростков и взрослых — в самом центре Пскова.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contacts"
                className="inline-flex min-h-14 items-center bg-paper px-8 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition-opacity hover:opacity-85"
              >
                Записаться бесплатно
              </a>
              <a
                href="#schedule"
                className="inline-flex min-h-14 items-center border border-[#3a3a3a] px-7 text-[13px] uppercase tracking-[0.16em] transition-colors hover:border-paper"
              >
                Расписание
              </a>
            </div>
          </div>
          <div className="relative flex min-h-[420px] min-w-0 flex-[1_1_520px] items-end overflow-hidden border border-[#222] bg-panel md:min-h-[620px]">
            <span
              aria-hidden="true"
              className="outline-8 absolute -top-[60px] -right-6 font-display text-[clamp(320px,36vw,520px)] leading-none font-extralight"
            >
              8
            </span>
            <div className="relative flex w-full flex-wrap justify-between gap-4 p-7 text-[11px] uppercase tracking-[0.2em] text-mute">
              <span>Фото · сцена, ч/б, контровой свет</span>
              <span>Псков · Рокоссовского 42</span>
            </div>
          </div>
        </section>

        {/* STAGES */}
        <section aria-label="Сцены и фестивали" className="border-y border-line">
          <div className="container-x flex flex-wrap items-center justify-between gap-x-12 gap-y-3 py-7 font-display text-[15px] font-light uppercase tracking-[0.28em] text-mute">
            {stages.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="container-x section-y flex flex-wrap gap-14">
          <p className="eyebrow flex-[1_1_280px] text-mute">01 — О студии</p>
          <div className="min-w-0 flex-[3_1_640px]">
            <p className="font-display text-[clamp(28px,3.2vw,46px)] leading-[1.3] font-light tracking-[0.01em]">
              Мы учим не просто движению — мы учим говорить телом. Каждый сезон наши ученики выходят на большую сцену:
              фестивали, конкурсы и отчётный концерт, к которому готовится вся студия.
            </p>
            <div className="mt-16 flex flex-wrap border-t border-line-strong">
              {stats.map((s) => (
                <div key={s.label} className="flex-[1_1_200px] pt-7 pr-6">
                  <div className="font-display text-[56px] leading-none font-extralight">{s.value}</div>
                  <div className="mt-3 text-sm text-[#9a9a9a]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTIONS */}
        <section id="directions" className="scroll-mt-20 bg-paper text-ink">
          <div className="container-x section-y">
            <SectionHead
              light
              n="02"
              label="Направления"
              title="Что мы танцуем"
              aside="Подберём группу по возрасту и уровню — начинающим, продолжающим и продвинутым."
            />
            <ol className="border-t border-ink">
              {directions.map((d, i) => (
                <li key={d.title} className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line-light py-8">
                  <span className="flex-[0_0_64px] text-[13px] text-dim">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-[1_1_320px] font-display text-[clamp(26px,2.6vw,38px)] font-light uppercase tracking-[0.06em]">
                    {d.title}
                  </span>
                  <span className="flex-[2_1_360px] text-body-light">{d.text}</span>
                  <span className="flex-[0_0_120px] text-[13px] uppercase tracking-[0.1em] text-dim sm:text-right">{d.age}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SCHEDULE */}
        <section id="schedule" className="container-x section-y scroll-mt-20">
          <SectionHead
            n="03"
            label="Расписание"
            title="Сезон 2026–2027"
            aside="Ежедневные изменения публикуем в сообществе ВКонтакте."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-[15px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-[0.2em] text-mute">
                  {["Группа", "Направление", "Дни и время", "Педагог"].map((h) => (
                    <th key={h} scope="col" className="border-b border-paper pr-4 pb-[18px] font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((r) => (
                  <tr key={r.group + r.style} className="transition-colors hover:bg-white/[0.02]">
                    <td className="border-b border-[#222] py-[22px] pr-4 font-display text-[22px] font-light tracking-[0.04em] whitespace-nowrap">
                      {r.group}
                    </td>
                    <td className="border-b border-[#222] py-[22px] pr-4 text-soft">{r.style}</td>
                    <td className="border-b border-[#222] py-[22px] pr-4 text-soft">{r.time}</td>
                    <td className="border-b border-[#222] py-[22px]">{r.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="scroll-mt-20 border-t border-line">
          <div className="container-x section-y">
            <SectionHead n="04" label="Педагоги" title="Команда" />
            <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-6">
              {team.map((t) => (
                <li key={t.name} className="min-w-0">
                  <PhotoSlot label="Портрет, ч/б" className="aspect-[3/4] p-3.5 text-[10px]" />
                  <p className="mt-[18px] font-display text-[19px] tracking-[0.04em]">{t.name}</p>
                  <p className="mt-1 text-sm text-[#9a9a9a]">{t.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICES */}
        <section id="prices" className="scroll-mt-20 bg-paper text-ink">
          <div className="container-x section-y">
            <SectionHead light n="05" label="Абонементы" title="Стоимость" />
            <div className="grid border-t border-l border-t-ink border-l-line-light sm:grid-cols-2 xl:grid-cols-4">
              {prices.map((p) => (
                <div
                  key={p.label}
                  className={`flex flex-col gap-5 border-r border-b border-line-light px-8 pt-9 pb-10 ${
                    p.featured ? "bg-ink text-paper" : ""
                  }`}
                >
                  <p className={`text-xs uppercase tracking-[0.2em] ${p.featured ? "text-[#9a9a9a]" : "text-dim"}`}>{p.label}</p>
                  <p className="font-display text-[clamp(44px,4vw,56px)] leading-none font-extralight">{p.price}</p>
                  <p className={p.featured ? "text-soft" : "text-body-light"}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAGE */}
        <section className="container-x section-y">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-mute">06 — Сцена</p>
              <h2 className="h-display mt-5">
                Там, где будильники
                <br />
                не звонят
              </h2>
            </div>
            <a href={contacts.vk} className="inline-flex min-h-11 items-center border-b border-paper text-xs uppercase tracking-[0.16em]">
              Все фото в ВК
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <PhotoSlot label="Отчётный концерт · общий план" className="min-h-[360px] flex-[2_1_520px] md:min-h-[520px]" />
            <div className="flex flex-[1_1_280px] flex-col gap-4">
              <PhotoSlot label="Backstage" className="min-h-[220px] flex-1" />
              <PhotoSlot label="Фестиваль «Шаг вперёд»" className="min-h-[220px] flex-1" />
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-8">
            {events.map((e) => (
              <div key={e.title} className="flex-[1_1_300px] border-t border-line-strong pt-6">
                <p className="font-display text-lg tracking-[0.04em]">{e.title}</p>
                <p className="mt-2 text-[15px] text-[#9a9a9a]">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="border-t border-line">
          <div className="container-x flex flex-wrap gap-14 py-[clamp(72px,9vw,120px)]">
            <p className="eyebrow flex-[1_1_280px] text-mute">07 — Отзывы</p>
            <div className="flex min-w-0 flex-[3_1_640px] flex-wrap gap-12">
              {reviews.map((r) => (
                <figure key={r.author} className="flex-[1_1_300px]">
                  <blockquote className="font-display text-2xl leading-[1.45] font-light">«{r.text}»</blockquote>
                  <figcaption className="mt-5 text-[13px] uppercase tracking-[0.1em] text-[#9a9a9a]">{r.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="scroll-mt-20 bg-paper text-ink">
          <div className="container-x section-y flex flex-wrap gap-[72px]">
            <div className="min-w-0 flex-[1_1_460px]">
              <p className="eyebrow text-dim">08 — Запись</p>
              <h2 className="mt-5 font-display text-[clamp(40px,5.4vw,80px)] leading-[1.02] font-extralight tracking-[0.04em] uppercase">
                Первое занятие —
                <br />
                бесплатно
              </h2>
              <dl className="mt-14 border-t border-ink">
                {[
                  { k: "Адрес", v: contacts.address },
                  { k: "Телефон", v: contacts.phone, href: contacts.phoneHref },
                  { k: "ВКонтакте", v: contacts.vkLabel, href: contacts.vk },
                ].map((row) => (
                  <div key={row.k} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line-light py-5">
                    <dt className="flex-[0_0_140px] text-xs uppercase tracking-[0.18em] text-dim">{row.k}</dt>
                    <dd className="flex-[1_1_240px]">
                      {row.href ? (
                        <a href={row.href} className="hover:underline underline-offset-4">
                          {row.v}
                        </a>
                      ) : (
                        row.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <TrialForm />
          </div>
        </section>
      </main>

      <footer className="container-x flex flex-wrap items-center justify-between gap-6 py-12 text-[13px] text-mute">
        <span className="font-display font-light uppercase tracking-[0.38em] text-paper">
          8 Dance Studio<span className="text-accent"> ·</span> Псков
        </span>
        <span>© 2026 · Студия современного танца</span>
        <a href={contacts.vk} className="text-soft hover:text-paper">
          ВКонтакте
        </a>
      </footer>
    </>
  );
}
