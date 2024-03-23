const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:true,
    },
    name: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required:[true,"price must be provided"],
    },
    brand:{
        type:String,
    },
    rating:{
        type:Number,
        default:4.2,
    },
    colour: {
        type:String,
    },
    Available_colour: {
        type:String,
    },
    img_ref:{
        type:String,
        default:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4fe47a4-6eaf-4df6-9684-9586e1a2596e/jumpman-mvp-shoes-JV1HCs.png",
        
    }
});

module.exports = mongoose.model("products",productSchema);