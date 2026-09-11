import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Digital } from '@/components/digital'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Система — OLNOO',
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
              OLNOO / Система
            </p>
            <h1 className="mt-6 max-w-4xl text-balance text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Система управления <span className="olnoo-gradient-text">маркетингом и продажами</span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Единая цифровая среда для работы с рекламой, лидами, клиентами и продажами загородной
              недвижимости.
            </p>
          </div>
        </section>

        <Digital />
      </main>
      <SiteFooter />
    </>
  )
}
