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
      StandardResponse.failure(res, error);
    }
  },
};
