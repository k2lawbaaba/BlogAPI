/*
7. **DELETE /api/posts/:id**: 
Requires authentication via a JWT token. 
Accepts a blog post ID as a parameter. 
It should verify the token, 
find the blog post in the database that matches the provided ID 
and belongs to the authenticated user,
 delete the post, and return a JSON response indicating success.
*/
const validate= require("../Validators/Joi_validator");
const handleError= require('../handleErrors/handleError');
const {blogPost}= require('../Models/schemas');


const deletePost= async (req, res)=>{
    const {error, value}= validate.PostIDValidation(req.body);
    if(error){
        const errors= handleError.JoiErrorHandler(error);
        res.status(403).send(errors);
    }
    else{
        try {
          const post=  await blogPost.findByIdAndDelete({_id: value.Post_Id});
           if(post){
               res.status(201).json("Post deleted successfully");
           }
           else{
            res.status(201).json("Post doesn't exist or already deleted.");
           }
          
        } catch (error) {
            console.log(error);
        }

    }

}
module.exports=deletePost;