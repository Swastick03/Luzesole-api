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

const addNewProduct = async(req,res)=>{
    const data = await Product.create(req.body);
    res.status(200).json({data});
};

const updateProduct = async(req,res)=>{
    let data = await Product.findById(req.params.id);
    data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true, useFindAndModify:false,runValidators:true});
    res.status(200).json({data});
}

const deleteProduct = async(req,res)=>{
    let data = await Product.findById(req.params.id);

    if(!data){
        return res.status(500).json({success:false,message:"Product Not Found"});
    }
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({success:true,message:"Product deleted successfully"});
}

module.exports = {getAllproducts,getAllproductsTesting,addNewProduct,updateProduct,deleteProduct}