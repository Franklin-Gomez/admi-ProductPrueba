import { Link, useLoaderData } from "react-router-dom"
import { getAllProduct } from "../API/ProducService"
import { productsType } from "../Schema"
import ProductDetails from "../components/ProductDetails"


export const loader = async () => { 

    const data = await getAllProduct()

    return data
}


export default function Products() {

    const products = useLoaderData() as productsType
    


    return (
        <div className="bg-white rounded-2xl p-6">
            <div className=" flex justify-between  ">
                <h1 className=" text-gray-700 font-black text-3xl p-2 " >Productos</h1>

                <Link 
                to="/productos/agregar" 
                className="bg-slate-800 text-white rounded-xl font-black uppercase hover:bg-slate-400 content-center p-2  "
                > Agregar Productos </Link>

            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        { products.map(( product )  => (
                            
                            <ProductDetails
                                product={product}
                                key={product.id}
                            />

                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
