'use client'

import { useParallax } from '@/lib/use-parallax'

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.08, 18)

  return (
    <section id="top" className="pt-16">
      <div className="relative aspect-video w-full overflow-hidden md:aspect-auto md:h-[min(56.25vw,70vh)] lg:h-[min(clamp(650px,75vh,900px),56vw)]">
        <div className="fade-up absolute inset-x-0 top-[clamp(20px,3.3vw,48px)] z-[2] mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="font-mono min-[360px]:whitespace-nowrap text-[12px] font-medium uppercase leading-none tracking-[0.14em] text-[rgba(55,55,55,0.82)] md:text-[13px] md:tracking-[0.22em] lg:text-[15px]">
            AURE AGENCY / Real Estate Marketing
          </p>
        </div>

        <div ref={parallaxRef} className="h-full">
          <video
            src="/hero-video.mp4"
            poster="/hero-video-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="AURE AGENCY — логотип на фактурной каменной стене"
            className="block h-full w-full max-w-none object-cover md:origin-[35%_50%] md:scale-[1.085] lg:scale-[1.065]"
          />
        </div>

        <div className="fade-up absolute inset-x-0 bottom-5 z-[3] mx-auto max-w-[1400px] px-5 md:bottom-[clamp(32px,5vh,64px)] md:px-10 lg:bottom-[clamp(45px,7vh,90px)]">
          <h1 className="font-mono text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.25] tracking-[0.04em] text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] md:tracking-[0.08em] lg:text-[length:clamp(34px,3.2vw,52px)] lg:tracking-[0.1em]">
            Маркетинг и продажи
            <br />
            загородной недвижимости
          </h1>
        </div>
      </div>

      <div className="fade-up mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="mt-[1lh] max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
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
