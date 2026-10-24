import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PagePlaceholder } from '@/components/site/page-placeholder'
import { products } from '@/lib/site-config'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return <PagePlaceholder title={product.name} description={`${product.summary}（详情页建设中）`} />
}
