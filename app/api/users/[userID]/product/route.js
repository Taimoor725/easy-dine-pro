import { Product } from "@/model/products"
import {NextResponse} from "next/server"

export async function GET(request,{params}){
   const {userID}=params

    try{
        const requiredProduct = await Product.find({
            userID:userID
        })
    console.log("Fetched \"Product of Specfic User\"")
    console.log(requiredProduct);
    return NextResponse.json(requiredProduct)
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Failed to fetched \"Product of Specfic User\"",success:false})
    }
    

}