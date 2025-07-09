const getAll = (req, res) => {
  console.log('prueba');
  res.json('Todo bien');
};

const create = (req, res) => {
  res.status(201).json('Se crea el nuevo estudiante');
  console.log(req.body.name);
};

module.exports = { getAll, create };
