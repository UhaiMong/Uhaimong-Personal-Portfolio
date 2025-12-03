import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Aboutme from "../pages/Aboutme";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import ChatBot from "../pages/ChatBot";

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
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/resume",
        Component: Resume,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/ai",
        Component: ChatBot,
      },
      {
        path: "*",
        element: <p>404 Not Found!!</p>,
      },
    ],
  },
]);
export default router;
