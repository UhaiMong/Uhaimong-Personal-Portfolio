import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Aboutme from "../pages/Aboutme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/aboutme",
        Component: Aboutme,
      },
      {
        path: "*",
        element: <p>404 Not Found!!</p>,
      },
    ],
  },
]);
export default router;
