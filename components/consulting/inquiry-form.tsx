'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

const categories = [
  'PTT纤维',
  'Solotex纱线',
  '功能性差别化纱线',
  '坯布',
  'Pantone色号 / 色卡',
  '面料、袜品工艺方案',
  '海外商标注册咨询',
  '样品 / 小批量试单询价',
  '其他',
]

const fieldClass =
  'w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 disabled:opacity-60'

const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

function RequiredMark() {
  return (
    <span className="ml-0.5 text-destructive" aria-hidden="true">
      *
    </span>
  )
}

export function InquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (status !== 'success') return
    const timer = setTimeout(() => setStatus('idle'), 3000)
    return () => clearTimeout(timer)
  }, [status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!FORMSPREE_FORM_ID) {
      setErrorMessage('表单服务尚未配置，请通过页脚电话或邮箱与我们联系。')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { errors?: { message: string }[] } | null
        throw new Error(data?.errors?.map((e) => e.message).join('；') || '提交失败')
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error && error.message !== 'Failed to fetch'
          ? `${error.message}，请稍后重试。`
          : '网络异常，提交失败，请稍后重试。',
      )
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="rounded-sm border border-border bg-card p-6 shadow-sm md:p-8">
      <h2 id="inquiry-title" className="text-xl font-semibold text-primary md:text-2xl">
        在线询价 / 咨询
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        请填写以下信息，带 <span className="text-destructive">*</span> 为必填项。
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" aria-labelledby="inquiry-title">
        <input type="hidden" name="_subject" value="官网技术咨询 / 样品询价" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="inquiry-name" className={labelClass}>
              姓名
              <RequiredMark />
            </label>
            <input
              id="inquiry-name"
              name="姓名"
              type="text"
              required
              maxLength={50}
              autoComplete="name"
              placeholder="您的称呼"
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="inquiry-company" className={labelClass}>
              公司
            </label>
            <input
              id="inquiry-company"
              name="公司"
              type="text"
              maxLength={100}
              autoComplete="organization"
              placeholder="公司名称"
              disabled={isSubmitting}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiry-contact" className={labelClass}>
            联系方式
            <RequiredMark />
          </label>
          <input
            id="inquiry-contact"
            name="联系方式"
            type="text"
            required
            maxLength={100}
            placeholder="手机 / 微信 / 邮箱"
            disabled={isSubmitting}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="inquiry-category" className={labelClass}>
            咨询品类
            <RequiredMark />
          </label>
          <select
            id="inquiry-category"
            name="咨询品类"
            required
            defaultValue=""
            disabled={isSubmitting}
            className={`${fieldClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='12'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%2364748b'%20stroke-width='2'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] bg-[position:right_0.75rem_center] bg-no-repeat pr-9`}
          >
            <option value="" disabled>
              请选择咨询品类
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-message" className={labelClass}>
            需求描述
            <RequiredMark />
          </label>
          <textarea
            id="inquiry-message"
            name="需求描述"
            required
            rows={5}
            maxLength={2000}
            placeholder="例如：规格（旦数/F数）、色号（Pantone TCX）、用途、预计用量、交期要求等"
            disabled={isSubmitting}
            className={`${fieldClass} resize-y leading-relaxed`}
          />
        </div>

        <div aria-live="polite" role="status">
          {status === 'success' && (
            <p className="flex items-start gap-2 rounded-sm border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              提交成功，我们将在工作日内与您联系。
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 rounded-sm border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {errorMessage}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-sm sm:w-auto sm:self-start">
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              提交中…
            </>
          ) : (
            '提交咨询'
          )}
        </Button>
      </form>
    </div>
  )
}
