const router = require('express').Router();
const { checkSchema } = require('express-validator');

const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');
const { addJob, getJob, getJobById, applyForJob, getApplicantsByJobId, deleteJobById, updateJob } = require('../handlers/job.handler');

router.post('/', checkSchema(jobSchema.createJob), validateSchema, addJob);

router.get('/applicants', checkSchema(jobSchema.getApplicantsByJobId), validateSchema, getApplicantsByJobId);

router.get('/:id', checkSchema(jobSchema.getJobById), validateSchema, getJobById);

router.put('/:id', checkSchema(jobSchema.updateJob), validateSchema, updateJob);

router.delete('/:id', checkSchema(jobSchema.deleteJobById), validateSchema, deleteJobById);

router.get('/', checkSchema(jobSchema.getJob), validateSchema, getJob);

router.post('/apply', checkSchema(jobSchema.applyForJob), validateSchema, applyForJob);

module.exports = router;
