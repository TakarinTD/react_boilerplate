const asyncMiddleware = require('./async');
const knowledgeDao = require('../daos/knowledge');

const getKnowledge = async (req, res, next) => {
  const knowledgeId = req.headers.knowledgeId || req.params.knowledgeId;
  const knowledge = await knowledgeDao.findKnowledge({ knowledgeId });
  if (knowledge) req.knowledge = knowledge;
  else req.knowledge = false;
  return next();
};

module.exports = asyncMiddleware(getKnowledge);
