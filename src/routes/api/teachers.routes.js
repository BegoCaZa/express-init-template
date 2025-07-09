const router = require('express').Router();

const TeachersController = require('../../controllers/teachers.controller');

router.get('/', TeachersController.getAll);
router.get('/teacherID', TeachersController.getById);

module.exports = router;
