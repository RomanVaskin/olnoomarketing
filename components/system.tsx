import { SectionLabel } from './section-label'

const flow = ['Продукт', 'Упаковка', 'Сайт', 'Трафик', 'Лид', 'Продажа']

export function MarketingSystem() {
  return (
    <section id="system" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <SectionLabel index="03">Система</SectionLabel>

      <h2 className="mt-8 max-w-4xl text-balance text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
        Маркетинг должен приводить не клики,{' '}
        <span className="olnoo-gradient-text">а покупателей.</span>
      </h2>

      <div className="mt-16 overflow-hidden rounded-lg border border-border">
        <div className="flex flex-col divide-y divide-border md:flex-row md:divide-x md:divide-y-0">
          {flow.map((step, i) => (
            <div
              key={step}
              className="flex flex-1 items-center gap-4 px-6 py-7 md:flex-col md:items-start md:gap-6 md:px-6 md:py-10"
            >
              <span className="font-mono text-[11px] text-muted-foreground">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-base font-medium uppercase tracking-wide md:text-lg">
                {step}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1 olnoo-gradient" aria-hidden="true" />
      </div>

      <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Мы рассматриваем продвижение как единую систему. Реклама не работает отдельно от продукта,
        сайта, контента и отдела продаж.
      </p>

      <a
        href="/system"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
      >
        Подробнее о системе →
      </a>
    </section>
  )
}
