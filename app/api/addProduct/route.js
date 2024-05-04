import { easydineDB } from "@/app/back-end/db";
import { Product } from "@/model/products";
import { NextResponse } from "next/server";

easydineDB();

// Get all the Products
export async function GET(request){
    let allProducts=[];
    try{
        allProducts = await Product.find();
        console.log("All products");
        console.log(allProducts);
        return NextResponse.json(allProducts)
    }
    catch(error){
        return NextResponse.json({
            message : "Failed to GET Products",
            success : false
        })
    }
}




// Add the product
export async function POST(request) {
   
    try{
        const { name, price, productImgURL, discription, discount, category, quantity, Stock, userID } = await request.json();
        const product = new Product({name, price, productImgURL, discription, discount, category, quantity, Stock, userID})
        const productAdded = await product.save();
        console.log(productAdded)
        return NextResponse.json(productAdded,{success:true})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({message:"Failed to add product", success:false})
    }
}

