const camelcaseKeys = require('camelcase-keys');

const camelCaseReq = (req, res, next) => {
  if (req.body.notCamelCase) {
    next();
    return;
  }
  req.query = camelcaseKeys(req.query, { deep: true });
  req.body = camelcaseKeys(req.body, { deep: true });
  next();
};

module.exports = camelCaseReq;
