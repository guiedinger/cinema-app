import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.appBar,
  },
  root: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontFamily: "Arvo",
  },
  logoLink: {
    textDecoration: "none",
    color: theme.palette.primary.logoText,
  },
  themeToggle: {
    position: "absolute",
    top: "7px",
    bottom: "7px",
    right: "5px",
  },
}));

export default ({ useDarkMode }) => {
  const { isDarkMode, toogleIsDarkMode } = useDarkMode;
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar className={classes.root}>
          <Link to="/" className={classes.logoLink}>
            <Typography variant="h4" className={classes.logo}>
              Cinema APP
            </Typography>
          </Link>
        </Toolbar>
      </Container>
      <IconButton className={classes.themeToggle} onClick={toogleIsDarkMode}>
        {isDarkMode ? (
          <Brightness3Icon color="primary" />
        ) : (
          <Brightness7Icon className={classes.logoLink} />
        )}
      </IconButton>
    </AppBar>
  );
};
