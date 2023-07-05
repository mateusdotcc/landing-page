import { ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
}

export function Section({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      style={{ opacity: isInView ? 1 : 0 }}
      className={`${className} w-full pl-[1.1rem] pr-[1.1rem] transition-opacity duration-[0.9s] ease-out md:p-0`}
    >
      {children}
    </section>
  )
}
