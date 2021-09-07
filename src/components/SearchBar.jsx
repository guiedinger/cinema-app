import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    maxWidth: '600px',
  }
}));

export default ({ onChange }) => {
  const classes = useStyles();
  return (
    <TextField
        className={classes.root}
        label="Buscar"
        variant="outlined"
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
  );
}