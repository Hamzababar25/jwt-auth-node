// app.js
const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
