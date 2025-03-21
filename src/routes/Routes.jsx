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
import Desktop from "../component/Desktop";
import Contact from "../pages/Contact";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../fakeData.json'),
                children: [
                    {
                        path: '/',
                        loader: () => fetch('../fakeData.json'),
                        element: <AllProducts></AllProducts>
                    },
                    {
                        path: '/laptop',
                        loader: () => fetch('../fakeData.json'),
                        element: <Laptop></Laptop>
                    },
                    {
                        path: '/phone',
                        loader: () => fetch('../fakeData.json'),
                        element: <Phones></Phones>

                    },
                    {
                        path: '/accessories',
                        loader: () => fetch('../fakeData.json'),
                        element: <Accessories></Accessories>
                    },
                    {
                        path: '/smartwatch',
                        loader: () => fetch('../fakeData.json'),
                        element: <Smartwatch></Smartwatch>
                    },
                    {
                        path: '/desktop',
                        loader: () => fetch('../fakeData.json'),
                        element:<Desktop></Desktop>
                    },
                ]
            },
            {
                path: '/statistics',
                element: <Statistics />,
                loader: () => fetch('../fakeData.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../fakeData.json'),
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/productDetails/:Id',
                loader: () => fetch('../fakeData.json'),
                element: <ProductDetails></ProductDetails>
            },
        ]

    }
])



export default routes;