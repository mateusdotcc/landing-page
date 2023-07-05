'use client'

import { Header } from '@/app/components/landing/footer/components/Header'
import { Navigation } from '@/app/components/landing/footer/components/Navigation'
import { Copyright } from '@/app/components/landing/footer/components/Copyright'
import { Section } from '@/app/components/UI/Section'

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
