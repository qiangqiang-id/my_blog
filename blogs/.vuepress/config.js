
const sidebar = require("./siderbar.js");
module.exports =  {
  base: '/',
  title: '小强的博客',
  description: "站在巨人的肩上",
  dest: "public",
  head: [
    [
      'link',
      { rel:"icon", href:'/img/favicon.png' }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ]
  ],
  plugins: [
    "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
  ],
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/img/favicon.png',
    // subSidebar: "auto",
    // valineConfig: {
    //   appId: "h6i7vXvVEK37fFFwb1DtMJ6W-gzGzoHsz",
    //   appKey: "cYI3hypnGAI00CPuzhNfeY8Q",
    // },
    
    nav: [
      { 
        text: '首页' , 
        link: '/', 
        icon: 'reco-home'
      },
      { 
        text: '时间轴',
        link: '/timeline/', 
        icon: 'reco-date' 
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
     sidebar,
     type: "blog",
     blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    search: true,
    searchMaxSuggestions: 10,
    author: "xiaoqiang",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
}