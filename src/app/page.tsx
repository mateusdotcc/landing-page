import { Hero } from '@/app/landing/Hero'
import { Heading } from '@/app/landing/Heading'
import { Leads } from '@/app/landing/Leads'
import { Gallery } from '@/app/landing/gallery/Gallery'
import { Footer } from '@/components/footer/Footer'

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
