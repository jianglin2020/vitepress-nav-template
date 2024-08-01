import type { NavLink } from '../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '本地',
    items: [
      {
        icon: '/icons/crm.ico',
        title: '企微工作台',
        desc: '192.168.98.120',
        link: 'http://192.168.98.120:8888'
      }
    ]
  },
  {
    title: '测试48',
    items: [
      {
        icon: '/icons/crm.ico',
        title: 'crm',
        desc: '192.168.98.48',
        link: 'http://192.168.98.48'
      },
      {
        icon: '/icons/crm.ico',
        title: '数据中台',
        desc: '192.168.98.48:8888',
        link: 'http://192.168.98.48:8888'
      }
    ]
  },
  {
    title: '测试117',
    items: [
      {
        icon: '/icons/crm.ico',
        title: 'crm',
        desc: '192.168.99.117',
        link: 'http://192.168.99.117'
      },
      {
        icon: '/icons/crm.ico',
        title: '数据中台',
        desc: '192.168.99.117:8888',
        link: 'http://192.168.99.117:8888'
      }
    ]
  },
  {
    title: '预发布',
    items: [
      {
        icon: '/icons/crm.ico',
        title: 'crm',
        desc: 'crm-release.icfo.cn',
        link: 'http://crm-release.icfo.cn'
      },
      {
        icon: '/icons/crm.ico',
        title: 'app',
        desc: 'app-release.icfo.cn',
        link: 'http://app-release.icfo.cn'
      },
      {
        icon: '/icons/crm.ico',
        title: '客户服务平台',
        desc: 'member-release.icfo.cn',
        link: 'http://member-release.icfo.cn'
      }
    ]
  },
  {
    title: '线上',
    items: [
      {
        icon: '/icons/crm.ico',
        title: 'crm',
        desc: 'jccrm.icfo.cn',
        link: 'http://jccrm.icfo.cn'
      },
      {
        icon: '/icons/crm.ico',
        title: '数据中台',
        desc: 'tdc.icfo.cn',
        link: 'http://tdc.icfo.cn'
      },
      {
        icon: '/icons/crm.ico',
        title: 'app',
        desc: 'app.icfo.cn',
        link: 'http://app.icfo.cn/#/login'
      },
      {
        icon: '/icons/crm.ico',
        title: '客户服务平台',
        desc: 'member.icfo.cn',
        link: 'http://member.icfo.cn/#/login'
      },
      {
        icon: '/icons/crm.ico',
        title: '商战智慧',
        desc: 'crm.shangzhanzhihui.com',
        link: 'http://crm.shangzhanzhihui.com/#/login'
      },
      {
        icon: '/icons/crm.ico',
        title: '金财财税学院',
        desc: 'hy.icfo.cn',
        link: 'http://hy.icfo.cn/index'
      }
    ]
  }
]
