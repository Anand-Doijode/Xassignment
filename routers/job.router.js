const router = require('express').Router();
const { checkSchema } = require('express-validator');

const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');
const { addJob, getJob, getJobById } = require('../handlers/job.handler');

router.post('/', checkSchema(jobSchema.createJob), validateSchema, addJob);

router.get('/:id', checkSchema(jobSchema.getJobById), validateSchema, getJobById);

router.get('/', checkSchema(jobSchema.getJob), validateSchema, getJob);

module.exports = router;
