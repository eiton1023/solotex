import { FileCheck2, Palette, PackageCheck, Wrench, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

type Strength = {
  icon: LucideIcon
  title: string
  description: string
}

const strengths: Strength[] = [
  {
    icon: PackageCheck,
    title: '原料稳定供应',
    description: '长期对接源头纤维与纱线工厂，常规规格备有库存，保障批次一致与交期稳定。',
  },
  {
    icon: Wrench,
    title: '纺织工艺技术支持',
    description: '结合染整与生产经验，协助客户进行纱线选型、织造及染色工艺参数评估。',
  },
  {
    icon: Palette,
    title: '色卡 & Pantone TCX配套服务',
    description: '提供色卡、Pantone TCX色号对照与打色配套，减少来回确认，提升对色效率。',
  },
  {
    icon: FileCheck2,
    title: '外贸商标合规咨询',
    description: '针对出口业务，提供商标注册与品牌合规方面的咨询建议，降低外贸风险。',
  },
]

export function CoreStrengths() {
  return (
    <section aria-labelledby="strengths-title" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading id="strengths-title" eyebrow="Core Strengths" title="核心优势" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {strengths.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col rounded-md border border-border bg-white p-6 md:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary text-pretty">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
