import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Digital } from '@/components/digital'
import { Promotion } from '@/components/promotion'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Система — AURE AGENCY',
  description:
    'Единая цифровая среда для работы с рекламой, лидами, клиентами и продажами загородной недвижимости.',
}

export default function SystemPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              AURE AGENCY / Система
            </p>
            <h1 className="mt-6 max-w-5xl font-mono text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
              Система управления маркетингом и продажами
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Единая цифровая среда для работы с рекламой, лидами, клиентами и продажами загородной
              недвижимости.
            </p>
          </div>
        </section>

        <Digital />
        <Promotion />
      </main>
      <SiteFooter />
    </>
  )
}
