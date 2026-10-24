import type { Metadata } from 'next'
import { PagePlaceholder } from '@/components/site/page-placeholder'

export const metadata: Metadata = { title: '应用案例', alternates: { canonical: '/cases' } }

export default function CasesPage() {
  return <PagePlaceholder title="应用案例" />
}
