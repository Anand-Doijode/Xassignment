const router = require('express').Router();
const { checkSchema } = require('express-validator');

const StandardResponse = require('../utils/response');
const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');

router.post('/', checkSchema(jobSchema), validateSchema, (req, res) => {
  StandardResponse.success(res, {});
});

module.exports = router;
