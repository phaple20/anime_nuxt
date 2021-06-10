import Router from 'koa-router'

const router = new Router()

const goods = [
  { id: 1, text: 'web', price: 1999 },
  {
    id: 2,
    text: '移动',
    price: 199,
  },
]

router.get('/goods', (ctx) => {
  ctx.body = {
    ok: 1,
    goods,
  }
})

module.exports = router
