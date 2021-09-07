import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '56px',
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Router>
      <Toolbar/>
      <Container maxWidth="md" className={classes.root}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/favoritos">
            <Favorites/>
          </Route>
        </Switch>
      </Container>
      <Footer/>
    </Router>
  )
}