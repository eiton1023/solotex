import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ServiceList } from '@/components/consulting/service-list'
import { InquiryForm } from '@/components/consulting/inquiry-form'

const description =
  '南通梭络纺织提供纤维纱线技术参数答疑、Pantone TCX色号对色与色卡寄送、面料袜品工艺方案、海外商标注册风险咨询及样品小批量试单询价。'

export const metadata: Metadata = {
  title: '技术咨询 & 样品询价',
  description,
  alternates: { canonical: '/consulting' },
  openGraph: { title: '技术咨询 & 样品询价｜梭络纺织', description },
}

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        id="consulting-hero-title"
        eyebrow="Consulting & Inquiry"
        breadcrumb="技术咨询"
        title="技术咨询 & 样品询价"
        subtitle="原料打样、Pantone色号、工艺方案、商标合规咨询"
      />
      <section aria-labelledby="services-title" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ServiceList />
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
