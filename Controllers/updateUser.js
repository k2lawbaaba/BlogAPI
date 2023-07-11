/*
*PUT /api/users/:id**: Requires authentication via a JWT token.
 Accepts a user ID as a parameter and a JSON payload containing 'username' and/or 'email' fields. 
 It should verify the token, find the user profile in the database that matches the provided ID, 
 update the profile with the new details, 
and return a JSON response with the updated user profile.
*/
const {User} =require("../Models/schemas");
const validator = require("../Validators/Joi_validator");
const handleError = require("../handleErrors/handleError");

const updateUser= async(req, res)=>{
    const {error, value} =validator.updateUserValidation(req.body);
    if(error){
        const errors=handleError.JoiErrorHandler(error);
        res.status(403).send(errors);
    }
    else{
    try {
        const userUpdate= await User.findByIdAndUpdate({_id:req.user}, {username:value.username, password:value.password});
        res.status(201).json({"Profile updated": userUpdate});
    } catch (error) {

        res.status(403).json({error});
    }
}
}

module.exports=updateUser;