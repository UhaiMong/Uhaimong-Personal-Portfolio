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
        element: <Home />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/ai",
        element: <ChatBot />,
      },
      {
        path: "*",
        element: <p>404 Not Found!!</p>,
      },
    ],
  },
]);
export default router;
