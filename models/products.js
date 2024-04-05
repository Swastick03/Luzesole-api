const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required: true,
    },
    brand:{
        type:String,
    },
    rating:{
        type:Number,
        default:4.2,
    },
    reviews:{
        type:Number,
    },
    stock:{
        type:Number,
    },
    price: {
        type: Number,
        required:[true,"price must be provided"],
    },
    colour: {
        type:String,
    },
    Available_colour: {
        type: [String],
        validate: {
          validator: (v) => Array.isArray(v) && v.length > 0,
          message: props => `${props.value} must be a non-empty array of colors`
        }
      },
    description:{
        type:String,
    },
    img_ref:{
        type:String,
        default:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4fe47a4-6eaf-4df6-9684-9586e1a2596e/jumpman-mvp-shoes-JV1HCs.png",
        
    },
    img1:{
        type:String,

    },
    img2:{
        type:String,
    },
    img3:{
        type:String,
    }
});

module.exports = mongoose.model("products",productSchema);