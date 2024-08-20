import { PropsWithChildren } from "react"

export default function Errormessage( { children }  : PropsWithChildren) {
    return (
        <div className=" w-full bg-red-800 text-white rounded-xl p-2 font-black uppercase text-center mt-3 ">
            {children}
        </div>
    )
}
