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
        icon: 'https://p26-passport.byteacctimg.com/img/user-avatar/806aea087b647d13717d45e1fc9461a3~120x120.awebp',
        title: '搭建一个通用组件库',
        desc: '手把手，如何搭建一个通用组件库？（文档+样式+按需打包）',
        link: 'https://juejin.cn/post/7224051399256309821'
      },
      {
        icon: 'https://p26-passport.byteacctimg.com/img/user-avatar/61130727b6e6bf9ed813434aeaed8ac3~60x60.awebp',
        title: 'Vite 5.0 正式发布',
        desc: 'Vite 5.0 正式发布',
        link: 'https://juejin.cn/post/7301910888957411367'
      },
      {
        icon: 'https://p6-passport.byteacctimg.com/img/user-avatar/461c34072fb96b76b2de1b307cc76061~120x120.awebp',
        title: 'Vite创建一个Vue2项目',
        desc: '基于Vite创建一个Vue2项目😎',
        link: 'https://juejin.cn/post/7130924539067760677'
      },
      {
        // icon: './images/131418338.jpg',
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
      },
      {
        icon: 'https://p6-passport.byteacctimg.com/img/user-avatar/c1998c9bd48684eb72fa68d4bc262fc4~60x60.awebp',
        title: 'Obsidian',
        desc: '为什么我放弃了有道云笔记，选择了 Obsidian',
        link: 'https://juejin.cn/post/7220698356775469113'
      },
      {
        icon: '/icons/github.svg',
        title: 'ProxyPool',
        desc: 'ProxyPool 代理池',
        link: 'https://github.com/Python3WebSpider/ProxyPool'
      },
      {
        icon: 'http://g1879.gitee.io/drissionpagedocs/img/color_logo.png',
        title: 'DrissionPage',
        desc: 'DrissionPage 网页自动化',
        link: 'http://g1879.gitee.io/drissionpagedocs/get_start/installation/'
      },
      {
        icon: 'https://p9-passport.byteacctimg.com/img/user-avatar/d2e87217a15e32072eb29144fcd8fce5~60x60.awebp',
        title: 'Vue3基础知识',
        desc: '2024光速学习Vue3基础知识',
        link: 'https://juejin.cn/post/7331301209339166772'
      },
      {
        icon: 'https://p3-passport.byteacctimg.com/img/user-avatar/205489b818c8ecd9ddb3a148dbd11a38~120x120.awebp',
        title: '微前端五大门派大',
        desc: '微前端五大门派大',
        link: 'https://juejin.cn/post/7338230967390224435'
      },
      {
        icon: 'https://p3-passport.byteacctimg.com/img/user-avatar/d5a883014e7572b4909cf839e8932e58~120x120.awebp',
        title: 'ChatGPT-Next-Web',
        desc: '56K star！一键拥有跨平台 AI 助手：ChatGPT-Next-Web',
        link: 'https://juejin.cn/post/7320288262400180261'
      },
      {
        icon: 'https://p3-passport.byteacctimg.com/img/user-avatar/f59ff6440f79f4378b2a70690403d4ff~120x120.awebp',
        title: '前端，该卷什么呢',
        desc: '【2024】前端，该卷什么呢？',
        link: 'https://juejin.cn/post/7329126541320536074'
      },
      {
        icon: 'https://p9-passport.byteacctimg.com/img/user-avatar/bf9ea7f023cfe5c1344b6e55b93f52f1~60x60.awebp',
        title: 'Vite创建Vue3项目',
        desc: 'Vite创建Vue3项目(一)——配置Vite4+Vue3+Eslint+Prettier',
        link: 'https://juejin.cn/post/7197656815923118139'
      } 
    ]
  },
  {  // {
      //   icon: 'https://pan666.net/favicon.ico',
      //   title: '阿里小站',
      //   desc: '我的小站-阿里云盘资源共享站',
      //   link: 'https://pan666.net/'
      // },
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
        title: 'Music-Tag-Web',
        desc: '编辑歌曲文件元数据的 Web 应用',
        link: 'https://github.com/xhongc/music-tag-web'
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
        icon: 'https://qread.xmsoushu.com/content/images/size/w256h256/format/jpeg/2022/11/favicon.jpg',
        title: '熊猫速读',
        desc: '熊猫速读，为你精心推荐视频书，速读、速览一本书，就来熊猫速读',
        link: 'https://qread.xmsoushu.com/'
      },
      {
        icon: 'https://p3-passport.byteacctimg.com/img/user-avatar/7c861ba3d4cfd3e73c88b6a3637b6bcf~60x60.awebp',
        title: '英语学习',
        desc: '英语学习之路',
        link: 'https://juejin.cn/post/7333162360360665099'
      },
      {
        icon: 'https://picx.zhimg.com/v2-5e6ef8eec181f25c8a450f648153707c_l.jpg?source=2c26e567',
        title: '成长的私人暗器',
        desc: '你成长的私人暗器是什么？',
        link: 'https://www.zhihu.com/question/537552336'
      }  
    ]
  },
  {
    title: '云盘',
    items: [
      {
        icon: 'https://s1.imagehub.cc/images/2023/06/14/f6e0735907bfc4d2be567f9e06d12063.png',
        title: '玩偶',
        desc: '玩偶哥哥-阿里云盘资源分享',
        link: 'https://www.wogg.net/'
      },
      {
        icon: 'http://labipan.com/upload/dycms/20240530-1/9b409f92d6516bcbcf35f3131cb93ac2.jpg',
        title: '蜡笔',
        desc: '蜡笔盘盘资源-阿里云盘,夸克云盘',
        link: 'http://labipan.com'
      }
    ]
  },
  {
    title: 'AI导航',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i3/O1CN01sffRIx1nb3dXCKdFC_!!6000000005107-2-tps-1024-1024.png',
        title: '通义千问',
        desc: '通义千问',
        link: 'https://tongyi.aliyun.com/qianwen'
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
        icon: 'https://img.piclabo.xyz/2023/10/25/d67adcffb89dd.jpg',
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
        icon: 'https://avatars.githubusercontent.com/u/82091384?v=4',
        title: '惜之酱',
        desc: '惜之酱仓库github',
        link: 'https://github.com/kxs2018/xiaoym'
      },
      {
        icon: 'https://gitlab.com/uploads/-/system/user/avatar/18406011/avatar.png',
        title: '惜之酱',
        desc: '惜之酱仓库gitlab',
        link: 'https://gitlab.com/xizhiai/xiaoym'
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
        icon: 'https://xn--sss604efuw.com/z/favicon.ico',
        title: '饭太硬',
        desc: '饭太硬',
        link: 'https://www.饭太硬.com'
      },
      {
        icon: '/icons/github.svg',
        title: '我的电视',
        desc: '我的电视github',
        link: 'https://github.com/lizongying/my-tv/releases/'
      },
      {
        title: '肥羊allinone',
        desc: '肥羊allinone',
        link: 'https://imgtool.v1.mk/allinone.html'
      },
      {
        title: 'doube-itv',
        desc: '电视直播源',
        link: 'https://laosu.tech/2025/01/02/%E5%B0%8F%E7%99%BD%E5%92%8C%E6%87%92%E4%BA%BA%E4%B8%93%E5%B1%9E%E7%9A%84IPTV%E7%9B%B4%E6%92%AD%E6%BA%90/'
      }
    ]
  },
  {
    title: '夸克资源',
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
