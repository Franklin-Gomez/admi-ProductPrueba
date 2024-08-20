
export default function Form() {
    return (
        <div className=" flex flex-col gap-3  ">

            <div className="  flex flex-col gap-2 ">
                <label htmlFor="name" className="font-bold"> Nombre : </label>
                <input 
                    type="text" 
                    placeholder="Nombre del Producto" 
                    className="bg-gray-100 p-2 rounded-xl"
                    name="name"
                    id="name"
                />  
            </div>

            <div className=" flex flex-col gap-2">
                <label htmlFor="price" className="font-bold"> Precio : </label>
                <input 
                    type="number" 
                    placeholder="Precio del Producto" 
                    className="bg-gray-100 p-2 rounded-xl"
                    name="price"
                    id="price"
                    
                />
            </div>

        </div>
    )
}
