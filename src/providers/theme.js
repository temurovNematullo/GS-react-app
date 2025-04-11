import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme, setUser, user }}>
      {children}
    </themeContext.Provider>
  );
};
