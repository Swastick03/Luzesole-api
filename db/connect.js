const mongoose = require("mongoose");


url = "mongodb+srv://swastickkumardey:0AP373aW8ZJTL8Eo@luzesole.jwsnwlq.mongodb.net/luzesole?retryWrites=true&w=majority&appName=luzesole"

const connectDB = async () => { // Using async/await for clarity (optional)
    console.log("Connecting to DB")
    return await mongoose.connect(url);
  };

module.exports = connectDB;