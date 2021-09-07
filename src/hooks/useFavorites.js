import { useState, useEffect } from "react";

const getFavorites = () => {
  const favoritesSaved = localStorage.getItem('favorites');
  if (!favoritesSaved) return {};
  return JSON.parse(favoritesSaved);
}

export default () => {
  const [favorites, setFavorites] = useState(() => getFavorites());

  const isMovieFavorite = (movie) => {
    return Boolean(favorites[movie.imdbID]);
  }

  const toogleFavorite = (movie) => {
    const favoritesSaved = getFavorites();
    if (isMovieFavorite(movie)) {
      delete favoritesSaved[movie.imdbID];
    } else {
      favoritesSaved[movie.imdbID] = movie;
    }
    setFavorites(favoritesSaved);
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  return { isMovieFavorite, toogleFavorite, favorites };
}