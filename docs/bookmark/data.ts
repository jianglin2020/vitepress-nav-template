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
        icon: '/icons/github.svg',
        title: '微信3.x历史版本',
        desc: 'Windows微信3.x历史版本',
        link: 'https://github.com/tom-snow/wechat-windows-versions/tags'
      },
      {
        icon: '/icons/github.svg',
        title: '微信4.X历史版本',
        desc: 'Windows微信4.X历史版本',
        link: 'https://github.com/cscnk52/wechat-windows-versions/tags'
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
      },
      {
        icon: '/icons/github.svg',
        title: 'Clash Meta',
        desc: 'Clash Meta For Android',
        link: 'https://github.com/MetaCubeX/ClashMetaForAndroid'
      },
      {
        icon: 'https://sapi.yangshipin.cn/assets/2022/pcicon/favicon.ico',
        title: '央视频',
        desc: '央视频-有品质的视频社交媒体',
        link: 'https://yangshipin.cn/tv/home?pid=600001818'
      },
      {
        icon: 'https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico',
        title: '小红书',
        desc: '小红书-2026世界杯赛程',
        link: 'https://www.xiaohongshu.com/worldcup26/fixtures?wcup_source=web_main_venue_page&wcup_tab=calendar&wcup_redirect=home'
      },
      {
        icon: 'https://www.themoviedb.org/assets/2/favicon-32x32-543a21832c8931d3494a68881f6afcafc58e96c5d324345377f3197a37b367b5.png',
        title: 'TMDB',
        desc: 'TMDB官网',
        link: 'https://www.themoviedb.org/?language=zh-CN'
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
        icon: 'https://tncache1-f1.v3mh.com/image/2025/07/01/cd6279aaafd7091672bbdc432ea9e65a.png',
        title: '木偶',
        desc: '木偶-阿里云盘,夸克云盘',
        link: 'https://www.muou.asia'
      },
      {
        icon: 'https://img.cdn1.vip/i/6a1683026bb43_1779860226.png',
        title: '至臻',
        desc: '至臻-阿里云盘,夸克云盘',
        link: 'https://mihdr.top/'
      },
      {
        icon: 'http://xiaocgege.shop/upload/dycms/20250714-1/638c26fceb82d0e8e774e91f5135d6a4.png',
        title: '蜡笔',
        desc: '蜡笔盘盘资源-阿里云盘,夸克云盘',
        link: 'http://xiaocgege.shop'
      },
      {
        icon: 'https://m.360buyimg.com/i/jfs/t1/320261/9/18026/3732/687e6d46Fb105619e/a805111e2e8a2222.png',
        title: '二小',
        desc: '小二网盘库-阿里云盘,夸克云盘',
        link: 'https://www.2xiaozhan.top'
      },
      {
        // icon: 'https://leijing1.com/favicon.ico',
        title: '雷鲸小站',
        desc: '雷鲸小站-天翼云盘交流站',
        link: 'https://leijing1.com/'
      },
      {
        icon: 'https://so.252035.xyz/favicon.ico',
        title: 'pansou',
        desc: '网盘资源搜索',
        link: 'https://so.252035.xyz/'
      },
      // {
      //   icon: '/icons/github.svg',
      //   title: 'openlist-cas',
      //   desc: '魔改openlist',
      //   link: 'https://github.com/GitYuA/OpenList-CAS/releases'
      // },
      {
        icon: 'https://guangya.qsxy.top/wp-content/themes/zibll/img/favicon.png',
        title: '臻影社',
        desc: '光鸭·臻影社',
        link: 'https://guangya.qsxy.top'
      }
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
        icon: 'https://git.eden-emu.dev/assets/img/logo.svg',
        title: 'eden模拟器',
        desc: 'eden模拟器',
        link: 'https://git.eden-emu.dev/eden-emu/eden/tags'
      },
      // {
      //   icon: 'https://git.citron-emu.org/avatars/d32a24363dd037ea282b9b66b6e863d293407d82a29d0d658075e75b311feb1f?size=200',
      //   title: 'citron模拟器',
      //   desc: 'citron模拟器',
      //   link: 'https://git.citron-emu.org/Citron/Emulator/tags'
      // },
      {
        icon: 'https://git.ryujinx.app/uploads/-/system/appearance/header_logo/1/icon-nopad-t2-192.png',
        title: 'ryubing模拟器',
        desc: 'ryubing模拟器',
        link: 'https://git.ryujinx.app/ryubing/ryujinx/-/releases'
      },
      {
        icon: 'https://prodkeys.net/wp-content/uploads/2022/11/cropped-Faviconn-1-32x32.png',
        title: 'keys秘钥',
        desc: 'keys秘钥',
        link: 'https://prodkeys.net/yuzu-prod-keys-n19/'
      },
      {
        title: 'switch520',
        desc: 'switch游戏下载-百度网盘',
        link: 'https://www.gamer520.com'
      },
      {
        title: '冬日狂想曲',
        desc: '冬日狂想曲-alist',
        link: 'https://zi4.cc/'
      },
      {
        icon: 'https://cdn2.mikuclub.fun/favicon.png',
        title: '初音社',
        desc: '游戏、壁纸下载-夸克',
        link: 'https://www.mikuclub.win'
      },
      // {
      //   icon: '/icons/github.svg',
      //   title: '文明6mod',
      //   desc: '文明6mod三方下载',
      //   link: 'http://steamworkshop.download/download/view/2672533453'
      // }
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
      // {
      //   title: '潇洒',
      //   desc: '潇洒接口',
      //   link: 'https://gitee.com/PizazzXS/another-d'
      // },
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
        title: 'Mursor',
        desc: 'Mursor直播源',
        link: 'https://github.com/Mursor1985/LIVE'
      },
      {
        icon: '/icons/github.svg',
        title: 't3环境搭建',
        desc: 'tvbox_t3环境搭建',
        link: 'https://github.com/cluntop/tvbox'
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
      },
      // {
      //   icon: '/icons/github.svg',
      //   title: 'cloudpan189-share',
      //   desc: '天翼云盘分享订阅',
      //   link: 'https://github.com/xxcheng123/cloudpan189-share'
      // }
    ]
  },
  // {
  //   title: '网盘资源',
  //   items: [
  //     {
  //       title: '软件',
  //       desc: '2025年010月',
  //       link: 'https://pan.quark.cn/s/f367f0d372cb#/list/share/a4052dded97442b6a9288b253fa9e85b'
  //     },
  //     {
  //       title: 'OK影视',
  //       desc: 'OK影视',
  //       link: 'https://pan.quark.cn/s/d2d555b3b54a#/list/share/5250c283f56647998b5af9c9987e97b0'
  //     }
  //   ]
  // }
]
