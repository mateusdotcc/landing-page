'use client'

import { CategoryProps, Navigation } from '@/app/components/landing/gallery/components/Navigation'
import { Card } from '@/app/components/landing/gallery/components/Card'
import { createContext, useContext, useState } from 'react'
import { agency } from '@/app/components/landing/gallery/config/agency'
import { chatbot } from '@/app/components/landing/gallery/config/chatbot'
import { mktDigital } from '@/app/components/landing/gallery/config/mktDigital'
import { leads } from '@/app/components/landing/gallery/config/leads'
import { media } from '@/app/components/landing/gallery/config/media'

const CategoryContext = createContext([{}, () => {}])

const width = '22.4rem'
const height = '18rem'

export function Gallery() {
  const [category, setCategory] = useState<CategoryProps>('agency')

  return (
    <section className={'flex min-h-[1268px] w-full justify-center'}>
      <div className={'w-full max-w-[1140px] pb-[92px] pt-[92px]'}>
        <CategoryContext.Provider value={[category, setCategory]}>
          <Navigation />

          {category === 'agency' && (
            <ul className={'grid w-full grid-cols-3 flex-wrap gap-[2rem]'}>
              {agency.map((item, i) => (
                <li className={`w-[${width}] h-[${height}]`} key={`${item.title}-${i}`}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          )}

          {category === 'chatbot' && (
            <ul className={'grid w-full grid-cols-3 flex-wrap justify-start gap-[2rem]'}>
              {chatbot.map((item, i) => (
                <li className={`w-[${width}] h-[${height}]`} key={`${item.title}-${i}`}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          )}

          {category === 'mkt-digital' && (
            <ul className={'grid w-full grid-cols-3 flex-wrap justify-start gap-[2rem]'}>
              {mktDigital.map((item, i) => (
                <li className={`w-[${width}] h-[${height}]`} key={`${item.title}-${i}`}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          )}

          {category === 'leads' && (
            <ul className={'grid w-full grid-cols-3 flex-wrap justify-start gap-[2rem]'}>
              {leads.map((item, i) => (
                <li className={`w-[${width}] h-[${height}]`} key={`${item.title}-${i}`}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          )}

          {category === 'media' && (
            <ul className={'grid w-full grid-cols-3 flex-wrap justify-start gap-[2rem]'}>
              {media.map((item, i) => (
                <li className={`w-[${width}] h-[${height}]`} key={`${item.title}-${i}`}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          )}
        </CategoryContext.Provider>
      </div>
    </section>
  )
}

export const useCategory = () => {
  const [category, setCategory] = useContext(CategoryContext)
  return { category, setCategory }
}
