import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Buy from "../../Pages/Buy/Buy";
import Details from "../../Pages/Buy/Details/Details";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Sell from "../../Pages/Sell/Sell";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/buy',
                element: <Buy></Buy>
            },
            {
                path: '/sell',
                element: <Sell></Sell>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/buy/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/buy/${params.id}`)
            }
        ]
    }
])

export default router;