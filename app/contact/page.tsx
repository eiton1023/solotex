import type { Metadata } from 'next'
import { PagePlaceholder } from '@/components/site/page-placeholder'

export const metadata: Metadata = { title: '联系我们', alternates: { canonical: '/contact' } }

export default function ContactPage() {
  return <PagePlaceholder title="联系我们" />
}
