import { BaseContext } from 'koa'
import { HttpError } from 'http-errors'

interface Params {
  title: string
  detail: string
  instance: string
}

interface ResponseError {
  type: string
  title: string
  status: number
  detail: string
  instance: string
}

const toResponse = (status: number, params?: Params) => {
  const { title, detail, instance } = params || {}
  const response: ResponseError = {
    type: 'about:blank',
    title: title || '',
    status,
    detail: detail || '',
    instance: instance || '',
  }

  return response
}

export default class {
  static notFound(ctx: BaseContext) {
    ctx.status = 404
    ctx.body = toResponse(ctx.status, {
      title: 'Not Found',
      detail: '',
      instance: ctx.url,
    })
    return ctx.body
  }

  static internalServerError(ctx: BaseContext, err: HttpError & Error) {
    ctx.status = err.statusCode || err.status || 500
    const errorSplit: any = err.stack?.split('\n')
    let title = err.message
    let detail = errorSplit[0]

    if (ctx.status === 500) {
      title = 'Internal server error'
      detail = ''
    }

    ctx.body = toResponse(ctx.status, {
      title,
      detail,
      instance: ctx.url,
    })
    return ctx.body
  }
}
