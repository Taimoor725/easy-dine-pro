import { Product } from "@/model/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { productID } = params
    try {
        const singelProduct =await Product.findById(productID);
        console.log("Product Got")
        console.log(singelProduct)
        return NextResponse.json(singelProduct);
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "fail to Get the singel product",
            success: false
        })
    }
}

export async function DELETE(request,{params}) {
    const {productID}=params;
    try{
        await Product.deleteOne({
            _id:productID,
        })
        console.log("Product Deleted");
        return NextResponse.json({message:"Product Deleted",success:true});
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Failed to delet product",success:false})
    }
}
export async function PUT (request,{params}) {
    const {productID}=params;
    const{name,price,discount,quantity,Stock}=await request.json();
    try{
        const product= await Product.findById(productID);
        product.name=name;
        product.price=price;
        product.discount=discount;
        product.quantity=quantity;
        product.Stock=Stock;
        const updatedProduct=await product.save();
        console.log("product profile is updated");
        console.log(updatedProduct)
        return NextResponse.json(updatedProduct,{message:"product profile update",success:true})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Failed to Update product Profile",
    success:false})
    }
 }