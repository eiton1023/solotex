import Link from 'next/link'
import { SectionHeading } from '@/components/site/section-heading'

const principles = [
  { title: '务实', description: '以稳定品质和可靠交期为本，说到做到，不夸大承诺。' },
  { title: '专业', description: '懂原料、懂工艺、懂下游应用，用行业经验解决实际问题。' },
  { title: '长期', description: '重视每一次合作，与客户共同成长，建立长期稳定的伙伴关系。' },
]

export function TeamPhilosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-5/12">
            <SectionHeading id="philosophy-title" eyebrow="Our Philosophy" title="团队理念" />
            <blockquote className="mt-8 text-xl font-medium leading-relaxed text-primary md:text-2xl">
              {'“以专业做好原料，以服务赢得信任。”'}
            </blockquote>
            <p className="mt-6 leading-loose text-foreground/80">
              我们相信，好的面料从好的原料开始。梭络团队始终站在客户的生产与开发角度思考，提供不止于原料的综合配套服务。
            </p>
          </div>

          <ol className="flex flex-col divide-y divide-border border-y border-border lg:w-7/12">
            {principles.map((item, index) => (
              <li key={item.title} className="flex gap-6 py-6 md:py-8">
                <span className="text-sm font-medium tabular-nums text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-md bg-primary px-6 py-10 text-white md:flex-row md:items-center md:px-10">
          <div>
            <h3 className="text-xl font-semibold">需要原料报价或技术咨询？</h3>
            <p className="mt-2 text-sm text-white/75">欢迎联系我们，获取样品、色卡及定制方案。</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-md bg-white px-6 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            联系我们
          </Link>
        </div>
      </div>
    </section>
  )
}
