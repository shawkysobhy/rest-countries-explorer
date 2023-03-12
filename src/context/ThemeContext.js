import React from 'react';
import { useState } from 'react';
const ThemeContext = React.createContext({
  darkMode: true,
  themeHandler: () => {},
});



export const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const themeHandler = () => {
    return setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, themeHandler: themeHandler }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
