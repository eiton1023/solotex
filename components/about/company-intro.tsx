import { SectionHeading } from '@/components/site/section-heading'
import { ImagePlaceholder } from '@/components/site/image-placeholder'
import { company } from '@/lib/site-config'

const highlights = [
  { value: '20年', label: '染色工厂IT与纺织行业经验' },
  { value: '4大类', label: 'PTT · Solotex · 功能纱线 · 坯布' },
  { value: '3大领域', label: '袜品 · 内衣 · 运动面料' },
]

export function CompanyIntro() {
  return (
    <section aria-labelledby="intro-title" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="intro-title" eyebrow="Company Profile" title="公司简介" />
          <div className="mt-8 flex flex-col gap-5 leading-loose text-foreground/80">
            <p>
              {company.name}
              扎根南通纺织产业带，团队拥有近20年染色工厂IT与纺织行业从业经验，熟悉从纤维、纱线到染整、成品的完整产业链。
            </p>
            <p>
              公司专注基于SOLOTEX纤维的产品应用与技术支持，主营PTT记忆长丝、PTT/PET弹力长丝及弹力复合长丝，PTT短纤、毛条，PTT短纤纱线及PTT短纤与其他短纤的混纺纱线，提供色纱加工及坯布加工。
            </p>
            <p>
              除原料供应外，我们还可为客户提供色号匹配、生产工艺及外贸商标注册等方面的咨询服务，帮助客户缩短开发周期、降低合规风险。
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="border-l-2 border-primary pl-4">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-2xl font-semibold text-primary">{item.value}</dd>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ImagePlaceholder label="公司/仓库实拍图" className="aspect-[4/3] w-full self-center" />
      </div>
    </section>
  )
}
