import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { TodoProvider } from "./contexts/TodoContext";
import MyThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <MyThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </UserProvider>
    </MyThemeProvider>
  </TodoProvider>
);
