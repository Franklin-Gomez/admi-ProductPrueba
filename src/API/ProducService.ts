import axios from "axios"


type dataProps = { 
    [k: string]: FormDataEntryValue;
}

export const addProduct = async ( data  : dataProps ) => { 

    const url = "http://localhost:4000/api/products/"

    try {   

        const response  =  await axios.post( url , data)
        console.log( response )

    } catch (error) {

        console.log( error )

    }

    return {}
}