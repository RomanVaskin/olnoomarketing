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
    <section id="services-list" className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
      <ol className="border-t border-border">
        {directions.map((title, i) => (
          <li key={title}>
            <Reveal index={i}>
              <div className="grid grid-cols-[48px_1fr] items-baseline gap-x-4 border-b border-border py-8 md:grid-cols-[120px_1fr] md:gap-x-10 lg:grid-cols-[260px_1fr] md:py-10">
                <span className="font-primary text-[13px] tracking-label text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-primary text-xl font-light leading-[1.25] tracking-subheading text-[#161616] md:text-2xl lg:text-[28px]">
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
