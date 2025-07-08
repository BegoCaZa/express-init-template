const router = require("express").Router();
const StudentsController = require("../../controllers/students.controller");

router.get("/", StudentsController.getAll);

module.exports = router;
