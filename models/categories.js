import mongoose from "mongoose";

const categoriesScehma=new mongoose.Schema({
    categoryname:{
        type:String,
        required:true,
    }
})

export const Categories=mongoose.model("Categories",categoriesScehma)