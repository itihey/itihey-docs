import { NavItem } from 'vuepress/config'

export const NavItems4ZH: NavItem[] = [
  {
    text: '指南',
    link: '/zh/guide/'
  },
  {
    text: '反馈',
    link: '/zh/report/'
  },
  {
    text: '产品中心',
    ariaLabel: '了解更多',
    items: [
      {
        text: 'APP',
        items: [
          {
            text: '安卓(android) APP',
            link: 'http://app.itihey.com/share/index.html'
          },
          {
            text: '苹果(iOS) APP(待开发)',
            link: '/404'
          }
        ]
      },
      {
        text: '浏览器插件(油猴)',
        items: [
          {
            text: '划词搜题',
            link: 'https://www.zhaojiaoben.cn/script/detail/3524835685254d03bf5af828815430ec'
          }
        ]
      }
    ]
  },
  // {
  //   text: '关于我们',
  //   link: '/plugin/'
  // },
  // {
  //   text: 'v1.x',
  //   items: [
  //     {
  //       text: 'v2.x',
  //       link: 'https://v2.vuepress.vuejs.org/zh/'
  //     },
  //     {
  //       text: 'v0.x',
  //       link: 'https://v0.vuepress.vuejs.org/zh/'
  //     }
  //   ]
  // }
]
