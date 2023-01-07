const router = require('express').Router();
const jobRouter = require('./job.router');

router.use('/job', jobRouter);

module.exports = router;
