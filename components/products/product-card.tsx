import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { productCategories, type Product } from '@/lib/site-config'

export function ProductCard({ product }: { product: Product }) {
  const categoryLabel = productCategories.find((c) => c.id === product.category)?.label

  return (
    <article className="flex h-full flex-col border border-border bg-background p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8">
      <p className="text-xs font-medium tracking-wider text-primary/70">{categoryLabel}</p>
      <h3 className="mt-2 text-xl font-semibold text-primary">{product.fullName}</h3>

      <dl className="mt-6 flex flex-1 flex-col gap-5 text-sm">
        <div>
          <dt className="font-medium text-foreground">产品特性</dt>
          <dd className="mt-2 leading-relaxed text-muted-foreground">{product.features.join('、')}</dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">适用方向</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-2" aria-label="适用方向">
              {product.applications.map((item) => (
                <li key={item} className="bg-secondary px-2.5 py-1 text-xs text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <Link
        href={`/products/${product.slug}`}
        className="mt-8 inline-flex w-fit items-center gap-2 border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        查看详情
        <span className="sr-only">{`：${product.fullName}`}</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  )
}
