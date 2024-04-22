import { User } from "@/model/user";
import  mongoose  from "mongoose"
export const easydineDB = async ()=>{
   
    try{
        //backend data base key
        const {connection}= await mongoose.connect("mongodb+srv://easy-dine-pro:easy-dine-pro@easy-dine-pro.fedagvb.mongodb.net/",{
            dbname:"easy-dine-work_manger"
        })
        console.log("DataBase Connected");
        // console.log("connection is done");
        // console.log(connection);

        // const user=User({
        //     name:"Taimoor",
        //     email:"taimoor@gmail.com",
        //     password:"taimoor",
        //     countery:"pakistan",
        //     profileURL:"https/abc.com"

        // })
        // await user.save();
        // console.log("user is created")
    }   
    catch(error){
        console.log("fail to connect")
        console.log(error)
    }
}