const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema({
  title: String,
  description: String,
  email: String,
  requiredSkills: [String],
  expLevel: Number,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
