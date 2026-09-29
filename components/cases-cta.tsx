import Link from 'next/link'
import { ctaButtonClass } from './services-cta'

export function CasesCta() {
  return (
    // Spacing above/below is trimmed by half the button's extra height each, so
    // the button stays centered in its slot and the sections below don't move.
    <div className="mx-auto max-w-[1400px] px-5 pt-[45px] md:px-10 md:pt-[43px] lg:pt-[42px]">
      <div className="flex justify-center border-b border-border pb-[77px] md:pb-[75px] lg:pb-[74px]">
        <Link href="/projects" className={ctaButtonClass}>
          Кейсы
        </Link>
      </div>
    </div>
  )
}
