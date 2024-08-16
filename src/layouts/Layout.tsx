import { Outlet } from "react-router-dom"

export default function Layout() {
    return (

        <>
            <header className=" bg-slate-800">

                <div className="max-w-4xl container mx-auto py-10">
                    
                    <h1 className=" text-white font-bold text-4xl ">
                        Administrador Productos
                    </h1>
                
                </div>


            </header>

            <main className=" container max-w-4xl mx-auto py-5 ">
                
                <Outlet/>

            </main>
        </>



    )
}
