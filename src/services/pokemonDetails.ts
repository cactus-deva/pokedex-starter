import axios from "axios"
import { POKEMON_BASE_URL } from "../utils/constant"
import { IPokemonDetailsResponse } from "../interface/pokemonDetails";
import { handleResponse, IResponse } from "../utils/handleResponse";


interface IGetPokemonDetailsResponse extends IResponse {
    status: number | undefined;
    data?: IPokemonDetailsResponse;
}

export const pokemonDetailsServices = {
    getPokemonDetails: async (name: string): Promise<IGetPokemonDetailsResponse> => {
        try {
            const res = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`)
            return handleResponse.success(res)
        } catch (error: any) {
            return handleResponse.error(error)
        }
    }
}