const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Todo bien");
});
module.exports = router;
