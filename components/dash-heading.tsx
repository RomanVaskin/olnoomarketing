import type { ReactNode } from 'react'

/**
 * Large light section heading led by a short 2px black rule (Process page).
 * The rule is a ::before box centred on the first line: half of line-height 1.05 minus 1px.
 */
export function DashHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-start gap-5 font-primary text-[30px] font-light leading-[1.05] tracking-[-0.025em] text-[#111] before:mt-[calc(0.525em-1px)] before:h-[2px] before:w-8 before:shrink-0 before:bg-[#111] before:content-[''] md:gap-8 md:text-[length:clamp(40px,4vw,60px)] md:before:w-[50px] lg:gap-9">
      <span>{children}</span>
    </h2>
  )
}
