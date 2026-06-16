import { useEffect, useState } from "react";
import { getPokemons } from "../api/pokemonApi";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useFavorites from "../hooks/useFavorites";

function Inicio() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {
        cargarPokemons();
    }, [offset]);

    const cargarPokemons = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getPokemons(20, offset);

            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    return response.json();
                })
            );

            setPokemons(pokemonDetails);
        } catch (error) {
            setError("No se pudieron cargar los Pokémon.");
        } finally {
            setLoading(false);
        }
    };

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    const handlePrevious = () => {
        if (offset > 0) {
            setOffset(offset - 20);
        }
    };

    const handleNext = () => {
        setOffset(offset + 20);
    };

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <main className="container">
            <h1>Listado de Pokémon</h1>

            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search"
            />

            <div className="pokemon-grid">
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePrevious} disabled={offset == 0}>
                    Anterior
                </button>

                <button onClick={handleNext}>Siguiente</button>
            </div>
        </main>
    );
}

export default Inicio;