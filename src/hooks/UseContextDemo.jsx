import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function DisplayTheme() {
  const theme = useContext(ThemeContext);
  return <span>Current theme: {theme}</span>;
}

function UseContextDemo() {
  return (
    <ThemeContext.Provider value="dark">
      <DisplayTheme />
    </ThemeContext.Provider>
  );
}

export default UseContextDemo;
