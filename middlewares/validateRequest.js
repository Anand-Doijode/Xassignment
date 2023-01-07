const { validationResult } = require('express-validator');

const StandardResponse = require('../utils/response');

module.exports = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    console.error(`Validation Error: ${JSON.stringify(result.errors[0])}`);
    return StandardResponse.failure(res, result.errors[0]);
  }
  next();
};
