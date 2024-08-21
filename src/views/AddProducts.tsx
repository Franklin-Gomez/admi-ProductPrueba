import Formulario from "../components/Formulario"
import { ActionFunctionArgs, Form , Link , useActionData } from "react-router-dom"
import Errormessage from "../components/Errormessage"
import { addProduct } from "../API/ProducService";

// funcion para procesar los datos
export async function action ( { request } : ActionFunctionArgs) { 

  const data = Object.fromEntries( await request.formData() )

  let error = "";

  // validamos los campos
  if( Object.values(data).includes('') ){
    error = 'llena los campos cachon'
    return error
  }
  
  await addProduct( data )

  return error
}

export default function AddProducts() {

  const errors = useActionData()  as string

  return (

    <div className=" bg-white rounded-2xl p-6">

      <div className=" flex justify-between  ">
        <h1 className=" text-gray-700 font-black text-3xl p-2 " > Registrar Productos</h1>

        <Link 
          to="/" 
          className="bg-slate-800 text-white rounded-xl font-black uppercase hover:bg-slate-400 content-center p-2  "
        > Inicio </Link>

      </div>


      { errors  &&  <Errormessage> {errors} </Errormessage>  }
      
      <Form method="POST" className="p-3">
          
        <Formulario />

        <input 
          type="submit" 
          value={"Agregar Producto"} 
          className=" mt-10 w-full bg-slate-800 text-white rounded-xl p-2 font-black uppercase hover:bg-slate-400 "  
        />

      </Form>

    </div>

  )

}
