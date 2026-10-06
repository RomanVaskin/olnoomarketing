import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SectionLabel } from '@/components/section-label'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Проекты — AURE AGENCY',
  description:
    'Примеры продвижения коттеджных посёлков, загородного девелопмента и продажи домов.',
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <SectionLabel>AURE AGENCY / Проекты</SectionLabel>
            <h1 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Проекты, которым мы помогли расти
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Коттеджные посёлки, загородный девелопмент и продажа домов — примеры комплексного
              продвижения.
            </p>
          </div>
        </section>

        <Projects />
      </main>
      <SiteFooter />
    </>
  )
}
