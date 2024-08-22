import axios from "axios"
import { DraftproductSchema , productsSchema } from "../Schema";
import { safeParse } from "valibot";


type dataProps = { 
    [k: string]: FormDataEntryValue;
}

export const addProduct = async ( info  : dataProps ) => { 

    try {
        
        const resultado = safeParse( DraftproductSchema , { 
            name : info.name,
            price : +info.price
        })
        
        if( resultado.success ) {          
            
            const url = "http://localhost:4000/api/products/"
            
            await axios.post( url , info)

        } else { 

            throw new Error('Datos no validos')
        
        }


    } catch (error) {
        
        console.log( error )

    }
}

export const getAllProduct = async () => { 


    try {

        const url = "http://localhost:4000/api/products/"

        const { data } = await  axios( url )


        const validacion = safeParse( productsSchema , data.data ) 

        if( validacion.success ) { 

            return validacion.output

        } else { 

            throw new Error('Hubo un error')

        }

    } catch (error) {
        console.log( error)
    }


}