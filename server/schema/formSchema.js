const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherEducation: {
    type: String,
    required: true,
  },
  fatherEducation: {
    type: String,
    required: true,
  },
  siblings: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  practiceDistance: {
    type: String,
    required: true,
  },
  finalRun: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
