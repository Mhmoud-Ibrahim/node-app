import mongoose from "mongoose";

 const noteScehma = new mongoose.Schema({
    title:String,
    content:String,
  
    
},{timestamps:true})
 const noteModel = mongoose.model('note',noteScehma)
 export default noteModel;