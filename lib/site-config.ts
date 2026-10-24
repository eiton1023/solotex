// 站点统一配置：公司信息、导航路由、产品数据。
// 标注「待替换」的字段请替换为真实信息。

export const company = {
  name: '南通梭络纺织品贸易有限公司',
  shortName: '南通梭络',
  englishName: 'Nantong Suoluo Textile Trading Co., Ltd.',
  address: '江苏省南通市中南世纪城34幢3404室',
  phone: '13809085192', // 待替换
  mobile: '13809085192', // 待替换
  email: 'manager@solotex.com.cn', // 待替换
  businessHours: '周一至周五 8:30 - 17:30',
  siteUrl: 'https://www.solotex.cn', // 待替换为正式域名
} as const

export const navLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '产品', href: '/products' },
  { label: '技术咨询', href: '/consulting' },
  { label: '联系我们', href: '/contact' },
] as const

export const productCategories = [
  { id: 'filament', label: 'Solotex长丝系列' },
  { id: 'staple', label: 'Solotex短纤系列' },
  { id: 'spin', label: 'Solotex纱线系列' },
  { id: 'greige', label: '色纱、坯布' },
] as const

export type ProductCategoryId = (typeof productCategories)[number]['id']

export type Product = {
  slug: string
  category: ProductCategoryId
  /** 首页预览使用的简称 */
  name: string
  /** 产品中心使用的完整名称 */
  fullName: string
  summary: string
  features: string[]
  applications: string[]
  imageLabel: string
}

export const products: Product[] = [
  {
    slug: 'ptt-fiber',
    category: 'filament',
    name: '1PTT纤维',
    fullName: 'PTT纤维 / PTT纱线',
    summary: '高回弹、柔软舒适，适用于弹力面料与高端针梭织产品。',
    features: ['高弹性', '柔软', '易染色', '耐反复拉伸'],
    applications: ['内衣', '袜品', '运动面料'],
    imageLabel: 'PTT纤维实拍图',
  },
  {
    slug: 'solotex-yarn',
    category: 'staple',
    name: '2Solotex纱线',
    fullName: 'Solotex索罗泰克斯纱线',
    summary: '源自PTT聚合物的高弹纱线，手感柔滑、尺寸稳定、易染色。',
    features: ['垂感好', '抗皱', '回弹'],
    applications: ['时装', '裤料', '针织面料'],
    imageLabel: 'Solotex纱线实拍图',
  },
  {
    slug: 'far-infrared-yarn',
    category: 'spin',
    name: '3远红外差别化功能纱线',
    fullName: '远红外功能性纤维',
    summary: '添加远红外功能粉体，具备蓄热保暖特性，适用于功能性服饰。',
    features: ['蓄热保暖', '吸湿排汗'],
    applications: ['保暖内衣', '功能袜'],
    imageLabel: '远红外功能纱线实拍图',
  },
  {
    slug: 'greige-fabric',
    category: 'greige',
    name: '4坯布',
    fullName: '定制坯布',
    summary: '多规格梭织、针织坯布原料，品质稳定，可按需求定织。',
    features: ['配套定纺', '定织', '支持Pantone TCX色号打样'],
    applications: ['梭织面料', '针织面料', '袜品/内衣配套'],
    imageLabel: '坯布实拍图',
  },
]
