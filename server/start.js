import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
// 解析post的数据
import bodyparser from 'koa-bodyparser'
import config from '../nuxt.config'
// 准备工作
import ReadyManager from './ready'
const app = new Koa()

// 设置cookie加密秘钥
app.keys = ['anime secret', 'another secret']
// Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'
global.config = config
// 解析post数据并注册路由
app.use(bodyparser())

// start
async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  const { host = process.env.HOST || '127.0.0.1', port = process.env.PORT || 3000 } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    console.log(config)
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // 路由自动配置
  const eventReady = new ReadyManager(app)
  eventReady.ready()
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  })
}
start()
