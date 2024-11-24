const Joi = require('joi');

const validateCreateShoppingList = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    memberIds: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).optional(),
  });

  return schema.validate(data);
};

module.exports = { validateCreateShoppingList };
