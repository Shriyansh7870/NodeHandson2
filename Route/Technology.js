const express = require("express");
const router = express.Router();

router.get("/technology", (req, res) => {
  res.send("This is the technology route.");
});

module.exports = router;
