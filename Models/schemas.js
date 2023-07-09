const mongoose = require ("mongoose");
const bcrypt = require ('bcrypt');


const userSchema= new  mongoose.Schema({
    username:{
        type: String,
        required:[true,"username is required"],
        unique : true,
        minlength:[3,"Minimum length is 3"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"Password is required"],
       }
})

userSchema.pre("save", async function(){  
    this.password= await bcrypt.hash(this.password, 10)
})

// post schema
const blogPostSchema= new mongoose.Schema({
    Blogger:{
        type: String,
        required:[true,"username cannot be empty"],
        ref:"User",
    },
    title:{
        type:String,
        maxlength:[150,"Title can contain only 150 characters"],
        trim:true
    },
    contents:{
        type:String,
    }
})

module.exports.User= new mongoose.model("User", userSchema);
module.exports.blogPost =new mongoose.model('blogposts',blogPostSchema )



