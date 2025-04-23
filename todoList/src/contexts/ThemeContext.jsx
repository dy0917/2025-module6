import { useContext, useState, createContext } from "react";
import { TodoContext } from "./TodoContext";

export const MyThemeContext = createContext();
// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState();
  const { todoList } = useContext(TodoContext);
  // helper boolean to tell if we’re currently in dark mode
  console.log("theme", todoList);
  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
}
