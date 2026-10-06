import { Reveal } from './reveal'

const directions = [
  'Стратегия и позиционирование',
  'Брендинг и упаковка проекта',
  'Сайт и digital-инфраструктура',
  'Продвижение и привлечение клиентов',
  'Контент и визуальные коммуникации',
  'Система продаж',
]

export function ServicesList() {
  return (
    <section id="services-list" className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-16">
      <ol className="border-t border-border">
        {directions.map((title, i) => (
          <li key={title}>
            <Reveal index={i}>
              <div className="grid grid-cols-[45px_1fr] items-center gap-x-3 border-b border-border py-[26px] md:grid-cols-[96px_1fr] md:gap-x-10 md:py-[34px] lg:grid-cols-[180px_1fr]">
                <span className="font-primary text-[13px] font-normal tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-primary text-[20px] font-light leading-[1.15] tracking-[-0.015em] text-[#161616] md:text-[length:clamp(22px,1.9vw,26px)]">
                  {title}
                </h2>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
