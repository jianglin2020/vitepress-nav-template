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
        desc: 'membertest',
        link: 'http://membertest.icfo.cn'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '数据中台',
        desc: 'membertest',
        link: 'http://membertest.icfo.cn/bi/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '微信侧边栏',
        desc: 'jccrmtest',
        link: 'http://jccrmtest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'odoo',
        desc: 'crm-odoo-test',
        link: 'http://crm-odoo-test.icfo.cn/#/odoo/customerDetails?id=743340'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'apptest',
        link: 'http://apptest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '客户服务平台',
        desc: 'appmembertest',
        link: 'http://appmembertest.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '金财云crm',
        desc: 'appmembertest',
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
        desc: 'crm-test',
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
        desc: 'crm-release',
        link: 'http://crm-release.icfo.cn/#/'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'app-release',
        link: 'http://app-release.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '客户服务平台',
        desc: 'member-release',
        link: 'http://member-release.icfo.cn/#/login'
      }
    ]
  },
  {
    title: '线上',
    items: [
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'crm',
        desc: 'jccrm',
        link: 'http://jccrm.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '数据中台',
        desc: 'tdc',
        link: 'http://tdc.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'app',
        desc: 'app',
        link: 'http://app.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: 'member',
        desc: '客户服务平台',
        link: 'http://member.icfo.cn/#/login'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '金财财税学院',
        desc: 'tdc',
        link: 'http://hy.icfo.cn/index'
      },
      {
        icon: 'http://membertest.icfo.cn/static/favicon.ico',
        title: '商战智慧',
        desc: 'crm.shangzhanzhihui',
        link: 'http://crm.shangzhanzhihui.com/#/login'
      }
    ]
  }
]
