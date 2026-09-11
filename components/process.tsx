import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const steps = [
  { n: '01', title: 'Анализ', text: 'Изучаем проект, рынок, конкурентов, продукт и текущие продажи.' },
  { n: '02', title: 'Стратегия', text: 'Определяем аудиторию, позиционирование, каналы и точки роста.' },
  { n: '03', title: 'Запуск', text: 'Создаём необходимую digital-инфраструктуру и запускаем продвижение.' },
  { n: '04', title: 'Оптимизация', text: 'Смотрим реальные данные и усиливаем эффективные каналы.' },
  { n: '05', title: 'Масштабирование', text: 'Увеличиваем объём работающих источников привлечения.' },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel index="05">Процесс</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            От анализа проекта до масштабирования продаж
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} index={i}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border py-8 md:grid-cols-[80px_260px_1fr] md:gap-x-10 md:py-10">
                <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{s.title}</h3>
                <p className="col-span-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:col-span-1">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
