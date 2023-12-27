import type { NavLink } from '../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用',
    items: [
      {
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度',
        desc: '百度一下，你就知道',
        link: 'https://www.baidu.com'
      }
    ]
  }
]
