import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/70">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
        {title}
      </h2>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-10 bg-primary" />
      {description ? <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  )
}
