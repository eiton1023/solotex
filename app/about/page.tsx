import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { CompanyIntro } from '@/components/about/company-intro'
import { CoreStrengths } from '@/components/about/core-strengths'
import { TeamPhilosophy } from '@/components/about/team-philosophy'

const description =
  '南通梭络纺织品贸易有限公司专注基于SOLOTEX纤维的产品应用与技术支持，主营PTT记忆长丝、PTT/PET弹力长丝及弹力复合长丝，PTT短纤、毛条、PTT短纤纱线及PTT短纤与其他短纤的混纺纱线，提供色纱加工及坯布加工。'

export const metadata: Metadata = {
  title: '关于我们',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: '关于南通梭络', description },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <CoreStrengths />
      <TeamPhilosophy />
    </>
  )
}
