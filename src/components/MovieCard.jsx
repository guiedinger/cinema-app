import React from 'react';
import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StartOutlineIcon from '@material-ui/icons/StarOutline'

const useStyles = makeStyles(theme => ({
  root: {
    width: '300px'
  },
  poster: {
    width: '100%'
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  favoriteButton: {
    padding: '0.5rem'
  },
  favoriteIcon: {
    width: 38,
    height: 38
  }
}));

export default ({ movie, isMovieFavorite, toogleFavorite }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img 
        className={classes.poster}
        alt={movie.Title}
        src={movie.Poster} 
        onError={e => e.target.src='https://via.placeholder.com/300x300.png/fff/FF9E10?text=Poster+n%C3%A3o+encontrado!'}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {movie.Title}
        </Typography>
        <div className={classes.row}>
          <Typography variant="h6" component="h2">
            {movie.Year}
          </Typography>
          <IconButton className={classes.favoriteButton} onClick={() => toogleFavorite(movie)}>
            {isMovieFavorite(movie) ? <StarIcon className={classes.favoriteIcon} color="primary"/>
            : <StartOutlineIcon className={classes.favoriteIcon} color="primary"/>}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}