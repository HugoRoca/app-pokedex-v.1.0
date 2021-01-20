import Router from 'koa-router'
import PingController from '../controllers/ping.controller'

const router = new Router({ prefix: '/api' })
const controller = new PingController()

router.get('/healthcheck', controller.ping)

export default router
