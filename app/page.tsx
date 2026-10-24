import { Hero } from '@/components/home/hero'
import { Advantages } from '@/components/home/advantages'
import { ProductsPreview } from '@/components/home/products-preview'
import { AboutSummary } from '@/components/home/about-summary'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <ProductsPreview />
      <AboutSummary />
    </>
  )
}
