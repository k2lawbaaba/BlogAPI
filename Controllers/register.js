const { User } = require("../Models/schemas");
const Validator = require("../Validators/Joi_validator");
const handleError= require("../handleErrors/handleError");
const register = async (req, res) => {
  const { error, value } = Validator.userValidator(req.body);
  
//   handling the middleware error: joi validation
  if (error) {
   const errors= handleError.JoiErrorHandler(error);
    res.status(403).send(errors);
  } 
  
  else {
    try {
      const user = new User({
        username: value.username.toLowerCase(),
        password: value.password,
      });
      await user.save();
      res.status(201).send("Account created");
    } catch (err) {
      if (err.code === 11000) {
        res.status(409).send("Username already exists");
      }
    }
  }
};

module.exports = register;
