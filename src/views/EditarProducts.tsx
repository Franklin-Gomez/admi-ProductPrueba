import { Link , Form, LoaderFunctionArgs, useLoaderData, ActionFunctionArgs, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import { getSingleProduct, updateProduct } from "../API/ProducService"
import { productType } from "../Schema"
import Errormessage from "../components/Errormessage"

export const loader = async ( { params } : LoaderFunctionArgs) => { 

    if( params.id !==  undefined ) { 

        const product = await getSingleProduct( +params.id )

        return product
        
    }

    return{}
}

export const action = async ( { request , params } : ActionFunctionArgs) =>  { 

    const data =  Object.fromEntries( await request.formData() )

    let error = '';

    if( Object.values(data ).includes('') ) { 

        error = "llena todos los campos cachon hpta"
        return error

    }

    if(error.length) { 
        return error
    }

    if( params.id !== undefined) { 
        await updateProduct( data  , +params.id)
    }

    return redirect('/')
}

export default function EditarProducts() {

    const product = useLoaderData() as productType

    const error = useActionData() as String

    const availabilityOptions = [
        { name : "Disponible" , value : true },
        { name : "No Disponible" , value : false}
    ]


    return (

        <div className='bg-white rounded-2xl p-6'>

            <div className=" flex justify-between  ">
                <h1 className=" text-gray-700 font-black text-3xl p-2 " >Editar Productos</h1>

                <Link 
                to="/" 
                className="bg-slate-800 text-white rounded-xl font-black uppercase hover:bg-slate-400 content-center p-2  "
                > Inicio </Link>

            </div>

            { error && <Errormessage>{error}</Errormessage>}

            <Form method="POST">

                <Formulario
                    producto={product}
                />

                <div className="flex flex-col gap-2">

                    <label htmlFor="availability" className="font-bold mt-4"> Disponibilidad </label>

                    <select
                        id="availability"
                        name="availability"
                        className="bg-gray-100 p-2 rounded-xl"
                        defaultValue={ product.availability.toString() }
                    >

                       { availabilityOptions.map(( availability ) => ( 
                            <option 
                                value={availability.value.toString()}
                                key={availability.name}
                            >{availability.name}</option>
                        ))}

                    </select>

                </div>

                <input 
                    type="submit" 
                    value="Guardar Cambios"
                    className="mt-10 w-full bg-slate-800 text-white rounded-xl p-2 font-black uppercase hover:bg-slate-400 " 
                />

            </Form>

        </div>

    )
}
