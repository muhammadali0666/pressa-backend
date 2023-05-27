const Joi = require("joi")

const userValidate = (data) => {
  const schema = Joi.object({
    id: Joi.string().min(3).required(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[A-Za-z]*$"))
      .required(),
    email: Joi.string().min(3).max(50).required().email(),
    // comfirm_password: Joi.ref('password'),
    // user_age: Joi.number().required(),
    // company_id: Joi.string().min(3).required(),
    // user_role: Joi.string().min(3).required(),
    // isLogged: Joi.boolean().required(),
    // sana: Joi.date().min('1-1-2000').max('12-31-2020')
  });

  return schema.validate(data);
};


module.exports = {
  userValidate,
}