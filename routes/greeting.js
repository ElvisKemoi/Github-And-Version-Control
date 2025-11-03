const express = require("express");
const router = express.Router();

// Example route: http://localhost:3000/hello?name=ElvisKemoi
router.get("/", (req, res) => {
  const name = req.query.name || "Guest";
  res.json({ message: `Hello, ${name}! Welcome to my Node.js app.` });
});

module.exports = router;
