import Formulario from "../components/Formulario"
import { Form , Link } from "react-router-dom"


export async function action () { 
  console.log('desde actions...')

  return {}
}

export default function AddProducts() {

  return (

    <div className=" bg-white rounded-2xl p-6">

      <div className=" flex justify-between  ">
        <h1 className=" text-gray-700 font-black text-3xl p-2 " > Registrar Productos</h1>

        <Link 
          to="/" 
          className="bg-slate-800 text-white rounded-xl font-black uppercase hover:bg-slate-400 content-center p-2  "
        > Inicio </Link>

      </div>
        
      
      <Form method="post" className="p-3">
          
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
