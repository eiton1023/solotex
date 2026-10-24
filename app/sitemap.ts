import type { MetadataRoute } from 'next'
import { company, navLinks, products } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navLinks.map((l) => l.href)
  const productPages = products.map((p) => `/products/${p.slug}`)
  return [...pages, ...productPages].map((path) => ({
    url: `${company.siteUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
  }))
}
