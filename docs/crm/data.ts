import type { NavLink } from '../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '206',
    items: [
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'crm',
        desc: 'membertest.icfo.cn',
        link: 'http://membertest.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '数据中台',
        desc: 'membertest.icfo.cn/bi',
        link: 'http://membertest.icfo.cn/bi/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '微信侧边栏',
        desc: 'jccrmtest.icfo.cn',
        link: 'http://jccrmtest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'odoo',
        desc: 'crm-odoo-test.icfo.cn',
        link: 'http://crm-odoo-test.icfo.cn/#/odoo/customerDetails?id=743340'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'apptest.icfo.cn',
        link: 'http://apptest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '客户服务平台',
        desc: 'appmembertest.icfo.cn',
        link: 'http://appmembertest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '金财云crm',
        desc: 'crm-test.icfo.cn/lhyg',
        link: ' http://crm-test.icfo.cn/lhyg/#/login'
      }
    ]
  },
  {
    title: '185',
    items: [
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'crm',
        desc: 'crm-test.icfo.cn',
        link: 'http://crm-test.icfo.cn/#/login'
      }
    ]
  },
  {
    title: '预发布',
    items: [
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'crm',
        desc: 'crm-release.icfo.cn',
        link: 'http://crm-release.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'app-release.icfo.cn',
        link: 'http://app-release.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
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
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'crm',
        desc: 'jccrm.icfo.cn',
        link: 'http://jccrm.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '数据中台',
        desc: 'tdc.icfo.cn',
        link: 'http://tdc.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'app.icfo.cn',
        link: 'http://app.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '客户服务平台',
        desc: 'member.icfo.cn',
        link: 'http://member.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '商战智慧',
        desc: 'crm.shangzhanzhihui.com',
        link: 'http://crm.shangzhanzhihui.com/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '金财财税学院',
        desc: 'hy.icfo.cn',
        link: 'http://hy.icfo.cn/index'
      }
    ]
  }
]
