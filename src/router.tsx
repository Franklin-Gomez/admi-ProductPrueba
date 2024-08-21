import {createBrowserRouter  } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products , { loader as producLoader} from "./views/Products";
import AddProducts, { action } from "./views/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                index : true,
                element: <Products/>,
                loader : producLoader
            },
            { 
                path : 'productos/agregar',
                element : <AddProducts/>,
                action : action
            }
        ]
    }
])