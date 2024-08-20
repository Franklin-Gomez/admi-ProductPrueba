import {createBrowserRouter  } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import AddProducts, { action } from "./views/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                path : '/',
                element: <Products/>
            },
            { 
                path : 'productos/agregar',
                element : <AddProducts/>,
                action : action
            }
        ]
    }
])