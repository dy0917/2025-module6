import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "./pages/DashboardPage";
import AboutPage from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";

export function AppRoutes(props) {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<Home />} />

        {/* nested routes, matches on /dash/messages etc */}
        <Route path="dash" element={<DashboardPage />}>
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />

        {/* special route to handle if none of the above match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
