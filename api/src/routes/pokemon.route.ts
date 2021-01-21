import Router from 'koa-router'
import PokemonController from '../controllers/pokemon.controller'
import schemaValidator from '../utils/schema-validator'
import schema from '../schemas/pokemon.schema'

const router = new Router({ prefix: '/api/pokemon' })
const controller = new PokemonController()

const findPokemonRequest = schemaValidator({
  query: schema.GET_POKEMON_QUERY,
})

router.get('/', findPokemonRequest, controller.getData)

export default router
