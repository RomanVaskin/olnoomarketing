import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const packages = [
  {
    title: 'Базовое сопровождение',
    price: '150\u00a0000\u00a0₽',
    items: [
      'Размещение на нашей платформе',
      'Аналитика и построение стратегии',
      'Упаковка и размещение на классифайд-площадках',
      'Подключение специализированной CRM для недвижимости',
    ],
  },
  {
    title: 'Полное сопровождение',
    price: '350\u00a0000\u00a0₽',
    items: [
      'Размещение на нашей платформе',
      'Аналитика и построение стратегии',
      'SEO-продвижение',
      'Упаковка и размещение на классифайд-площадках',
      'Подключение специализированной CRM для недвижимости',
      'Посевы',
      'Упаковка и ведение социальных сетей',
      'Создание контента',
      'Работа с имиджем и репутацией застройщика',
      'Работа через внешние каналы сотрудничества',
      'Обработка текущей базы клиентов нашим отделом продаж',
    ],
  },
]

const notes = [
  {
    label: 'Брокеридж',
    title: 'Продажа загородной недвижимости',
    text: 'Продажа загородной недвижимости с полным сопровождением — от стратегии выхода на рынок и поиска покупателя до переговоров и закрытия сделки.',
  },
  {
    label: 'Дополнительные услуги',
    text: 'Публикации и работа со СМИ, организация закрытых продаж и мероприятий, разработка и производство комплиментарных сетов, подготовка и запуск видеопродакшна, дизайн и размещение наружной рекламы, участие в отраслевых выставках.',
  },
]

export function ServicesPackages() {
  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
      <Reveal>
        <SectionLabel>Форматы сотрудничества</SectionLabel>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 lg:grid-cols-2 lg:gap-6">
        {packages.map((p, i) => (
          <Reveal key={p.title} index={i} className="h-full">
            {/* flex column + mt-auto on the price pins both prices to the same bottom line */}
            <article className="flex h-full flex-col border border-border bg-background p-7 md:p-10 lg:p-12">
              <h2 className="font-primary text-[length:clamp(24px,2.2vw,30px)] font-light leading-[1.15] tracking-[-0.015em] text-[#161616]">
                {p.title}
              </h2>
              <ul className="mt-8 divide-y divide-border md:mt-10">
                {p.items.map((item) => (
                  <li key={item} className="py-3.5 text-[15px] font-normal leading-[1.5] text-foreground/80 md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10 md:pt-12">
                <p className="border-t border-border pt-7 font-primary text-[length:clamp(24px,2vw,28px)] font-light leading-none tracking-[-0.015em] text-[#161616]">
                  {p.price}
                  <span className="ml-2 text-base text-muted-foreground">/ месяц</span>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 border-t border-border md:mt-32">
        {notes.map((n) => (
          <Reveal key={n.label}>
            <div className="grid grid-cols-1 gap-y-6 border-b border-border py-12 md:py-16 lg:grid-cols-[320px_1fr] lg:gap-x-10">
              <div className="lg:pt-2">
                <SectionLabel>{n.label}</SectionLabel>
              </div>
              <div>
                {n.title && (
                  <h2 className="font-primary text-[length:clamp(24px,2.4vw,34px)] font-light leading-[1.15] tracking-display text-[#161616]">
                    {n.title}
                  </h2>
                )}
                <p
                  className={`max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg ${n.title ? 'mt-5' : ''}`}
                >
                  {n.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
