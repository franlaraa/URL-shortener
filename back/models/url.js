const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
    visitHistory: [{ timestamp: { type: Date, required: true } }],
  },
  { timestamps: true }
);
const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
