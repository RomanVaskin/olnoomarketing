import Image from 'next/image'

export function Logo({
  className = '',
  height = 22,
}: {
  className?: string
  height?: number
}) {
  return (
    <Image
      src="/aure-logo.svg"
      alt="AURE AGENCY"
      width={height * 9.73}
      height={height}
      priority
      className={className}
      style={{ height, width: 'auto' }}
    />
  )
}
