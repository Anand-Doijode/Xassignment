const StandardResponse = require('../utils/response');
const Job = require('../models/job');

module.exports = {
  addJob: async (req, res) => {
    const {
      title, description, email, requiredSkills, expLevel,
    } = req.body;

    const payload = {
      title,
      description,
      email,
      requiredSkills,
      expLevel,
    };
    try {
      Job.create(payload);
      return StandardResponse.success(res, {});
    } catch (error) {
      console.error('Error in addJob() ', error);
      StandardResponse.failure(res, error);
    }
  },

  getJob: async (req, res) => {
    const {
      title, description, email, requiredSkills, expLevel,
    } = req.query;

    const where = {};
    if (title) {
      where.title = title;
    }
    if (description) {
      where.description = description;
    }
    if (email) {
      where.email = email;
    }
    if (requiredSkills) {
      where.requiredSkills = { $in: requiredSkills.split(',') };
    }
    if (expLevel) {
      where.expLevel = expLevel.split(',');
    }

    try {
      const result = await Job.find(where).select({ _id: 0, __v: 0, applicants: 0 });
      return StandardResponse.success(res, result);
    } catch (error) {
      console.error('Error in getJob() ', error);
      StandardResponse.failure(res, error);
    }
  },

  getJobById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Job.findById(id).select({ _id: 0, __v: 0 });
      if (!result) {
        return StandardResponse.failure(res, { msg: 'Resource Not Found' }, 404);
      }
      return StandardResponse.success(res, result.toJSON());
    } catch (error) {
      console.error('Error in getJobById: ', error);
      StandardResponse.failure(res, error);
    }
  },

  applyForJob: async (req, res) => {
    const {
      id, name, email, resume, coverLetter,
    } = req.body;
    const payload = {
      name, email, resume, coverLetter,
    };

    try {
      const job = await Job.findById(id);
      const hasApplied = job.applicants.find((applicant) => applicant.email === email);
      if (hasApplied) {
        console.log(`${email} has already applied for the job ${id}`);
        return StandardResponse.failure(res, { msg: 'Already applied' });
      }

      job.applicants.push(payload);
      await job.save();
      return StandardResponse.success(res, {});
    } catch (error) {
      console.error('Error in applyForJob(): ', error);
      StandardResponse.failure(res, error);
    }
  },

  getApplicantsByJobId: async (req, res) => {
    const { jobId } = req.query;
    try {
      const result = await Job.findById(jobId).select({ _id: 0, __v: 0, 'applicants._id': 0 });
      return StandardResponse.success(res, result.toJSON());
    } catch (error) {
      console.error('Error in applyForJob(): ', error);
      StandardResponse.failure(res, error);
    }
  },

  deleteJobById: async (req, res) => {
    const { id } = req.params;
    try {
      await Job.deleteOne({ _id: id });
      return StandardResponse.success(res, {});
    } catch (error) {
      console.error('Error in deleteJobById(): ', error);
      StandardResponse.failure(res, error);
    }
  },

  updateJob: async (req, res) => {
    const { id } = req.params;
    const {
      title, description, email, requiredSkills, expLevel,
    } = req.body;

    const payload = {
      title,
      description,
      email,
      requiredSkills,
      expLevel,
    };
    try {
      const result = await Job.updateOne({ _id: id }, payload);
      console.log('result: ', result);
      return StandardResponse.success(res, {});
    } catch (error) {
      console.error('Error in updateJob(): ', error);
      StandardResponse.failure(res, error);
    }
  },

};
