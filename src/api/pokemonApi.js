const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemons = async (limit = 20, offset = 0) => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    if (!response.ok) {
        throw new Error("Error al obtener la lista de Pokémon");
    }

    return response.json();
};

export const getPokemonDetail = async (name) => {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("Error al obtener el detalle del Pokémon");
    }

    return response.json();
};