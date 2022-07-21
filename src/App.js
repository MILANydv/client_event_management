import { useEffect } from "react";

// react-router components
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Material Kit 2 React themes
import theme from "./assets/theme";
import HomePage from "./pages/LandingPages/HomePage";

// Material Kit 2 React routes
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Author from "./pages/Protected/Author";
import Dashboard from "./pages/Protected/Dashboard";
import routes from "./routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />

      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<HomePage />} />
        <Route path="/author" element={<Author />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
