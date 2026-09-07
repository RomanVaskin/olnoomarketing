import { SectionLabel } from './section-label'

const services = [
  {
    n: '01',
    title: 'Стратегия и упаковка',
    text: 'Анализ проекта, рынка и конкурентов. Позиционирование, предложение и стратегия продвижения.',
  },
  {
    n: '02',
    title: 'Сайты и лендинги',
    text: 'Современные сайты посёлков, домов и строительных компаний, ориентированные на обращения.',
  },
  {
    n: '03',
    title: 'SEO',
    text: 'Поисковая структура, посадочные страницы, контент и системное развитие органического трафика.',
  },
  {
    n: '04',
    title: 'Реклама',
    text: 'Яндекс Директ, ретаргетинг и работа с целевой аудиторией.',
  },
  {
    n: '05',
    title: 'Контент',
    text: 'Фото, видео, статьи, социальные сети и материалы, которые помогают покупателю принять решение.',
  },
  {
    n: '06',
    title: 'Аналитика и автоматизация',
    text: 'Отслеживание источников, заявок и движения клиента от первого визита до продажи.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionLabel index="02">Практика</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          От позиционирования до привлечения покупателей
        </h2>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.n}
              className="group border-b border-r border-border bg-background p-8 transition-colors hover:bg-secondary md:p-10"
            >
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <h3 className="mt-6 text-xl font-medium tracking-tight md:text-[1.35rem]">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
