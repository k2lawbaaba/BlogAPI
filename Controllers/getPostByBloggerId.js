const {blogPost}= require('../Models/schemas');
const handleError = require("../handleErrors/handleError");

const getPostByBloggerId= async (req, res)=>{
    try {
        const post= await blogPost.find({BloggerID:req.user})
        res.status(201).json({"Posts":post});
    } catch (error) {
        const errors= handleError.dbSchemaErrors(error);
        res.status(403).json({errors});
    }
}

module.exports=getPostByBloggerId;