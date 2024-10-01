import { Schema, model, connect } from 'mongoose';

interface IProduct {
    name : string,
    price : number,
    availableQuantity : number,
    category : string,
    image : string
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price : { type : Number, required : true },
    availableQuantity : {type : Number, required : true},
    category : { type: String, required: true },
    image : {type : String}
})

const Product = model<IProduct>('Product', productSchema)

export default Product