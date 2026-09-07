import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Logo height={22} />
            <p className="mt-6 text-sm text-muted-foreground">Маркетинг загородной недвижимости</p>
            <p className="mt-1 font-mono text-sm text-foreground">marketing.olnoo.com</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 md:justify-end md:text-right">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Услуги
            </a>
            <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Проекты
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Контакты
            </a>
            <a
              href="https://olnoo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              olnoo.com
            </a>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 OLNOO</span>
          <span>Real Estate Marketing</span>
        </div>
      </div>
    </footer>
  )
}
