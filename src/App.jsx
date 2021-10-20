import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useDarkMode from "./hooks/useDarkMode";
import Routes from "./Routes";

export default () => {
  const { isDarkMode, getPalette, toogleIsDarkMode } = useDarkMode();
  const theme = React.useMemo(
    () => createTheme(getPalette(isDarkMode)),
    [isDarkMode, getPalette]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes useDarkMode={{ isDarkMode, toogleIsDarkMode }} />
    </ThemeProvider>
  );
};
