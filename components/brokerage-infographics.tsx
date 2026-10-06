import Image from 'next/image'
import { Reveal } from './reveal'

/**
 * Three equal slots under «Брокеридж». A slot with `src: null` renders a quiet
 * placeholder of the exact same size; to publish a layout, drop the file into
 * public/images/services/ and set its `src` — the grid and CSS stay as they are.
 */
const infographics: { label: string; src: string | null; alt: string }[] = [
  {
    label: '01',
    src: '/images/services/brokerage-infographic-01.webp',
    alt: '2–7% от сделки',
  },
  {
    label: '02',
    src: '/images/services/brokerage-infographic-02.webp',
    alt: 'Сроки: 2–4 месяца — средний цикл сделки',
  },
  {
    label: '03',
    src: null, // '/images/services/brokerage-infographic-03.webp'
    alt: 'Инфографика 03 — брокеридж загородной недвижимости',
  },
]

/**
 * One square ratio for every slot, so all three share top and bottom lines.
 * The layouts are full-bleed marble with centred text, so cover only trims
 * marble at the edges (01 is 4:5 and loses ~10% top and bottom), never the text.
 */
const SLOT_ASPECT = 'aspect-square'

export function BrokerageInfographics() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {infographics.map((item, i) => (
        <Reveal key={item.label} index={i}>
          <div className={`relative w-full overflow-hidden rounded-[18px] ${SLOT_ASPECT}`}>
            {item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#F3F3F1]">
                <span className="font-primary text-[13px] font-normal tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
