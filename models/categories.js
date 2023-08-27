import mongoose from "mongoose";

const categoriesScehma=new mongoose.Schema({
    product_detail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
    }
})

export const Categories=mongoose.model("Categories",categoriesScehma)