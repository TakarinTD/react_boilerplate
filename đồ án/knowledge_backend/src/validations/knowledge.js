const { Joi, validate } = require('express-validation');

const createKnowledge = {
  body: Joi.object({
    name: Joi.string().required(),
    knowledgeId: Joi.string().required(),
    dataStructure: Joi.object(),
    schema: Joi.array().items(Joi.object()),
    notCamelCase: Joi.allow(),
  }),
};

module.exports = {
  createKnowledgeValidate: validate(createKnowledge, {
    keyByField: true,
  }),
};
