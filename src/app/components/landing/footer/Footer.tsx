import { Header } from '@/app/components/landing/footer/components/Header'
import { Navigation } from '@/app/components/landing/footer/components/Navigation'
import { Copyright } from '@/app/components/landing/footer/components/Copyright'

export function Footer() {
  return (
    <footer className={'flex w-full flex-col items-center justify-center pt-[5rem]'}>
      <div className={'w-[1168px]'}>
        <Header />
        <Navigation />
      </div>
      <Copyright />
    </footer>
  )
}
