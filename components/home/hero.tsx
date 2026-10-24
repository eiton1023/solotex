import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ImagePlaceholder } from '@/components/site/image-placeholder'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-primary">
      {/* 首屏大图占位：替换为纺织纱线实拍图（建议 1920×800，可叠加深色遮罩保证文字可读） */}
      <ImagePlaceholder
        label="首屏横幅大图 · 纺织纱线素材"
        size="1920×800"
        tone="dark"
        className="absolute inset-0 items-end justify-start p-6 md:p-10"
      />

      <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-4 py-20 md:min-h-[560px] md:px-6">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-tight">
            专注差别化功能纤维
            <span className="mt-3 block text-xl font-normal text-white/85 md:text-3xl">
              PTT / Solotex纱线、坯布原料供应
            </span>
          </h1>
          <p className="mt-6 text-base text-white/70 md:text-lg">源头原料，稳定交期，支持试样。</p>
        </div>

        <div className="mt-10 flex md:absolute md:bottom-12 md:right-6 md:mt-0">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            产品一览
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
