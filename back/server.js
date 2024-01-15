const express = require("express");
const connectDB = require("./database");
const urlRoutes = require("./routes/urls");
app.use("/api/url", urlRoutes);
// Create Express app
const app = express();

// Connect to the database
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
