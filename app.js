const express = require("express");
const routers = require("./Routes/routes");
const connectMongoose = require("./Models/dbConnect");

const app= express();

//middlewares
app.use(express.json()); // to parse json data in request body
app.use(routers);


app.listen(2100, async()=>{
    await connectMongoose();
    console.log("Server is running on port 2100");
})