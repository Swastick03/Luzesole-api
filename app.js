const express =  require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/",(req,res)=>{
    res.send("Hi I am Live");
});

app.use("/api/products", products_routes);

const start = async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`I am connected to ${PORT} `);
        });
    } catch(error){
        console.log(error);
    }
}

start();