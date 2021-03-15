const mongoose = require('mongoose');

const knowledgeSchema = new mongoose.Schema(
  {
    name: String,
    knowledgeId: String,
    dataStructure: {},
    schema: {},
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Knowledge', knowledgeSchema);
