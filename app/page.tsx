import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ServicesCta } from '@/components/services-cta'
import { ServicesPreview } from '@/components/services-preview'
import { Audience } from '@/components/audience'
import { Services } from '@/components/services'
import { MarketingSystem } from '@/components/system'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ServicesCta />
        <ServicesPreview />
        <Audience />
        <Services />
        <MarketingSystem />
      </main>
      <SiteFooter />
    </>
  )
}
