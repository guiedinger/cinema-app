import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  },
});

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState('/');

  useEffect(() => {
    if (location.pathname === "/favoritos") {
      setValue("/favoritos")
    } else {
      setValue("/")
    }
  }, [location]);

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        history.push(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Buscar" value="/" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favoritos" value="/favoritos" icon={<StarIcon />} />
    </BottomNavigation>
  );
}