import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ConsultingCta() {
  return (
    <section aria-labelledby="consulting-cta-title" className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
        <div>
          <h2 id="consulting-cta-title" className="text-xl font-semibold text-primary md:text-2xl">
            需要样品、色卡或工艺参数？
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            可前往技术咨询页面提交询价，我们将在工作日内与您确认规格、色号与打样安排。
          </p>
        </div>
        <Link
          href="/consulting"
          className="inline-flex w-fit shrink-0 items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          前往技术咨询
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
