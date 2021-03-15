const Knowledge = require('../models/knowledge');

const findAll = async () => {
  return Knowledge.find();
};

const createKnowledge = async (createFields) => {
  const knowledge = await Knowledge.create(createFields);
  return knowledge;
};

const findKnowledge = async (condition) => {
  const knowledgeSet = await Knowledge.findOne(condition).lean();
  return knowledgeSet;
};

const updateKnowledge = async (id, updateFields) => {
  const knowledge = await Knowledge.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
  return knowledge;
};

const deleteCampaign = async (id) => {
  await Knowledge.findByIdAndDelete(id);
};

module.exports = {
  findKnowledge,
  findAll,
  createKnowledge,
  updateKnowledge,
  deleteCampaign,
};
