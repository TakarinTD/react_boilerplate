const CustomError = require('../errors/CustomError');
const code = require('../errors/code');
const knowledgeDao = require('../daos/knowledge');

const getData = async ({ knowledgeId, listQuery }) => {
  const knowledge = await knowledgeDao.findKnowledge({ knowledgeId });
  if (!knowledge) {
    return null;
  }
  let { schema } = knowledge;
  let keyExist;
  if (Object.keys(listQuery).length) {
    Object.keys(listQuery).map((key) => {
      if (key === 'key') {
        keyExist = listQuery.key;
        return schema;
      }
      schema = schema.reduce((acc, cur) => {
        if (
          Object.prototype.hasOwnProperty.call(cur, key) &&
          cur[key] === listQuery[key]
        ) {
          return [...acc, cur];
        }
        return [...acc];
      }, []);
      return schema;
    });
    if (keyExist) {
      const result = schema.map((item) => {
        return item[keyExist];
      });
      return result;
    }
    const result = schema;
    return result;
  }
  const result = knowledge;
  return result;
};

const createKnowledge = async (createFields) => {
  const knowledge = await knowledgeDao.createKnowledge(createFields);
  return knowledge;
};

const getKnowledgeList = async () => {
  const knowledgeList = await knowledgeDao.findAll();
  return knowledgeList;
};

const updateKnowledge = async (knowledge, updateFields) => {
  if (!knowledge) {
    throw new CustomError(code.BAD_REQUEST, 'Knowledge is not exists');
  }
  await knowledgeDao.updateKnowledge(knowledge._id, updateFields);
};

const deleteKnowledge = async (knowledge) => {
  if (!knowledge) {
    throw new CustomError(code.BAD_REQUEST, 'Knowledge is not exists');
  }
  await knowledgeDao.deleteKnowledge(knowledge._id);
};
module.exports = {
  getData,
  createKnowledge,
  getKnowledgeList,
  updateKnowledge,
  deleteKnowledge,
};
