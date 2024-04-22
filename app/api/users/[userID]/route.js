import { User } from "@/model/user";
import {  NextResponse } from "next/server"



export async function PUT(request,{params}){
    const {userID}=params
    const  {name,password,phonenumber}=await request.json();
    try{
        const user=await User.findById(userID);
        user.name=name;
        user.password=password;
        user.phonenumber=phonenumber;
        const UpDatedUser=await user.save()
        return NextResponse.json(UpDatedUser);

    
    }
    catch(error){
        console.log(error)
        return NextResponse({
            message:"Fail to Update User",
            success:false,
        })
    }
}


export async function GET(request,{params}){
    const {userID}=params
    try{
        const singalUser=await User.findById(userID);
        return NextResponse.json(singalUser);
    
    }
    catch(error){
        return NextResponse({
            message:"Fail to find user",
            success:false,
        })
    }
}

export async function DELETE (request,{params}){
    const {userID}=params;

    try{
        await User.deleteOne({
            _id:userID,
        })

        return NextResponse.json({
            message : "User deleted",
            success : true, 
        })
    }
    catch(error){
        return NextResponse.json({
            message:'Failed to delete user',
            success:false,
        })
    }
}