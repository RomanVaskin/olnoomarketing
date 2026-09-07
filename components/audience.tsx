import { SectionLabel } from './section-label'

const blocks = [
  {
    title: 'Коттеджные посёлки',
    text: 'Запуск и системное продвижение проектов от первых продаж до масштабирования.',
  },
  {
    title: 'Девелоперы',
    text: 'Маркетинг жилых проектов, земельных активов и новых территорий.',
  },
  {
    title: 'Строительные компании',
    text: 'Привлечение клиентов на строительство и продажу готовых домов.',
  },
]

export function Audience() {
  return (
    <section id="audience" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <SectionLabel index="01">Для кого</SectionLabel>
      <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Работаем с проектами загородной недвижимости
      </h2>

      <div className="mt-14 grid gap-px border-t border-border md:grid-cols-3 md:border-t-0">
        {blocks.map((b, i) => (
          <div
            key={b.title}
            className="border-t border-border py-8 md:border-l md:border-t-0 md:py-0 md:pl-8 md:pr-6 first:md:border-l-0"
          >
            <span className="font-mono text-[11px] text-muted-foreground">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-xl font-medium tracking-tight md:text-2xl">{b.title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
