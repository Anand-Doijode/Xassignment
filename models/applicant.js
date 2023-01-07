const mongoose = require('mongoose');

const { Schema } = mongoose;

const applicantSchema = new Schema({
  name: String,
  email: String,
  resume: String,
  coverLetter: String,
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
