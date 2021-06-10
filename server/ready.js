const requireDirectory = require('require-directory')
const Router = require('koa-router')

class readyManager {
  constructor(app) {
    this.app = app
  }

  ready() {
    requireDirectory(module, './api', {
      visit: (obj) => {
        if (obj instanceof Router) this.app.use(obj.routes())
      },
    })
  }
}

module.exports = readyManager
