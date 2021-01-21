interface SpecialPowers {
  attack: number
  defense: number
}

interface Powers {
  hp: number
  attack: number
  defense: number
  speed: number
  specialPowers: SpecialPowers
}

export interface Pokemon {
  id: number
  name: string
  type: string[]
  base: Powers
}

export const getRequest = (body: any): Pokemon[] => {
  const pokemons: Pokemon[] = []
  for (let i = 0; i < body.length; i++) {
    const item = body[i]
    pokemons.push({
      id: item.id,
      name: item.name,
      type: item.type,
      base: item.base,
    })
  }
  return pokemons
}
