const mongoose = require ("mongoose");
const bcrypt = require ('bcrypt');


const userSchema= new  mongoose.Schema({
    username:{
        type: String,
        required:[true,"username is required"],
        unique : true,
        minlength:[3,"Minimum length is 3"],
        lowercase:true
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

userSchema.statics.login= async function(username, password){
 const user= await this.findOne({username});
 if(user){
    const isMatch= await bcrypt.compare(password, user.password);
    if(isMatch){
        return user;
    }
    throw new Error("Incorrcect password");
 }
 throw new Error("Incorrect email");
}
// post schema
const blogPostSchema= new mongoose.Schema({
    BloggerID:{
        type: mongoose.ObjectId,
        required:[true,"username cannot be empty"],
        ref:"user",
    },
    Title:{
        type:String,
        maxlength:[150,"Title can contain only 150 characters"],
        trim:true
    },
    Contents:{
        type:String,
    },
    createAt:{
        type : Date,
    },
    oldTitle:{
        type: String,
    },
    oldContent:{
        type: String,
    },
    updatedAt:{
        type :Date
    }
})


module.exports.User= new mongoose.model("User", userSchema);
module.exports.blogPost =new mongoose.model('blogposts',blogPostSchema )



