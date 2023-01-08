const router = require('express').Router();
const { checkSchema } = require('express-validator');

const validateSchema = require('../middlewares/validateRequest');
const jobSchema = require('../middlewares/validationSchemas/job');
const jobHandler = require('../handlers/job.handler');

// Create a new Job Posting
router.post('/', checkSchema(jobSchema.createJob), validateSchema, jobHandler.addJob);

// Get Applicants List by Job ID
router.get('/applicants', checkSchema(jobSchema.getApplicantsByJobId), validateSchema, jobHandler.getApplicantsByJobId);

// Get Job by ID
router.get('/:id', checkSchema(jobSchema.getJobById), validateSchema, jobHandler.getJobById);

// Update Job by ID
router.put('/:id', checkSchema(jobSchema.updateJob), validateSchema, jobHandler.updateJob);

// Delete Job by ID
router.delete('/:id', checkSchema(jobSchema.deleteJobById), validateSchema, jobHandler.deleteJobById);

// Get Job by search criteria
router.get('/', checkSchema(jobSchema.getJob), validateSchema, jobHandler.getJob);

// Apply for a Job
router.post('/apply', checkSchema(jobSchema.applyForJob), validateSchema, jobHandler.applyForJob);

module.exports = router;
