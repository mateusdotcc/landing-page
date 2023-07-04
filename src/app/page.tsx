import { Hero } from '@/app/components/landing/Hero'
import { Heading } from '@/app/components/landing/Heading'
import { Leads } from '@/app/components/landing/Leads'
import { Gallery } from '@/app/components/landing/gallery/Gallery'
import { Footer } from '@/app/components/landing/footer/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Heading />
      <Hero />
      <Gallery />
      <Leads />
      <Footer />
    </main>
  )
}
