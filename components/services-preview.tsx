import Image from 'next/image'
import { Reveal } from './reveal'

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

/** The four-image grid; vertical spacing comes from the parent ServicesShowcase. */
export function ServicesPreview() {
  return (
    <Reveal className="w-full">
      <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5 lg:gap-3.5">
        {images.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 215px, (min-width: 640px) 25vw, 50vw"
              className={`block object-cover ${img.className}`}
            />
          </div>
        ))}
      </div>
    </Reveal>
  )
}
