import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Проекты — OLNOO',
  description:
    'Примеры продвижения коттеджных посёлков, загородного девелопмента и продажи домов.',
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              OLNOO / Проекты
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Проекты, которым мы <span className="olnoo-gradient-text">помогли расти</span>
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
