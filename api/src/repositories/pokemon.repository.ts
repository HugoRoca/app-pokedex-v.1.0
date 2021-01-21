import { MongoHelper } from '../utils/mongoHelper'

class PokemonRepository {
  async getData(page: any, limit: number, text: string): Promise<any> {
    let find = {}

    if (text !== '') {
      find = {
        'name.english': new RegExp(text, 'i'),
      }
    }

    return await MongoHelper.client
      .db('pokedex')
      .collection('pokemons')
      .find(find)
      .skip(page)
      .limit(limit)
      .toArray()
  }
}

export default PokemonRepository
