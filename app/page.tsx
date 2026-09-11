import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Audience } from '@/components/audience'
import { Services } from '@/components/services'
import { MarketingSystem } from '@/components/system'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { Projects } from '@/components/projects'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Audience />
        <Services />
        <MarketingSystem />
        <Process />
        <Results />
        <Projects />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
