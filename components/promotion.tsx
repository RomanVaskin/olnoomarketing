import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const services = [
  {
    title: 'SEO',
    text: 'Поисковая структура, посадочные страницы, контент и системное развитие органического трафика.',
  },
  {
    title: 'Реклама',
    text: 'Яндекс Директ, ретаргетинг и работа с целевой аудиторией.',
  },
  {
    title: 'Контент',
    text: 'Фото, видео, статьи, социальные сети и материалы, которые помогают покупателю принять решение.',
  },
]

export function Promotion() {
  return (
    <section id="promotion" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Продвижение</SectionLabel>
          <h2 className="mt-6 max-w-5xl font-mono text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
            Трафик, который приводит к сделке
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-border sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} index={i}>
              <div className="group border-b border-r border-border bg-background p-8 transition-colors hover:bg-secondary md:p-10">
                <h3 className="text-xl font-mono font-light leading-snug tracking-[0.04em] text-[#161616] md:text-[1.35rem]">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
