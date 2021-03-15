const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const knowledgeController = require('../controllers/knowledge');
const getKnowledge = require('../middlewares/getKnowledge');
const { createKnowledgeValidate } = require('../validations/knowledge');

router.get(
  '/knowledge/:knowledgeId',
  getKnowledge,
  asyncMiddleware(knowledgeController.getKnowledge),
);
router.post(
  '/knowledge',
  createKnowledgeValidate,
  asyncMiddleware(knowledgeController.createKnowledge),
);
router.get('/knowledge', asyncMiddleware(knowledgeController.getKnowledgeList));
router.put(
  '/knowledge/:knowledgeId',
  getKnowledge,
  asyncMiddleware(knowledgeController.updateKnowledge),
);
router.delete(
  '/knowledge/:knowledgeId',
  getKnowledge,
  asyncMiddleware(knowledgeController.deleteKnowledge),
);

module.exports = router;
