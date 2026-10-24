import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ProductCatalog } from '@/components/products/product-catalog'
import { ConsultingCta } from '@/components/products/consulting-cta'

const description =
  '南通梭络纺织产品中心：PTT纤维/纱线、Solotex索罗泰克斯纱线、远红外功能性纤维及定制坯布原料供应，适用于内衣、袜品、运动及针织面料。'

export const metadata: Metadata = {
  title: '产品中心',
  description,
  alternates: { canonical: '/products' },
  openGraph: { title: '产品中心 | 梭络纺织', description },
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        id="products-hero-title"
        eyebrow="Products"
        title="产品中心"
        subtitle="PTT、Solotex及各类功能性差别化纤维、纱线、坯布原料供应"
        breadcrumb="产品中心"
      />
      <ProductCatalog />
      <ConsultingCta />
    </>
  )
}
