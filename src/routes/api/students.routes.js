const router = require('express').Router();
const StudentsController = require('../../controllers/students.controller');

// /api/students
router.get('/', StudentsController.getAll);
router.post('/', StudentsController.create);
router.put('/:studentID', StudentsController.edit);
router.delete('/:studentID', StudentsController.remove);

module.exports = router;
