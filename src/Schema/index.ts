import * as v from  'valibot';

export const DraftproductSchema = v.object({
    name : v.string(),
    price : v.number()
})

export const productSchema = v.object({
    id : v.number(),
    name : v.string(),
    price: v.number(),
    availability : v.boolean()
})

export const productsSchema = v.array( productSchema )



export type DraftproductType = v.InferOutput< typeof DraftproductSchema >

export type productType = v.InferOutput< typeof productSchema >

export type productsType = v.InferOutput< typeof productsSchema >

