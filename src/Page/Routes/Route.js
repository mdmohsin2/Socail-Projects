import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../About/About";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default router;