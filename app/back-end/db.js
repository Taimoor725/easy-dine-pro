import { User } from "@/model/user";
import  mongoose  from "mongoose"
export const easydineDB = async ()=>{
   
    try{
        const {connection}= await mongoose.connect("mongodb+srv://easy-dine-pro:easy-dine-pro@easy-dine-pro.fedagvb.mongodb.net/",{
            dbname:"easy-dine-work_manger"
        })
        console.log("DataBase Connected");
    }   
    catch(error){
        console.log("fail to connect")
        console.log(error)
    }
}