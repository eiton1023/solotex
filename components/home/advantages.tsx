import { Award, FlaskConical, Layers, PackageCheck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

type Advantage = {
  icon: LucideIcon
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: PackageCheck,
    title: '稳定原料供应',
    description: '对接源头工厂，库存充足，保障批次一致与交期稳定。',
  },
  {
    icon: FlaskConical,
    title: '支持打样试样',
    description: '小批量快速打样，先试后定，降低客户开发风险。',
  },
  {
    icon: Layers,
    title: '定制化功能纱线',
    description: '可按规格、功能、色号需求定制差别化纱线方案。',
  },
  {
    icon: Award,
    title: '多年纺织行业经验',
    description: '深耕纺织原料领域，熟悉面料开发与下游应用需求。',
  },
]

export function Advantages() {
  return (
    <section aria-labelledby="advantages-title" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading id="advantages-title" eyebrow="Our Strengths" title="企业优势" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {advantages.map(({ icon: Icon, title, description }) => (
            <li key={title} className="rounded-md border border-border bg-secondary p-6 md:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
