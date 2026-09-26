import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const flow = ['Целевые обращения', 'Показы объектов', 'Бронирования', 'Сделки']

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionLabel>Результат</SectionLabel>

        <h2 className="mt-8 max-w-5xl font-mono text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
          Считаем не показы.
          <br />
          Считаем движение к сделке.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-stretch">
        {flow.map((step, i) => (
          <Reveal key={step} index={i} className="flex flex-1 items-center gap-3 md:flex-col md:items-stretch md:gap-0">
            <div className="flex flex-1 items-center rounded-lg border border-border px-6 py-6 md:min-h-24">
              <span className="text-base font-medium md:text-lg">{step}</span>
            </div>
            {i < flow.length - 1 && (
              <span
                className="font-mono text-muted-foreground md:hidden"
                aria-hidden="true"
              >
                ↓
              </span>
            )}
          </Reveal>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Маркетинг оценивается не количеством трафика, а его вкладом в продажи проекта.
      </p>
    </section>
  )
}
