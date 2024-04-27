import mongoose, { Schema }  from "mongoose";

const AddProductSchema=new Schema({
    
    name:{type:String,required:true},
    price:{type:Number,required:true},
    productNumber:String,
    productImgURL:{type:String},
    discription:String,
    discount:Number,
    category:{type:String,required:true},
    quantity:{type:Number,required:true},
    // Stock:{type:String,enum:["Avalabel","Out of Stock"],default:"Avalabel"},
    ingrediants:String,
    collections:String,
    currancy:String,
    userID:{type:mongoose.ObjectId,required:true}
})

export const Product=mongoose.models.product || mongoose.model("product",AddProductSchema)

// {"name":"pizza",
//     "price":"10$", 
//     "productImgURL":"https/abcd.com",
//     "discription":"this the best pizza in the whole world",
//     "discount":10,
//     "category":"fast food",
//     "quantity":20,
//     "Stock":"Avalabel",
//     "userID":"661096576d2335d36d41d594"

// }