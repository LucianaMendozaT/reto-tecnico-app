import PokemonCard from "../components/PokemonCard";
import useFavorites from "../hooks/useFavorites";

function Favoritos() {
    const { favorites, isFavorite, toggleFavorite } = useFavorites();

    return (
        <main className="container">
            <h1>Pokémon favoritos</h1>

            {favorites.length == 0 ? (
                <p>No tienes Pokémon favoritos todavía.</p>
            ) : (
                <div className="pokemon-grid">
                    {favorites.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            isFavorite={isFavorite}
                            toggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export default Favoritos;