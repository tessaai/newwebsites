import { Navigate, useRoutes } from "react-router-dom";
import BaseLayout from "../layouts/base/";
import SimpleLayout from "../layouts/simple/";
import About from "../pages/About";
import AboutSite from "../pages/AboutSite";
import Page404 from "../pages/Page404";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { element: <Navigate to="/about" />, index: true },
        { path: "/about", element: <About /> },
        { path: "/site", element: <AboutSite /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" />, status: 404 },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
      status: 404,
    },
  ]);

  return routes;
}
