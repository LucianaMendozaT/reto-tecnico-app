import { useEffect, useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const saveFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (name) => {
    return favorites.some((pokemon) => pokemon.name == name);
  };

  const toggleFavorite = (pokemon) => {
    if (isFavorite(pokemon.name)) {
      const filteredFavorites = favorites.filter((item) => item.name !== pokemon.name);
      saveFavorites(filteredFavorites);
    } else {
      saveFavorites([...favorites, pokemon]);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}

export default useFavorites;