const mongoose = require("mongoose");

// Create URL Schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  urlCode: {
    type: String,
  },
  shortUrl: {
    type: String,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

// Create and export URL model
module.exports = mongoose.model("Url", urlSchema);
