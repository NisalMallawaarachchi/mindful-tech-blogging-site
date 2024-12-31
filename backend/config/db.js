const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURL = process.env.URL;

mongoose.set("strictQuery", true,"setNewUrlParser",true);

const connection = async()=>{
    try{
        await mongoose.connect(dbURL);
        console.log("Mongodb connection established!");
    }catch(e){
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;