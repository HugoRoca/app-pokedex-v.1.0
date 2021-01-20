import { Context } from 'koa'

class PingController {
  async ping(ctx: Context): Promise<void> {
    ctx.body = { message: 'Health Check Ok', detail: 'API Payments Cash' }
  }
}

export default PingController
