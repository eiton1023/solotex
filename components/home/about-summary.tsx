import Link from 'next/link'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'
import { company } from '@/lib/site-config'

export function AboutSummary() {
  const contacts = [
    { icon: Phone, label: '联系电话', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: '电子邮箱', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: '公司地址', value: company.address },
    { icon: Clock, label: '工作时间', value: company.businessHours },
  ]

  return (
    <section aria-labelledby="about-title" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About Us" title="关于梭络" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              {`${company.name}位于中国纺织重镇江苏南通，专注于差别化功能纤维的贸易与供应，主营PTT纤维、Solotex纱线、远红外功能纱线及各类坯布原料。`}
            </p>
            <p>
              我们以源头原料与稳定交期为核心，为面料厂、织造厂及服装品牌提供选材建议、打样试样与定制化纱线方案，助力客户高效完成产品开发。
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            了解更多
          </Link>
        </div>

        <div className="rounded-md bg-secondary p-6 md:p-10">
          <h3 className="text-lg font-semibold text-primary">联系我们</h3>
          <p className="mt-2 text-sm text-muted-foreground">欢迎来电咨询产品规格、价格及样品需求。</p>
          <dl className="mt-6 divide-y divide-border">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 py-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-1 break-words text-sm font-medium text-foreground">
                    {href ? (
                      <a href={href} className="hover:text-primary hover:underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <Link
            href="/contact"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
          >
            获取报价 / 申请样品
          </Link>
        </div>
      </div>
    </section>
  )
}
