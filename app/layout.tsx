import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { company } from '@/lib/site-config'
import './globals.css'

const description =
  '南通梭络纺织品贸易有限公司专注SOLOTEX纤维，供应PTT纤维、Solotex纱线、远红外功能纱线及坯布原料。源头原料，稳定交期，支持打样试样。'

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | SOLOTEX纤维 · Solotex纱线 · 坯布原料供应`,
    template: `%s | ${company.name}`,
  },
  description,
  keywords: ['南通梭络', 'PTT纤维', 'Solotex纱线', '远红外纱线', '差别化纤维', '功能纱线', '坯布', '纺织原料', '南通纺织'],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: company.name,
    title: company.name,
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#0F3460',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  alternateName: company.englishName,
  url: company.siteUrl,
  email: company.email,
  telephone: company.phone,
  address: { '@type': 'PostalAddress', addressLocality: '南通', addressRegion: '江苏', addressCountry: 'CN' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
