import { Link , Form } from "react-router-dom"
import Formulario from "../components/Formulario"

export default function EditarProducts() {
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



            <input 
                type="submit" 
                value="Guardar Cambios"
                className="mt-10 w-full bg-slate-800 text-white rounded-xl p-2 font-black uppercase hover:bg-slate-400 " 
            />

        </Form>



    </div>

  )
}
