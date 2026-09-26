'use client'

import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Next step
            </p>
            <h2 className="mt-6 max-w-5xl font-mono text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
              Обсудим ваш проект.
            </h2>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Расскажите, что вы продаёте и на каком этапе находится проект. Мы посмотрим задачу и
              предложим самый короткий путь к росту продаж.
            </p>
          </div>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Форма заявки"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
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
              <label htmlFor="contact" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
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
              <label htmlFor="project" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
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
              className="mt-2 w-full rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto sm:self-start sm:px-10"
            >
              Отправить заявку
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
