'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InView } from './in-view'

/** Order matches the photos; each opens its section on /services. */
const images = [
  {
    src: '/aure-agency-who-we-are-marketing.webp',
    caption: 'Уникальный Estate-CRM',
    href: '/services#digital-infrastructure',
    className: 'object-[70%_50%]',
  },
  {
    src: '/aure-services-02-branding.webp',
    caption: 'Брокеридж 2–7%',
    href: '/services#brokerage',
    className: 'object-center',
  },
  {
    src: '/aure-services-03-strategy.webp',
    caption: 'SEO / SMM / Digital',
    href: '/services#promotion',
    className: 'object-center',
  },
  {
    src: '/aure-services-04-sales.webp',
    caption: 'Комплексный маркетинг',
    href: '/services#complex-marketing',
    className: 'object-center',
  },
]

/** Any device without a real hover pointer (phones, iPad): first tap previews, second tap goes. */
function isTouch() {
  return !window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * The four-image gallery; vertical spacing comes from the parent ServicesShowcase.
 * Mobile: 2×2 squares. From 640px: one flex row whose height is fixed from the
 * container width (container query units), so a hovered card can grow wider
 * (accordion) without changing the row height. Photos rest dimmed; the active one
 * returns to full colour, zooms in and shows its caption.
 * Mouse: :hover (and :focus-visible) drive it and a click follows the link.
 * Touch: the first tap marks the card .is-active (colour, zoom, caption — no width
 * change), a second tap on it follows the link, a tap elsewhere closes it.
 * Motion lives in globals.css under .svc-gallery.
 */
export function ServicesPreview() {
  const [active, setActive] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  // close the open card on a tap anywhere outside the gallery
  useEffect(() => {
    if (active === null) return
    const close = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setActive(null)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [active])

  const onCardClick = (e: MouseEvent<HTMLAnchorElement>, i: number) => {
    if (active === i || !isTouch()) return
    e.preventDefault()
    setActive(i)
  }

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-[900px] [container-type:inline-size]">
      <InView
        threshold={0.2}
        className="svc-gallery grid grid-cols-2 gap-2 sm:flex sm:h-[calc((100cqw_-_3*var(--g))/4)] sm:gap-[var(--g)] [--g:10px] lg:[--g:14px]"
      >
        {images.map((img, i) => (
          <Link
            key={img.src}
            href={img.href}
            onClick={(e) => onCardClick(e, i)}
            style={{ '--i': i } as React.CSSProperties}
            className={`svc-item relative aspect-square overflow-hidden sm:aspect-auto sm:min-w-0 sm:flex-1 ${active === i ? 'is-active' : ''}`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
              className={`svc-img block object-cover ${img.className}`}
            />
            <span aria-hidden="true" className="svc-shade pointer-events-none absolute inset-0" />
            <span className="svc-caption pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center font-primary text-[15px] font-normal leading-[1.2] tracking-[0.01em] text-white md:text-[16px]">
              {img.caption}
            </span>
          </Link>
        ))}
      </InView>
    </div>
  )
}
