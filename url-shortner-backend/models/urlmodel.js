import mongoose from 'mongoose'
 const urlSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true 
    }
 })
 const urlModel=mongoose.model("url",urlSchema);
 export default urlModel;
 