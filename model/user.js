import mongoose, { Schema } from "mongoose";
const UserSchema=new Schema(
    {
        name:{type:String,unique:true},
        email:{type:String,unique:true},
        password:String,
        PhoneNumber:Number,
        countery:String,
        profileURL:String
    }
)

export const User=mongoose.models.users || mongoose.model("users",UserSchema);