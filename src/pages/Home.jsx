import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/api';
import MovieCards from '../components/MovieCards';
import useDebounce from '../hooks/useDebounce';
import SearchBar from '../components/SearchBar';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    paddingTop: '2em'
  },
  searchBar: {
    width: '90%',
    maxWidth: '600px',
  }
}));

export default () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const loadMoreRef = useRef(null);
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      api.get('',{
        params: {
          s: debouncedSearch,
        }
      }).then((res) => {
        setPage(1);
        if (!res.data.Error) {
          setMovies(res.data.Search);
          setTotal(parseInt(res.data.totalResults));
        } else {
          setMovies([]);
        }
      });
    } else {
      setMovies([]);
      setTotal(0);
      setPage(1);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setPage(old => old + 1);
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, [])

  useEffect(() => {
    if (page > 1 && (movies.length < total))
      api.get('',{
        params: {
          s: search,
          page: page,
        }
      }).then((res) => {
        if (!res.data.Error) {
          setMovies([...movies, ...res.data.Search]);
          setTotal(parseInt(res.data.totalResults));
        } else {
          setMovies([]);
          setTotal(0);
          setPage(1);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className={classes.root}>
      <SearchBar onChange={(e) => setSearch(e.target.value)} />
      <MovieCards movies={movies}/>
      <Typography ref={loadMoreRef} variant="h6" component="h2">{(movies.length < total) && 'Carregando mais resultados...'}</Typography>
    </div>
  );
}