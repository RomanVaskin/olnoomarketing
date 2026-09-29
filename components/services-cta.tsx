import Link from 'next/link'

/**
 * Black pill link shared by the centered home-page CTAs (Услуги, Кейсы, Контакты).
 * Fixed height + min-width keep all three the same size regardless of the word:
 * 160×50 mobile, 170×54 tablet, 180×56 desktop.
 */
export const ctaButtonClass =
  'inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-full bg-foreground px-9 text-[15px] font-normal leading-none tracking-ui text-background transition-opacity hover:opacity-90 md:h-[54px] md:min-w-[170px] md:px-10 md:text-base lg:h-14 lg:min-w-[180px]'

export function ServicesCta() {
  return (
    // Top padding is reduced by the button's extra height (vs. the former 44px)
    // so the gallery below keeps its position.
    <div className="mx-auto flex max-w-[1400px] justify-center px-5 pt-[58px] md:px-10 md:pt-[70px] lg:pt-[68px]">
      <Link href="/services" className={ctaButtonClass}>
        Услуги
      </Link>
    </div>
  )
}
