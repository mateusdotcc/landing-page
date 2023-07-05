'use client'

import { Header } from '@/components/footer/components/Header'
import { Navigation } from '@/components/footer/components/Navigation'
import { Copyright } from '@/components/footer/components/Copyright'
import { Section } from '@/components/UI/Section'

export function Footer() {
  return (
    <Section>
      <footer
        className={
          'flex w-full flex-col items-center justify-center pt-[2rem] transition-opacity duration-[0.9s] ease-out md:pt-[5rem]'
        }
      >
        <div className={'w-full max-w-[1168px]'}>
          <Header />
          <Navigation />
        </div>
        <Copyright />
      </footer>
    </Section>
  )
}
