const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI =
  "mongodb+srv://franciscolaranatoli:5k94F6IDjTKWLJwf@url-shortener.cxmnoo4.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected…");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
