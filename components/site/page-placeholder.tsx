import Link from 'next/link'

type PagePlaceholderProps = {
  title: string
  description?: string
}

// 路由占位页：后续替换为正式页面内容。
export function PagePlaceholder({ title, description = '页面内容建设中，敬请期待。' }: PagePlaceholderProps) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-4 py-20 md:px-6">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">{title}</h1>
        <p className="mt-4 text-muted-foreground">{description}</p>
        <Link href="/" className="mt-8 text-sm font-medium text-primary hover:underline">
          返回首页
        </Link>
      </div>
    </section>
  )
}
