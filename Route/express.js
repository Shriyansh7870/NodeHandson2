const express = require("express");
const router = express.Router();

router.get("/express", (req, res) => {
  res.send(
    "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
  );
});

module.exports = router;
