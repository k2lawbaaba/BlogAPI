/*
**GET /api/users**: Requires authentication via a JWT token. 
It should verify the token, retrieve all user profiles from the database, 
and return a JSON response with the user profiles.
*/
const {User}=require("../Models/schemas");

const getAllUsers= async (req, res)=>{
    try {
        const users= await User.find({});
        res.status(201).json({users});
    } catch (error) {
        res.status(403).send(error);
    }
    // res.send("All users")
}

module.exports=getAllUsers;