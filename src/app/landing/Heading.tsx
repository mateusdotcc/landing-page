'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Heading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[5rem] w-full items-center justify-center md:h-[8rem]"
    >
      <Link href={'/'} className={'transition-opacity ease-out hover:opacity-80'}>
        <Image src={'/logo.png'} alt={'Leadster Logo'} width={194} height={42} quality={100} />
      </Link>
    </motion.div>
  )
}
