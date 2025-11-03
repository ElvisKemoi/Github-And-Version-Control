const express = require("express");
const app = express();
const greetingRoute = require("./routes/greeting");

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/hello", greetingRoute);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Simple Greeting App!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
