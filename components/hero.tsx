'use client'

import { useEffect, useState } from 'react'
import { useParallax } from '@/lib/use-parallax'

/** Phones get a 4:5 portrait cut of the hero film; md+ keeps the 16:9 original. */
const MOBILE_QUERY = '(max-width: 767px)'

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.08, 18)
  // the <source media> list picks the film; the poster has no media query, so swap it here
  const [poster, setPoster] = useState('/hero-video-poster.jpg')
  useEffect(() => {
    if (window.matchMedia(MOBILE_QUERY).matches) setPoster('/hero-video-vertical-poster.jpg')
  }, [])

  return (
    <section id="top" className="pt-16">
      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-[min(56.25vw,70vh)] lg:h-[min(clamp(650px,75vh,900px),56vw)]">
        <div className="fade-up absolute inset-x-0 top-[clamp(20px,3.3vw,48px)] z-[2] mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="font-primary min-[360px]:whitespace-nowrap text-[12px] font-normal uppercase leading-none tracking-[0.18em] text-[rgba(55,55,55,0.82)] md:text-[13px] md:tracking-label lg:text-[15px]">
            AURE AGENCY / Real Estate Marketing
          </p>
        </div>

        <div ref={parallaxRef} className="h-full">
          {/* hero-video-vertical.mp4 is the same film recomposed to 4:5: the full-width
              logo stays whole and the stone wall is extended above and below it */}
          <video
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="AURE AGENCY — логотип на фактурной каменной стене"
            className="block h-full w-full max-w-none object-cover md:origin-[35%_50%] md:scale-[1.085] lg:scale-[1.065]"
          >
            <source src="/hero-video-vertical.mp4" type="video/mp4" media={MOBILE_QUERY} />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fade-up absolute inset-x-0 bottom-5 z-[3] mx-auto max-w-[1400px] px-5 md:bottom-[clamp(32px,5vh,64px)] md:px-10 lg:bottom-[clamp(45px,7vh,90px)]">
          {/* Tracking stays per breakpoint in --hero-ls; the gaps between words are
              tightened by --hero-ws and each line gets back exactly that width as
              letter-spacing (2 spaces over 19 glyphs, 1 over 23), so both lines keep
              their original length. See .hero-line-1/2 in globals.css. */}
          <h1 className="font-mono text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] text-[#161616] [--hero-ls:0.04em] [--hero-ws:-0.25em] [word-spacing:var(--hero-ws)] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:[--hero-ls:0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:[--hero-ls:0.1em]">
            <span className="hero-line-1">Маркетинг и продажи</span>
            <br />
            <span className="hero-line-2">загородной недвижимости</span>
          </h1>
        </div>
      </div>

      <div className="fade-up mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="mt-[1lh] max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Помогаем девелоперам поселков, строительным компаниям и агентствам недвижимости
            продавать дома быстрее и дороже.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="/contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-normal tracking-ui text-background transition-opacity hover:opacity-90"
            >
              Обсудить проект
            </a>
            <a
              href="#services"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-normal tracking-ui transition-colors hover:bg-secondary"
            >
              Что мы делаем
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
