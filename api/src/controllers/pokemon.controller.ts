import PokemonService from '../services/pokemon.service'
import { Context } from 'koa'
import { getRequest } from '../models/pokemon.model'

const pokemonService = new PokemonService()

export default class {
  async getData(ctx: Context): Promise<void> {
    const { page, limit } = ctx.query
    const text = ctx.query.text || ''
    const data = await pokemonService.getData(
      parseInt(page),
      parseInt(limit),
      text
    )
    ctx.body = getRequest(data)
  }
}
