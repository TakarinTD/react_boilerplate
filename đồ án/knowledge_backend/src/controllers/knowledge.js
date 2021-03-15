const apiService = require('../services/knowledge');

const getKnowledge = (req, res) => {
  const { knowledge } = req;
  return res.send({ status: 1, result: knowledge, notSnakeCase: true });
};

const getKnowledgeList = async (req, res) => {
  const knowledgeList = await apiService.getKnowledgeList();
  return res.send({ status: 1, result: knowledgeList });
};

const createKnowledge = async (req, res) => {
  const { name, knowledgeId, dataStructure, schema } = req.body;
  const knowledge = await apiService.createKnowledge({
    name,
    knowledgeId,
    dataStructure,
    schema,
  });
  return res.send({ status: 1, result: knowledge });
};

const updateKnowledge = async (req, res) => {
  const { knowledge } = req;
  const { updateFields } = req.body;
  await apiService.updateKnowledge(knowledge, updateFields);
  return res.send({ status: 1 });
};

const deleteKnowledge = async (req, res) => {
  const { knowledge } = req;
  const { updateFields } = req.body;
  await apiService.updateKnowledge(knowledge, updateFields);
  return res.send({ status: 1 });
};

module.exports = {
  getKnowledge,
  getKnowledgeList,
  updateKnowledge,
  createKnowledge,
  deleteKnowledge,
};
