import Link from 'next/link'
import { company, navLinks } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0b2647] text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-white">{company.name}</p>
          <p className="mt-1 text-xs tracking-wide text-white/50">{company.englishName}</p>
          <address className="mt-6 space-y-2 text-sm not-italic">
            <p>{`地址：${company.address}`}</p>
            <p>
              电话：
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {company.phone}
              </a>
            </p>
            <p>
              邮箱：
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="页脚导航">
          <p className="text-sm font-medium text-white">快速导航</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-6">
          <p>{`© ${year} ${company.name} 版权所有`}</p>
          {/* 备案号待替换 */}
          <p>苏ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}
