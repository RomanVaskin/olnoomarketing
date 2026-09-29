import Link from 'next/link'

/** Black pill link shared by the centered home-page CTAs (Услуги, Кейсы). */
export const ctaButtonClass =
  'rounded-full bg-foreground px-6 py-3 text-sm font-normal tracking-ui text-background transition-opacity hover:opacity-90'

export function ServicesCta() {
  return (
    <div className="mx-auto flex max-w-[1400px] justify-center px-5 pt-16 md:px-10 md:pt-20">
      <Link href="/services" className={ctaButtonClass}>
        Услуги
      </Link>
    </div>
  )
}
