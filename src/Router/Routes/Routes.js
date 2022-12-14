import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Buy from "../../Pages/Buy/Buy";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UpdateMyReview from "../../Pages/MyReviews/UpdateMyReview/UpdateMyReview";
import NotFound from "../../Pages/NotFound/NotFound";
import Sell from "../../Pages/Sell/Sell";
import ServiceDetails from "../../Pages/Shared/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/buy/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://y-zeta-coral.vercel.app/buy/${params.id}`)
            },
            {
                path: '/sell',
                element: <PrivateRoute><Sell></Sell></PrivateRoute>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/my-reviews/:id',
                element: <PrivateRoute><UpdateMyReview></UpdateMyReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://y-zeta-coral.vercel.app/reviews/${params.id}`)
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
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;