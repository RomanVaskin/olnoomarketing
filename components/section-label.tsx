export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
