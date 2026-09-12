import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Контакты — OLNOO',
  description:
    'Расскажите о вашем проекте загородной недвижимости — предложим короткий путь к росту продаж.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
