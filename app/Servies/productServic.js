import { httpAxios } from "../back-end/httpHelper";

export async function addItem(product){
   const result =await httpAxios.post("/api/addProduct",product).then((response)=>response.data);
   return result
}