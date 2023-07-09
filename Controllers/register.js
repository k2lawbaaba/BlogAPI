const schema= require('../Models/schemas');
const Validator = require('../Validators/Joi_validator');
const handleError = require('../handleErrors/handleError');

const register= async (req, res)=>{
const {error, value}= Validator.userValidator(req.body);
if(error){
    const errors= handleError.JoiErrorHandler(error);
    res.status(403).json({errors});
}
console.log(req.body);
 try {
    const user= new schema.User({
        username:value.username,
        password: value.password
    })
    await user.save();
    res.status(201).send("Account created")
    
 } catch (err) {
    const error= handleError.dbSchemaErrors(err);
    res.status(400).send(error);
    console.log(err);
 }

    res.status(201).send("registered")
}

module.exports=register;