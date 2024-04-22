import { easydineDB } from "@/app/back-end/db"
import { User } from "@/model/user";
import {  NextResponse } from "next/server"
easydineDB();
export async function GET(request){
    let users=[];
    try{
        users = await User.find();
        console.log("Users Get");
        console.log(users);
        return NextResponse.json(users)
    }
    catch(error){
        return NextResponse.json({
            message : "Failed to GET users",
            success : false
        })
    }
}

export async function POST (request){

    try{
    const {name,email,password,PhoneNumber,countery,profileURL} = await request.json()
    const user = new User({name,email,password,PhoneNumber,countery,profileURL})
    const UserCreated=await user.save()
    console.log(UserCreated);
    return NextResponse.json(user)

    }
    catch(error){
        console.log("Failed to Create user")
        return NextResponse.json({
            message:"Failed to Create user",
            state:false
        })
    }
    
}



export function DELETE(){
    return NextResponse.json({
        message:"deleted",
        state:true
    })
}
export function PUT(){}

