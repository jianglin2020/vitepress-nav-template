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
        // icon: './images/issue-38.png',
        title: 'VitePress打造个人导航',
        desc: '使用 VitePress 打造个人前端导航网站',
        link: 'https://notes.fe-mm.com/daily-notes/issue-38'
      }
    ]
  }
]
