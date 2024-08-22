import { Link , Form, LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import Formulario from "../components/Formulario"
import { getSingleProduct } from "../API/ProducService"

export const loader = async ( { params } : LoaderFunctionArgs) => { 


    if( params.id !==  undefined ) { 

        const product = await getSingleProduct( +params.id )

        return product
        
    }

    return{}
}

export default function EditarProducts() {

    const product = useLoaderData()

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

            <Form>

                <Formulario/>

                <div className="flex flex-col gap-2">
                    <label htmlFor="availability" className="font-bold mt-4"> Disponibilidad </label>

                    <select
                        id="availability"
                        name="availability"
                        className="bg-gray-100 p-2 rounded-xl"
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
