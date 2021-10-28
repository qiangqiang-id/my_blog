const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const NET_PATH = '/blogs/net'
const PERFORM_PATH = '/blogs/perform'
const INTERVIEW_PATH = '/blogs/interview'
const BROWSER_PATH = '/blogs/browser'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
  ],
  [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
  [NET_PATH]: [
    createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
    createSideBarConfig("HTTP 协议", NET_PATH + '/http')
  ],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
  [INTERVIEW_PATH]: [createSideBarConfig('面试经历', INTERVIEW_PATH)],
  [BROWSER_PATH]: [
    createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
    createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  ]
}