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
      src="/olnoo-logo.png"
      alt="OLNOO"
      width={height * 6.7}
      height={height}
      priority
      className={className}
      style={{ height, width: 'auto' }}
    />
  )
}
