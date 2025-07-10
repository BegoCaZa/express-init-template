const Student = require('../models/students.model');

const getAll = async (req, res) => {
  const students = await Student.find();

  res.json(students);
};

const create = async (req, res) => {
  //req.body-name,surname,phone,email

  const newStudent = await Student.create(req.body);

  res.status(201).json(newStudent);
};

const edit = async (req, res) => {
  //req.params - studentId
  const { studentID } = req.params;

  const updatedStudent = await Student.findByIdAndUpdate(studentID, req.body, {
    new: true
  });

  res.json(updatedStudent);
};

// const deleteById = (req, res) => {
//   const { studentID } = req.params;
//   const foundStudent = Student.find({ studentID });
//   console.log(foundStudent);
// };

module.exports = { getAll, create, edit };
