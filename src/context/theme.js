import React, { useState } from "react";

// Creates a themeContext object
const ThemeContext = React.createContext();

// context provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const value = {
    theme,
    setTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>
}

export { ThemeContext, ThemeProvider }
