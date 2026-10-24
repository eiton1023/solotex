import { Check } from 'lucide-react'
import { company } from '@/lib/site-config'

const services = [
  { title: '纤维 / 纱线技术参数答疑', detail: '旦数、F数、强伸度、弹性回复率等指标解读与选型建议。' },
  { title: 'Pantone TCX 色号对色、色卡寄送咨询', detail: '按客户色号提供对色方案，可寄送实物色卡供确认。' },
  { title: '面料、袜品工艺方案建议', detail: '结合原料特性，给出织造、染整及袜机工艺参考。' },
  { title: '海外商标注册风险咨询', detail: '出口前品牌商标检索与注册风险提示，降低外贸合规隐患。' },
  { title: '样品、小批量试单询价', detail: '支持打样与小批量试单，便于客户先行验证再批量下单。' },
]

export function ServiceList() {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">Services</p>
      <h2 id="services-title" className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
        可提供服务
      </h2>
      <span aria-hidden="true" className="mt-5 block h-0.5 w-12 bg-primary" />

      <ul className="mt-8 flex flex-col divide-y divide-border border-y border-border">
        {services.map((service) => (
          <li key={service.title} className="flex gap-4 py-5">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground"
            >
              <Check className="size-3.5" />
            </span>
            <div>
              <h3 className="font-medium text-foreground">{service.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <aside aria-label="服务说明" className="mt-8 rounded-sm border-l-2 border-primary bg-secondary px-5 py-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          我们将在<span className="font-medium text-foreground">工作日</span>内回复您的咨询（{company.businessHours}）。
          样品与色卡寄送<span className="font-medium text-foreground">会单独核算运费</span>，具体以沟通确认为准。
        </p>
      </aside>
    </div>
  )
}
