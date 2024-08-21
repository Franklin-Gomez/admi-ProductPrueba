import axios from "axios"
import { DraftproductSchema, productSchema } from "../Schema";
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