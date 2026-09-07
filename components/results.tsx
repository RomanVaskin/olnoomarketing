import { SectionLabel } from './section-label'

const flow = ['Целевые обращения', 'Показы объектов', 'Бронирования', 'Сделки']

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <SectionLabel index="06">Результат</SectionLabel>

      <h2 className="mt-8 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        Считаем не показы.
        <br />
        <span className="olnoo-gradient-text">Считаем движение к сделке.</span>
      </h2>

      <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-stretch">
        {flow.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-3 md:flex-col md:items-stretch md:gap-0">
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
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Маркетинг оценивается не количеством трафика, а его вкладом в продажи проекта.
      </p>
    </section>
  )
}
