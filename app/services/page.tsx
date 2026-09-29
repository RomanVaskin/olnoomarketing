import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SectionLabel } from '@/components/section-label'
import { ServicesList } from '@/components/services-list'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Услуги — AURE AGENCY | Маркетинг загородной недвижимости',
  description:
    'Маркетинг, упаковка, продвижение и система продаж проектов загородной недвижимости.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <SectionLabel>Услуги</SectionLabel>
            <h1 className="mt-6 font-mono text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
              Маркетинг и продажи
              <br />
              загородной недвижимости
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Создаём комплексную систему продвижения проектов загородной недвижимости — от
              позиционирования и упаковки до привлечения клиентов и сопровождения продаж.
            </p>
          </div>
        </section>

        <ServicesList />
      </main>
      <SiteFooter />
    </>
  )
}
