'use client'

import { useParallax } from '@/lib/use-parallax'

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.08, 18)

  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pt-28 md:px-10 md:pt-36">
      <div className="fade-up">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          AURE AGENCY / Real Estate Marketing
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <div ref={parallaxRef}>
          <video
            src="/hero-video.mp4"
            poster="/hero-video-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="AURE AGENCY — логотип на фактурной каменной стене"
            className="aspect-video w-full object-cover md:aspect-auto md:h-[64vh] md:scale-110"
          />
        </div>
      </div>

      <div className="fade-up">
        <h1 className="mt-6 max-w-4xl text-balance text-[length:min(calc((100vw_-_2.5rem)/13.2),4.375rem)] font-medium leading-[1.02] tracking-tight md:text-[length:min(calc((100vw_-_5rem)/13.2),4.375rem)]">
          Маркетинг
          <br />
          <span className="aure-gradient-text">загородной недвижимости</span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Помогаем девелоперам, коттеджным посёлкам и строительным компаниям привлекать
            покупателей и превращать маркетинг в продажи.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="/contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Обсудить проект
            </a>
            <a
              href="#services"
              className="rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Что мы делаем
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
