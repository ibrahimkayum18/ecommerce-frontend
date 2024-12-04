import { createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/Page/Home/Home";
import AboutUs from "../src/Page/AboutUs/AboutUs";
import ContactUs from "../src/Page/ContactUs/ContactUs";
import LogIn from "../src/Page/LogIn/LogIn";
import Register from "../src/Page/Register/Register";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default Route;