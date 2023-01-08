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
    console.log('where: ', where);

    try {
      const result = await Job.find(where).select({ _id: 0, __v: 0 });
      return StandardResponse.success(res, result);
    } catch (error) {
      console.error('Error in getJob() ', error);
      StandardResponse.failure(res, error);
    }
  },

  getJobById: async (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);
    try {
      const result = await Job.findById(id).select({ _id: 0, __v: 0 });
      console.log('result: ', result);
      return StandardResponse.success(res, result.toJSON());
    } catch (error) {
      console.error('Error in getJobById: ', error);
      StandardResponse.failure(res, error);
    }
  },
};
