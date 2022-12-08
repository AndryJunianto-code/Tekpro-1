import React, { useContext, useState, useEffect } from "react";

const ColorModeContext = React.createContext({});

const ColorModeContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    if (colorMode === "light") {
      localStorage.setItem("isDarkMode", true);
      setColorMode("dark");
    } else {
      localStorage.setItem("isDarkMode", false);
      setColorMode("light");
    }
  };

  return (
    <ColorModeContext.Provider
      value={{ colorMode, toggleColorMode, setColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => {
  return useContext(ColorModeContext);
};

export { ColorModeContext, ColorModeContextProvider };
