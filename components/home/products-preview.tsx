import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ImagePlaceholder } from '@/components/site/image-placeholder'
import { SectionHeading } from '@/components/site/section-heading'
import { products } from '@/lib/site-config'

export function ProductsPreview() {
  return (
    <section aria-labelledby="products-title" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="products-title"
            eyebrow="Products"
            title="核心产品"
            description="聚焦差别化功能纤维与坯布原料，为面料开发与成衣品牌提供稳定可靠的供应。"
          />
          <Link href="/products" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            查看全部产品
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-white transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {/* 产品图占位：替换为对应产品实拍图（建议 800×600） */}
                <ImagePlaceholder label={product.imageLabel} size="800×600" className="aspect-[4/3] w-full border-0 border-b" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                    了解详情
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
