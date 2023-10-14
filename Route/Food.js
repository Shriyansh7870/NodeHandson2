const express = require("express");
const router = express.Router();

router.get("/food", (req, res) => {
  res.send("This is the food route.");
});

module.exports = router;
