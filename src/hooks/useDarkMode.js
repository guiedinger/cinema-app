import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const getPalette = (isDarkMode) => ({
  palette: {
    type: isDarkMode ? "dark" : "light",
    ...(isDarkMode
      ? {
          primary: {
            main: "#FF9E10",
            appBar: "#424242",
            logoText: "#FF9E10",
          },
          secondary: {
            main: "#FF9E10",
          },
        }
      : {
          primary: {
            main: "#FF9E10",
            appBar: "#FF9E10",
            logoText: "#FFF",
          },
          secondary: {
            main: "#FF9E10",
          },
        }),
  },
});

export default () => {
  const savedMode = localStorage.getItem("theme");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });
  const defaultTheme =
    (savedMode !== null && savedMode) || (prefersDarkMode && "dark") || "light";
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme === "dark");

  const toogleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  return { isDarkMode, toogleIsDarkMode, getPalette };
};
