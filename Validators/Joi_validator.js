const Joi = require("joi");


//validator of user sign up and login
module.exports.userValidator= (data)=>{
    const schema =Joi.object({
        username:Joi.string()
        .required()
        .trim()
        .min(3)
        .messages({
            'any.required': `Username is required`,
            'string.base': `Username can only contsin letters and numbers`,
            'string.empty':'Please enter a valid Username',
            'string.min': `Minimum of 3 characters`
        }),
        password:Joi.string()
        .required()
        .min(8)
        .trim()
        .pattern(new RegExp(/(?=.*[A-Z])[a-zA-Z0-9]+[\#\@\$\%\&\*\(\)\>\<\~\{\}]+/))
        .messages({
            'string.pattern.base': `Password must contain atleast one capital letter and one special character`,
            'any.required': `This field is required`,
            'string.min': `Password length must at least be 8 characters long`
        }),
    });
    return schema.validate(data);
}

//validator for user id for blog posting
module.exports.postValidator=(data)=>{
    schema=Joi.object({
        id:Joi.string()
        .required()
        .trim()
        .messages({
            'any.required': `'id' parameter missing.`,
            'string.base':`'id' should contain alphanumeric values.`
        }),
        title:Joi.string()
        .required()
        .max(150)
        .trim()
        .messages({
            'string.base':`Title can only contain letters,numbers and special characters`,
            'any.required': `Title can not be empty`,
            'string.max': `Title can only contain 150 characters`
        }),

        fields:Joi.string()
        .required()
        .trim()
        .message({
            'any.required': `Fields are mandatory to post the Blog`
        })
    })

    return schema.validate(data);
}