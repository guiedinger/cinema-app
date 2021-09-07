import React, { useEffect, useState } from 'react';
import useFavorites from '../hooks/useFavorites';
import MovieCards from '../components/MovieCards';

export default () => {
  const [movies, setMovies] = useState([]);
  const { isMovieFavorite, toogleFavorite, favorites } = useFavorites();

  useEffect(() => {
    setMovies(Object.keys(favorites).map(key => favorites[key]));
  }, [favorites]);

  return (
    <MovieCards movies={movies} isMovieFavorite={isMovieFavorite} toogleFavorite={toogleFavorite}/>
  );
}