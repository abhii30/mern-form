const asyncHandler = require("express-async-handler");
const Form = require("../schema/formSchema");

const getForms = asyncHandler(async (req, res) => {
  const forms = await Form.find({});
  res.json(forms);
});

const addForm = asyncHandler(async (req, res) => {
  const {
    name,
    grade,
    dob,
    motherName,
    fatherName,
    motherEducation,
    fatherEducation,
    siblings,
    studentId,
    religion,
    caste,
    category,
    location,
    school,
    city,
    district,
    state,
    practiceDistance,
    finalRun,
  } = req.body;
  const userExist = await Form.findOne({ name, dob });
  if (userExist) {
    res.status(400).send("User already exists");
  }
  const form = new Form({
    name,
    grade,
    dob,
    motherName,
    fatherName,
    motherEducation,
    fatherEducation,
    siblings,
    studentId,
    religion,
    caste,
    category,
    location,
    school,
    city,
    district,
    state,
    practiceDistance,
    finalRun,
  });
  const createdForm = await form.save();
  res.status(201).json(createdForm);
});

module.exports = { getForms, addForm };
