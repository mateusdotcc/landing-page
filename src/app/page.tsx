import { Hero } from '@/app/components/Hero'
import { Heading } from '@/app/components/Heading'
import { Leads } from '@/app/components/Leads'
import { Gallery } from '@/app/components/Gallery'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Heading />
      <Hero />
      <Gallery />
      <Leads />
    </main>
  )
}
