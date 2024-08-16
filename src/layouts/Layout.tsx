import { Outlet } from "react-router-dom"

export default function Layout() {
    return (

        <>
            <header>
            
                <div className=" container max-w-xl m-auto ">

                    Desde header

                </div>
                
            </header>

            <Outlet/>
        </>



    )
}
