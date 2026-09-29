import Link from 'next/link'
import { ctaButtonClass } from './services-cta'

export function CasesCta() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pt-12 md:px-10">
      <div className="flex justify-center border-b border-border pb-20">
        <Link href="/projects" className={ctaButtonClass}>
          Кейсы
        </Link>
      </div>
    </div>
  )
}
