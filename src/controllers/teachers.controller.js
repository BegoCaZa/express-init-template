const getAll = (req, res) => {
  res.json('Se recuperan todos los profesores');
};

const getById = (req, res) => {
  const { teacherID } = req.params;

  res.json(`Se ha recuperado el profesor con el ID ${teacherID}`);
};

module.exports = { getAll, getById };
