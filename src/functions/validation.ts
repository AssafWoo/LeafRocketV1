  //validation
const Joi = require('@hapi/joi')

//validation for login
const loginValidation = (data:Request) => {
    const schema = Joi.object({
        email:Joi.string().min(5).email(),
        password:Joi.string().min(5).max(1024)
    })
    return schema.validate(data) // validates and returns an obj
}

//validation for register
const registerValidation = (data:Request)  => {
    const schema = Joi.object({
        username:Joi.string().min(2),
        email:Joi.string().min(5).email(),
        password:Joi.string().min(5).max(1024)
    })
    return schema.validate(data) // validates and returns an obj
}

export {registerValidation, loginValidation}