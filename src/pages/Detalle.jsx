import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetail } from "../api/pokemonApi";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Detalle() {
    const { name } = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        cargarDetalle();
    }, [name]);

    const cargarDetalle = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getPokemonDetail(name);
            setPokemon(data);
        } catch (error) {
            setError("No se pudo cargar el detalle del Pokémon.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    const statsNames = ["hp", "attack", "defense", "speed"];

    return (
        <main className="container">
            <button onClick={() => navigate("/")}>Volver</button>

            <section className="detail-card">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                <h1>{pokemon.name}</h1>

                <div className="types">
                    {pokemon.types.map((item) => (
                        <span key={item.type.name}>{item.type.name}</span>
                    ))}
                </div>

                <h2>Estadísticas base</h2>

                <ul className="stats">
                    {pokemon.stats
                        .filter((item) => statsNames.includes(item.stat.name))
                        .map((item) => (
                            <li key={item.stat.name}>
                                <strong>{item.stat.name}:</strong> {item.base_stat}
                            </li>
                        ))}
                </ul>
            </section>
        </main>
    );
}

export default Detalle;