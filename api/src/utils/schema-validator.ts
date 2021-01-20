import Joi from '@hapi/joi'
import { Context, Next } from 'koa'

const validateObject = (
  object: any,
  label: string,
  schema: Joi.Schema,
  options: object = {}
): void => {
  if (!schema) return

  const { error } = schema.validate(object, options)
  if (error) {
    throw new Error(`Invalid ${label} - ${error.message}`)
  }
}

const validate = (obj: any) => (ctx: Context, next: Next) => {
  try {
    validateObject(ctx.headers, 'Headers', obj.headers, {
      allowUnknown: true,
    })
    validateObject(ctx.params, 'URL Parameters', obj.params)
    validateObject(ctx.query, 'URL Query', obj.query)

    if (ctx.request.body) {
      validateObject(ctx.request.body, 'Request Body', obj.body)
    }

    return next()
  } catch (err) {
    ctx.throw(400, err.message)
  }
}

export default validate
