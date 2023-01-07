const StandardResponse = require('../utils/response');
const Job = require('../models/job');

module.exports = {
  addJob: async (req, res) => {
    const { title, description, email } = req.body;
    const payload = {
      title,
      description,
      email,
    };
    try {
      const job = new Job(payload);
      job.save();
      return StandardResponse.success(res, {});
    } catch (error) {
      StandardResponse.failure(res, error);
    }
  },
};
