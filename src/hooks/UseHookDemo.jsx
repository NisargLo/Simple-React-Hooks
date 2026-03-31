import { createContext, use } from "react";

const ThemeContext = createContext("light");

function UseHookDemo() {
  const theme = use(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

export default UseHookDemo;
