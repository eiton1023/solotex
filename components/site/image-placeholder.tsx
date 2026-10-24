import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type ImagePlaceholderProps = {
  label: string
  size?: string
  tone?: 'light' | 'dark'
  className?: string
}

// 图片占位：替换实拍图时，将此组件换成 next/image 并保持同样的容器尺寸即可。
export function ImagePlaceholder({ label, size, tone = 'light', className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`图片占位：${label}`}
      className={cn(
        'flex flex-col items-center justify-center gap-2 border border-dashed text-center',
        tone === 'light' ? 'border-[#c9d1db] bg-secondary text-muted-foreground' : 'border-white/25 bg-white/5 text-white/60',
        className,
      )}
    >
      <ImageIcon className="size-6" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
      {size ? <span className="text-xs opacity-80">{`建议尺寸 ${size}`}</span> : null}
    </div>
  )
}
