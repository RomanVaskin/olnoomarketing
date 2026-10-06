'use client'

import { Reveal } from './reveal'
import { PageEyebrow } from './page-eyebrow'
import { ctaButtonClass, ctaButtonOutlineClass } from './services-cta'
import { TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'

const messengers = [
  { label: 'WhatsApp', href: WHATSAPP_URL, className: ctaButtonClass },
  { label: 'Telegram', href: TELEGRAM_URL, className: ctaButtonOutlineClass },
]

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
        <Reveal className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <PageEyebrow title="Контакты" />
            <h2 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Обсудим ваш проект.
            </h2>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Расскажите, что вы продаёте и на каком этапе находится проект. Мы посмотрим задачу и
              предложим самый короткий путь к росту продаж.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
              {messengers.map((m) => (
                <a
                  key={m.label}
                  href={m.href || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!m.href || undefined}
                  className={m.className}
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Форма заявки"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-primary text-[11px] font-normal uppercase leading-none tracking-label text-muted-foreground">
                Имя
              </label>
              <input
                id="name"
                type="text"
                className="border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                placeholder="Как к вам обращаться"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="font-primary text-[11px] font-normal uppercase leading-none tracking-label text-muted-foreground">
                Телефон или Telegram
              </label>
              <input
                id="contact"
                type="text"
                className="border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                placeholder="+7 или @username"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="project" className="font-primary text-[11px] font-normal uppercase leading-none tracking-label text-muted-foreground">
                Проект / комментарий
              </label>
              <textarea
                id="project"
                rows={3}
                className="resize-none border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground"
                placeholder="Коротко о проекте и задаче"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-foreground px-6 py-4 text-sm font-normal tracking-ui text-background transition-opacity hover:opacity-90 sm:w-auto sm:self-start sm:px-10"
            >
              Отправить заявку
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
