module.exports =  {
  // base: './',
  title: '小强的博客',
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/img/a.png',
    type: 'blog',
    logo:  '/img/a.png',
    nav: [
      { text: '首页' , link: '/', icon: 'reco-home' },
      { text: '目录', icon: 'reco-category', items: [
        { text: 'javascript', link: '/javascript/' },
        { text: '浏览器', link: '/javasc/' },
        { text: '工作日志', link: '/a/'},
        { text: '技术方案', link: '/b/'}
      ]},
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }, 
    ],
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
    ]
  },
}