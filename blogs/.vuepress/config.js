// const sidebar = require("./siderbar.js");
module.exports = {
  base: '/my_blog/',
  title: '小强的博客',
  description: '站在巨人的肩上',
  dest: 'public',
  /** 配置md 文件资源加载路径正确 */
  markdown: {
    // ......
    extendMarkdown: (md) => {
      md.use(require('markdown-it-disable-url-encode'))
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/img/favicon.png',
    subSidebar: 'auto',
    // valineConfig: {
    //   appId: "h6i7vXvVEK37fFFwb1DtMJ6W-gzGzoHsz",
    //   appKey: "cYI3hypnGAI00CPuzhNfeY8Q",
    // },

    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date',
      },
    ],
    // friendLink: [
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: 'recoluan@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    // ],
    displayAllHeaders: true,
    //  sidebar:[
    //    '/',
    //    ['/editor-picture','hello world']
    //   ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '目录索引',
      },
      tag: {
        location: 3,
        text: '标签索引',
      },
    },
    search: true,
    searchMaxSuggestions: 10,
    author: 'xiaoqiang',
    startYear: '2021',
    record: '小强',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      //鼠标点击特效 先安装在配置，
      'cursor-effects',
      {
        size: 3, // size of the particle, default: 2
        shape: ['circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码', //vuepress复制粘贴提示插件P
        tip: {
          content: '复制成功!',
        },
      },
    ],
  ],
}
