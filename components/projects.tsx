import Image from 'next/image'
import { SectionLabel } from './section-label'

const projects = [
  {
    title: 'Коттеджный посёлок',
    text: 'Комплексное продвижение проекта и продаж участков.',
    img: '/project-settlement.png',
    alt: 'Генплан современного коттеджного посёлка с высоты',
  },
  {
    title: 'Загородный девелопмент',
    text: 'Позиционирование, digital-инфраструктура и привлечение покупателей.',
    img: '/project-development.png',
    alt: 'Современная малоэтажная жилая застройка',
  },
  {
    title: 'Продажа домов',
    text: 'Сайт, контент, SEO и реклама.',
    img: '/project-house.png',
    alt: 'Современный загородный дом в вечернем свете',
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionLabel index="06">Проекты</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Загородная недвижимость требует своего подхода
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col">
              <div className="overflow-hidden rounded-lg border border-border">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.alt}
                  width={800}
                  height={1000}
                  className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-96"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight md:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
