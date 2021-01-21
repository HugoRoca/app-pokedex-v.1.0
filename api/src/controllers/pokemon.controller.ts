import PokemonService from '../services/pokemon.service'
import { Context } from 'koa'

const pokemonService = new PokemonService()

export default class {
  async getData(ctx: Context): Promise<void> {
    const { page, limit } = ctx.query
    const text = ctx.query.text || ''
    ctx.body = await pokemonService.getData(
      parseInt(page),
      parseInt(limit),
      text
    )
  }
}
