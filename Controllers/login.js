const {User}=require('../Models/schemas');
const validator = require("../Validators/Joi_validator");
const handleError = require('../handleErrors/handleError');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();



const login= async (req, res)=>{
    const {error, value}= validator.userValidator(req.body);
    if(error){
        const errors=handleError.JoiErrorHandler(error);
        res.status(403).json({errors});
    }
else{
    try {
        //check user credentials from db and return token or error message
        const isUser= await User.findOne({username: value.username});
        if(isUser){
            const isMatch= await bcrypt.compare(value.password, isUser.password);
            if(isMatch){
                // create jwt token for the logging
                const jwToken=  jwt.sign({ _id: isUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.cookie("jwToken", jwToken, {maxAge: 1000 * 60*60})
                res.status(201).send('Welcome...'+ isUser.username);
            }
            else{
                res.status(201).send('Invalid details');s
            }
        }
        else{
            res.status(200).send(value.username + " is not registered or changed");
        }
        
    } 
    
    catch (error) {
        const errors= handleError.dbSchemaErrors(error);
        res.status(400).send(errors);

    }
}
}
module.exports=login