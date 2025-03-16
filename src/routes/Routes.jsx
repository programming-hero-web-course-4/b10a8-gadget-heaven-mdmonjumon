import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../component/ErrorPage";
import AllProducts from "../component/AllProducts";
import ProductDetails from "../component/ProductDetails";
import Laptop from "../component/Laptop";
import Phones from "../component/Phones";
import Accessories from "../component/Accessories";
import Smartwatch from "../component/Smartwatch";
import Cart from "../component/Cart";
import Wishlist from "../component/Wishlist";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/fakeData.json'),
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/public/fakeData.json'),
                        element: <AllProducts></AllProducts>
                    },
                    {
                        path: '/laptop',
                        loader: () => fetch('/public/fakeData.json'),
                        element: <Laptop></Laptop>
                    },
                    {
                        path: '/phone',
                        loader: () => fetch('/public/fakeData.json'),
                        element: <Phones></Phones>

                    },
                    {
                        path: '/accessories',
                        loader: () => fetch('/public/fakeData.json'),
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/smartwatch',
                        loader: () => fetch('/public/fakeData.json'),
                        element: <Smartwatch></Smartwatch>
                    },
                ]
            },
            {
                path: '/statistics',
                element: <Statistics />,
                loader: () => fetch('/public/fakeData.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('/public/fakeData.json'),
            },
            {
                path: '/productDetails/:Id',
                loader: () => fetch('/public/fakeData.json'),
                element: <ProductDetails></ProductDetails>
            },
        ]

    }
])



export default routes;