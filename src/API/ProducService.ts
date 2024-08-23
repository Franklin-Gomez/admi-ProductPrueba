import axios from "axios"
import { DraftproductSchema , productSchema, productsSchema , productType  } from "../Schema";
import { safeParse } from "valibot";
import { stringToBolean } from "../utils";


type dataProps = { 
    [k: string]: FormDataEntryValue
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

export const getSingleProduct = async ( id : productType['id']) => { 

    try {

        const url = `http://localhost:4000/api/products/${id}`

        const {data} = await axios( url )

        const resultado = safeParse( productSchema , data.data )

        if( resultado.success ) { 
            return resultado.output 
        }
        
    } catch (error) {
        console.log( error )
    }
}

export const updateProduct = async ( info   : dataProps   , id : productType['id']) => { 

    try {

        const url = `http://localhost:4000/api/products/${id}`

        const inputValidation = safeParse( productSchema , { 
            
            id : id ,
            name : info.name,
            price : +info.price,
            availability : stringToBolean( info.availability )
    
        })

        if ( inputValidation.success ) {

            await axios.put( url , inputValidation.output  )
            
        }

        
    } catch (error) {

        console.log(error)

    }

    return {}
}