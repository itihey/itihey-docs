import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getApiSidebar,
  getGuideSidebar,
  getPluginSidebar,
  getThemeSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/zh/api/': getApiSidebar(),
  '/zh/report/': [],
  '/zh/guide/': [
    {
      title: 'APP',
      collapsable: true,
      children: [
        '',
        'img',
        'install'
      ]
    },
    {
      title: '划词搜题',
      collapsable: true,
      children: [
        'hc/install',
        'hc/use',
        'hc/faq'
      ]
    }
  ],
  '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
  '/zh/theme/': getThemeSidebar('主题', '介绍')
}

