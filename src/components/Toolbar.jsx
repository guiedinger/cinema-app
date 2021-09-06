import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontFamily: 'Arvo',
  },
  logoLink: {
    textDecoration: 'none',
    color: theme.palette.primary.logoText,
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar className={classes.root}>
          <Link to="/" className={classes.logoLink}>
            <Typography variant="h4" className={classes.logo}>
              Cinema APP
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}