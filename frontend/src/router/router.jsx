import Footer from "../components/footer/Footer";
import { createBrowserRouter } from "react-router-dom"; 

export const router = createBrowserRouter ([
    {
        path: "/footer",
        element: "<Footer/>",

    }
]) ;

export default router;