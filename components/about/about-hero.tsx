import Link from 'next/link'

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-title" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <nav aria-label="面包屑" className="text-sm text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                首页
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-primary">
              关于我们
            </li>
          </ol>
        </nav>
        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary/70">About Suoluo</p>
        <h1 id="about-hero-title" className="mt-3 text-3xl font-semibold text-primary md:text-5xl">
          关于梭络纺织
        </h1>
        <span aria-hidden="true" className="mt-6 block h-0.5 w-12 bg-primary" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          专注差别化纤维原料供应与纺织技术服务
        </p>
      </div>
    </section>
  )
}
