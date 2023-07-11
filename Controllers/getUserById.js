/*
**GET /api/users/:id**: Requires authentication via a JWT token. 
Accepts a user ID as a parameter. It should verify the token, 
retrieve the user profile from the database that matches the provided ID, 
and return a JSON response with the user profile.
*/

const {User}= require('../Models/schemas');


const getUserbyId= async (req, res)=>{

    try {
        const Profile= await User.findById({_id:req.user},'username password');
        res.status(201).json({Profile});
    } catch (error) {
        res.status(403).json({error});
    }
    
}

module.exports=getUserbyId;