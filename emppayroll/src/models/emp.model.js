import { string } from "@hapi/joi";
import { Schema, model } from "mongoose";
const userSchema = new Schema({
     firstName:{
          type:String
     },
     lastName:{
          type:String
     },
     gender:{
          type:String
     },
     department:{
          type:String
     },
     salary:{
          type:String
     },
     company:{
          type:String
     },
},
    
     {
          timestamps: true
     

})
 export default model('EmpDetails',userSchema)