import { create } from 'zustand'
import { IPokemonDetailsResponse } from '../interface/pokemonDetails'

const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  }
}

type pokemonType = {
  data: IPokemonDetailsResponse[]
  loading: boolean
  error: null | any
}

type UsePokemonListStoreType = {
  pokemon: pokemonType
  fetchPokemon: pokemonType
  setPokemonList: (value: pokemonType) => void
  setFetchPokemonList: (value: pokemonType) => void
  clearPokemon: () => void
}

export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => set({ pokemon: value }),
  setFetchPokemonList: (value: pokemonType) => set({ fetchPokemon: value }),
  clearPokemon: () => set({ ...initStore }),
}))

