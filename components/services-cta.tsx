import Link from 'next/link'

export function ServicesCta() {
  return (
    <div className="mx-auto flex max-w-[1400px] justify-center px-5 pt-16 md:px-10 md:pt-20">
      <Link
        href="/services"
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Услуги
      </Link>
    </div>
  )
}
