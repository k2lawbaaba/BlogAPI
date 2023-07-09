require("dotenv").config();
const mongoose =require('mongoose');


const url= process.env.COMPASS || process.env.DATABASE;

const connectMongoose= ()=>{
   return mongoose.connect(url)
   .then(()=>{
       console.log("Database is connected...");
   })
}
module.exports=connectMongoose;