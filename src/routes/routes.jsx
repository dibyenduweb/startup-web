import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/root";
import Home from "../Components/Home/Home";
import Teams from "../Components/Teams/Teams";
import Projects from "../Components/Projects/Projects";
import Services from "../Components/Services/Services";
import AboutUs from "../Components/About/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/teams",
        element: <Teams/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/service",
        element: <Services/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/contactus",
        element: <ContactUs/>,
      },
     
    ],
  },
]);
