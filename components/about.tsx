import Image from 'next/image'
import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

// Replace with the final photo once it is ready (file in /public).
const ABOUT_IMAGE_SRC = '/about-placeholder.jpg'
const ABOUT_IMAGE_ALT =
  'Рабочее пространство отдела маркетинга: стол с ноутбуком, архитектурными планами и флипчартом со схемами'

export function About() {
  return (
    <section id="about" className="mx-auto mt-20 max-w-[1400px] px-5 md:mt-28 md:px-10">
      <div className="grid gap-12 border-y border-border py-16 md:grid-cols-[48fr_52fr] md:items-center md:gap-10 md:py-24 lg:gap-16">
        <Reveal>
          <SectionLabel>Кто мы</SectionLabel>
          <h2 className="mt-6 font-mono text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:clamp(22px,2.9vw,30px)] md:tracking-[0.08em] lg:text-[length:clamp(30px,3vw,44px)] lg:tracking-[0.1em]">
            Маркетинг, который
            <br />
            приводит к продаже
          </h2>
          <div className="mt-8 max-w-[34rem] space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
            <p>
              AURE AGENCY — маркетинговое агентство в сфере загородной недвижимости. Мы создаём
              позиционирование, упаковку и систему продвижения проектов — от идеи и визуальной
              концепции до привлечения клиентов и сопровождения продаж.
            </p>
            <p>
              Наша задача — превратить недвижимость в понятный и привлекательный продукт, который
              выделяется на рынке и продаётся.
            </p>
          </div>
        </Reveal>

        <Reveal index={1} className="h-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-[430px] lg:min-h-[500px]">
            <Image
              src={ABOUT_IMAGE_SRC}
              alt={ABOUT_IMAGE_ALT}
              fill
              sizes="(min-width: 768px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
