// #region snippet
function foo () {
  return ({
    dest: '../../vuepress',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '题海',
        description: '让大学四年没有难题'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '题海',
        description: '让大学四年没有难题'
      }
    },
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/logo.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ]
  })
}
// #endregion snippet

export default foo
