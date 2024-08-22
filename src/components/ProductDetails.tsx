import { Form, useNavigate } from "react-router-dom"
import { productType } from "../Schema"

type typesProducDetails = { 
    product : productType
}

export default function ProductDetails( { product } : typesProducDetails) {

    const navigate = useNavigate()

    return (

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

                    <Form
                        method="POST"
                        action={`/productos/delete/${product.id}`}

                    >
                        <input 
                            type="submit" 
                            value={'eliminar Producto'} 
                            className="bg-red-800 text-white rounded-md  font-medium uppercase hover:bg-red-400 content-center p-2"
                        />
                    </Form>

                </div>


            </td>

        </tr> 

    )
}
