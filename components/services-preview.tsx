import Image from 'next/image'
import Link from 'next/link'
import { InView } from './in-view'

/** No per-direction anchors exist on /services yet, so every image opens the page itself. */
const SERVICES_HREF = '/services'

const images = [
  {
    src: '/aure-agency-who-we-are-marketing.webp',
    alt: 'Аналитика: рабочий стол с ноутбуком и флипчарт с графиками',
    className: 'object-[70%_50%]',
  },
  {
    src: '/aure-services-02-branding.webp',
    alt: 'Брендинг и упаковка: буклеты проекта и образцы материалов',
    className: 'object-center',
  },
  {
    src: '/aure-services-03-strategy.webp',
    alt: 'Стратегия продвижения: флипчарт со схемами и графиками',
    className: 'object-center',
  },
  {
    src: '/aure-services-04-sales.webp',
    alt: 'Продажи: переговорная с видом на озеро и материалами проекта',
    className: 'object-center',
  },
]

/**
 * The four-image gallery; vertical spacing comes from the parent ServicesShowcase.
 * Mobile: 2×2 squares. From 640px: one flex row whose height is fixed from the
 * container width (container query units), so on hover devices a card can grow
 * wider (accordion) without changing the row height. Motion lives in globals.css
 * under .svc-gallery.
 */
export function ServicesPreview() {
  return (
    <div className="mx-auto w-full max-w-[900px] [container-type:inline-size]">
      <InView
        threshold={0.2}
        className="svc-gallery grid grid-cols-2 gap-2 sm:flex sm:h-[calc((100cqw_-_3*var(--g))/4)] sm:gap-[var(--g)] [--g:10px] lg:[--g:14px]"
      >
        {images.map((img, i) => (
          <Link
            key={img.src}
            href={SERVICES_HREF}
            aria-label={img.alt}
            style={{ '--i': i } as React.CSSProperties}
            className="svc-item relative aspect-square overflow-hidden sm:aspect-auto sm:min-w-0 sm:flex-1"
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
              className={`svc-img block object-cover ${img.className}`}
            />
          </Link>
        ))}
      </InView>
    </div>
  )
}
