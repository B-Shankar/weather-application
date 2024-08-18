import { useEffect, useState } from "react";
import Home from "./component/Home";
import ThemeContext from "./context/ThemeContext";
import config from "./config/config";
// const API_KEY = config.apiID;
const App = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  // console.log(API_KEY);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default App;
