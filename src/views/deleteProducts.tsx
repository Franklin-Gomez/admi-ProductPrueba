import { ActionFunctionArgs, redirect } from "react-router-dom"
import { deleteProduct } from "../API/ProducService"

export const action = async ( { params }  : ActionFunctionArgs  ) => { 


    if( params.id !== undefined ) { 

        const data = +params.id;

        await deleteProduct( data );

    }

    return redirect('/')
}

export default function deleteProducts() {
  return (
    <div>
      
    </div>
  )
}
