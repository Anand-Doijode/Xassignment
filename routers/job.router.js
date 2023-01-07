const router = require('express').Router();
const { checkSchema } = require('express-validator');

const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');
const { addJob } = require('../handlers/job.handler');

router.post('/', checkSchema(jobSchema), validateSchema, addJob);

module.exports = router;
