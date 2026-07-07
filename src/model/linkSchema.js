import mongoose from "mongoose";

const linkSchema=new mongoose.Schema({
original:{type:String,required:true},
alias:{type:String,required:false,unique:true},
// short:{type:String,required:true},

},{
timestamps:true
})

export const Link = mongoose.model("Link",linkSchema);