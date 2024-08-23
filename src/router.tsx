import {createBrowserRouter  } from "react-router-dom";
import Layout from "./layouts/Layout";
import AddProducts, { action } from "./views/AddProducts";
import Products , { loader as productLoader , action as ProductAction  } from "./views/Products";
import EditarProducts , { loader as editarLoader , action as editarAction } from "./views/EditarProducts";
import { action as DeleteProductsAction } from "./views/deleteProducts";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                index : true,
                element: <Products/>,
                loader : productLoader,
                action : ProductAction
            },
            { 
                path : 'productos/agregar',
                element : <AddProducts/>,
                action : action
            },
            { 
                path : 'productos/editar/:id',
                element : <EditarProducts/>,
                loader : editarLoader,
                action : editarAction
            },
            {
                path : 'productos/delete/:id',
                action : DeleteProductsAction
            }
        ]
    }
])