const router = require('express').Router();
const { checkSchema } = require('express-validator');

const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');
const jobHandler = require('../handlers/job.handler');

router.post('/', checkSchema(jobSchema.createJob), validateSchema, jobHandler.addJob);

router.get('/applicants', checkSchema(jobSchema.getApplicantsByJobId), validateSchema, jobHandler.getApplicantsByJobId);

router.get('/:id', checkSchema(jobSchema.getJobById), validateSchema, jobHandler.getJobById);

router.put('/:id', checkSchema(jobSchema.updateJob), validateSchema, jobHandler.updateJob);

router.delete('/:id', checkSchema(jobSchema.deleteJobById), validateSchema, jobHandler.deleteJobById);

router.get('/', checkSchema(jobSchema.getJob), validateSchema, jobHandler.getJob);

router.post('/apply', checkSchema(jobSchema.applyForJob), validateSchema, jobHandler.applyForJob);

module.exports = router;
