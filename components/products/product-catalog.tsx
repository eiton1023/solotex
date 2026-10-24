'use client'

import { useState } from 'react'
import { productCategories, products, type ProductCategoryId } from '@/lib/site-config'
import { ProductCard } from './product-card'

type Filter = 'all' | ProductCategoryId

const filters: { id: Filter; label: string }[] = [{ id: 'all', label: '全部产品' }, ...productCategories]

export function ProductCatalog() {
  const [active, setActive] = useState<Filter>('all')
  const visible = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <section aria-labelledby="catalog-title" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <h2 id="catalog-title" className="sr-only">
          产品列表
        </h2>

        <div role="group" aria-label="产品分类筛选" className="flex flex-wrap gap-2 border-b border-border pb-6">
          {filters.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(f.id)}
                className={`border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {`共 ${visible.length} 类产品`}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
