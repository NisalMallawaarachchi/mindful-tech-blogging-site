const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnection = require("./config/db");
const routes = require("./routes/Blogs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

dbConnection();
app.get('/',(req,res)=>res.send("Welcome to Mindful Tech Blogging!"));

app.use(cors({origin:true,credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/api/blogs',routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});