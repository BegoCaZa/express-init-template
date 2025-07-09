const router = require("express").Router();
const StudentsController = require("../../controllers/students.controller");

// /api/students
router.get("/", StudentsController.getAll);
router.post("/", StudentsController.create);
// router.delete("/studentID", StudentsController.deleteById);

module.exports = router;
