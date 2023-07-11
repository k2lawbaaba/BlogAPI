const Joi = require("joi");


//validator of user sign up and login
module.exports.userValidator= (data)=>{
    schema =Joi.object({
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
            'any.required': `Password is required`,
            'string.min': `Password length must at least be 8 characters long`
        }),
    });
    return schema.validate(data);
}

//validator for user id for blog posting
module.exports.postValidator=(data)=>{
    schema=Joi.object({
        Title:Joi.string()
        .required()
        .max(150)
        .trim()
        .messages({
            'string.base':`Title can only contain letters,numbers and special characters`,
            'any.required': `Title can not be empty`,
            'string.max': `Title can only contain 150 characters`
        }),

        Content:Joi.string()
        .required()
        .trim()
        .messages({
            'any.required': `Content is mandatory to post the Blog`
        })
    })

    return schema.validate(data);
}

module.exports.PostIDValidation=(data)=>{
    schema=Joi.object({
        Post_Id : Joi.string()
        .required()
        .messages({
            'any.required': `Post ID is required`
        }),
    })
    return schema.validate(data);
}

module.exports.updatePostVAlidate=(data)=>{
    schema=Joi.object({
        Post_Id : Joi.string()
        .required()
        .messages({
            'any.required': `Post ID is required`
        }),

        Title:Joi.string()
        .required()
        .max(150)
        .trim()
        .messages({
            'string.base':`Title can only contain letters,numbers and special characters`,
            'any.required': `Title can not be empty`,
            'string.max': `Title can only contain 150 characters`
        }),

        Content:Joi.string()
        .required()
        .trim()
        .messages({
            'any.required': `Content is mandatory to post the Blog`
        })
    })
    return schema.validate(data)
}

module.exports.updateUserValidation=(data)=>{
    schema =Joi.object({
        username:Joi.string()
        .trim()
        .min(3)
        .messages({
            'string.base': `Username can only contsin letters and numbers`,
            'string.empty':'Please enter a valid Username',
            'string.min': `Minimum of 3 characters`
        }),
        password:Joi.string()
        .min(8)
        .trim()
        .pattern(new RegExp(/(?=.*[A-Z])[a-zA-Z0-9]+[\#\@\$\%\&\*\(\)\>\<\~\{\}]+/))
        .messages({
            'string.pattern.base': `Password must contain atleast one capital letter and one special character`,
            'string.min': `Password length must at least be 8 characters long`
        }),
    });
    return schema.validate(data);
}