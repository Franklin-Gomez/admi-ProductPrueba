import {createBrowserRouter  } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import AddProducts from "./views/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                path : 'productos',
                element: <Products/>
            },
            {
                path : 'productos/agregar',
                element : <AddProducts/>
            }
        ]
    }
])