'use client'

import Image from 'next/image'
import { useParallax } from '@/lib/use-parallax'

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.08, 18)

  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pt-28 md:px-10 md:pt-36">
      <div className="fade-up">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          OLNOO / Real Estate Marketing
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Маркетинг
          <br />
          <span className="olnoo-gradient-text">загородной недвижимости</span>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Помогаем девелоперам, коттеджным посёлкам и строительным компаниям привлекать
            покупателей и превращать маркетинг в продажи.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <a
              href="#contact"
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

      <div className="mt-12 overflow-hidden rounded-lg border border-border md:mt-16">
        <div ref={parallaxRef}>
          <Image
            src="/hero-suburban.png"
            alt="Аэрофотосъёмка современного коттеджного посёлка среди леса и озера"
            width={1600}
            height={900}
            priority
            className="h-[46vh] w-full scale-110 object-cover md:h-[64vh]"
          />
        </div>
      </div>
    </section>
  )
}
