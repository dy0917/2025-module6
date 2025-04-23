import { useState, createContext } from "react";

export const UserContext = createContext();
// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  // helper boolean to tell if we’re currently in dark mode

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
