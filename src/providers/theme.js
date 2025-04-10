import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  console.log("Children", children);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </themeContext.Provider>
  );
};
