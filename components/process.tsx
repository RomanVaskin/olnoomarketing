import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const steps = [
  { title: 'Анализ', text: 'Изучаем проект, рынок, конкурентов, продукт и текущие продажи.' },
  { title: 'Стратегия', text: 'Определяем аудиторию, позиционирование, каналы и точки роста.' },
  { title: 'Запуск', text: 'Создаём необходимую digital-инфраструктуру и запускаем продвижение.' },
  { title: 'Оптимизация', text: 'Смотрим реальные данные и усиливаем эффективные каналы.' },
  { title: 'Масштабирование', text: 'Увеличиваем объём работающих источников привлечения.' },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Процесс</SectionLabel>
          <h2 className="mt-6 max-w-5xl font-mono text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
            От анализа проекта до масштабирования продаж
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {steps.map((s, i) => (
            <Reveal key={s.title} index={i}>
              <div className="grid grid-cols-1 gap-y-2 border-b border-border py-8 md:grid-cols-[260px_1fr] md:gap-x-10 md:py-10">
                <h3 className="text-xl font-mono font-light leading-snug tracking-[0.04em] text-[#161616] md:text-2xl">{s.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
