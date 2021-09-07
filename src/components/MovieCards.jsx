import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from '../components/MovieCard';
import useFavorites from '../hooks/useFavorites';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    gap: '2em',
    padding: '2em'
  },
}));

export default ({ movies, isMovieFavorite = null, toogleFavorite = null}) => {
  const classes = useStyles();

  const { isMovieFavorite: isMFavorite, toogleFavorite: tFavorite } = useFavorites();

  return (
    <main className={classes.root}>
      {!movies.length && <Typography variant="h5" component="h2">Nenhum resultado encontrado.</Typography>}
      {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} isMovieFavorite={isMovieFavorite || isMFavorite} toogleFavorite={toogleFavorite || tFavorite}/>)}
    </main>
  );
}