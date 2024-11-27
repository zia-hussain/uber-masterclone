const mongoose = require("mongoose");
require("dotenv").config();
async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = connectToDb;
