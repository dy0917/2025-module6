import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes></AppRoutes>
  </BrowserRouter>
);
