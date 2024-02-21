import { createBrowserRouter } from "react-router-dom"; 
import Footer from "../components/footer/Footer";

export const router = createBrowserRouter ([
    {
        path: "/navbar",
        element: "<Navbar/>",
    },
    {
        path: "/searchBar",
        element: "<SearchBar/>",
    },
    {
        path: "/home",
        element: "<Home/>",
    },
    {
        path: "/contact",
        element: "<Contact/>",
    },
    {
        path: "/footer",
        element: "<Footer/>",
    }
]) ;

export default router;