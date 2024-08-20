import { Link } from "react-router-dom"

export default function Products() {
    return (
        <div>
            <div className=" flex justify-between  ">
                <h1 className=" text-gray-700 font-black text-3xl p-2 " >Productos</h1>

                <Link 
                to="/productos/agregar" 
                className="bg-slate-800 text-white rounded-xl font-black uppercase hover:bg-slate-400 content-center p-2  "
                > Agregar Productos </Link>

            </div>
        </div>
    )
}
