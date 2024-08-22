import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { getAllProduct } from "../API/ProducService"
import { productsType } from "../Schema"
import { Form } from "react-router-dom"


export const loader = async () => { 

    const data = await getAllProduct()

    return data
}


export default function Products() {

    const products = useLoaderData() as productsType
    
    const navigate = useNavigate()

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

                            <tr className="border-b text-center" >

                                <td className="p-3 text-lg text-gray-800">
                                    {product.name}
                                </td>

                                <td className="p-3 text-lg text-gray-800">
                                    {product.price}
                                </td>

                                <td className="p-3 text-lg text-gray-800">
                                    {product.availability ? 'true' : 'false'}
                                </td>

                                <td className="p-3 text-lg text-gray-800 ">
                                    
                                    <div className="flex justify-evenly">

                                        <button 
                                            onClick={() => navigate(`/productos/editar/${product.id}`)}
                    
                                            className="bg-slate-800 text-white rounded-md font-medium uppercase  hover:bg-slate-400 content-center p-2"
                                        > { "Editar" } </button>

                                        <Form>
                                            <input 
                                                type="submit" 
                                                value={'eliminar Producto'} 
                                                className="bg-red-800 text-white rounded-md  font-medium uppercase hover:bg-red-400 content-center p-2"
                                            />
                                        </Form>
                                        
                                    </div>


                                </td>

                            </tr> 

                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
