'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/lib/use-in-view'

const STAGGER_MS = 70
const MAX_STAGGER_MS = 420

export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode
  /** Position within a group of siblings, used for a small stagger delay. */
  index?: number
  className?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const delay = Math.min(index * STAGGER_MS, MAX_STAGGER_MS)

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className ?? ''}`}
      style={{ transitionDelay: inView ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
