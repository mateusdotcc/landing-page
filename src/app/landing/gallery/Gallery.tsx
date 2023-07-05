'use client'

import { motion } from 'framer-motion'
import { CategoryProps, Navigation } from '@/app/landing/gallery/components/Navigation'
import { Card } from '@/components/UI/Card'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { agency } from '@/app/landing/gallery/config/agency'
import { chatbot } from '@/app/landing/gallery/config/chatbot'
import { mktDigital } from '@/app/landing/gallery/config/mktDigital'
import { leads } from '@/app/landing/gallery/config/leads'
import { media } from '@/app/landing/gallery/config/media'
import { Section } from '@/components/UI/Section'

type ContextProps = [{}, Dispatch<SetStateAction<CategoryProps>>]

const CategoryContext = createContext<ContextProps>([{}, () => null])

const variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const WIDTH = '22.4rem'
const HEIGHT = '18rem'

function List({ children }: { children: ReactNode }) {
  return (
    <motion.ul
      variants={variants}
      initial={'initial'}
      animate={'animate'}
      className={'grid w-full grid-cols-1 flex-wrap gap-[2rem] md:grid-cols-3'}
    >
      {children}
    </motion.ul>
  )
}

export function Gallery() {
  const [category, setCategory] = useState<CategoryProps>('agency')

  return (
    <Section
      className={
        'flex min-h-[1268px] w-full justify-center transition-opacity duration-[0.9s] ease-out'
      }
    >
      <div className={'w-full max-w-[1140px] pb-[2rem] pt-[2rem] md:pb-[92px] md:pt-[92px]'}>
        <CategoryContext.Provider value={[category, setCategory]}>
          <Navigation />

          {category === 'agency' && (
            <List>
              {agency.map((item, i) => (
                <motion.li
                  key={`${item.title}-${i}`}
                  variants={itemVariant}
                  className={`w-[${WIDTH}] h-[${HEIGHT}]`}
                >
                  <Card {...item} />
                </motion.li>
              ))}
            </List>
          )}

          {category === 'chatbot' && (
            <List>
              {chatbot.map((item, i) => (
                <motion.li
                  key={`${item.title}-${i}`}
                  variants={itemVariant}
                  className={`w-[${WIDTH}] h-[${HEIGHT}]`}
                >
                  <Card {...item} />
                </motion.li>
              ))}
            </List>
          )}

          {category === 'mkt-digital' && (
            <List>
              {mktDigital.map((item, i) => (
                <motion.li
                  key={`${item.title}-${i}`}
                  variants={itemVariant}
                  className={`w-[${WIDTH}] h-[${HEIGHT}]`}
                >
                  <Card {...item} />
                </motion.li>
              ))}
            </List>
          )}

          {category === 'leads' && (
            <List>
              {leads.map((item, i) => (
                <motion.li
                  key={`${item.title}-${i}`}
                  variants={itemVariant}
                  className={`w-[${WIDTH}] h-[${HEIGHT}]`}
                >
                  <Card {...item} />
                </motion.li>
              ))}
            </List>
          )}

          {category === 'media' && (
            <List>
              {media.map((item, i) => (
                <motion.li
                  key={`${item.title}-${i}`}
                  variants={itemVariant}
                  className={`w-[${WIDTH}] h-[${HEIGHT}]`}
                >
                  <Card {...item} />
                </motion.li>
              ))}
            </List>
          )}
        </CategoryContext.Provider>
      </div>
    </Section>
  )
}

export const useCategory = () => {
  const [category, setCategory] = useContext(CategoryContext)
  return { category, setCategory }
}
