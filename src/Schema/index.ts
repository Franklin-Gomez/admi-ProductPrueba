import * as v from  'valibot';

export const DraftproductSchema = v.object({
    name : v.string(),
    price : v.number()
})

export const productSchema = v.object({
    name : v.string(),
    price: v.number(),
    availability : v.boolean(),
    createdAt : v.string(),
    updatedAt : v.string()
})

export type DraftproductType = v.InferOutput< typeof DraftproductSchema >

export type productType = v.InferOutput< typeof productSchema >