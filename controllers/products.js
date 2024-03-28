const Product = require("../models/products")



const getAllproducts = async(req,res)=>{
    const {_id,brand,name,sort,select} = req.query;
    const queryObject = {};

    if(_id){
        queryObject._id = _id;
    }
    if(brand){
        queryObject.brand = {$regex:brand, $options:'i'};
    }

    if(name){
        queryObject.name = {$regex:name, $options:'i'};
    }

    let apidata = Product.find(queryObject);

    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix);
    }

    if(sort){
        let sortFix = sort.replace(","," ");
       
        apidata = apidata.sort(sortFix);
    }
    const data  = await apidata;
    res.status(200).json({data});
};

const getAllproductsTesting = async(req,res)=>{
    const data  = await Product.find(req.query);
    res.status(200).json({data});
};

module.exports = {getAllproducts,getAllproductsTesting}