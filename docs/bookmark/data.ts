import type { NavLink } from '../nav/components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '收藏',
    items: [
      {
        icon: 'https://p6-passport.byteacctimg.com/img/user-avatar/461c34072fb96b76b2de1b307cc76061~120x120.awebp',
        title: 'Vite创建一个Vue2项目',
        desc: '基于Vite创建一个Vue2项目😎',
        link: 'https://juejin.cn/post/7130924539067760677'
      },
      {
        title: '二次封装elementui',
        desc: '二次封装elementui,封装成vue组件，并发布到npm上',
        link: 'https://blog.csdn.net/qq_41459772/article/details/131418338'
      },
      {
        icon: 'https://p6-passport.byteacctimg.com/img/user-avatar/a973ace2c68a4d1c0dbaba64eda34442~120x120.awebp',
        title: '封装UI组件库',
        desc: '【封装UI组件库】手摸手教你仿一下Element-ui的Button组件（发布至npm）',
        link: 'https://juejin.cn/post/7103081918266081287'
      },
      {
        title: 'VitePress打造个人导航',
        desc: '使用 VitePress 打造个人前端导航网站',
        link: 'https://notes.fe-mm.com/daily-notes/issue-38'
      }
    ]
  },
  {
    title: '工具',
    items: [
      {
        icon: 'https://raw.githubusercontent.com/jianglin2020/picgo_img/main/img/202405141533535.webp',
        title: '提取微信聊天',
        desc: '提取微信聊天记录的工具',
        link: 'https://hellogithub.com/repository/93df3704446343068e67fc174a34be47'
      },
      {
        icon: 'https://any86.github.io/any-rule/favicon.ico',
        title: '正则大全',
        desc: '正则大全',
        link: 'https://any86.github.io/any-rule/'
      },
      {
        title: 'm3u8DL',
        desc: 'N_m3u8DL-CLI使用',
        link: 'https://blog.csdn.net/q1280198423/article/details/131403959'
      },
      {
        icon: 'https://www.lang123.top/icon.png',
        title: '琅琅配音',
        desc: '琅琅配音',
        link: 'https://www.lang123.top/task'
      }
    ]
  },
  {
    title: '云盘',
    items: [
      {
        icon: 'https://s1.imagehub.cc/images/2024/11/02/289e20ddd8a1736a7a4620ed549f9984.th.png',
        title: '玩偶',
        desc: '玩偶哥哥-夸克云盘资源分享',
        link: 'https://wogg.xxooo.cf'
      },
      {
        icon: 'https://xiaomiai.site/upload/dycms/20240708-1/9150a85ec594c1e7b14619e6570d7ee4.png',
        title: '至臻',
        desc: '至臻-阿里云盘,夸克云盘',
        link: 'http://xiaomi666.fun'
      },
      {
        icon: 'https://erxiaofn.click/template/DYXS2/static/picture/logo.png',
        title: '二小',
        desc: '小二网盘库-阿里云盘,夸克云盘',
        link: 'https://erxiaofn.click'
      },
      // {
      //   icon: 'http://labipan.com/upload/dycms/20240530-1/9b409f92d6516bcbcf35f3131cb93ac2.jpg',
      //   title: '蜡笔',
      //   desc: '蜡笔盘盘资源-阿里云盘,夸克云盘',
      //   link: 'http://labipan.com'
      // },
      // {
      //   icon: 'http://1.95.79.193/upload/dycms/20241205-1/4e82f163deedcf520964088de25001af.png',
      //   title: '闪电',
      //   desc: 'UC云盘,阿里云盘,夸克云盘',
      //   link: 'http://1.95.79.193/'
      // },
      {
        icon: 'https://leijing1.com/favicon.ico',
        title: '雷鲸小站',
        desc: '雷鲸小站-天翼云盘交流站',
        link: 'https://leijing1.com/'
      }
      // {
      //   icon: 'https://www.tianyiso.com/favicon.ico',
      //   title: '天逸搜',
      //   desc: '天逸云资源搜索"',
      //   link: 'https://www.tianyiso.com/'
      // }
    ]
  },
  {
    title: 'switch',
    items: [
      {
        icon: 'https://avatars.githubusercontent.com/u/7413161?v=4',
        title: 'ns-emu-tools',
        desc: 'ns-emu-tools',
        link: 'https://github.com/triwinds/ns-emu-tools/releases'
      },
      {
        icon: 'https://ig.freer520.blog/2023/10/25/d67adcffb89dd.jpg',
        title: 'switch520',
        desc: 'switch游戏下载-百度网盘',
        link: 'https://www.gamer520.com'
      },
      {
        title: '冬日狂想曲',
        desc: '冬日狂想曲-alist',
        link: 'https://zi0.cc'
      },
      {
        icon: 'https://cdn2.mikuclub.fun/favicon.png',
        title: '初音社',
        desc: '游戏、壁纸下载-夸克',
        link: 'https://www.mikuclub.win'
      }
    ]
  },
  {
    title: '羊毛',
    items: [
      {
        icon: '/icons/github.svg',
        title: '脑瓜',
        desc: 'Scriptable组件',
        link: 'https://github.com/anker1209/Scriptable'
      },
      {
        icon: 'https://avatars.githubusercontent.com/u/82091384?v=4',
        title: '惜之酱',
        desc: '惜之酱仓库github',
        link: 'https://github.com/kxs2018/xiaoym'
      },
      {
        icon: 'https://avatars.githubusercontent.com/u/103831852?s=48&v=4',
        title: '撸毛日记',
        desc: '撸毛日记仓库github',
        link: 'https://github.com/leafTheFish/DeathNote'
      },
      {
        icon: '/icons/github.svg',
        title: '洛雪音乐',
        desc: 'lx-music-desktop',
        link: 'https://github.com/lyswhut/lx-music-desktop/releases/tag/v2.7.0'
      }
    ]
  },
  {
    title: 'tvbox',
    items: [
      {
        icon: 'https://img.nxtf.net/images/2025/02/04/2e03c532553bd9afdb9e664e83dfa32b.jpg',
        title: '饭太硬',
        desc: '饭太硬',
        link: 'https://www.饭太硬.com'
      },
      {
        icon: '/icons/github.svg',
        title: '范明明',
        desc: '范明明',
        link: 'https://github.com/fanmingming/live'
      },
      {
        icon: 'https://cn-assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico',
        title: '潇洒',
        desc: '潇洒接口',
        link: 'https://gitee.com/PizazzXS/another-d'
      },
      {
        icon: 'https://suburl.v1.mk/favicon.ico',
        title: '直播源转换',
        desc: '直播源转换',
        link: ' https://tools.v1.mk/'
      },
      {
        icon: 'https://suburl.v1.mk/favicon.ico',
        title: '肥羊allinone',
        desc: '肥羊allinone',
        link: 'https://imgtool.v1.mk/allinone.html'
      },
      {
        icon: '/icons/github.svg',
        title: 'quark-auto-save',
        desc: '夸克自动转存',
        link: 'https://github.com/Cp0204/quark-auto-save'
      },
      {
        icon: '/icons/github.svg',
        title: 'cloud189-auto-save',
        desc: '天翼自动转存',
        link: 'https://github.com/1307super/cloud189-auto-save'
      }
    ]
  },
  {
    title: '网盘资源',
    items: [
      {
        icon: 'https://duopan.fun/upload/dycms/20240530-1/9b409f92d6516bcbcf35f3131cb93ac2.jpg',
        title: '软件',
        desc: '202年01月',
        link: 'https://pan.quark.cn/s/ac2219570b40#/list/share/37fbe556198145c8b7eba7d05ce733da-2025%E5%B9%B401%E6%9C%88'
      },
      {
        icon: 'https://duopan.fun/upload/dycms/20240530-1/9b409f92d6516bcbcf35f3131cb93ac2.jpg',
        title: 'OK影视',
        desc: 'OK影视',
        link: 'https://pan.quark.cn/s/3334d8f93c64?read=1&passcode=#/list/share/da5ffe96a7bb45e9aaee577366afe357-OK%E5%88%86%E4%BA%AB'
      }
    ]
  }
]
