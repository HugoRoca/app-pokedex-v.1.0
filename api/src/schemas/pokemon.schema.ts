import Joi from '@hapi/joi'

export default {
  GET_POKEMON_QUERY: Joi.object({
    page: Joi.number().required(),
    limit: Joi.number().required(),
    text: Joi.string().default(''),
  }),
}
