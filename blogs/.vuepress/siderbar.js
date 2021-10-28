const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/git'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('git-基础', JAVASCRIPT_PATH),
  ],
  
}