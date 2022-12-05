import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const ColorModeContext = React.createContext({});

const ColorModeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    if (colorMode === "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };
  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  return useContext(ColorModeContext);
};

export { ColorModeContext, ColorModeContextProvider };
