import PokemonRepository from '../repositories/pokemon.repository'

const pokemonRepository = new PokemonRepository()

export default class PokemonService {
  async getData(page: number, limit: number, text: string): Promise<any> {
    return await pokemonRepository.getData(page * limit, limit, text)
  }
}
