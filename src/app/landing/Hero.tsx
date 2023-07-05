'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
}

export function Hero() {
  return (
    <header
      className={
        'flex w-full flex-col items-center justify-center bg-blueLight pb-[60px] pt-[60px] md:pb-[173px] md:pt-[157px]'
      }
    >
      <motion.div
        variants={variants}
        initial={'initial'}
        animate={'animate'}
        className={'flex w-full max-w-[724px] flex-col text-center'}
      >
        <motion.div
          variants={item}
          className={`mb-[1.4rem] flex items-center justify-center self-center rounded-br-full rounded-tl-full rounded-tr-full border-2 border-blue pb-1.5 pl-5 pr-5 pt-1.5`}
        >
          <span className="text-sm font-bold uppercase text-blue">Webinars Exclusivos</span>
        </motion.div>

        <motion.h2 variants={item} className={'mb-2 text-[1.6rem] text-gray md:text-5xl'}>
          Menos Conversinha,
        </motion.h2>

        <motion.h1
          variants={item}
          className={
            'mb-[30px] text-[2.4rem] leading-6 tracking-[0.05rem] text-blue md:text-[5.4rem] md:leading-[86px]'
          }
        >
          <strong className={'relative'}>
            Mais Conversão
            <div className={'absolute right-[-26px] top-[-12px] md:right-[-20px] md:top-[15px]'}>
              <Image
                src={'/asset-header.png'}
                width={49}
                height={32}
                alt={'Apenas um efeito sobre o texto Conversão'}
              />
            </div>
          </strong>
        </motion.h1>

        <motion.div variants={item} className="mb-3.5 h-px w-full bg-grayLight" />

        <motion.h5 variants={item} className={'text-gray md:text-lg'}>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio
        </motion.h5>
      </motion.div>
    </header>
  )
}
