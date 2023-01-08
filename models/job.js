const mongoose = require('mongoose');

const { Schema } = mongoose;
const { applicantSchema } = require('./applicant');

const jobSchema = new Schema({
  title: String,
  description: String,
  email: String,
  requiredSkills: [String],
  expLevel: Number,
  applicants: [applicantSchema],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
