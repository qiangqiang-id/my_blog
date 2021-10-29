const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/editor-picture'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('js小技巧', JAVASCRIPT_PATH),
  ],
  
}