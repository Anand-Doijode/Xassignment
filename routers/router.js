const router = require('express').Router();
const jobRouter = require('./job.router');

router.use('/jobs', jobRouter);

module.exports = router;
