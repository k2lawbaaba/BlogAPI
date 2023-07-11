const {blogPost}= require('../Models/schemas');

const getPosts= async (req, res)=>{
    try {
        const Posts= await blogPost.find({});
        res.status(201).json({Posts});
    } catch (error) {
        res.status(403).send(error);
    }

}

module.exports= getPosts;