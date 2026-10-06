import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { PageEyebrow } from '@/components/page-eyebrow'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { SiteFooter } from '@/components/site-footer'
import { ctaButtonClass } from '@/components/services-cta'

export const metadata: Metadata = {
  title: 'Процесс — AURE AGENCY',
  description:
    'Как мы выстраиваем продвижение загородной недвижимости — от анализа проекта до масштабирования продаж и измеримого результата.',
}

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <PageEyebrow title="Процесс" />
            <h1 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Как устроен процесс продвижения
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Единый процесс, который мы проходим с каждым проектом — от анализа до измеримого
              результата.
            </p>
          </div>
        </section>

        <Process />
        <Results />

        <div className="mx-auto flex max-w-[1400px] justify-center px-5 pb-20 md:px-10 md:pb-24">
          <Link href="/contact" className={ctaButtonClass}>
            Обсудить проект
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
