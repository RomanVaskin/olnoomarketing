import { Reveal } from './reveal'
import { BrokerageInfographics } from './brokerage-infographics'

const packages = [
  {
    title: 'Базовое сопровождение',
    price: '150\u00a0000\u00a0₽',
    items: [
      'Размещение на нашей платформе',
      'Аналитика и построение стратегии',
      'Настройка контекстной рекламы',
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
      'Настройка контекстной рекламы',
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

const notes: { label: string; text: string; extra?: string; fee?: string }[] = [
  {
    label: 'Дополнительные услуги',
    text: 'Публикации и работа со СМИ, организация закрытых продаж и мероприятий, разработка и производство комплиментарных сетов, подготовка и запуск видеопродакшна, дизайн и размещение наружной рекламы, участие в отраслевых выставках.',
  },
  {
    label: 'Брокеридж',
    text: 'Продажа загородной недвижимости с полным сопровождением — от стратегии выхода на рынок и поиска покупателя до переговоров и закрытия сделки.',
    extra: 'Подключаем наш внешний отдел продаж',
    fee: '2–7% от сделки',
  },
]

const subheadingBase =
  "flex items-center font-primary text-[#161616] before:shrink-0 before:bg-foreground before:content-['']"

/** Regular subheading: light, led by a thin 1px rule. */
const subheadingRegular =
  'gap-3 text-[20px] font-light leading-[1.15] tracking-[-0.015em] before:h-px before:w-6 md:gap-4 md:text-[24px] md:before:w-[30px] lg:text-[length:clamp(24px,2.2vw,36px)]'

/** Lead subheading (Комплексный маркетинг): medium, ~12% larger, thick rounded 3px rule. */
const subheadingStrong =
  'gap-4 text-[21px] font-medium leading-[1.1] tracking-[-0.02em] before:h-[3px] before:w-7 before:rounded-full md:gap-[18px] md:text-[27px] md:before:w-9 lg:text-[length:clamp(27px,2.45vw,40px)]'

/** Section subheading one level below the page H1, led by a short black rule. */
function SectionSubheading({ children, strong = false }: { children: string; strong?: boolean }) {
  return <h2 className={`${subheadingBase} ${strong ? subheadingStrong : subheadingRegular}`}>{children}</h2>
}

/** Figure style for package prices. */
const figureClass =
  'font-primary text-[20px] font-light leading-none tracking-[-0.015em] text-[#161616] md:text-[length:clamp(22px,1.7vw,24px)]'

export function ServicesPackages() {
  return (
    <section id="formats" className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-24">
      <Reveal className="border-t border-foreground pt-12 md:pt-14">
        <SectionSubheading strong>Комплексный маркетинг</SectionSubheading>
      </Reveal>

      <div className="mx-auto mt-9 grid max-w-[1080px] grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-8 lg:gap-11">
        {packages.map((p, i) => (
          <Reveal key={p.title} index={i} className="h-full">
            {/* flex column + mt-auto on the price pins both prices to the same bottom line */}
            <article className="flex h-full flex-col rounded-[16px] bg-[#F3F3F1] p-7 md:rounded-[18px] md:p-9 lg:p-11">
              <h3 className="font-primary text-[19px] font-light leading-[1.15] tracking-[-0.015em] text-[#161616] md:text-[22px] lg:text-[length:clamp(22px,1.8vw,26px)]">
                {p.title}
              </h3>
              <ul className="mt-7 md:mt-8">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-black/10 py-3.5 text-[15px] font-normal leading-[1.5] text-foreground/80 before:mt-[calc(0.75em-3px)] before:size-1.5 before:shrink-0 before:rounded-full before:bg-[#111] before:content-[''] md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10 md:pt-12">
                <p className={`border-t border-black/10 pt-7 ${figureClass}`}>
                  от{'\u00a0'}{p.price}
                  <span className="ml-2 text-base text-muted-foreground">/ месяц</span>
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {notes.map((n, i) => (
        <Reveal
          key={n.label}
          // Дополнительные услуги follow the cards directly; Брокеридж opens with the black rule.
          className={i === 0 ? 'mt-[72px] md:mt-20' : 'mt-20 border-t border-foreground pt-12 md:mt-24 md:pt-14'}
        >
          <SectionSubheading>{n.label}</SectionSubheading>
          <div className="mt-7 max-w-[860px]">
            <p className="text-pretty text-base leading-[1.6] text-muted-foreground md:text-lg">
              {n.text}
              {n.extra && (
                <>
                  <br />
                  {n.extra}
                </>
              )}
            </p>
            {n.fee && (
              <p className="mt-7 font-primary text-[22px] font-normal leading-[1.2] tracking-[-0.01em] text-[#161616] md:text-[24px]">
                {n.fee}
              </p>
            )}
          </div>
        </Reveal>
      ))}

      <BrokerageInfographics />
    </section>
  )
}
