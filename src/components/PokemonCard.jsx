import { Link } from "react-router-dom";

function PokemonCard({ pokemon, isFavorite, toggleFavorite }) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            <h3>{pokemon.name}</h3>

            <div className="types">
                {pokemon.types.map((item) => (
                    <span key={item.type.name}>{item.type.name}</span>
                ))}
            </div>

            <div className="card-actions">
                <Link to={`/detalle/${pokemon.name}`}>Ver detalle</Link>

                <button onClick={() => toggleFavorite(pokemon)}>
                    {isFavorite(pokemon.name) ? "Quitar favorito" : "Favorito"}
                </button>
            </div>
        </div>
    );
}

export default PokemonCard;