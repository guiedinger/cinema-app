import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9E10',
      logoText: '#FFF'
    },
    secondary: {
      main: '#FF9E10',
    },
  },
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}