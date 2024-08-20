import Form from "../components/Form"

export default function addProducts() {
  return (

    <div className=" bg-white rounded-2xl p-6">

      <div className=" flex justify-between px-4">
        <h1 className=" text-gray-700 font-black text-3xl" > Registrar Productos</h1>

        <input 
          type="button" 
          value="Inicio" 
          className="bg-slate-800 text-white rounded-xl px-4 font-black uppercase hover:bg-slate-400"
        />

      </div>
        
      
      <form className="p-3">
          
        <Form/>

        <input 
          type="submit" 
          value={"Agregar Producto"} 
          className=" mt-10 w-full bg-slate-800 text-white rounded-xl p-2 font-black uppercase hover:bg-slate-400 "  
        />

      </form>

    </div>

  )

}
