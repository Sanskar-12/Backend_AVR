import mongoose from "mongoose";

const productsScehma=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    buyprice:{
        type:Number,
        required:true,
    },
    saleprice:{
        type:Number,
        required:true,
    },
    categorie:{
        type:String,
        enum:["Consumable","NonConsumable","Maintenance"],
        default:"Consumable",
        required:true,
    },
    media_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Media",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


})

export const Products=mongoose.model("Products",productsScehma)